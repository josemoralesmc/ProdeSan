import { Request, Response } from "express"
import ShortUniqueId from "short-unique-id"
import GroupService from "../services/group.service"
import { extractIdToken } from "../utils/jwt"
export default class GroupController{
    async createGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const uid = new ShortUniqueId({length: 7})
            const {nameGroup, leagueId} = req.body
            const groupId = uid.rnd()
            const create = await groupService.CreateGroupe(nameGroup, leagueId, groupId)
            return res.json(create)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    async getGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const {groupId} = req.params
            const group = await groupService.getGroup(groupId)
            return res.json(group)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async addUserGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const {groupId, userId} = req.body
            const addUser = await groupService.addUserGroup(userId, groupId)
            return res.json(addUser)
            
        } catch (error) {
            console.log(error);
            
        }
    }
}



