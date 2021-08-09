function Summary() {
  return (
    <div className='row mt-4'>
      <div className='col-sm-4'>
        <div className='bg-info rounded-2 p-3'>
          <p className='text-black-50'>Net Worth</p>
          <h5 className='text-white'>฿1,000,000.00</h5>
        </div>
      </div>
      <div className='col-sm-4'>
        <div className='bg-success rounded-2 p-3'>
          <p className='text-black-50'>Income</p>
          <h5 className='text-white'>฿1,500,000.00</h5>
        </div>
      </div>
      <div className='col-sm-4'>
        <div className='bg-danger rounded-2 p-3'>
          <p className='text-black-50'>Expense</p>
          <h5 className='text-white'>฿500,000.00</h5>
        </div>
      </div>
    </div>
  );
}
export default Summary;
