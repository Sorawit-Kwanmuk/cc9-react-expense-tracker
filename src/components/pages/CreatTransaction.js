import axios from 'axios';
import { useEffect, useState } from 'react';
import Col from '../ui/Col';
import Form from '../ui/Form';
import Option from '../ui/Option';
import RadioButton from '../ui/RadioButton';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';
import TextInput from '../ui/TextInput';

function CreatTransaction() {
  const [input, setInput] = useState({
    type: 'EXPENSE',
    payee: '',
    categoryId: '',
    amount: '',
    date: '',
    comment: '',
  });

  const [optionExpenses, setOptionExpenses] = useState([]);
  const [optionIncomes, setOptionIncomes] = useState([]);

  const { type, payee, categoryId, amount, date, comment } = input;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/categories');
        setOptionExpenses(
          response.data.categories.filter(item => item.type === 'EXPENSE')
        );
        setOptionIncomes(response.data.categories.filter(item => item.type === 'INCOME'));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const shownOption = type === 'EXPENSE' ? [...optionExpenses] : [...optionIncomes];

  return (
    <div className='border bg-white rounded-2 p-3'>
      <Form className='row g-3'>
        <Col sm={12}>
          <RadioButton
            id='cbx-expense'
            name='type'
            color='danger'
            radius='start'
            value='EXPENSE'
            onChange={handleChangeInput}
            defaultChecked={type === 'EXPENSE'}>
            Expense
          </RadioButton>{' '}
          <RadioButton
            id='cbx-income'
            name='type'
            color='success'
            radius='end'
            value='INCOME'
            onChange={handleChangeInput}
            defaultChecked={type === 'INCOME'}>
            Income
          </RadioButton>
          {/* <input type='radio' className='btn-check' id='cbx-expense' name='type' />
          <label
            className='btn btn-outline-danger rounded-0 rounded-start'
            htmlFor='cbx-expense'>
            Expense
          </label>
          <input type='radio' className='btn-check' id='cbx-income' name='type' />
          <label
            className='btn btn-outline-success rounded-0 rounded-end'
            htmlFor='cbx-income'>
            Income
          </label> */}
        </Col>
        <Col sm={6}>
          <TextInput
            label='Payee'
            value={payee}
            onChange={handleChangeInput}
            name='payee'
          />
        </Col>
        <Col sm={6}>
          <Select label='Category'>
            {shownOption.map(item => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
            {/* <Option value='Food'>Food</Option>
            <Option value='Shopping'>Shopping</Option>
            <Option value='Transport'>Transport</Option> */}
          </Select>
        </Col>
        <Col sm={6}>
          <TextInput
            label='Amount'
            value={amount}
            onChange={handleChangeInput}
            name='amount'
          />
        </Col>
        <Col sm={6}>
          <TextInput
            label='Date'
            type='date'
            value={date}
            onChange={handleChangeInput}
            name='date'
          />
        </Col>
        <Col sm={12}>
          <TextArea
            label='Comment'
            value={comment}
            onChange={handleChangeInput}
            name='comment'
          />
        </Col>
        <Col sm={12}>
          <div className='d-grid mt-3'>
            <button className='btn btn-primary'>Save</button>
          </div>
        </Col>
      </Form>
    </div>
  );
}

export default CreatTransaction;
