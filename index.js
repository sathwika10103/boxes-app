const Box = (props) => {
  const { box, text } = props;
  return (
    <div className={box}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1>Boxes</h1>
    <Box box="small" text="Small" />
    <Box box="medium" text="Medium" />
    <Box box="large" text="Large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
