import React from "react";

export default function Header({Current,Best}){
    return(
        <div className="mx-0 my-0 px-5 py-5 gap-250 flex">
            <div className="text-white text-3xl">Pokemon Memory Game</div>
            <div className="flex-col px-2 py-2">
                <div className="text-white text-xl">Current Score: {Current}</div>
                <div className="text-white text-xl">Best Score: {Best}</div>
            </div>
        </div>
    )
}