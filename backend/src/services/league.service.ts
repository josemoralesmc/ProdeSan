import LeagueRepo from "../repositories/league.repo";

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

  async savePredict(predict: any, groupId: String, leagueId: String, userId: String, dateNumber: string){
      try {
        const response = await this.leagueService.savePredict(predict, groupId, leagueId, userId, dateNumber)
        return response
      } catch (error) {
        console.log(error);
        
      }
  }
}