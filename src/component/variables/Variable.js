import React from 'react'
import Var from '../variables/Var'
import Let from '../variables/Let'
import Const from '../variables/Const'

const Variable = () =>{
    document.title = "Variable";
    return (<><Var/><Let/><Const></Const></>)
}

export default Variable