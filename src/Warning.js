export default function Warning(props) {
  const {
    title
  } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Spatial Web App
        </p>
      </header>
      <div className={'targetRef'} style={{height:'calc(100vh - 100px)'}}>
        {title}
      </div>
    </div>
  );
}
