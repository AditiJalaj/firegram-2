import {storage} from '../config'
import {useState,useEffect,useContext } from 'react'
import {File} from '../context'

const useStorage = () => {
   const [file,setFile]=useContext(File)
   const [progress,setProgress]=useState('')
    useEffect(()=>{
        const storageRef=storage.ref(file.name)
        storageRef.put(file).on('state_changed',(snapshot)=>{
            setProgress((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            console.log('progress is ',progress)
        })


    },[file,progress])

    return ( [progress] );
}
 
export default useStorage;