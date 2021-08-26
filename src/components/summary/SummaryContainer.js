import SummaryCard from './SummaryCard';

function SummaryContainer() {
  return (
    <div className='row g-3'>
      <SummaryCard bg='info' title='Net worth' value='1000000' />
      <SummaryCard bg='success' title='Income' value='1500000' />
      <SummaryCard bg='warning' title='Expenses' value='500000' />
    </div>
  );
}

export default SummaryContainer;
