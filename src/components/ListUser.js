import React from "react"
import {useMutation, useQuery, useQueryClient} from "react-query"
import {useNavigate} from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"
import {deleteUser, getUsers} from "../api/api"
const ListUser = () => {
  const query = useQuery("users", getUsers)
  const queryClient = useQueryClient()
  const delete_user = useMutation(deleteUser,{
   onSuccess:() => {
    queryClient.invalidateQueries("users")
   }
  })
  const navigate = useNavigate()
  const goToAddPage = () => {
   navigate("/user/add")
  }
  const handleDelete = (uid) => {
    delete_user.mutate(uid)
    toast.success("User deactivate successfully", {position:"top-center"})
  }
  return (
    <div className="container">
      <ToastContainer/>
      <h1 className="text-center text-primary">List User</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">Uid</th>
            <th className="text-center">Name</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {query?.data?.data?.data.map((i, index) => {
            return(
             <tr key={index}>
               <td className="text-center align-middle">{i.uid}</td>
               <td className="text-center align-middle">{i.name}</td>
               <td>
                 <button className="btn btn-danger" onClick={() => handleDelete(i.uid)}>Delete</button>
               </td>
             </tr>
            )
           })
          }
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={goToAddPage}>Add User</button>
    </div>
  )
}

export default ListUser