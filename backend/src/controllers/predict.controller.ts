import GroupService from "../services/group.service";
import LeagueService from "../services/predict.service";
import { extractIdandUserToken } from "../utils/jwt";
import { pointsUser } from "../utils/predict";
import MatchLeague from "../utils/scrap";
import { Request, Response } from "express";

export default class LeagueController {
  async results(req: Request, res: Response){
    const result = await MatchLeague()
    res.json(result)
  }
  async savePredict(req: Request, res: Response) {
    try {
      const leagueService = LeagueService.getInstance();
      const { prediction } = req.body;
      const { leagueId, groupId, dateNumber } = req.params;
      const token = req.headers.authorization?.split(" ")[1] ?? "";
      const idUser = extractIdandUserToken(token);

      const response = await leagueService.savePredict(
        prediction,
        leagueId,
        groupId,
        idUser.id,
        dateNumber
      );
      res.json({success: true, message: "predict saved successfully", data: response });
    } catch (error) {
      res.json({success: false, message: "error saving predict", data: error });
    }
  }

/*   async predictResult(req: Request, res: Response) {
    const leagueService = LeagueService.getInstance();
    const { leagueId, groupId, dateNumber } = req.params;
    const token = req.headers.authorization?.split(" ")[1] ?? "";
    const userId = extractIdandUserToken(token);
    const username = userId.username;

    const predict: any = await leagueService.getPredict(
      groupId,
      leagueId,
      userId.id,
      dateNumber
    );
    
    const resulMatch = await MatchLeague();
    const {totalPoints, score}: any | undefined = pointsUser(predict, resulMatch, dateNumber)
    const groupService = GroupService.getInstance()
    const response = await groupService.addPointsTable(  totalPoints, username, groupId )
    return res.json({success: true, message: "predict results saved successfully", data: {response, score} });
  } */
}
