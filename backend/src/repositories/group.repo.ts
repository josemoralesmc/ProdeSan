import GroupModel from "../models/group";

export default class GroupRepository {
  async createGroup(groupId: string, idLeague: string, nameGroup: string) {
    try {
      const newGroup = new GroupModel({ GroupID:groupId, LeagueId: idLeague, Name: nameGroup });
      return await newGroup.save();
    } catch (error) {
      throw error
    }
  }
  async getGroup(groupId: string,) {
    try {
      const group = await GroupModel.find({GroupID: groupId})
      return group
    } catch (error) {
      throw error
    }
  }
  async getGroupUser(idUser: string) {
    try {
      const group = await GroupModel.find({UsersId: idUser})
      return group
    } catch (error) {
      throw error
    }
  }

  async addUserGroup(idUser: string, GroupId: string){
    try {
        const addUser = await GroupModel.findOneAndUpdate({GroupID: GroupId},{ $push: { UsersId: idUser } },{ new: true })
        console.log(addUser);
        
        return addUser
    } catch (error) {
      throw error
        
    }
  }
  async addPointsTable(totalPoints: number, username: string, groupId: string){
    try {
      const response = GroupModel.findOneAndUpdate(
        { GroupID: groupId },
        { $inc: { [`Table.${username}`]: totalPoints } }, 
        { new: true, upsert: true }, 
      )
       
        return response
    } catch (error) {
      throw error   
    }
  }
}
