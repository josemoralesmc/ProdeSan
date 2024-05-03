import mongoose from 'mongoose';

const predictUser = new mongoose.Schema({
    PredictUser: {
        type: Object,
        require
    },
    UserId: {
        type: String,
        require
    },
    LeagueId: {
        type: String,
        require
    },
    GroupID:{
        type: String,
        require
    },
    DateNumber:{
        type: String,
        require
    }
})

const PredictModel = mongoose.model('predictUser', predictUser)

export default PredictModel