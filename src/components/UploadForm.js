import {useState,useEffect} from 'react'
import useStorage from '../custom-hooks/useStorage'
import {storage} from '../config'

const UploadForm = () => {
    const [file,setFile]=useState('')
    const [progress,setProgress]=useState('')
    const [err,setErr]=useState('')
    const [url,setUrl]=useState(null)

    const types=["image/png" ,"image/jpeg"];

    const changeHandler=(e)=>{
        var f=e.target.files[0]
        if(f && types.includes(f.type)){
            setFile(f)
            setErr('')
        }
        else{
            setFile('')
            setErr('Please select a png/jpg file only.')
        }
     }

    useEffect(()=>{
            const storageRef=storage.ref(`images/${file.name}`)
            storageRef.put(file).on('state_changed',(snapshot)=>{
                let percent=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setProgress(percent)
                console.log(`percent is ${percent}`)
            },(error)=>{
                console.log(err)
                setErr(error)
            },
            ()=>{
                storageRef.getDownloadURL()
                .then((u)=>{
                    console.log('url is ',u)
                    setUrl(u)
                })
            })
     },[file])


        //useeffect to run to setprogress to 0 once we have url of file
        useEffect(()=>{
            if(url){
                setProgress(0)
            }
        },[url])

    console.log(file)
   
    console.log(file)
    return (<>
        <input type='file' onChange={changeHandler}/>
        {file &&<div> {file.name}</div>}
        {err && <div> {err} </div>}
        {file && <div style={{width:progress+"%"}} className='progress-bar'> </div>}
        {url && <div> url is {url} </div>}
        </> );
}
 
export default UploadForm;