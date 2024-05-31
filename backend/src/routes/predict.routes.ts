import { Router } from "express";
import LeagueController from "../controllers/predict.controller";
import result from '../utils/scrap'
const leagueController = new LeagueController()

const router = Router()

router.get('/LigaProfesional', leagueController.results)
router.get('/LigaProfesionalNext', leagueController.nextsMatchs)
/* router.get('/LigaProfesional/result', leagueController.leagueResult) */
router.post('/LPF/PredictionResult/:leagueId/:groupId/:dateNumber', leagueController.predictResult)
router.post('/LPF/get/:leagueId/:groupId/:dateNumber', leagueController.getPredict)
router.post('/Prediction/:leagueId/:groupId/:dateNumber', leagueController.savePredict)


export default router