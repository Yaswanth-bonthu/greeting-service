import { getEventData, updateEventResponse, saveResponse } from "./commonController.js";
import {sendToMultipleUser, sendToSingleUser} from "../utils/sendWhatsappMessage.js";
import delay from 'delay';

const template_name = "navratri_and_dussehra_eng";
const broadcast_name = "Untitled_080120251029";

const parameters = (templateDetails, userDetails) => {
    return [
        {
            "name": "full_name",
            "value": `${userDetails?.first_name} ${userDetails?.last_name}`,
        },
        {
            "name": "event_date",
            "value": templateDetails?.eventDate,
        },
        {
            "name": "event_name",
            "value": templateDetails?.eventName,
        },
        {
            "name": "from",
            "value": templateDetails?.from,
        },
        {
            "name": "address",
            "value": templateDetails?.address,
        },
        {
            "name": "product_image_url",
            "value": templateDetails?.postDetails?.mediaURL
        }
    ]
}


const sendScheduledMessagesFromEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await getEventData(id);
        if (data) {
            const responseArray = [];
            for (const user of data.csvData) {
                const response = await sendToSingleUser(template_name, broadcast_name, user.contact, parameters(data, user));
                response.ref = id;
                responseArray.push(response);
                await delay(1000);
            }
            const ids = await saveResponse(responseArray);
            await updateEventResponse(id, ids);
            console.log("Messages are sent for ", responseArray);
            return res.status(200).send({message: `Messages are sent : ${responseArray}`})
        }
        else {
            console.log(`No Festival details found with Id: ${id}`);
            return res.status(200).send({message: `No Festival details found with Id: ${id}`});
        }

    } catch (error) {
        console.log("Error in the sendMails, ", error);
        res.status(500).send({error: "Internal server error.."});
    }
}

export { sendScheduledMessagesFromEvent };