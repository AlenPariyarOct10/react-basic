import React, { useCallback } from "react";
import GoBack from "../GoBack";


const WithCounter = (HocComponent) => {

    const [isCount, setIsCount] = React.useState(0)
    return (props)=>{
        const upcountUpdate=()=>{
            console.log(isCount);
            setIsCount(isCount+1);
        }

        return (
            <HocComponent count={isCount} setCount={upcountUpdate} {...props}/>
        )
    }
};

export default WithCounter;
