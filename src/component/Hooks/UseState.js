import React from "react";
import GoBack from "../GoBack";


const UseState = () => {
    const [isValue, setIsValue] = React.useState(0);
    const [product, setProduct] = React.useState({
      multiplicationOf: 1,
      upcount : 1,
    });


    document.title = "Hooks - useEffect";  
    
    return (
      <div className="main-body">
        useState

        <p>Clicked {isValue} times.</p>
        <p>Multiplication of {product.multiplicationOf} x {product.upcount} = {product.upcount*product.multiplicationOf} </p>
        
        <button onClick={()=>setIsValue(parseInt(isValue)+1)}>➕</button>
        <button onClick={()=>setIsValue((parseInt(isValue)>0)?isValue-1:0)}>➖</button>
        <button onClick={()=>setIsValue((parseInt(0)))}>🔁</button>
        <button onClick={()=>setProduct(
          {
            ...product,
            upcount : (product.upcount<10)?(product.upcount+1):(product.upcount),
          }
        )}>Multiply by 1</button>
        <GoBack></GoBack>
      </div>
    );

};

export default UseState;
