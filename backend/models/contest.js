const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const Contest = new Schema(
  {
    contestid: {
      type: String,
      unique: true
    },
    setterid: {
      type: String,
    },
    Problems: {
      type: Array,
    },
    date: {
      type: date,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = model("Contests", Contest);
