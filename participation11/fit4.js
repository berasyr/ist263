// src/pages/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [content, setContent] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/createPost', { userId: '12345', content, mediaUrl })
      .then(() => {
        alert('Post created!');
        setContent('');
        setMediaUrl('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
