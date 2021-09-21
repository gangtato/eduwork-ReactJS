import React, { useState } from "react";

function CalculatorComponent(){
    const [value, setValue] = useState(0);

    const handleSubmit = (event) => {
        alert('Hallo ' + value);
        event.preventDefault();
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
                <label>
                Silahkan Masukan Nama Anda
                <textarea value={value} onChange={handleChange} />
                </label>
                <input type="submit"/>
        </form>
        <h1>Hallo Selamat Datang di aplikasi ini</h1>  
        </div>
    );
}

export default CalculatorComponent;