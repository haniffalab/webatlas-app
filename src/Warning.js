import Header from './Header';

export default function Warning(props) {
  const {
    title,
    message
  } = props;
  return (
    <div className="App">
      <Header title={title} message={message} />
      {!!title &&
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <div className="text-uppercase badge bg-danger text-dark my-2">{title}</div>
            <h2>{message}</h2>
            <p>Check console log for more information</p>
          </div>
        </div>
      }
    </div>
  );
}
