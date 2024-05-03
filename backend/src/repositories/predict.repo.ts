import PredictModel from "../models/predict";

export default class LeagueRepo {

  async getPredict(groupId: String, leagueId: String, userId: String, dateNumber: string) {
    try {
      const response = await PredictModel.find({UserId: userId, LeagueId: leagueId, DateNumber: dateNumber, GroupID: groupId});
      return response
    } catch (error) {
      throw error
    }
  }
  async savePredict(predict: any, leagueId: String, groupId: String, userId: String, dateNumber: string
  ) {
    try {
        const newPredict = await PredictModel.findOneAndUpdate(
            { GroupID: groupId, LeagueId: leagueId, UserId: userId, DateNumber: dateNumber },
            { PredictUser: predict },
            { new: true, upsert: true } 
        );
        return newPredict;
    } catch (error) {
      throw error
    }
  }
}
