import LeagueRepo from "../repositories/predict.repo";

export default class LeagueService{
    private static instance: LeagueService;
  private leagueService: LeagueRepo;

  private constructor() {
    this.leagueService = new LeagueRepo();
  }

  public static getInstance(): LeagueService {
    if (!LeagueService.instance) {
        LeagueService.instance = new LeagueService();
    }
    return LeagueService.instance;
  }

  async getPredict(groupId: String, leagueId: String, userId: String, dateNumber: string){
      try {
        const response = await this.leagueService.getPredict( groupId, leagueId, userId, dateNumber)
        return response
      } catch (error) {
        return { success: false, message: "Error getting prediction", data: error };
        
      }
  }

  async savePredict(predict: any, leagueId: String, groupId: String, userId: String, dateNumber: string){
      try {
        const response = await this.leagueService.savePredict(predict, leagueId, groupId, userId, dateNumber)
        return response
      } catch (error) {
        return { success: false, message: "Error creating prediction", data: error };
        
      }
  }
}