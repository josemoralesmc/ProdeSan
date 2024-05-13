import { Request, Response } from "express"
import ShortUniqueId from "short-unique-id"
import GroupService from "../services/group.service"
import { extractIdandUserToken } from "../utils/jwt"
export default class GroupController{
    async createGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const uid = new ShortUniqueId({length: 7})
            const token = req.headers.authorization?.split(" ")[1] ?? "";
            const {id, username} = extractIdandUserToken(token)
            const {nameGroup, leagueId} = req.body
            const groupId = uid.rnd()
            const create = await groupService.CreateGroupe(nameGroup, leagueId, groupId)
            await groupService.addUserGroup(id, groupId)
            return res.json({success: true, message: "group created successfully", data: create });
            
        } catch (error) {
            res.json({success: false, message: "error creating groups", data: error });
            
        }
    }
    async getGroupsUser(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const token = req.headers.authorization?.split(" ")[1] ?? "";
            const {id, username} = extractIdandUserToken(token)
            const groups = await groupService.getGroupUser(id)
            return res.json({success: true, message: "groups user obtained successfully", data: groups });
            
        } catch (error) {
            
            res.json({success: false, message: "error getting groups user", data: error });
            
        }
    }
    async getGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const {groupId} = req.params
            const group = await groupService.getGroup(groupId)
            return res.json({success: true, message: "groups obtained successfully", data: group });
            
        } catch (error) {
            res.json({success: false, message: "error getting group", data: error });
            
        }
    }

    async addUserGroup(req:Request, res: Response){
        try {
            const groupService = await GroupService.getInstance()
            const {groupId, userId} = req.body
            const addUser = await groupService.addUserGroup(userId, groupId)
            return res.json({success: true, message: "user added successfully", data: addUser });
            
        } catch (error) {
            res.json({success: false, message: "Error adding user", data: error });
            
        }
    }
}



