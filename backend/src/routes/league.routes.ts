import { Router } from "express";
import LeagueController from "../controllers/League.controller";
const leagueController = new LeagueController()

const router = Router()

router.get('/LigaProfesional', leagueController.league)
router.get('/LigaProfesional/result', leagueController.leagueResult)
router.post('/LPF/Prediction', leagueController.predictResult)
router.post('/LPF/Prediction/:leagueId/:groupId/:dateNumber', leagueController.savePredict)


export default router