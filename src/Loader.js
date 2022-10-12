import "./themes/Loader.scss";

export default function Loader(props) {
  const {
    title,
    message
  } = props;
  return (
    <div className="App">
        <div className="loader">
            <div class="loader-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
  );
}
