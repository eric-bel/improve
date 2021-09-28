import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add  post</button>
            </div>
            <div></div>
            <div>
                <Post message="Hi, how are you?" likesCount=" 32" />
                <Post message="What are you doing?" likesCount=" 40" />
            </div>
        </div>
    )
}

export default MyPosts;