import {BirthDayModel} from "../model/BirthDayModel.js";
import { saveUsersWithBirthDay } from "./csvUserController.js";
import {scheduleByDefault} from "./scheduleController.js"


const getBirthDayData = async (birthDayId, targetDate = null) => {
    try {
        let birthDayData = null;

        if (birthDayData === null) {
            birthDayData = await BirthDayModel.findById(birthDayId)
                .populate([
                    { path: "csvData" },
                    { path: "postDetails" },
                ]);
        }
        else {
            birthDayData = await BirthDayModel.findById(birthDayId)
                .populate([
                    { path: "csvData", match: { date_month: targetDate } }, // Filter csvUser by birthdate
                    { path: "postDetails" },
                ]);
        }

        if (!birthDayData) {
            return null;
        }
        return birthDayData;
    } catch (error) {
        console.log("Error in the getBirthDayData, ", error);
        return null;
    }
}

const createBirthDayDetails = async (req, res) => {
    try {
        const { title, from, csvData, postDetails } = req.body;
        // console.log("Request body:", req.body);

        // Ensure `req.user` exists and is populated
        const user = req.user?.userId;
        if (!user) {
            return res.status(401).send({ error: "Unauthorized access. User ID is required." });
        }

        const requiredFields = { title, from, postDetails };
        const missingFields = [];

        // Validate required fields
        Object.entries(requiredFields).forEach(([key, value]) => {
            if (!value || value.length === 0) {
                missingFields.push(key);
            }
        });

        if(csvData === undefined || csvData.length === 0)
        {
            missingFields.push(csvData);
        }

        if (missingFields.length > 0) {
            return res
                .status(400)
                .send({ error: `The following fields are required: ${missingFields.join(", ")}` });
        }

        // Add user to required fields
        requiredFields.user = user;

        // Save BirthDay Details
        const saveBirthDayDetails = new BirthDayModel(requiredFields);
        await saveBirthDayDetails.save();

        // Associate CSV data with the saved record
        saveBirthDayDetails.csvData = await saveUsersWithBirthDay(csvData, saveBirthDayDetails._id);

        // Save the updated record after adding csvData
        await saveBirthDayDetails.save();

        await scheduleByDefault("birthday", saveBirthDayDetails._id, user);

        // Respond with the saved details
        res.status(201).send({ saveBirthDayDetails });
    } catch (error) {
        console.error("Error in createBirthDayDetails:", error);
        res.status(500).send({ error: "Internal server error." });
    }
};


const getBirthDayDetails = async(req, res) => {
    try {
        const {id} = req.params;
        const birthDayDetails = await BirthDayModel.findById(id);
        if(!birthDayDetails)
        {
            return res.status(404).send({error: `BirthDay details are not found with id: ${id}`});
        }
        res.status(200).send({birthDayDetails});
    } catch (error) {
        console.log("Error in the getBirthDayDetails, ", error);
        res.status(500).send({error: "Internal server error..."});
    }
}

const getAllBirthDayDetails = async(req, res) => {
    try {
        const {page=1, limit=10} = req.query;
        const skip = (page - 1) * limit;
        const birthDays = await BirthDayModel.find({user}).skip(skip).limit(limit);
        const totalBirthDays = await BirthDayModel.countDocuments({user});
        res.status({totalPages: Math.ceil(totalBirthDays/limit), birthDays});
    } catch (error) {
        console.log("Error in the getAllBirthDayDetails, ", error);
        res.status(500).send({error: "Internal server error..."});
    }
};

const updateBirthDayDetails = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, from, csvData, postDetails} = req.body;
        const fieldsToUpdate = {title, from, csvData, postDetails};
        Object.keys(fieldsToUpdate).forEach((key) => {
            if(fieldsToUpdate[key] === undefined)
            {
                delete fieldsToUpdate[key]
            }
        });
        if(csvData && csvData.length > 0)
        {
            const ids = await saveUsersWithBirthDay(csvData); // Save users to DB
            fieldsToUpdate.csvData = ids;
        }
        const updatedPost = await BirthDayModel.findByIdAndUpdate(id, fieldsToUpdate, {new: true, runValidators: true});
        res.status(200).send({updatedPost});
    } catch (error) {
        console.log("Error in the updateBirthDayDetails, ", error);
        res.status(500).send({error: "Internal server error..."});
    }
}

const deleteBirthDayDetails = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteBirthDayDetails = await BirthDayModel.findByIdAndDelete(id);
        if(!deleteBirthDayDetails)
        {
            return res.status(404).send({error: `BirthDay details are found with id: ${id}..`});
        }
        res.status(200).send({message: `BirthDay details are deleted with id: ${id}...`});
    } catch (error) {
        console.log("Error in the deleteMarriageDetails, ", error);
        res.status(500).send({error: "Internal server error..."});
    }
}

const updateResponse = async(id, data) => {
    try {
        const updateResponse = await BirthDayModel.findById(id);
        if(!updateResponse)
        {
            throw new Error(`birthday Details is exists with id: ${id}`);
        }
        updateResponse.response.push(...data);
        await updateResponse.save();
        console.log(updateResponse);
    } catch (error) {
        console.log("Error in the updateReponse, ", error);
    }
}

export {createBirthDayDetails, getAllBirthDayDetails, getBirthDayDetails, updateBirthDayDetails, deleteBirthDayDetails, getBirthDayData, updateResponse};