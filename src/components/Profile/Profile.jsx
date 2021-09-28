import MyPosts from './Myposts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <div className={s.wp}>
                    <img
                        alt="img robots"
                        src="https://images.hdqwalls.com/wallpapers/ai-robot-ce.jpg"
                    ></img>
                </div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;