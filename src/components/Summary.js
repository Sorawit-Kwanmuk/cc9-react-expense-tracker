import { formatThaiCurrency } from '../services/currencyService';

function Summary({ transactions }) {
  const result = transactions.reduce(
    (acc, item) => {
      if (item.category.type === 'Expense') {
        acc[1] = acc[1] + item.amount;
      } else {
        acc[0] = acc[0] + item.amount;
      }
      return acc;
    },
    [0, 0]
  );
  return (
    <div className='row mt-4'>
      <div className='col-sm-4'>
        <div className='bg-info rounded-2 p-3'>
          <p className='text-black-50'>Net Worth</p>
          <h5 className='text-white'>
            {formatThaiCurrency(result[0] - result[1])}
          </h5>
        </div>
      </div>
      <div className='col-sm-4'>
        <div className='bg-success rounded-2 p-3'>
          <p className='text-black-50'>Income</p>
          <h5 className='text-white'>{formatThaiCurrency(result[0])}</h5>
        </div>
      </div>
      <div className='col-sm-4'>
        <div className='bg-danger rounded-2 p-3'>
          <p className='text-black-50'>Expense</p>
          <h5 className='text-white'>{formatThaiCurrency(result[1])}</h5>
        </div>
      </div>
    </div>
  );
}
export default Summary;
