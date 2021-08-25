import { useState } from "react";

function CreateBlog(props) {
  //Declaring Variables
  const [inputtitle, titleHandler] = useState("");
  const [inputcategory, categoryHandler] = useState("");
  const [inputcontent, contentHandler] = useState("");
  const [inputdate, dateHandler] = useState("");

  function inputtitleHandler(event){
      titleHandler(event.target.value);
  }
 function inputcategoryHandler(event){
     categoryHandler(event.target.value);
 }
  function inputdateHandler(event){
      dateHandler(event.target.value);
  }

  function inputcontentHandler(event){
      contentHandler(event.target.value);
  }


  function submitHandler(event) {
    const PostInput={
        title: inputtitle,
        category : inputcategory,
        content: inputcontent,
        date : new Date(inputdate),
    };
    event.preventDefault();
    //calling function from App.js to send data
    props.InputData(PostInput);
    titleHandler('');
    categoryHandler('');
    dateHandler('');
    contentHandler('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="post-title">Title</label>
          <input id="post-title" type="text" value={inputtitle} onInput={inputtitleHandler}></input>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input id="category" type="text" value={inputcategory} onInput={inputcategoryHandler}></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="Date" value={inputdate} onInput={inputdateHandler}></input>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input id="content" type="text" value={inputcontent} onInput={inputcontentHandler}></input>
        </div>
        <div>
          <button onClick={submitHandler}>Add Blog</button>
        </div>
      </div>
    </form>
  );
}
export default CreateBlog;
