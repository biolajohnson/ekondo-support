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
      required: true,
    },

    drySoil: {
      type: Boolean,
      required: true,
      default: false,
    },
    yellowLeaves: {
      type: Boolean,
      required: true,
      default: false,
    },
    holesInLeaves: {
      type: Boolean,
      required: true,
      default: false,
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
