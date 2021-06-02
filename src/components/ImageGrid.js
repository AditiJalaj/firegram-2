import { useEffect, useState } from 'react';
import {db } from '../config'

const ImageGrid = () => {

    const [docs,setDocs]=useState('')


    useEffect(()=>{

        db.collection('images')
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents=[]
            snap.forEach((doc)=>{
              documents.push({data:doc.data(),id:doc.id})
          })
          setDocs(documents)
        })

    },['images'])

    //doubt what happens if we put docs as a dependency

    console.log('outside: docs is ',docs)
    
    let inf=[]

    //docs.length > 0 will fix docs.map is not a fucntion on mount
    if(docs!=undefined && docs.length>0){
      docs.map((i)=>{
        console.log('i is ',i.data.url)
        inf.push(i.data.url)
    })}
   
   

    return ( <>
        ImageGrid
        <div>
        {inf && inf.map((img)=>{
            return <img style={{width:"100px",height:"102px"}} src={img} alt="not displaying"></img>
        })}
        </div>
        </> );
}
 
export default ImageGrid;