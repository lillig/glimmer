

function PostCreator({ setShowPosts }) {
    function handleClose() {
        setShowPosts(true)
    }

    return(
        <div className="PostCreator parent">
            <div className="PostCreator child">
                <div className="createPostBtn" onClick={handleClose}>
                    <img src='images/close.png' className='exitIcon'></img>
                    <h2>Create a Post</h2>
                </div>
                <form action="" method="get" class="form-example">
                    <div class="form-item">
                        <label for="title" hidden>Add Title</label>
                        <input type="text" name="title" placeholder="Add Title" required />
                    </div>
                    <div class="form-item">
                        <label for="content" hidden>Enter your daily glimmers to reflect on the small, wonderful moments that bring you joy.</label>
                        <textarea name="content" placeholder="Enter your daily glimmers to reflect on the small, wonderful moments that bring you joy." required >
                        </textarea>
                    </div>
                    <div class="form-item">
                        <input type="submit" value="Post" />
                    </div>
                </form>
                
            </div>

        </div>

    )
}

export default PostCreator