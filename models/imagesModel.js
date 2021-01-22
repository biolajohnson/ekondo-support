import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    text: {
      type: String,
    },

    images: [
      {
        type: String,
      },
    ],

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

const Images = mongoose.model("images", imageSchema);

export default Images;
