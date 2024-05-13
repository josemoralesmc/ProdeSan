import Cookies from "js-cookie"


async function getGroups(token: string | undefined){
    try {
        const response = await fetch('http://localhost:8080/group', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              }
              
        })
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 
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
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 

async function addUserGroup(groupId: string, userId: string){
    try {
        const token = Cookies.get("Token")
        const response = await fetch('http://localhost:3000/group/addUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                groupId,
                userId
              })
        })
        const data = await response.json()
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 

async function getGroupsId(token: string | undefined, groupID: string){
    try {
        const response = await fetch(`http://localhost:8080/group/${groupID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              }
              
        })
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 


export default {createGroup, addUserGroup, getGroups, getGroupsId}