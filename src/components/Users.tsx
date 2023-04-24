import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {IUsers} from "../model/IUsers"




const Users = () => {
  const [usersData, setData]= useState<IUsers[]>([])
    
  useEffect(()=>{

    const fetchUsers = async()=>{
      const users = await axios.get("https://jsonplaceholder.typicode.com/users")
      
      setData(users.data)
     
    }
   
    fetchUsers()
  },[usersData])

  return (
    <>

    <h1>
      Users List
    </h1>
      <div  className='m-2 rounded' style={{display:"inline-block" ,backgroundColor:"#063970" }}> 
      {
        usersData.map(item=>{


          
           return  (<div className="card m-4 p-2" style={{backgroundColor:"#eeeee4" ,color:"#042f66"}}>
           <div className="card-body">
             <h5 className="card-title">UserId{item.id}:{item.name}</h5>
             <h6 className="card-subtitle mb-2 text-body-secondary">email. {item.email}</h6>
             <h6 className="card-subtitle mb-2 text-body-secondary">username. {item.username}</h6>
             <p className="card-text">Address: {item.address.street} {item.address.suite}
             
              <li> City-{item.address.city}</li>
              <li>zipCode:{item.address.zipcode}</li>
              
             </p>
             UserWebsite-<a href="#" className="card-link">{item.website}</a>
             <h5>Mob.{item.phone}</h5>
            
             <h5>CompanyName:{item.company.name}</h5>
           </div>
         </div>
       )
        })
      } 
      </div>   
    </>
  )
}

export default Users