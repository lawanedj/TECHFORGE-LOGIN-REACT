import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import productsData from "./data/productsData.json";
import { useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
// function Home() {

//   // const [products, setProducts] = useState();

//   // fetchProducts = async () => {
//   //  const response = await axios.get('https://fakestoreapi.com/products');
//   // }
  
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');

//   useEffect(() => {

//         return () => {}
//   }, [])

//     const displayProducts = productsData.products.map((product) => (
//       <div className="h-full max-w-sm">
//         <div
//           key={product.id}
//           className="m-5 p-2 border-amber-50 text-white font-normal pointer-events-auto rounded-2xl bg-gray-500 "
//         >
//           <img src={product.image_url} alt={product.name} className="h-50 w-full"/>
//           <div className="text-black ">
//             <h3>{product.name}</h3>
//             <h5>Catégorie : {product.category}</h5>
//             <h6>Status : {product.availability}</h6>
//             <h6>Prix : {product.price} €</h6>
//             <h6>Stars{product.stars}</h6>
//             <button className="bg-blue-500 hover:cursor-pointer m-2 p-2 rounded-sm text-white">
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     ));

//   const handleLogout = () => {
//     // Clear localStorage session
//     localStorage.clear();

//     //Redirect to login Page
//     navigate("/");
//   };

//   const handleUsername = (event) => {
//     setUsername(event.target.value);
//     if(username) {
//       alert('Is active')
//     } else {
//       alert('no username')
//     }
//   };

//   return (
//     <>
//       <div className=" ">
//         <div className="  bg-red-500 flex justify-around items-center p-2 ">
//           <input className="border-1 rounded-xl p-2" type="text" placeholder="Products name" />
//           <label className="">
//             Category :
//             <select name="" id="">
//               <option value="">Tops</option>
//               <option value="">Pants</option>
//               <option value="">Outerwear</option>
//               <option value="">Dresses</option>
//               <option value="">Skirts</option>
//             </select>
            
//           </label>
//           <label className="">
//             Status
//             <select name="" id="">
//               <option value="">IN_STOCK</option>
//               <option value="">OUT_OF_STOCK</option>
//             </select>
           
//           </label>

//           <div className="">
//             <i className="fa fa-user-circle" aria-hidden="true" onClick={handleUsername}></i>
//             <span>Username:</span>
//             <button className="bg-blue-500 p-2 m-1 rounded-lg text-white " onClick={handleLogout}>LOGOUT</button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-amber-200 grid md:grid-cols-3 lg:grid-cols-4 grid-rows-1 p-5">
//         {displayProducts}
//       </div>
//     </>
//   );
// }

// export default Home;

function Home() {
  const [productsData, setProductsData] = useState([]);

  // const displayProducts = productsData.map((product) => (
  // ));

  // Axios using to fetch datas
  // const axios = require('axios');
  // const fetchData = () => {
  //   axios.get('https://fakestoreapi.com/products')
  // .then(response => {
  //   let products = response.data.results;
  //   setProductsData(products);
  // });
  // }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProductsData(response.data));
    // response.data contains the parsed JSON from API
    // setProductsData(data) update the React state with that JSON and stores it in state so you can access it.
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 p-2 ">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="m-5 p-2 border-amber-50 text-white font-normal pointer-events-auto rounded-2xl bg-gray-500 "
          >
            <div className="p-8 bg-bgGray rounded-lg">
              <img src={product.image} alt={product.name} />

            </div>
            <div className="text-black">
              <h3>{product.title}</h3>
              <p>Catégorie : {product.category}</p>
              <p>Status : {product.availability}</p>
              <p>Prix : {product.price} €</p>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
}

export default Home;