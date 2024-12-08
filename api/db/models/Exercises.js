const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: {type: String, required: true, unique: true}, 
    exercise_plan_id: {type: String, required: true},
    exercise_date: {type: Date, required: true},
},{
    versionKey : false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});

class Exercises extends mongoose.Model {

}

schema.loadClass(Exercises);
module.exports = mongoose.model("exercises", schema);