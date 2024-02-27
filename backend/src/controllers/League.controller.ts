import LeagueService from "../services/league.service";
import { extractIdToken } from "../utils/jwt";
import MatchLeague from "../utils/scrap";
import { Request, Response } from "express";

export default class LeagueController {
  async league(req: Request, res: Response) {
    const response = await MatchLeague();

    return res.json(response);
  }
  async leagueResult(req: Request, res: Response) {
    const matchs = await MatchLeague();
    const result = matchs.map((match) => {
      return match.resultMatch;
    });
    return res.json(result);
  }

  async savePredict(req:Request, res:Response){
    try {
      
      const leagueService = LeagueService.getInstance()
      const { prediction } = req.body;
      const {leagueId, groupId, dateNumber} = req.params
      const token = req.headers.authorization?.split(" ")[1] ?? '';
      const idUser = extractIdToken(token)
      const response = await leagueService.savePredict(prediction, leagueId, groupId, idUser, dateNumber)
      res.json(response)
    } catch (error) {
      console.log(error);
      
    }

      
  }

  async predictResult(req: Request, res: Response) {
    const { prediction } = req.body;
    const token = req.headers.authorization?.split(" ")[1] ?? '';
    const idUser = extractIdToken(token)
    

    const result = [
      ["0", "0"],
      ["1", "0"],
      ["11", "21"],
      ["31", "01"],
      ["11", "21"],
      ["31", "01"],
      ["11", "21"],
      ["31", "01"],
      ["11", "21"],
      ["31", "01"],
      ["11", "21"],
      ["31", "01"],
      ["11", "21"],
      ["1", "2"],
    ];
    let totalPoints: number = 0;
    let matchPoints: number = 0
    const Match: any = await MatchLeague();
    

    const score = result.map((match: any, index: any) => {
      const predi = prediction[index];
      if (predi[0] == match[0] && predi[1] == match[1]) {
        totalPoints += 3;
        matchPoints = 3;
         
      } else if (
        (predi[0] > predi[1] && match[0] > match[1]) ||
        (predi[0] < predi[1] && match[0] < match[1]) ||
        (predi[0] == predi[1] && match[0] == match[1])
      ) {
        totalPoints += 1;
        matchPoints = 1;
      } else {
        totalPoints += 0;
        matchPoints = 0;
      }
      return {matchPoints, predi, match}
    });
    
    return res.json({score, totalPoints})
  }
}
