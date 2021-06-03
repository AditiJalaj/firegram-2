import { useEffect, useState } from 'react';
import {db } from '../config'

const ImageGrid = ({setSelectedImg}) => {

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

    // if we put docs as a dependency -infinite loop

    console.log('outside: docs.url is ',docs)
    


var liked;
    return ( <>
        ImageGrid
        <div>
        {docs && docs.map((img)=>{
            return(<>
                <div style={{position:"relative"}}
                onClick={()=>{
                    setSelectedImg(img.data.url)
                }}
                >
                <img style={{margin:"2px",width:"120px",height:"132px"}} 
                key={img.id} 
                

                src={img.data.url} alt="not displaying" />
                
                <button onClick={(e)=>{
                    if(liked===true){
                        e.target.style.backgroundColor='red'
                        liked=!liked
                    }
                    else{
                        e.target.style.backgroundColor='white'
                        liked=!liked
                    } 
                }}  

                 style={liked ? {backgroundColor:'red'}  : {backgroundColor:'white'} }
                >🤍</button>

                <button onClick={()=>{
                    db.collection('images').doc(img.id).delete().then(()=>{
                        console.log('deleted')
                    })
                    }}
                     style={{color:"red" ,position:"absolute"}}>X</button>
                </div>
            </>
            ) 

        })}
        </div>
        </> );
}
 
export default ImageGrid;