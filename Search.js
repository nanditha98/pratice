import React, { useEffect, useState } from "react";
import axios from "axios";

function Search(){

    const[post,setPost]=useState({})
    const[id,setId]=useState()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[id])




    return(
        <div>
            <input type="text" value={id} onChange={e =>setId(e.target.value)} />
            <h1>{post.title}</h1>
            {/* <ul>
                {posts.map(posts=>(
                        <li key={posts.id}>{posts.title}</li>
                ))
                }
            </ul> */}

        </div>
    )
}

export default Search;