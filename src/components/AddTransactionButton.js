import React from 'react';

function AddTransactionButton({ openAddForm }) {
  return (
    <div className='mb-4 d-flex justify-content-end'>
      <button className='btn btn-sm btn-success' onClick={openAddForm}>
        <i className='bi-plus' />
      </button>
    </div>
  );
}

export default AddTransactionButton;
