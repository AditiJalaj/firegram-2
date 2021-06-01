// import {storage} from '../config'
// import {useState,useEffect } from 'react'


// const useStorage = (file) => {
  
//    const [progress,setProgress]=useState('')

//     useEffect(()=>{
//         console.log(file)
//         const storageRef=storage.ref(file.name)
//         storageRef.put(file).on('state_changed',(snapshot)=>{
//             setProgress((snapshot.bytesTransferred/snapshot.totalBytes)*100);
//             console.log('progress is ',progress)
//         })
//     },[file])

//     return ( [progress] );
// }
 
// export default useStorage;