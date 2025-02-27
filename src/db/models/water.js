import { Schema, model } from 'mongoose';

const waterSchema = new Schema(
  {
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
},
{
    timestamps: true,
    versionKey: false,
  },
);


export const WaterCollection = model('waters', waterSchema);
