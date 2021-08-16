function Select({ children, title, value, onChange }) {
  return (
    <>
      <label className="form-label">{title}</label>
      <select className="form-select" value={value} onChange={onChange}>
        {children}
      </select>
    </>
  );
}

export default Select;
