import { useState } from "react";
import "./CreateBlog.css";

function CreateBlog(props) {
  //Declaring Variables
  const [inputtitle, titleHandler] = useState("");
  const [inputcategory, categoryHandler] = useState("");
  const [inputcontent, contentHandler] = useState("");
  const [inputdate, dateHandler] = useState("");
  const [inputImg, imgHandler] = useState("");

  function inputtitleHandler(event) {
    titleHandler(event.target.value);
  }
  function inputcategoryHandler(event) {
    categoryHandler(event.target.value);
  }
  function inputdateHandler(event) {
    dateHandler(event.target.value);
  }

  function inputcontentHandler(event) {
    contentHandler(event.target.value);
  }
  function onInputImgHandler(event) {
    console.log(event.target.value);
    imgHandler(event.target.value);
  }

  function submitHandler(event) {
    const PostInput = {
      title: inputtitle,
      category: inputcategory,
      content: inputcontent,
      date: new Date(inputdate),
      img: inputImg,
    };
    event.preventDefault();
    //calling function from App.js to send data
    props.InputData(PostInput);
    titleHandler("");
    categoryHandler("");
    dateHandler("");
    contentHandler("");
    imgHandler("");
  }

  return (
    <div>
      <h2 class="create-blog">Create Blog</h2>
      <form onSubmit={submitHandler} className="InputForm">
        <div className="form-group">
          <div className="each-element">
            <label htmlFor="post-title" className="form-label">
              Title
            </label>
            <input
              id="post-title"
              type="text"
              value={inputtitle}
              onInput={inputtitleHandler}
            ></input>
          </div>
          <div className="each-element">
            <label htmlFor="post-img">Select a Picture</label>
            <input
              value={inputImg}
              type="file"
              onInput={onInputImgHandler}
            ></input>
          </div>
          <div className="each-element">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              id="category"
              type="text"
              value={inputcategory}
              onInput={inputcategoryHandler}
            ></input>
          </div>
          <div className="each-element">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="Date"
              value={inputdate}
              onInput={inputdateHandler}
            ></input>
          </div>
          <div className="each-element">
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Content
            </label>
            <textarea
              className="form-control"
              name="exampleTextarea"
              type="text"
              value={inputcontent}
              onInput={inputcontentHandler}
            ></textarea>
          </div>
          <div className="bttn-container">
            <button
              type="submit"
              className="btn btn-primary su-container"
              onClick={submitHandler}
            >
              Add Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateBlog;
