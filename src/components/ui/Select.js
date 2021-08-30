function Select({ label, children }) {
  return (
    <>
      <label className='form-label'>{label}</label>
      <select className='form-select'>{children}</select>
    </>
  );
}

export default Select;
