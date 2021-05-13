const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    lawyerId: {
      type: Schema.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },
    mysqlLawyerId: {
      type: Schema.Types.Number,
      required: true,
    },
    fifteenConsultingAvailableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
      _id: false,
    },
    thirtyConsultingAvailableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
      _id: false,
    },
    scheduleDate: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
