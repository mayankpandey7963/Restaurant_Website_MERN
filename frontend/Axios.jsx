import axios from 'axios'
import React, { useEffect } from 'react'

function Axios() {
    
// Then... catch method   

    // const getData = () =>{
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
    //         if(res){
    //             console.log(res);
    //         }
    //     })
    //     .catch((err) =>{
    //         if(err){
    //             console.error(err);
    //         }
    //     })

    // }


// async await method

    const getData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
            if(res){
                console.log(res);
            }
        })
        .catch((err) =>{
            if(err){
                console.error(err);
            }
        })
    
    }

    useEffect(() =>{
        getData();
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Axios
