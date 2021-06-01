import {useState,useEffect} from 'react'
import useStorage from '../custom-hooks/useStorage'
import {storage} from '../config'

const UploadForm = () => {
    const [file,setFile]=useState('')
    const [progress,setProgress]=useState('')
    const [err,setErr]=useState('')

    const changeHandler=(e)=>{
        var f=e.target.files[0]
        setFile(f) 
     }

       
        useEffect(()=>{
            const storageRef=storage.ref(`images/${file.name}`)
            storageRef.put(file).on('state_changed',(snapshot)=>{
                let percent=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setProgress(percent)
               
                console.log(`percent is ${percent}`)
            })
        },[file])


        // // DOUBT-  too many renders when i keep progress as dependency
        // useEffect(()=>{
        //     const storageRef=storage.ref(`images/${file.name}`)
        //     storageRef.put(file).on('state_changed',(snapshot)=>{
        //         let percent=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        //         setProgress(percent)
        //         console.log('render')
        //         console.log(`percent is ${percent}`)
        //     })

        // },[file,progress])

    console.log(file)
   
    console.log(file)
    return (<>
        <input type='file' onChange={changeHandler}/>

        {file &&  <img src={file} 
            alt="uploaded"/>}
        {err}
        </> );
}
 
export default UploadForm;