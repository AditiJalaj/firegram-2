import {useState} from 'react'

const UploadForm = () => {

    const [file,setFile]=useState('')
    
    const changeHandler=(e)=>{
       setFile(e.target.files[0]) 
    }

    console.log(file)
    return ( <>

        <input type='file' onChange={changeHandler}
        />
        <img src={file} alt="uploaded"/>

        </> );
}
 
export default UploadForm;