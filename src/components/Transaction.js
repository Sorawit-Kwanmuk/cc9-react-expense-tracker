import TransactionCard from './TransactionCard';

function Transaction({ transactions }) {
  return (
    <ul className='list-group'>
      {transactions.map(item => (
        <TransactionCard key={item.id} transaction={item} />
      ))}
    </ul>
  );
}
export default Transaction;
