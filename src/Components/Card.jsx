import React from "react";

export default function Card({name,id,image,call}){
    console.log(name,id);
    return(
        <div className="grid grid-cols-2 gap-4 p-4">
        <div key={id} className="bg-white shadow-lg rounded-lg p-4" onClick={call}>
          <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{name}</h2>
        </div>
        </div>
      )
}