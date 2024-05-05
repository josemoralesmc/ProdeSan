import Cookies from "js-cookie"

async function createGroup(nameGroup: string, leagueId: string){
    try {
        const token = Cookies.get("Token")
        const response = await fetch('http://localhost:8080/group/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                nameGroup,
                leagueId
              })
        })
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 

async function addUserGroup(groupId: string){
    try {
        const token = Cookies.get("Token")
        const response = await fetch('http://localhost:8080/group/addUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                groupId
              })
        })
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 



export default {createGroup, addUserGroup}