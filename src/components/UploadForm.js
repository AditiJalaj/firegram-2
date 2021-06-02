import {useState,useEffect} from 'react'
import {storage,db,timestamp} from '../config'

const UploadForm = () => {
    const [file,setFile]=useState('')
    const [progress,setProgress]=useState('')
    const [err,setErr]=useState('')
    const [url,setUrl]=useState('')

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


     //storage used to upload images and get download url before using db to create collection of these urls to be shown
    useEffect(()=>{
           
            const storageRef=storage.ref(`images/${file.name}`)
            const dbRef=db.collection('images')

            
                if(file!==undefined)
                {storageRef.put(file).on('state_changed',(snapshot)=>{
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
                    dbRef.add({url:u,createdAt:timestamp()})
                    setUrl('')
                })
            
            })}
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
        <span>+</span>
        {file &&<div> {file.name}</div>}
        {err && <div> {err} </div>}
        {file && <div style={{width:progress+"%"}} className='progress-bar'> </div>}
        {url && <div> url is {url} </div>}
        </> );
}
 
export default UploadForm;