import { v4 as uuidv4 } from 'uuid';

const EXPENSES = [
  { id: uuidv4(), name: 'Food', type: 'Expense' },
  { id: uuidv4(), name: 'Shopping', type: 'Expense' },
  { id: uuidv4(), name: 'Transport', type: 'Expense' },
  { id: uuidv4(), name: 'Utilities', type: 'Expense' },
];
const INCOMES = [
  { id: uuidv4(), name: 'Interest', type: 'Income' },
  { id: uuidv4(), name: 'Investment', type: 'Income' },
  { id: uuidv4(), name: 'Salary', type: 'Income' },
];

const INITIAL_TRANSACTION = [
  {
    id: uuidv4(),
    payee: '7-11',
    amount: 50,
    date: new Date('2021-06-12'),
    category: EXPENSES[0],
    comment: '',
  },
  {
    id: uuidv4(),
    payee: 'Tesco Lotus',
    amount: 299,
    date: new Date('2021-06-28'),
    category: EXPENSES[1],
    comment: '',
  },
  {
    id: uuidv4(),
    payee: 'True Corp.',
    amount: 20000,
    date: new Date('2021-06-30'),
    category: INCOMES[2],
    comment: '',
  },
];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export { EXPENSES, INCOMES, INITIAL_TRANSACTION, MONTHS };
