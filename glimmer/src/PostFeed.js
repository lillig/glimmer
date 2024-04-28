import Post from './Post';

export default function PostFeed({ setShowPosts, posts }) {
    function handleClick() {
        setShowPosts(false)
    }

    const postComponents = Object.keys(posts).toReversed().map(key =>
        <Post 
            key={key}
            postTitle={posts[key][0]}
            postContent={posts[key][1]}
        />
    )

    return (
        <div className="PostFeed">
            <div className="createPostBtn" onClick={handleClick}>
                <img src='images/create.png' className='create'></img>
                <h2>Create a Post</h2>
            </div>
            <div className='posts grid'>{postComponents}</div>
        </div>
    )
}