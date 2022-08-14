import mongoose from "mongoose";
import CustomFunction from "../../services/CustomFunction.js";

const date = CustomFunction.currentDate();
const time = CustomFunction.currentTime();

const waterLevelSchema = mongoose.Schema({
    led_status:{ type: Number },
});

export default mongoose.model('WaterLevel', waterLevelSchema, 'waterLevels');