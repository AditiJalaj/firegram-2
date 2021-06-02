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

    if(docs!=undefined){
     console.log('not unde')
    docs.map((i)=>{
        console.log('i is ',i.data.url)
    })}
   
   
    

    return ( <>
        ImageGrid
        </> );
}
 
export default ImageGrid;