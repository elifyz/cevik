const mongoose = require("mongoose");

const schema = mongoose.Schema({
    exercise_plan_id: {type: String, required: true},
    exercise_date: {type: Date, required: true},
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});

class Users extends mongoose.Model {

}

schema.loadClass(Users);
module.exports = mongoose.model("users", schema);