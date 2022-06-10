import React, {useState} from "react"
import {useMutation, useQueryClient} from "react-query"
import {useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import {addUsers} from "../api/api"
const AddUser = () => {
  let init_data = {
    uid:"",
    name:""
  }
  const [data, setData] = useState(init_data)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation(addUsers,{
    onSuccess:() => {
     queryClient.invalidateQueries("users")
    }
  })
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleSubmit = () => {
    if(data.uid === ""){
     toast.error("Please enter your uid", {position:"top-center"})
     return false
    }
    if(data.name === ""){
     toast.error("Please enter your name", {position:"top-center"})
     return false
    }else{
      mutation.mutate(data)
      toast.success("User added successsfully", {position:"top-center"})
      navigate("/")
      return true
    }
  }
  return (
    <div className="container">
      <ToastContainer/>
      <h1 className="text-center text-primary">Add User</h1>
      <form>
        <div className="form-group mb-4">
          <label>Uid</label>
          <input 
            type="text" 
            className="form-control"
            name="uid"
            value={data.uid}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mb-4">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control"
            name="name"
            value={data.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mb-4">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </form> 
    </div>
  )
}

export default AddUser