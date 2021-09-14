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

  //POST rqst to API
  function postRequest() {
    fetch("http://localhost:5000/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputtitle,
        category: inputcategory,
        content: inputcontent,
        date: new Date(inputdate),
      }),
    });
    //console.log('post request to api succesfull'));
  }

  function submitHandler(event) {
    if (
      inputtitle.length > 0 &&
      inputcategory.length > 0 &&
      inputcontent.length > 0 &&
      inputdate.length > 0
    ) {
      console.log("form validation");
      
      //Calling api post requesting function
      postRequest();

      //calling function from App.js to send data
      //props.InputData(PostInput);
      titleHandler("");
      categoryHandler("");
      dateHandler("");
      contentHandler("");
      imgHandler("");
    } else {
    }
    event.preventDefault();
  }

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-lg-6">
        <h5 className="create-blog">Create Blog</h5>
        <form onSubmit={submitHandler} className="InputForm">
          <div className="mb-2">
            <label htmlFor="post-title" className="form-label">
              Title
            </label>
            <textarea
              className="form-control"
              id="post-title"
              type="text"
              value={inputtitle}
              onInput={inputtitleHandler}
            ></textarea>
          </div>
          <div className="col-sm-4 mb-2 ">
            <label htmlFor="post-img" className="form-label">
              Select a Picture
            </label>
            <input
              className="form-control"
              value={inputImg}
              type="file"
              onInput={onInputImgHandler}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <textarea
              className="form-control"
              id="category"
              type="text"
              value={inputcategory}
              onInput={inputcategoryHandler}
            ></textarea>
          </div>
          <div className="col-sm-4 mb-2">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              className="form-control"
              id="date"
              type="Date"
              value={inputdate}
              onInput={inputdateHandler}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleTextarea" className="form-label">
              Content
            </label>
            <textarea
              className="form-control bg-light"
              name="exampleTextarea"
              type="text"
              value={inputcontent}
              onInput={inputcontentHandler}
            ></textarea>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
              style={{ backgroundColor: "#008cba" }}
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateBlog;
