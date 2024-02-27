import GroupModel from "../models/group";

export default class GroupRepository {
  async createGroup(groupId: string, idLeague: string, nameGroup: string) {
    try {
      const newGroup = new GroupModel({ GroupID:groupId, LeagueId: idLeague, Name: nameGroup });
      return await newGroup.save();
    } catch (error) {
      console.log(error);
    }
  }
  async getGroup(groupId: string,) {
    try {
      const group = await GroupModel.find({GroupID: groupId})
      return group
    } catch (error) {
      console.log(error);
    }
  }

  async addUserGroup(idUser: string, GroupId: string){
    try {
        const addUser = await GroupModel.findOneAndUpdate({GroupID: GroupId},{ $push: { UsersId: idUser } },{ new: true })
        console.log(addUser);
        
        return addUser
    } catch (error) {
     console.log(error);
        
    }
  }
}
