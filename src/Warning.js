import "vitessce/dist/umd/production/static/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

export default function Warning(props) {
  const {
    message
  } = props;
  return (
    <div className="App">
      <Header message={message} />
    </div>
  );
}
