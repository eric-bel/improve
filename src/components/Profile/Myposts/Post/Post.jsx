import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.insider.com/526e73376bb3f7e74de65a0d?width=778&format=jpeg" alt="avatar post" />
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;