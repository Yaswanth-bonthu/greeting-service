import express from "express";
import {
    createEmailConfig,
    updateEmailConfig,
    getEmailConfig,
    deleteEmailConfig,
    getAllEmailConfigs,
} from "../controller/emailConfigController.js";

const router = express.Router();


router.post("/", createEmailConfig);

router.put("/:user", updateEmailConfig);

router.get("/:user", getEmailConfig);

router.delete("/:user", deleteEmailConfig);

router.get("/email-configs", getAllEmailConfigs);

export default router;
