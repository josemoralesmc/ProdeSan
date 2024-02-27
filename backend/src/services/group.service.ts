import GroupRepository from "../repositories/group.repo";

export default class GroupService {
  private static instance: GroupService;
  private groupService: GroupRepository;

  private constructor() {
    this.groupService = new GroupRepository();
  }

  public static getInstance(): GroupService {
    if (!GroupService.instance) {
      GroupService.instance = new GroupService();
    }
    return GroupService.instance;
  }

  async CreateGroupe(groupId: string, idLeague: string, nameGroup: string) {
    try {
      const group = await this.groupService.createGroup(nameGroup, idLeague, groupId);
      return group;
    } catch (error) {
      console.log(error);
    }
  }
  async getGroup(groupId: string) {
    try {
      const group = await this.groupService.getGroup(groupId);
      return group;
    } catch (error) {
      console.log(error);
    }
  }
  async addUserGroup(idUser: string, GroupId: string) {
    try {
      const addUser = await this.groupService.addUserGroup(idUser, GroupId);
      return addUser;
    } catch (error) {
      console.log(error);
    }
  }
}
