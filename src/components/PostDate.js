function PostDate(props) {
  const date = props.date.toString();

  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return (
    <div>
      <h5>
        -{day}.{month}.{year}
      </h5>
    </div>
  );
}
export default PostDate;
