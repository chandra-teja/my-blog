import "./App.css";
import UserBlog from "./components/UserBlog";
import CreateBlog from "./components/Inputs/CreateBlog";
import { useState } from "react";
import Search from "./components/Inputs/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Label from "./components/Label";

// //const [Dummy_posts, setDummy_posts] = useState([
// const Dummy_posts = [
//   {
//     id: "id1",
//     title: "Title1",
//     content: "HTML is basics of web dev",
//     date: new Date(2021, 5, 7),
//     category: "web-dev",
//     img: "Images/cycle1.jfif",
//   },
//   {
//     id: "id2",
//     title: "Title2",
//     content: "CSS is one of most basics knowlodge of web dev",
//     date: new Date(2021, 8, 1),
//     category: "algorithms",
//     img: "Images/cycle1.jfif",
//   },
//   {
//     id: "id3",
//     title: "Title3",
//     content: "Javascript is prerequisite of react",
//     date: new Date(2021, 7, 7),
//     category: "web-dev",
//     img: "Images/cycle1.jfif",
//   },
// ];

function App() {
 

  //Declaring State for array
  const [Post_array, setPost_array] = useState([]);

  //declare search state
  const [searchKey, setsearchKey] = useState("");

   //Dummy Variables
   const userName = "Welcome to personal experiences of User-name";
   
  async function postHandler() {
    //Fetching Posts from API
    await fetch("http://localhost:5000/posts", {
      method:'GET',
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

  // //Function to trasfer data from CreateBlog.js to App.js
  // function UserInputData(userInput) {
  //   //Creating a new object which data is from Input
  //   const data = {
  //     ...userInput,

  //     //math.random() is used to generate an ID for object, which is used while updation.
  //     id: Math.random().toString(),
  //     img: "Images/cycle1.jfif",
  //   };

  //   //Updating Post_array
  //   setPost_array((prevInputData) => {
  //     return [data, ...prevInputData];
  //   });
  //   //setDummy_posts(data);
  //   console.log("Updation function Success");
  // }

  function deletePostHandler(postId) {
    const updatedInitial_posts = [...Post_array].filter(
      (deleteItem) => deleteItem.id !== postId
    );
      deleteApi(postId);
    setPost_array(updatedInitial_posts);
  }

  async function deleteApi(postId){
    await fetch(`http://localhost:5000/posts/${postId}`,{
      method:'DELETE'
    })
    .then(()=>console.log('deletion from API succesfull'))
    .catch((err)=>console.log('ERROR in DELETEING FRoM DB',err));
  }

  function searchBar(searchInputData) {
    setsearchKey(searchInputData);
  }
  function closeSearch() {
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
            <Label fetchHomefeed={postHandler}/>
            <Switch>
              <Route
                path="/createblog"
                component={() => <CreateBlog /*InputData={UserInputData} *//>}
              ></Route>

              <Route
                path="/homefeed"
                component={() => (
                  <UserBlog
                    dataArray={Post_array}
                    deletepost={deletePostHandler}
                    search={searchKey}
                  ></UserBlog>
                )}
              ></Route>

              <Route path="/">
                <p>This is twitter mock demo</p>
              </Route>
            </Switch>
            {/* {Post_array.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h2>No Posts Yet</h2>
            </div>
          ) : (
            Post_array.map((Post_array) => (
              <UserPage
                key={Post_array.id}
                id={Post_array.id}
                title={Post_array.title}
                content={Post_array.content}
                date={Post_array.date}
                category={Post_array.category}
                img={Post_array.img}
                deletepost={deletePostHandler}
                
              />
            )
           )
          } */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
