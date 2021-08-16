function Pagination({ pagination: { perPage, currentPage }, setPagination, numPage }) {
  // const genArray = numPage => {
  //   const result = [];
  //   for (let i = 1; i <= numPage; i++) {
  //     result.push(i);
  //   }
  //   return result;
  // };
  const handleClickPage = (e, newPage) => {
    e.preventDefault();
    setPagination(cur => ({ ...cur, currentPage: newPage }));
  };

  const handleClickPrevious = e => {
    e.preventDefault();
    if (currentPage !== 1) {
      //ใส่เมื่อไม่ได้ใช้ bootstrap จึงไม่มี disabled
      setPagination(cur => ({ ...cur, currentPage: cur.currentPage - 1 }));
    }
  };

  const handleClickNext = e => {
    e.preventDefault();
    if (currentPage !== numPage) {
      setPagination(cur => ({ ...cur, currentPage: cur.currentPage + 1 }));
    }
  };

  return (
    <div className='mt-4 d-flex justify-content-between'>
      <div className='row'>
        <div className='col-12'>
          <select
            type='text'
            className='form-select form-select-sm'
            value={perPage}
            onChange={e =>
              setPagination(cur => ({
                ...cur,
                perPage: +e.target.value,
                currentPage: 1,
              }))
            }>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
      </div>
      <nav>
        <ul className='pagination pagination-sm'>
          <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
            <a href='/' className='page-link' onClick={handleClickPrevious}>
              <span>&laquo;</span>
            </a>
          </li>
          {/* {genArray(numPage).map(item => (
            <li key={item}>
              <a href='/' className='page-link'>
                <span>{item}</span>
              </a>
            </li>
          ))} */}
          {Array.from(new Array(numPage).keys()).map(item => (
            <li key={item} className={`page-item${item + 1 === currentPage ? ' active' : ''}`}>
              <a href='/' className='page-link' onClick={e => handleClickPage(e, item + 1)}>
                <span>{item + 1}</span>
              </a>
            </li>
          ))}
          <li className={`page-item${currentPage === numPage ? ' disabled' : ''}`}>
            <a href='/' className='page-link' onClick={handleClickNext}>
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
