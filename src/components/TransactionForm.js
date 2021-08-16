import { useState } from 'react';
import { EXPENSES, INCOMES } from '../mocks/data';
import { v4 as uuidv4 } from 'uuid';
import { validatePayee, validateAmount, validateDate } from '../services/validateService';
import Select from './UI/Select';
import Col from './UI/Col.';
import Input from './UI/input';
function TransactionForm({ addTransaction, closeAddForm }) {
  const [type, setType] = useState('Expense');
  const [category, setCategory] = useState(EXPENSES[0].id);
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState({});

  const handleChangeType = e => {
    setType(e.target.value);
    if (e.target.value === 'Expense') {
      setCategory(EXPENSES[0].id);
    } else {
      setCategory(INCOMES[0].id);
    }
  };

  const handleChangePayee = e => {
    setError(curErr => ({ ...curErr, payee: validatePayee(e.target.value) }));
    // if (isEmpty(e.target.value)) {
    //   // #1
    //   // const newError = {...error};
    //   // newError.payee = 'Payee is required';
    //   // setError(newError);
    //   //ใช้ได้เหมือนกันแต่ยาวกว่า
    //   // #2
    //   setError(curErr => ({ ...curErr, payee: 'Payee is required' }));
    //   //อัพเดทค่าkey payee ด้านขวามาใส่ใน ...curErr แต่ตอนนี้ curErr ยังเป็นค่าว่าง จึงทำการเพิ่ม key: value payee: 'Payee is required' เข้าไป
    //   //clone payee ใส่ curErr
    // } else {
    //   setError(curErr => ({ ...curErr, payee: '' }));
    // }
    setPayee(e.target.value);
    //เมื่อเกิด event อัพเดทค่า setPayee ด้วยค่าvalue ของ ตัวที่เรียกใช้ handleChangePayee
  };

  const handleChangeAmount = e => {
    // if (isEmpty(e.target.value)) {
    //   //ถ้า isEmpty เป็น ''
    //   setError(curErr => ({ ...curErr, amount: 'Amount is required' }));
    // } else if (isNumeric) {
    //   // } else if (isNaN(e.target.value)) {
    //   setError(curErr => ({ ...curErr, amount: 'Amount must be numeric' }));
    // } else if (+e.target.value <= 0) {
    //   setError(curErr => ({
    //     ...curErr,
    //     amount: 'Amount must be greater than zero',
    //   }));
    // } else {
    //   setError(curErr => ({ ...curErr, amount: '' }));
    // }
    setError(curErr => ({ ...curErr, amount: validateAmount(e.target.value) }));
    setAmount(e.target.value);
  };

  const handleChangeDate = e => {
    // if (isEmpty(e.target.value)) {
    //   setError(curErr => ({
    //     ...curErr,
    //     date: 'Date is required or invalid format',
    //   }));
    // } else {
    //   setError(curErr => ({ ...curErr, date: '' }));
    // }
    setError(curErr => ({ ...curErr, date: validateDate(e.target.value) }));
    setDate(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const payeeError = validatePayee(payee);
    const amountError = validateAmount(amount);
    const dateError = validateDate(date);

    if (payeeError || amountError || dateError) {
      setError({ payee: payeeError, amount: amountError, date: dateError });
    } else {
      const newTransaction = {
        id: uuidv4(),
        payee: payee,
        amount: +amount,
        date: new Date(date),
        category:
          type === 'Expense'
            ? EXPENSES.find(item => item.id === category)
            : INCOMES.find(item => item.id === category),
        comment: comment,
      };
      addTransaction(newTransaction);
      setError({});
      setPayee('');
      setAmount('');
      setComment('');
      setType('Expense');
      setDate('');
      setCategory(EXPENSES[0].id);
    }
  };

  const categoryOptions =
    type === 'Expense'
      ? EXPENSES.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))
      : INCOMES.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ));

  return (
    <div className='border bg-white rounded-2 p-3'>
      <form className='row g-3' onSubmit={handleSubmitForm}>
        <div className='col-12 d-flex justify-content-between'>
          <div>
            <input
              type='radio'
              className='btn-check'
              name='type'
              id='cbx-expense'
              value='Expense'
              defaultChecked
              onChange={handleChangeType}
            />
            <label className='btn btn-outline-danger rounded-0 rounded-start' htmlFor='cbx-expense'>
              Expense
            </label>
            <input
              type='radio'
              className='btn-check'
              name='type'
              id='cbx-income'
              value='Income'
              onChange={handleChangeType}
            />
            <label className='btn btn-outline-success rounded-0 rounded-end' htmlFor='cbx-income'>
              Income
            </label>
          </div>
          <button type='button' className='btn-close btn-sm' onClick={closeAddForm}></button>
        </div>

        <Col sm={6}>
          <Input title='Payee' error={error.payee} value={payee} onChange={handleChangePayee} />
        </Col>

        <Col sm={6}>
          <Select title='Category' value={category} onChange={e => setCategory(e.target.value)}>
            {categoryOptions}
          </Select>
        </Col>
        {/* <div className='col-sm-6'>
          <label className='form-label'>Amount</label>
          <input
            type='text'
            className={`form-control${error.amount ? ' is-invalid' : ''}`}
            value={amount}
            onChange={handleChangeAmount}
          />
          <div className='invalid-feedback'>{error.amount}</div>
        </div> */}
        <Col sm={6}>
          <Input title='Amount' error={error.amount} value={amount} onChange={handleChangeAmount} />
        </Col>
        <div className='col-sm-6'>
          <label className='form-label'>Date</label>
          <input
            type='date'
            className={`form-control${error.date ? ' is-invalid' : ''}`}
            value={date}
            onChange={handleChangeDate}
          />
          <div className='invalid-feedback'>{error.date}</div>
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
    </div>
  );
}

export default TransactionForm;
