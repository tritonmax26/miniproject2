import { useEffect, useState } from "react"
import http from "../lib/http"
import { Pagination } from 'react-bootstrap';


const Pagination2 = () => {
  const [pages, setPages] = useState([]) 

useEffect (() => {
  async function getPages() {
    const res = await http.get("/titles?page=")
    setPages(res.data)
    // console.log(res.data)
    
  }
  getPages ()
  
  return  
},[])



let active = 2;
let items = [pages.next];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <div>
      <section>
        <Pagination>
               hello {items}
        </Pagination>   
      </section>      
    </div>
  )
}

export default Pagination2

      {/* {console.log(pages.next)} */}
      {/* {pages.map ((items,index) =>{
        return(
          <Pagination key={index}>
            {items.next}
          </Pagination>   
        )
      })} */}

