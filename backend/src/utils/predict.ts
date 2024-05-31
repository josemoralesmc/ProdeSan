export const pointsUser = (
  predictUser: Array<any>,
  resultMatch: Array<any>,
  dateNumber: string
) => {
  let totalPoints: number = 0;
  let matchPoints: number = 0;

  if (resultMatch) {
    console.log(resultMatch);
    console.log(predictUser);
    console.log(dateNumber);
    
    const score = resultMatch.map((match: any, index: any) => {
        
      if (match.matchDate[0].split(" ")[1] == dateNumber) {
          if (predictUser) {
            const predi = predictUser[0].PredictUser[index];
            if (match.resultMatch[0] == "-" && match.resultMatch[1] == "-") {
              matchPoints = 0;
              totalPoints += 0;
            } else if (
              predi[0] == match.resultMatch[0] &&
              predi[1] == match.resultMatch[1]
            ) {
              totalPoints += 3;
              matchPoints = 3;
            } else if (
              (predi[0] > predi[1] &&
                match.resultMatch[0] > match.resultMatch[1]) ||
              (predi[0] < predi[1] &&
                match.resultMatch[0] < match.resultMatch[1]) ||
              (predi[0] == predi[1] &&
                match.resultMatch[0] == match.resultMatch[1])
            ) {
              totalPoints += 1;
              matchPoints = 1;
            } else {
              totalPoints += 0;
              matchPoints = 0;
            }
            return { matchPoints, predi, match };
          }
        }
    });
    return { totalPoints, score };
  }else {
    console.log("Result Match undefined");
    
  }
  }
  
