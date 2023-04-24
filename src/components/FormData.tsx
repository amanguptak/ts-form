import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {UsersEntity} from "../model/IData"

const FormData = () => {
  const [formdata,setFormdata]=  useState<UsersEntity[]>([])

    useEffect(()=>{
        const fetchFormData =async()=>{
           const res = await axios.get('http://localhost:3001/Users')
           console.log(res.data)
           setFormdata(res.data)
        }
        fetchFormData()
    },[])
  return (
    <div>

        {
            formdata.map((item)=>{
                return(
                    <div className="row ">
                <div className="card m-4 p-4 col-5" key={item.id} style={{backgroundColor:"#eeeee4" ,color:"#042f66"}}>
                <div className="card-body">
                  <h5 className="card-title">UserId{item.id}:{item.firstName}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">email. {item.lastName}</h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary"> {item.dob}</h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary"> Email: {item.email}</h6>
               
                </div>
              </div></div>)
            })
        }
    </div>
  )
}

export default FormData