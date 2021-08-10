import { formatThaiCurrency } from '../services/currencyService';
import { formatShotMonthShortYear } from '../services/dateService';

function TransactionCard({ transaction: { date, category, payee, amount } }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${
        category.type === 'Income' ? 'success' : 'danger'
      }`}>
      <div className='transaction-detail d-flex flex-fill me-4'>
        <div className='transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center'>
          <p className='p-0 m-0 fs-7 text-black-50'>
            {/* {transaction.date.toString().slice(4, 7)}{' '}
            {`${transaction.date.getFullYear()}`.slice(2)} */}
            {formatShotMonthShortYear(date)}
          </p>
          <p className='p-0 m-0'>{date.getDate()}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center flex-fill ps-4'>
          <div>
            <p className='mb-1 f-5 fw-bold'>{payee}</p>
            <p className='mb-0 text-black-50 fs-7'>{category.name}</p>
          </div>
          {/* <span className='badge bg-danger'>{new Intl.NumberFormat([])}</span>
          //ใช้ค่า default ของเครื่อง ตรวสอบได้โดย log(navigator.language)
          <span className='badge bg-danger'>
            {new Intl.NumberFormat(undefined)}
            //ใช้ค่า default ของเครื่อง ตรวสอบได้โดย log(navigator.language)
          </span> */}
          <span
            className={`badge bg-${
              category.type === 'Income' ? 'success' : 'danger'
            }`}>
            {/* {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'THB',
              // currencyDisplay: 'symbol',//ค่า default
              // currencyDisplay: 'name',//ชื่อเต็มค่าเงินอยู่ด้านหลัง
              // currencyDisplay: 'code,//ชื่อเต็มค่าเงินอยู่ด้านหลัง
              currencyDisplay: 'narrowSymbol', //ชื่สัญลักษณ์ด้านหน้า
            }).format(amount)} */}
            {formatThaiCurrency(amount)}
          </span>
        </div>
      </div>
      <button className='btn btn-link text-secondary p-0 border-0'>
        <i className='bi-x-circle' />
      </button>
    </li>
  );
}
export default TransactionCard;
