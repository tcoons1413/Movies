import { Pagination } from '@mantine/core';


function Paginations({numOfPages}) {
  return <div className='d-flex justify-content-center py-5'><Pagination total={numOfPages > 100 ? 100 : numOfPages} /></div>;
}

export default Paginations