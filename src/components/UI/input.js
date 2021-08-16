function Input({ title, error, value, onChange }) {
  return (
    <>
      <label className='form-label'>{title}</label>
      <input
        type='text'
        className={`form-control${error ? ' is-invalid' : ''}`}
        value={value}
        onChange={onChange}
      />
      <div className='invalid-feedback'>{error}</div>
    </>
  );
}

export default Input;
