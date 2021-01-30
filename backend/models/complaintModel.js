import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    text: {
      type: String,
    },

    drySoil: {
      type: String,
    },
    yellowLeaves: {
      type: String,
    },
    holesInLeaves: {
      type: String,
    },
    filePath: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("complaint", complaintSchema);

export default Complaint;
