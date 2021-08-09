function Searchbar() {
  return (
    <div className='row g-3 mt-3'>
      <div className='col-sm-6'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter to search'
        />
      </div>
      <div className='col-sm-3'>
        <select className='form-select'>
          <option value=''>Filter Month</option>
          <option value=''>Jan</option>
          <option value=''>Feb</option>
          <option value=''>Mar</option>
          <option value=''>Apr</option>
          <option value=''>May</option>
          <option value=''>Jun</option>
          <option value=''>Jul</option>
          <option value=''>Aug</option>
          <option value=''>Sep</option>
          <option value=''>Oct</option>
          <option value=''>Nov</option>
          <option value=''>Dec</option>
        </select>
      </div>
      <div className='col-sm-3'>
        <select className='form-select'>
          <option value=''>Filter Year</option>
          <option value=''>2021</option>
          <option value=''>2020</option>
        </select>
      </div>
    </div>
  );
}
export default Searchbar;
