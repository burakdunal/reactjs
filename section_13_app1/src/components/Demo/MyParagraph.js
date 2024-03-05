const MyParagraph = (props) => {
  console.log("myParagraph running");
  return <p>{props.children}</p>;
};

export default MyParagraph;