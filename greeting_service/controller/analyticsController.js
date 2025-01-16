import Analytics from "../model/AnalyticsModel.js";

const scheduleByDefault = async (type, id, user) => {
    try {
        if (type === "temple") {
            await scheduleSchema.create({ temple: id, user: user });
        }
        else if (type === "birthday") {
            await scheduleSchema.create({ birthday: id, user: user });
        }
        else if (type === "marriage") {
            await scheduleSchema.create({ marriage: id, user: user });
        }
        else if (type === "event") {
            await scheduleSchema.create({ event: id, user: user });
        }
        else if (type === "festival") {
            await scheduleSchema.create({ festival: id, user: user });
        }
        else {
            throw new Error("Invalid Reference..")
        }
        const updateField = {
            $inc: {
                [`schedules.${type}.pause`]: 1,
                [`media.${type}.email.pending`]: 1,
            },
        };

        await Analytics.findOneAndUpdate({ user }, updateField, { new: true, upsert: true });

    } catch (error) {
        console.log("Error in the scheduleByDefault, ", error);
    }
}

const getSchedulesByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 40
        const skip = (page - 1) * limit;

        // Ensure the user is authenticated
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).send({ error: "Unauthorized access. User ID is required." });
        }

        // Fetch schedules with pagination
        const schedules = await scheduleSchema.find({ $and: [{ user: userId }, { schedule: status }] })
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit)
            .lean(); // Use .lean() for faster read operations

        // Dynamically populate the non-null fields
        const fields = ["temple", "birthday", "event", "festival", "marriage"];
        for (const schedule of schedules) {
            const fieldToPopulate = fields.find((field) => schedule[field]);
            if (fieldToPopulate) {
                await scheduleSchema.populate(schedule, { path: fieldToPopulate });
            }
        }

        // Count total schedules
        const totalSchedules = await scheduleSchema.countDocuments({ $and: [{ user: userId }, { schedule: status }] });

        // Respond with paginated data
        res.status(200).send({
            currentPage: page,
            totalPages: Math.ceil(totalSchedules / limit),
            schedules,
        });

    } catch (error) {
        console.log("Error in the getSchedulesByStatus, ", error);
        res.status(500).send({ error: "Internal Server error..." });
    }
}
