import mongoose from "mongoose";

const EmailConfig = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    passkey: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    emailType: {
        type: String,
        enum: ["gmail", "outlook", "zoho", "postmark", "sendgrid", "mailgun", "proton", "yandex", "icloud", "yahoo"],
        required: true,
    },
    user: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["active", "pause"],
        default: "active"
    }
}, { timestamps: true });

export default EmailConfigModel = mongoose.model("emailconfig", EmailConfig);