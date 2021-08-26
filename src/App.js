import "./App.css";
import UserPage from "./components/UserPage";
import CreateBlog from "./components/Inputs/CreateBlog";
import { useState } from "react";

//const [Dummy_posts, setDummy_posts] = useState([
const Dummy_posts = [
  {
    id: "id1",
    title: "Title1",
    content: "HTML is basics of web dev",
    date: new Date(2021, 7, 7),
    category: "web-dev",
  },
  {
    id: "id2",
    title: "Title2",
    content: "CSS is one of most basics knowlodge of web dev",
    date: new Date(2021, 8, 1),
    category: "web-dev",
  },
  {
    id: "id3",
    title: "Title3",
    content: "Javascript is prerequisite of react",
    date: new Date(2021, 9, 2),
    category: "web-dev",
  },
];

function App() {
  //Dummy Variables
  const userName = "User1";

  //Declaring State for array
  const [Post_array, setPost_array] = useState(Dummy_posts);

  //Function to trasfer data from CreateBlog.js to App.js
  function UserInputData(userInput) {
    //Creating a new object which data is from Input
    const data = {
      ...userInput,

      //math.random() is used to generate an ID for object, which is used while updation.
      id: Math.random().toString(),
    };

    //Updating Post_array
    setPost_array((prevInputData) => {
      return [data, ...prevInputData];
    });
    //setDummy_posts(data);
    console.log("Updation function Success");
  }

  function deletePostHandler(postId) {
    const updatedInitial_posts = [...Post_array].filter(
      (deleteItem) => deleteItem.id !== postId
    );
    setPost_array(updatedInitial_posts);
  }

  return (
    <div className="App">
      <h1>Personal Blog</h1>
      <div>
        <h1>{userName}</h1>
        <button id="create-button">Create Blog</button>
        <CreateBlog InputData={UserInputData}></CreateBlog>
        {Post_array.map((Post_array) => (
          <UserPage
            key={Post_array.id}
            id={Post_array.id}
            title={Post_array.title}
            content={Post_array.content}
            date={Post_array.date}
            category={Post_array.category}
            deletepost={deletePostHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
