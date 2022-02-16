import './App.css';
import React from 'react'
import PostComment from './Post/Posts'
import AddPost from './Post/AddPost'

function App (){
    return (
        <div className="App">
           <AddPost/>
           <PostComment/>
        </div>
    )
}


export default App;
