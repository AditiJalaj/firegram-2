import {useState,useContext} from 'react'
import useStorage from '../custom-hooks/useStorage'
import {File} from '../context'

const UploadForm = () => {

    const [file,setFile]=useContext(File)
    const [progress]=useStorage()
    
    const changeHandler=(e)=>{
       setFile(e.target.files[0]) 
    }

    console.log(file)
    return ( <>

        <input type='file' onChange={changeHandler}
        />
        <img src={file} alt="uploaded"/>
        {progress}
        </> );
}
 
export default UploadForm;