import './UserPage.css'
import PostDate from './PostDate';
function UserPage(props){
    return (
        <div className="post-profile">
                <h2>{props.title}</h2>
                <div className='container' >
                   <p>{props.category} </p>
                   <PostDate date={props.date}></PostDate>
                </div>
                <div className="post-content">{props.content}</div>
        </div>
    );
}

export default UserPage;