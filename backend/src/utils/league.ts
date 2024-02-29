import MatchLeague from "./scrap";
export const league = async () => {
    const response = await MatchLeague();

    return response
}
export const leagueResult = async () => {
    const matchs = await league()
    const result = matchs.map((match) => {
      return match.resultMatch;
    });
    return result
}
