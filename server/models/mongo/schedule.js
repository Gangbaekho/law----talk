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
    fifteenConsultingAvaliableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
      _id: false,
    },
    thirtyConsultingAvaliableTime: {
      type: [
        {
          time: Schema.Types.String,
          isAvailable: Schema.Types.Boolean,
        },
      ],
      required: true,
      _id: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
