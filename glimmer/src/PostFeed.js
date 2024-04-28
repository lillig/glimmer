export default function PostFeed({ setShowPosts }) {
    function handleClick() {
        setShowPosts(false)
    }

    return (
        <div className="Posts">
            <div className="createPostBtn" onClick={handleClick}>
                <img src='images/create.png' className='create'></img>
                <h2>Create a Post</h2>
            </div>
        </div>
    )
}