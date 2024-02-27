import PredictModel from "../models/predict";

export default class LeagueRepo {
  async savePredict(predict: any, groupId: String, leagueId: String, userId: String, dateNumber: string
  ) {
    try {
        const newPredict = await PredictModel.findOneAndUpdate(
            { GroupID: groupId, LeagueId: leagueId, UserId: userId, DateNumber: dateNumber },
            { PredictUser: predict },
            { new: true, upsert: true } 
        );
        return newPredict;
    } catch (error) {
      console.log(error);
    }
  }
}
