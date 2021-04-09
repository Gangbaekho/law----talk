const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    lawyerId: {
      type: Schema.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },
    mysqlLaywerId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    fifteenConsultingAvaliableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
    },
    thirtyConsultingAvaliableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
