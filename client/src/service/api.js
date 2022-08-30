 import axios from 'axios'

 export const addUser = async (data) => {
    try {
        let response = await axios.post('http://localhost:8000/adduser' ,data);
        return response.data;
    } catch (error) {
        console.log(`Error while calling addUser api ` + error.message);
    }
 }
 export const getUser = async () => {
    try {
       let response = await axios.get('http://localhost:8000/getuser');
        return response.data;    
    } catch (error) {
        console.log(`Error while calling getuser api ` + error.message);
    }
 }

 export const setConversation = async (data) => {
    try {
        await axios.post(`http://localhost:8000/setconversation` ,data);
    } catch (error) {
        console.log(`Error while calling setConversation api ` + error.message);
    }
 }
 export const getConversation = async (data) => {
    try {
      let response = await axios.post(`http://localhost:8000/getconversation` ,data)
      return response.data;
    } catch (error) {
       return console.log(`Error while calling getConversation api ` + error.message);
    }
 }
 export const newMessage = async (data) => {
    try {
      await axios.post(`http://localhost:8000/setmessage` ,data)
    } catch (error) {
       return console.log(`Error while calling setmessage api ` + error.message);
    }
 }
 export const getMessage = async (id) => {
    try {
     const Messages= await axios.get(`http://localhost:8000/getmessage/${id}`)
     console.log(Messages);
     return Messages.data;
    } catch (error) {
       return console.log(`Error while calling getmessage api ` + error.message);
    }
 }
 export const uploadFile = async (data) => {
    try {
      return await axios.post('http://localhost:8000/uploadfile/', data);

    } catch (error) {
       return console.log(`Error while calling uploadFile api ` + error.message);
    }
 }