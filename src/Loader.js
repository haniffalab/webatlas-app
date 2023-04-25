import "./themes/Loader.scss";

export default function Loader() {
  return (
    <div className="App">
      <div className="loader">
        <div className="loader-ring" data-testid="loader-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
}
