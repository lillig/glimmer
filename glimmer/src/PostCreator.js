import './App.css';

function PostCreator() {
    return(
        <div className="PostCreator parent">
            <h2>Create a Post</h2>
            <div className="PostCreator child">
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