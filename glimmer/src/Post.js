export default function Post({ postTitle, postContent }) {
    return (
        <div className="Post">
            <h3>{postTitle}</h3>
            <p>{postContent}</p>
        </div>
    )

}