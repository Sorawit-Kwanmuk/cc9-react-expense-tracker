//type={type ?? 'text'} ภ้ามีค่าเป็น null หรือ undefind จะเป็น text ถ้ามีค่าtypelj',k ให้ใช้ค่านั้น
function TextInput({ label, type, value, onChange, name }) {
  return (
    <>
      <label className='form-label'>{label}</label>
      <input
        type={type ?? 'text'}
        className='form-control'
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}

export default TextInput;
