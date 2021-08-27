function PostDate(props) {
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div>
     <h5>
        -{date}.{month}.{year}
        </h5>
    </div>
  );
}
export default PostDate;
