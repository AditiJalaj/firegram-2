import {useState,useEffect} from 'react'
import useStorage from '../custom-hooks/useStorage'
import {storage} from '../config'

const UploadForm = () => {
    const [file,setFile]=useState('')
    const [progress,setProgress]=useState('')
    const [err,setErr]=useState('')

    console.log(file)
        useEffect(()=>{
            const storageRef=storage.ref(file.name)
            storageRef.put(file).on('state_changed',(snapshot)=>{
                let percent=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setProgress(percent)
                console.log(`percent is ${percent}`)
            })
        },[file])
    



    const changeHandler=(e)=>{
       var f=e.target.files[0]
       setFile(f) 
    }
   
    console.log(file)
    return (<>
        <input type='file' onChange={changeHandler}/>

        {file && 
            <img src={file} 
            
            alt="uploaded"/>}
        {err}
        </> );
}
 
export default UploadForm;