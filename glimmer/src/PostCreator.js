import { useState } from 'react';

function PostCreator({ setShowPosts, addNewPost }) {
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')

    function handleClose() {
        setShowPosts(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (postTitle && postContent) {
            addNewPost(postTitle, postContent)
            handleClose()
        }
    }

    return(
        <div className="PostCreator parent">
            <div className="PostCreator child">
                <div className="createPostBtn" onClick={handleClose}>
                    <img src='images/close.png' className='exitIcon'></img>
                    <h2>Create a Post</h2>
                </div>
                <form action="" method="get" className="form-example">
                    <div className="form-item">
                        <label htmlFor="title" hidden>Add Title</label>
                        <input 
                            type="text"
                            name="title"
                            placeholder="Add Title"
                            value={postTitle}
                            onChange={event => setPostTitle(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="content" hidden>Enter your daily glimmers to reflect on the small, wonderful moments that bring you joy.</label>
                        <textarea
                            name="content"
                            placeholder="Enter your daily glimmers to reflect on the small, wonderful moments that bring you joy."
                            value={postContent}
                            onChange={event => setPostContent(event.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-item submit-item">
                        <input type="submit" value="Post" className='submit' onClick={handleSubmit} />
                    </div>
                </form>
                
            </div>

        </div>

    )
}

export default PostCreator