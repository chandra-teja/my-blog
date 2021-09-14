import "./UserPage.css";
import PostDate from "./PostDate";
function UserPage(props) {
  function deleteHandler(event) {
    props.deletepost1(event.target.value);
  }
  return (
    <div className="row justify-content-center">
      <div className="card mb-3 col-sm-7">
        <div className="card-body">
          <h2 id="card-title">{props.title}</h2>
          <h6 className="card-subtitle text-muted">{props.category}</h6>
        </div>
        <div className="row justify-content-center">
          <img
            className="d-block user-select-none col-11"
            focusable="false"
            viewBox="0 0 318 180"
            preserveAspectRatio="xMidYMid slice"
            src={props.img}
            alt="img"
          ></img>
        </div>
        <div className="card-body">
          <p className="card-text">{props.content}</p>
        </div>
        <PostDate date={props.date}></PostDate>
        <div style={{ textAlign: "center" }} className="mb-3">
          <button
            id="delete"
            onClick={deleteHandler}
            value={props.id}
            className="btn btn-primary"
            style={{ backgroundColor: "#008cba" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
