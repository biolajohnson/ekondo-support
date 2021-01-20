import mongoose from "mongoose";

const Schema = mongoose.Schema;

const compliantsSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    complaintText: {
      type: String,
    },

    drySoil: {
      type: Boolean,
      default: false,
    },
    yellowLeaves: {
      type: Boolean,
      default: false,
    },
    holesInLeaves: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Complaints = mongoose.model("complaints", compliantsSchema);
export default Complaints;
