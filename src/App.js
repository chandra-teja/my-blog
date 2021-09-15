import "./App.css";
import UserBlog from "./components/UserBlog";
import CreateBlog from "./components/Inputs/CreateBlog";
import { useState } from "react";
import Search from "./components/Inputs/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Label from "./components/Label";

function App() {
  //Declaring State for array
  const [Post_array, setPost_array] = useState([]);

  //Dummy Variables
  const userName = "Welcome to personal experiences of User-name";

  async function postHandler() {
    //Fetching Posts from API
    await fetch("https://postapi-blog.herokuapp.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        const dataApi = data.map((postdata) => {
          return {
            id: postdata._id,
            title: postdata.title,
            content: postdata.content,
            category: postdata.category,
            date: postdata.date,
            img: "Images/cycle1.jfif",
          };
        });
        setPost_array(dataApi);
      });
  }

  function deletePostHandler(postId) {
    const updatedInitial_posts = [...Post_array].filter(
      (deleteItem) => deleteItem.id !== postId
    );
    deleteApi(postId);
    setPost_array(updatedInitial_posts);
  }

  async function deleteApi(postId) {
    await fetch(`https://postapi-blog.herokuapp.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => console.log("deletion from API succesfull"))
      .catch((err) => console.log("ERROR in DELETEING FRoM DB", err));
  }

  async function searchPosts(searchInputData) {
    await fetch(`https://postapi-blog.herokuapp.com/posts/${searchInputData}`, {
      method: "GET",
    })
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        const dataApi = data.map((postdata) => {
          return {
            id: postdata._id,
            title: postdata.title,
            content: postdata.content,
            category: postdata.category,
            date: postdata.date,
            img: "Images/cycle1.jfif",
          };
        });
        setPost_array(dataApi);
      });
  }

  function searchBar(searchInputData) {
    searchPosts(searchInputData);
  }
  function closeSearch() {
    postHandler();
    console.log("Close search");
  }

  return (
    <Router>
      <div className="row justify-content-center">
        <div className="col-10">
          <h1 className="header">Personal Blog</h1>
          <div>
            <h2 className="username">{userName}</h2>
            <Search searchData={searchBar} close={closeSearch}></Search>
            <Label fetchHomefeed={postHandler} />
            <Switch>
              <Route
                path="/createblog"
                component={() => <CreateBlog />}
              ></Route>

              <Route
                path="/homefeed"
                component={() => (
                  <UserBlog
                    dataArray={Post_array}
                    deletepost={deletePostHandler}
                  ></UserBlog>
                )}
              ></Route>

              <Route path="/">
                <p>This is twitter mock demo</p>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
