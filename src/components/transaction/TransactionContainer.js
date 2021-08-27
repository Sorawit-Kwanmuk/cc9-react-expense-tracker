import TransactionCard from './TransactionCard';

function TransactionContainer({ transactions }) {
  // state = [
  //   {
  //     id: 'f912b5ca-4a36-42be-983e-c06df51b5792',
  //     payee: '3BB',
  //     amount: 631.3,
  //     date: '2021-08-25T00:00:00.000Z',
  //     category: {
  //       id: '8d7eff34-9e78-4a64-9916-d1c3fcb4698a',
  //       name: 'Utilities',
  //       type: 'EXPENSE',
  //     },
  //   },
  // ];
  return (
    <ul className='list-group'>
      {transactions.map(item => (
        <TransactionCard key={item.id} transaction={item} />
      ))}
    </ul>
  );
}

export default TransactionContainer;
