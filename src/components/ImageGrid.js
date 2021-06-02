import { useEffect, useState } from 'react';
import {db } from '../config'

const ImageGrid = () => {

    const [docs,setDocs]=useState('')


    useEffect(()=>{

       const unsub= db.collection('images')
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{  
            let documents=[]
            snap.forEach((doc)=>{
              documents.push({data:doc.data(),id:doc.id})
          })
          setDocs(documents)
        })

        return ()=>unsub()
    },['images'])

    //doubt what happens if we put docs as a dependency -infinite loop

    console.log('outside: docs.url is ',docs)
    
   /* REDUNDANT
    // let inf=[]

    // //docs.length > 0 will fix docs.map is not a fucntion on mount
    // if(docs!=undefined && docs.length>0){
    //   docs.map((i)=>{
    //     console.log('i is ',i.data.url)
    //     inf.push(i.data.url)
    // })}

    */
   
//    const deleteHandler=()=>{
//        let dbRef=db.collection('images')
//        dbRef.doc(y).delete().then(()=>{
//            console.log('Deleted')
//        }).catch((err)=>{
//            console.log('error',err)
//        })
//    }

    return ( <>
        ImageGrid
        <div>
        {docs && docs.map((img)=>{
            return(<>
                <div style={{position:"relative"}}>
                <img style={{margin:"2px",width:"100px",height:"102px"}} key={img.id} src={img.data.url} alt="not displaying"></img>
        
                <button  style={{color:"red" ,position:"absolute"}}>X</button>
                </div>
            </>
            ) 

        })}
        </div>
        </> );
}
 
export default ImageGrid;