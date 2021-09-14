import { Link } from "react-router-dom";
function wrapper(props){

  function postFetcher(){
        props.fetchHomefeed();
  }
    return (
        <div>
            <Link to="/createblog">
            <button>Create Blog</button>
          </Link>
          <Link to="/homefeed">
            <button onClick={postFetcher}>HOME</button>
          </Link>
        </div>
    );
}
export default wrapper;