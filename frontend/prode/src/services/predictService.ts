async function matchResult(){
    try {
        const result = await fetch("http://localhost:8080/Leagues/LigaProfesional");
          const data = await result.json();
          
          return data
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 
async function matchResultNextDate(){
    try {
        const result = await fetch("http://localhost:8080/Leagues/LigaProfesionalNext");
          const data = await result.json();
          return data
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 

async function SavePredict(leagueId: string, groupId: string, dateNumber:string, prediction: any, token: string){
    try {
        const result = await fetch(`http://localhost:8080/Leagues/Prediction/${leagueId}/${groupId}/${dateNumber}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({prediction})
            
        });
          const data = await result.json();
          console.log(data);
          
          return data
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 

export default {matchResult, matchResultNextDate, SavePredict}