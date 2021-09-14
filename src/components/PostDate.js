function PostDate(props) {
  const date = props.date.toString();

  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  // const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = parseInt(props.date);
  //props.date.getFullYear();
  return (
    <div>
      <h5>
        -{day}.{month}.{year}
      </h5>
    </div>
  );
}
export default PostDate;
