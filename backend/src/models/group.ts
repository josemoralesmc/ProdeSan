import mongoose from 'mongoose';

const group = new mongoose.Schema({
   Name:{
    type:String,
    require
   },
    GroupID:{
        type: String,
        require
    },
    UsersId: {
        type: Object
    },
    LeagueId: {
        type: String,
        require
    },
    Table:{
        type:Object,
        default: {}
    }
})

const GroupModel = mongoose.model('GroupProde', group)

export default GroupModel