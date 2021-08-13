import { useState } from 'react';

function Searchbar({ filter: { text, month, year }, setFilter }) {
  return (
    <div className='row g-3 mt-3'>
      <div className='col-sm-6'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter to search'
          value={text}
          onChange={e =>
            setFilter(curFilter => ({ ...curFilter, text: e.target.value }))
          }
        />
      </div>
      <div className='col-sm-3'>
        <select
          className='form-select'
          value={month}
          onChange={e =>
            setFilter(curFilter => ({ ...curFilter, month: e.target.value }))
          }>
          <option value=''>Filter Month</option>
          <option value='0'>Jan</option>
          <option value='1'>Feb</option>
          <option value='2'>Mar</option>
          <option value='3'>Apr</option>
          <option value='4'>May</option>
          <option value='5'>Jun</option>
          <option value='6'>Jul</option>
          <option value='7'>Aug</option>
          <option value='8'>Sep</option>
          <option value='9'>Oct</option>
          <option value='10'>Nov</option>
          <option value='11'>Dec</option>
        </select>
      </div>
      <div className='col-sm-3'>
        <select
          className='form-select'
          value={year}
          onChange={e =>
            setFilter(curFilter => ({ ...curFilter, year: e.target.value }))
          }>
          <option value=''>Filter Year</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
}
export default Searchbar;
