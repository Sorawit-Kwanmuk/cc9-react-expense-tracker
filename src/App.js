import './App.css';
import { INITIAL_TRANSACTIONS } from './mocks/data';
import { useState } from 'react';
import Pagination from './components/Pagination';
import Searchbar from './components/Searchbar';
import Summary from './components/Summary';
import Transaction from './components/Transaction';
import TransactionForm from './components/TransactionForm';
import AddTransactionButton from './components/AddTransactionButton';

function App() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [isAdding, setIsAdding] = useState(false);
  const [filter, setFilter] = useState({
    text: '',
    month: '',
    year: '',
  });

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

  const updateTransaction = (id, transaction) => {
    const idx = transactions.findIndex(item => item.id === id);
    //เช็คไปทีละ element ถ้ามี id ที่ตรงกับที่หา จะได้เป็น true แล้วคืนค่าเป็น index แต่ถ้า element ที่นั้นไม่มี id ที่หา
    //findIndex จะ return มาเป็น false แล้วไปทำ element ถัดไป ดังนั้น คำแหน่งที่หาเจอจะreturnค่าเป็นindex ซึ่งไม่มีทางน้อยกว่า 0
    //ถ้าหาไม่เจอเลยจะ return -1 จึงสามารถใช้ if (idx !== -1)

    if (idx !== -1) {
      //ถ้าหา index ของ id ที่เรารับเข้ามาเจอ ค่าที่ได้จะมากกว่า 0 ดังนั้น ถ้ามันหา id เจอมันจะเข้าเงื่อนไข if
      const cloneTransactions = [...transactions];
      cloneTransactions[idx] = transaction;
      setTransactions(cloneTransactions);
    }
  };

  const deleteTransaction = id => {
    const idx = transactions.findIndex(item => item.id === id);
    if (idx !== -1) {
      const cloneTransactions = [...transactions];
      cloneTransactions.splice(idx, 1);
      setTransactions(cloneTransactions);
    }
  };

  const openAddForm = () => {
    setIsAdding(true);
  };
  const closeAddForm = () => {
    setIsAdding(false);
  };

  const filteredTransactions = transactions.filter(
    item =>
      item.payee.toLowerCase().includes(filter.text.toLowerCase()) ||
      //search payee ถ้าหาเจอ จะได้ค่าเป็น true แล้งจะส่งค่าelementนั้น ไปเก็บใน result array [ele1, ele2, ele3]
      //item.payee.toLowerCase().includes(ค่าที่ต้องการจะนำไปเทียบกับ payee เช่น มี r ไหม ถ้ามีจะส่งค่าเป็น true)
      // (filter.text.toLowerCase()) คือค่าที่พิมพ์ใส่เข้าไปใน input search
      //EX item.payee.include('tes') แล้วใน payee มีค่า 'tesco lotus' ซึ่งมี tes อยู่ จะได้ค่าเป็น true แล้วจะนำค่าที่เป็นtrue ไปเก็บใน result array
      //resule = ['tesco lotus']  ฮ๋อ filter ใน include ไม่ใช่ ฟังก์ชั่นแต่เป็นตัวแปรใน state งงตั้งนาน
      item.category.name.toLowerCase().includes(filter.text.toLowerCase())
    // item.date.getMonth()===5 ค่าเดือนที่เรากำหนด value ให้เป็นตัวเลข
    // item.date.getFullYear()===2021
  );

  return (
    <div className='container'>
      <div className='content'>
        {isAdding ? (
          <TransactionForm
            addTransaction={addTransaction}
            closeAddForm={closeAddForm}
          />
        ) : (
          <AddTransactionButton openAddForm={openAddForm} />
        )}
        <Summary transactions={transactions} />
        <Searchbar filter={filter} setFilter={setFilter} />
        <Pagination />
        <Transaction
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
          updateTransaction={updateTransaction}
        />
      </div>
    </div>
  );
}

export default App;
