import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';




function Navbar() {

  const navigate = useNavigate();
    const [username, setUsername] = useState('');

  const handleLogout = () => {
    // Clear localStorage session
    localStorage.clear();

    //Redirect to login Page
    navigate("/");
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
    if(username) {
      alert('Is active')
    } else {
      alert('no username')
    }
  };

  return (
    <>
      <div className="">
        <div className="  bg-red-500 flex justify-around items-center p-2 ">
          <input className="border-1 rounded-xl p-2" type="text" placeholder="Products name" />
          <label className="">
            Category
            <input className="border-1 rounded-xl p-2 m-2" type="text" />
          </label>
          <label className="">
            Status
            <input className="border-1 rounded-xl p-2 m-2" type="text" />
          </label>

          <div className="">
            <i className="fa fa-user-circle" aria-hidden="true" onClick={handleUsername}></i>
            <span>Username:</span>
            <Button className="bg-blue-500 p-2 m-1 rounded-lg text-white " onClick={handleLogout}>LOGOUT</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar