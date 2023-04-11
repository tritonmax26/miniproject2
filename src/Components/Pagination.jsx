import { useEffect, useState } from "react"
import http from "../lib/http"
import { Pagination } from 'react-bootstrap';


const Pagination2 = ({ currentPage, onPageChange, totalPages }) => {
  const [pageNumbers, setPageNumbers] = useState([]) 

  useEffect(() => {
    let numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [totalPages]);

  return (
    <div>
      <Pagination>
        <Pagination.First disabled={currentPage === 1} onClick={() => onPageChange(1)} />
        <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
        {pageNumbers.map(number => (
          <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
        <Pagination.Last disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)} />
      </Pagination>
    </div>
  )
}

export default Pagination2;
