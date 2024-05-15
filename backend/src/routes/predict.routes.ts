import { Router } from "express";
import LeagueController from "../controllers/predict.controller";
import result from '../utils/scrap'
const leagueController = new LeagueController()

const router = Router()

router.get('/LigaProfesional', leagueController.results)
/* router.get('/LigaProfesional/result', leagueController.leagueResult) */
router.post('/LPF/PredictionResult/:leagueId/:groupId/:dateNumber', leagueController.predictResult)
router.post('/LPF/Prediction/:leagueId/:groupId/:dateNumber', leagueController.savePredict)


export default router