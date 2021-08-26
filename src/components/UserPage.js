import './UserPage.css'
import PostDate from './PostDate';
function UserPage(props){
    function deleteHandler(event){
        props.deletepost(event.target.value);
    }
    return (
        <div className="post-profile">
                <h2>{props.title}</h2>
                <div className='container' >
                   <p>{props.category} </p>
                   <PostDate date={props.date}></PostDate>
                </div>
                <div className="post-content">{props.content}</div>
                <button id ='delete' onClick={deleteHandler} value={props.id}>delete</button>
        </div>
    );
}

export default UserPage;