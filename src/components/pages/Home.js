import FilterContainer from '../filter/FilterContainer';
import PaginationContainer from '../pagination/PaginationContainer';
import SummaryContainer from '../summary/SummaryContainer';
import TransactionContainer from '../transaction/TransactionContainer';

function Home() {
  return (
    <>
      <SummaryContainer />
      <FilterContainer />
      <PaginationContainer />
      <TransactionContainer />
    </>
  );
}

export default Home;
