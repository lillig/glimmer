import './App.css';
import PostCreator from './PostCreator';
import Posts from './Posts'
import { useState } from 'react';

export default function App() {
  const [showPosts, setShowPosts] = useState(true)
  const [posts, setPosts] = useState({})

  function addNewPost(postTitle, postContent) {
    let newPosts = {...posts}
    const postID = Object.keys(newPosts).length + 1
    newPosts[postID] = [postTitle, postContent]
    setPosts(newPosts)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src='images/logo.png' className='logo'></img>
      </header>
      {
        showPosts ?
        <Posts setShowPosts={setShowPosts} posts={posts} /> :
        <PostCreator setShowPosts={setShowPosts} addNewPost={addNewPost} />
      }
    </div>
  );
}
