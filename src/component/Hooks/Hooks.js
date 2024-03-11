import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

// useState
// useEffect
//useCallback

const Hooks = () => {
    const navigate = useNavigate();
    const hookItems = [
        {
            name: "useEffect",
            key: 1,
            path: "useEffect"
        },
        {
            name: "useState",
            key: 2,
            path: "useState"
    
        },
        {
            name: "useCallback",
            key: 3,
            path: "useCallback"
        },

    ]

    document.title = "Hooks";

    const redirect = (path)=>{
      navigate(path);
    }
    
  
    return (
      <div className="main-body">
        <div>
          <b> Hooks 🪝 </b>
        </div>
       
        <table border='1'>
          <tbody>
          {hookItems?.map((item)=>(
              <tr className="arrayMethods" key={item?.key}>
                  <td>
                    {item?.key}
                  </td>
                  <td>
                     <span onClick={()=>redirect(item.path)} >{item.name}</span>
                  </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    );

};

export default Hooks;
