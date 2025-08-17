
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   

   
   
   const handleChangeUsername = (event) => {setUsername(event.target.value)};
   
   const handleChangePassword = (event) => {
     setPassword(event.target.value);
    };
    
    const credential = {
      username: 'wane',
      password: "password"
    };

    const submitForm = (event) => {
    event.preventDefault();

    if(username && password ) {
        if(username == credential.username && password == credential.password) {
          
          navigate('/home');
          localStorage.setItem('username', username)
        }
    } else {
      alert('Username or password ins incorrect')
    }
  }


  return (
    <div className="bg-[#A7D7C5] flex justify-center  ">
      <div className="bg-[#F6FBF9] w-[349px] mt-[131px] mb-[131px] p-5 rounded-2xl">
        <div className="text-center m-5 p-5">
          <h1 className="font-bold text-2xl">Create An Account</h1>
          <p className="text-sm">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        <form action="">
        <div className="">
          <input
            className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md "
            type="text"
            placeholder="Username"
            name=""
            id=""
            onChange={handleChangeUsername}
          />
          <input
            className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md mt-3 "
            type="password"
            placeholder="Password"
            name=""
            id=""
            onChange={handleChangePassword}
          />
        </div>

        </form>
        <div className="text-center m-5">
          <button className="bg-[#84C7AE] px-10 py-2 font-bold hover: text-white text-md rounded-xl" onClick={submitForm}>Create Account</button>
          <p className="text-sm m-2">Already Have An Account? <a href="http://">Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
