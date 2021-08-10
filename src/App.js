import './App.css';
import { INITIAL_TRANSACTION } from './mocks/data';
import { useState } from 'react';
import Pagination from './components/Pagination';
import Searchbar from './components/Searchbar';
import Summary from './components/Summary';
import Transaction from './components/Transaction';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTION);

  const addTransaction = newTransaction => {
    // #1
    setTransactions([newTransaction, ...transactions]);
    //setTransactions([new Object], [old Object 1] , [old Object 2], [old Object 3]]);
    //เอาค่า newTransaction มาต่อด้านหน้า ...transactions คือการ spread  มันออกมา และเพิ่มค่าใหม่ไปด้านหน้า แล้วรวบเอ็น object อีกรอบ
    // #2 long
    // const cloneTransactions = [...transactions];
    // cloneTransactions.unshift(newTransaction);
    // setTransactions(cloneTransactions);
    //newTransaction คือค่าใหม่ที่เราจะรับเข้ามา
  };

  return (
    <div className='container'>
      <div className='content'>
        <TransactionForm addTransaction={addTransaction} />
        <Summary />
        <Searchbar />
        <Pagination />
        <Transaction transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
