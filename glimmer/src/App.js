import './App.css';
import PostCreator from './PostCreator';
import Posts from './Posts'
import { useState } from 'react';

export default function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src='images/logo.png' className='logo'></img>
      </header>
      {
        showPosts ?
        <Posts setShowPosts={setShowPosts} /> :
        <PostCreator setShowPosts={setShowPosts} />
      }
    </div>
  );
}
