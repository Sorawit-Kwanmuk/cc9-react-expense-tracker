//12 MONTHS

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function TransactionCard({ transaction }) {
  console.log(transaction.date);
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-danger'>
      <div className='transaction-detail d-flex flex-fill me-4'>
        <div className='transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center'>
          <p className='p-0 m-0 fs-7 text-black-50'>Jan 21</p>
          <p className='p-0 m-0'>
            {/* {transaction.date.toString().slice(4, 7)}{' '}
            {`${transaction.date.getFullYear()}`.slice(2)} */}
            {MONTHS[transaction.date.getMonth()]}
            {`${transaction.date.getFullYear()}`.slice(2)}
          </p>
        </div>
        <div className='d-flex justify-content-between align-items-center flex-fill ps-4'>
          <div>
            <p className='mb-1 f-5 fw-bold'>{transaction.payee}</p>
            <p className='mb-0 text-black-50 fs-7'>Food</p>
          </div>
          <span className='badge bg-danger'>{transaction.category.name}</span>
        </div>
      </div>
      <button className='btn btn-link text-secondary p-0 border-0'>
        <i className='bi-x-circle' />
      </button>
    </li>
  );
}
export default TransactionCard;
