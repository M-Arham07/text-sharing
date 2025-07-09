
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const TextSchema = new Schema({
    text: {
        type: String,
        required: true,
    },

    code: {
        type: String,
        required: true,
        unique: true // we need unique true, as the possibility of getting a same code is very less!
        // ALSO I'LL MAKE A TTL index so code expires after 10 minutes!

    },

    expiresAt: {
        type:Date,
        required:true
    }

}, { collection: 'texts', timestamps: true });

export default mongoose.models.Texts || mongoose.model("Texts", TextSchema);