import {createContext,useState} from 'react'

const File=createContext()

const Context = (props) => {
    const[file,setFile]=useState('')

    return (<File.Provider value={[file,setFile]}>
        {props.children}
        </File.Provider> );
}
 
export default Context;
export {File}
