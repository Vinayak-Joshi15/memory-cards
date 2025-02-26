import React from "react";

export default function Card({name,id,image}){
    console.log(name,id);
    return(
        <div className="grid grid-cols-3 gap-4 p-4">
        <div key={id} className="bg-white shadow-lg rounded-lg p-4">
          <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{name}</h2>
        </div>
        </div>
      )
}