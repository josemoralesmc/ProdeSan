import { Router } from "express";
import GroupController from "../controllers/group.controller";
const groupController = new GroupController()

const router = Router()

router.get('/:groupId', groupController.getGroup)
router.post('/create', groupController.createGroup)
router.post('/addUser', groupController.addUserGroup)


export default router