export default function Warning(props) {
  const {
    title
  } = props;
  return (
    <div className="App">
      <div className={'targetRef'}>
        {title}
      </div>
    </div>
  );
}
