import { useState } from 'react';
import { EXPENSES, INCOMES } from '../mocks/data';

function EditTransactionForm({ setIsEditing, transaction, updateTransaction }) {
  const [type, setType] = useState(transaction.category.type);
  const [category, setCategory] = useState(transaction.category.id);
  const [payee, setPayee] = useState(transaction.payee);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date.toISOString().slice());
  const [comment, setComment] = useState(transaction.comment);

  const handleSubmitForm = e => {
    e.preventDefault();
    //insert code to validete
    const transactionToUpdate = { ...transaction };
    transactionToUpdate.payee = payee;
    transactionToUpdate.amount = +amount;
    transactionToUpdate.date = new Date(date);
    transactionToUpdate.comment = comment;
    if (type === 'Expense') {
      transactionToUpdate.category = EXPENSES.find(
        item => item.id === category
      );
    } else {
      transactionToUpdate.category = INCOMES.find(item => item.id === category);
    } //find ถ้าหาเจอ จะ return ค่าเป็น object ที่เจอมาทั้ง  ELEMENT
    updateTransaction(transaction.id, transactionToUpdate);
    setIsEditing(false);
  };
  const handleChangeType = e => {
    //insert code to validete
    setType(e.target.value);
    if (e.target.value === 'Expense') {
      setCategory(EXPENSES[0].id);
    } else {
      setCategory(INCOMES[0].id);
    }
  };

  const handleChangePayee = e => {
    setPayee(e.target.value);
  };

  const handleChangeAmount = e => {
    setAmount(e.target.value);
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };

  const categoryOptions =
    type === 'Income'
      ? INCOMES.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))
      : EXPENSES.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ));

  return (
    <form className='row g-3' onSubmit={handleSubmitForm}>
      <div className='col-12 d-flex justify-content-between'>
        <div>
          <input
            type='radio'
            className='btn-check'
            name='type'
            id={`cbx-expense-${transaction.id}`}
            value='Expense'
            defaultChecked={type === 'Expense'}
            onChange={handleChangeType}
          />
          <label
            className='btn btn-outline-danger rounded-0 rounded-start'
            htmlFor={`cbx-expense-${transaction.id}`}>
            Expense
          </label>
          <input
            type='radio'
            className='btn-check'
            name='type'
            id={`cbx-income-${transaction.id}`}
            value='Income'
            defaultChecked={type === 'Income'}
            onChange={handleChangeType}
          />
          <label
            className='btn btn-outline-success rounded-0 rounded-end'
            htmlFor={`cbx-income-${transaction.id}`}>
            Income
          </label>
        </div>
        <button
          type='button'
          className='btn-close btn-sm'
          onClick={() => {
            setIsEditing(false);
          }}></button>
      </div>
      <div className='col-sm-6'>
        <label className='form-label'>Payee</label>
        <input
          type='text'
          className={`form-control`}
          value={payee}
          onChange={handleChangePayee}
        />
        <div className='invalid-feedback'></div>
      </div>
      <div className='col-sm-6'>
        <label className='form-label'>Category</label>
        <select
          className='form-select'
          value={category}
          onChange={e => {
            setCategory(e.target.value);
          }}>
          {categoryOptions}
        </select>
      </div>
      <div className='col-sm-6'>
        <label className='form-label'>Amount</label>
        <input
          type='text'
          className={`form-control`}
          value={amount}
          onChange={handleChangeAmount}
        />
        <div className='invalid-feedback'></div>
      </div>
      <div className='col-sm-6'>
        <label className='form-label'>Date</label>
        <input
          type='date'
          className={`form-control`}
          value={date}
          onChange={handleChangeDate}
        />
        <div className='invalid-feedback'></div>
      </div>
      <div className='col-12'>
        <label className='form-label'>Comment</label>
        <input
          type='text'
          className='form-control'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <div className='col-12 mt-4 d-grid'>
        <button className='btn btn-primary'>Save</button>
      </div>
    </form>
  );
}

export default EditTransactionForm;
