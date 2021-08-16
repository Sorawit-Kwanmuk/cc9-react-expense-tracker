function Col({ children, sm }) {
  return <div className={`col-${sm ? 'sm-' + sm : '12'}`}>{children}</div>;
}

export default Col;
