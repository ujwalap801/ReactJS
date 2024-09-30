import React, { useState } from 'react'
import { useEffect } from 'react'

const Post = () => {

    let [posts,setPosts]= useState([]);



    useEffect(()=>
    {
        // make Api req(effect)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(postsList=>setPosts(postsList))
        .catch();
    },[]);


    // console.log(posts);

  return (
    <div>
      
      <h1 className="display-2 text-warning">Posts </h1>

      {
        // to display loading till the data is fetched from API
        posts.length ===0? <div class="spinner-border text-warning display-1" >Loading...</div>
        :
        <table className='table'>
        <thead>
            <tr>      
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
            </tr>
        </thead>
              
              <tbody>
                {
                    posts.map((postObj)=>(
                    
                        <tr key={postObj.id}>
                            <td>{postObj.userId}</td>
                            <td>{postObj.id}</td>
                            <td>{postObj.title}</td>
                        </tr>
                    ))
                }
              </tbody>
                
        
        </table>
      }

    </div>
  )
}

export default Post
