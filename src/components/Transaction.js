import TransactionCart from './TransactionCart';

function Transaction({ transactions, deleteTransaction, updateTransaction }) {
  return (
    <ul className='list-group'>
      {transactions.map(item => (
        <TransactionCart
          key={item.id}
          transaction={item}
          deleteTransaction={deleteTransaction}
          updateTransaction={updateTransaction}
        />
      ))}
    </ul>
  );
}
export default Transaction;
