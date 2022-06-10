import axios from "axios"
// Add User
export const addUsers = (data) => {
 return axios.post("https://21045060492a8e4c.api-us.cometchat.io/v3/users", data, {headers:{apiKey:"6f2ede6a1aaf38a809e08867d14ed4bd1d88bc0a"}}) 
}
// Get Users
export const getUsers = () => {
 return axios.get("https://21045060492a8e4c.api-us.cometchat.io/v3/users", {headers:{apiKey:"6f2ede6a1aaf38a809e08867d14ed4bd1d88bc0a"}})
}
// Delete user
export const deleteUser = (uid) => {
  return axios.delete(`https://21045060492a8e4c.api-us.cometchat.io/v3/users/${uid}`, {headers:{apiKey:"6f2ede6a1aaf38a809e08867d14ed4bd1d88bc0a"}})
}