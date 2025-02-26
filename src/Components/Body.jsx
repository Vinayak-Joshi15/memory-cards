import React, { useState } from "react";

export default function Body(){
    const [formExists , setFormExists] = useState(1);
    const [cards,setCards] = useState(0);

    if(formExists){
        return(
            <>
                <form onSubmit>
                    <label htmlFor=""></label>
                    <input type="number" />
                </form>
            </>
        )
    }
}