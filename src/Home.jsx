import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "./data/productsData.json";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const displayProducts = productsData.products.map((product) => (
    <div className="">
      <div
        key={product.id}
        className="m-5 p-2 border-amber-50 text-white font-normal pointer-events-auto rounded-2xl bg-gray-500 "
      >
        <img src={product.image} alt={product.name} />
        <div className="text-black">
          <h3>{product.name}</h3>
          <p>Catégorie : {product.category}</p>
          <p>Status : {product.availability}</p>
          <p>Prix : {product.price} €</p>
        </div>
      </div>
    </div>
  ));

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
      <div className=" ">
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
            <button className="bg-blue-500 p-2 m-1 rounded-lg text-white " onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>
      <div className="bg-amber-200 grid md:grid-cols-3 lg:grid-cols-4 grid-rows-1 p-5">
        {displayProducts}
      </div>
    </>
  );
}

export default Home;
