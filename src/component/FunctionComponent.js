import React, { useState } from "react";


function FunctionComponent({nama}){
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value+1)
    }

    const handleMinus = () => {
        if(value > 0){
            setValue(value-1)
        }
    }

    return(
      <div>
         <div>Hallo Selamat Datang {nama}</div>
         <button onClick={handleMinus}>-</button>
         <span>{value}</span>
         <button onClick={handlePlus}>+</button>
      </div>
        
    );
}

export default FunctionComponent;