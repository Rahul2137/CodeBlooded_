const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const Question = new Schema(
  {
    qid: {
      type: String,
      unique: true
    },
    setterid: {
      type: String,
    },
    Problem: {
      type: String,
      required: true
    },
    Input: {
      type: String
    },
    Output: {
      type: String
    },
    SampleIn: {
      type: String
    },
    SampleOut: {
      type: String
    },
    Constraints: {
      type: String
    },
    timelimit: {
      type: Number
    },
    Cases: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Questions", Question);
