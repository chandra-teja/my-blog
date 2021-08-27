import "./UserPage.css";
import PostDate from "./PostDate";
function UserPage(props) {
  function deleteHandler(event) {
    props.deletepost(event.target.value);
  }
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 id="card-title">{props.title}</h2>
        <h6 className="card-subtitle text-muted">{props.category}</h6>
      </div>
      <img
        className="d-block user-select-none"
        width="100%"
        height="200"
        focusable="false"
        viewBox="0 0 318 180"
        preserveAspectRatio="xMidYMid slice" 
        src={props.img}
        alt="img"
      ></img>
      <div className="card-body">
          <p className="card-text">{props.content}</p>
          </div>
      <PostDate date={props.date}></PostDate>
      <button id="delete" onClick={deleteHandler} value={props.id}>
        delete
      </button>
    </div>
  );
}

export default UserPage;
