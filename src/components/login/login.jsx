
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// function Login() {

//    const [username, setUsername] = useState('');
//    const [password, setPassword] = useState('');
//    const navigate = useNavigate();
   

   
//    const handleChangeUsername = (event) => {setUsername(event.target.value)};
   
//    const handleChangePassword = (event) => {
//      setPassword(event.target.value);
//     };
    
//     const credential = {
//       username: 'wane',
//       password: "password"
//     };

//     const submitForm = (event) => {
//     event.preventDefault();

//     if(username && password ) {
//         if(username == credential.username && password == credential.password) {
          
//           navigate('/home');
//           localStorage.setItem('username', username)
//         }
//     } else {
//       alert('Username or password ins incorrect')
//     }
//   }


//   return (
//     <div className="bg-[#A7D7C5] flex justify-center  ">
//       <div className="bg-[#F6FBF9] w-[349px] mt-[131px] mb-[131px] p-5 rounded-2xl">
//         <div className="text-center m-5 p-5">
//           <h1 className="font-bold text-2xl">Create An Account</h1>
//           <p className="text-sm">
//             Create an account to enjoy all the services without any ads for
//             free!
//           </p>
//         </div>
//         <form action="">
//         <div className="">
//           <input
//             className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md "
//             type="text"
//             placeholder="Username"
//             name=""
//             id=""
//             onChange={handleChangeUsername}
//           />
//           <input
//             className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md mt-3 "
//             type="password"
//             placeholder="Password"
//             name=""
//             id=""
//             onChange={handleChangePassword}
//           />
//         </div>

//         </form>
//         <div className="text-center m-5">
//           <button className="bg-[#84C7AE] px-10 py-2 font-bold appearance:auto hover:bg-green-300 text-white hover:cursor-pointer text-md rounded-xl" onClick={submitForm}>Create Account</button>
//           <p className="text-sm m-2">Already Have An Account? <a href="http://#">Sign In</a></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

function Login() {
  
  // Liste les functions que useForm utilise pour gerer nos inputs
  const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
  } = useForm();

  const navigate = useNavigate();

  
  // Definition dee notre function pour envoyer le formulaire
  
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate('/home')
    // reset ({
    //   username: "TINTIN",
    //   password: "123456789"
    // })
  }
  
  // console.log({...register("password")})
  
  return (
    // Connecter les fonctions precedement definis a notre formulaire
    <>

      <div className="bg-[#A7D7C5] flex justify-center  ">
        <div className="bg-[#F6FBF9] w-[349px] mt-[131px] mb-[131px] p-5 rounded-2xl">
          <div className="text-center m-5 p-5">
            <h1 className="font-bold text-2xl">Create An Account</h1>
            <p className="text-sm">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <input
                className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md "
                type="text"
                placeholder="Username"
                name="username"
                id="text"
                {...register("username", { required: "Username is required", maxLength: { value: 8, message: "Username must have at least 8 characters"} })}
                
                />
                {
                  errors.username && <p className="errorMsg bg-red-500"> {errors.username.message} </p>
                }
                
              <input
                className="bg-white text-sm p-3 w-full border-b-gray-200 rounded-md mt-3 "
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password must have at least 6 characters" }})}
                
              />
              {
                errors.password && <p className="bg-red-500 "> {errors.password.message}</p>
              }
            </div>
          {/* <div className="text-center m-5">
            <button className="bg-[#84C7AE] px-10 py-2 font-bold hover: text-white text-md rounded-xl" onClick={handleConnexion}>
              Create Account
            </button>
            <p className="text-sm m-2">
              Already Have An Account? <a href="http://">Sign In</a>
            </p>
          </div> */}
          <div className="text-center m-5" >

            <Button variant="contained" type="submit">CONNECTION</Button>
          </div>
          </form>
        </div>
      </div>

    </>
  );

  
}

export default Login;