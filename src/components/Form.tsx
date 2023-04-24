import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Form = () => {
  type Iform = {
    firstName: string;
    lastName: string;
    dob:number;
    email: string;
  };
  const intialFormvalue = {
    firstName: "",
    lastName: "",
    dob:0,
    email: "",
  };
  const navigate = useNavigate()
  const [userinfo, setUserInfo] = useState<Iform>(intialFormvalue);
  const [userList, setUserList] = useState<Iform[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName ,dob, email} = userinfo;
    const user = {
      firstName,
      lastName,
      dob,
      email
    };
    setUserList([...userList, userinfo]);
    setUserInfo(intialFormvalue);
    axios.post("http://localhost:3001/Users", user).then((res) => {
      console.log(res.data);
    });
    navigate("/list")
  };
  useEffect(() => {
    console.log(userList);
  }, [userList]);
  return (
    <div className="form m-5 p-3 card">
      <h1>UserForm</h1>
      <form onSubmit={handleSubmit}>
        <div className="row m-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              value={userinfo.firstName}
              onChange={handleChange}
              name="firstName"
              placeholder="First name"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              value={userinfo.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
  
          
        </div>

        <div className="row m-3">
        <div className="col-6 d-flex">
            {/* use htmlFor in label instead for in react */}

           <label htmlFor ="birthday">Birthday:</label>
             <input
            id="birthday"
              type="date"
              className="form-control mx-2"
              value={userinfo.dob}
              name="dob"
              onChange={handleChange}
              placeholder="Date of Birth"
            />
          
          
          </div>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              value={userinfo.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark m-4">
          Submit
        </button>
      </form>

      {userList.map((user) => {
        return <li key={user.firstName}>{user.firstName}</li>;
      })}
    </div>
  );
};

export default Form;
