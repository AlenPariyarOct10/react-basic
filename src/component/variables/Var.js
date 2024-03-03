import React from 'react'


const Var = () =>{
    var name = "Alen";
    var address = "Lamjung";

    const handleVar = ()=>{
        alert("hello");
        address = "Kathmamdu";
    }

   
    return (<div>
        <div onClick={handleVar}>
            Var
        </div>
        <div>
            {name}
        </div>
        <div>
            {address}
        </div>
    </div>)
}

export default Var