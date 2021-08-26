function TransactionContainer() {
  return (
    <ul className='list-group'>
      <li className='list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-danger'>
        <div className='transaction-detail d-flex flex-fill me-4'>
          <div className='transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center'>
            <p className='p-0 m-0 fs-7 text-black-50'>Jan 21</p>
            <p className='p-0 m-0'>21</p>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-fill ps-4'>
            <div>
              <p className='mb-1 f-5 fw-bold'>7-11</p>
              <p className='mb-0 text-black-50 fs-7'>Food</p>
            </div>
            <span className='badge bg-danger'>฿17.00</span>
          </div>
        </div>
        <button className='btn btn-link text-secondary p-0 border-0'>
          <i className='bi-x-circle' />
        </button>
      </li>
      <li className='list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-success'>
        <div className='transaction-detail d-flex flex-fill me-4'>
          <div className='transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center'>
            <p className='p-0 m-0 fs-7 text-black-50'>Dec 21</p>
            <p className='p-0 m-0'>30</p>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-fill ps-4'>
            <div>
              <p className='mb-1 f-5 fw-bold'>Monster Inc. Company</p>
              <p className='mb-0 text-black-50 fs-7'>Salary</p>
            </div>
            <span className='badge bg-success'>฿5,200.00</span>
          </div>
        </div>
        <button className='btn btn-link text-secondary p-0 border-0'>
          <i className='bi-x-circle' />
        </button>
      </li>
      <li className='list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-danger'>
        <div className='transaction-detail d-flex flex-fill me-4'>
          <div className='transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center'>
            <p className='p-0 m-0 fs-7 text-black-50'>Dec 20</p>
            <p className='p-0 m-0'>25</p>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-fill ps-4'>
            <div>
              <p className='mb-1 f-5 fw-bold'>BTS</p>
              <p className='mb-0 text-black-50 fs-7'>Transport</p>
            </div>
            <span className='badge bg-danger'>฿37.00</span>
          </div>
        </div>
        <button className='btn btn-link text-secondary p-0 border-0'>
          <i className='bi-x-circle' />
        </button>
      </li>
    </ul>
  );
}

export default TransactionContainer;
