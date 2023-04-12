import { useEffect, useState } from "react"
import http from "../lib/http"
import { Button , Card, Modal } from "react-bootstrap"
import MoviePagination from "../components/Pagination"
import React from 'react';


const Movies = () => {
  const [titles, setTitles] = useState([]) 
  const [year, setYear] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

useEffect (() => {
  async function getTitles() {
    const res = await http.get("/titles")
    setTitles(res.data.results)
    console.log(res.data.results)
    
  }
  getTitles ()
  return  
},[])

return (
  
    <div className="backgroundForMovie">
          <h1 className="allCenterfont pt-4">Old but Gold...</h1>
          <section className="cardscontainer" >        
            {titles.map ((title,index, index1, index2, index3, index4) =>{
              return(
                <Card className="p-2" key={index} style={{ margin: '20px', width: '20rem'}}>
                  <div className="container">
                  <Card.Img src={title.primaryImage?.url} />
                  {/* {title.primaryImage?.url} */}
                  <Card.Body>
                  <div className="">
                    <Card.Title >
                      {title.id}                
                    </Card.Title>
                    <Card.Text>
                      {title.primaryImage?.caption.plainText}
                    </Card.Text>
                    
                    <Button variant="dark" onClick={handleShow}>
                      More
                    </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title key={index1}>
                          <h3>PLease, Sign in to view more</h3> 
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                          <p>Release date:</p>
                          <p key={index2}>Year: {title.releaseDate?.year}</p>
                          <p key={index3}>Month: {title.releaseDate?.month}</p>
                          <p key={index4}>Day: {title.releaseDate?.day}</p>
                        </Modal.Body>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>                   
                      </Modal>                
                  </div>
                  </Card.Body>
                  </div>
                </Card>             
              )
            })}
          </section>
          <div className="allCenterfont">
            {/* <MoviePagination>

            </MoviePagination> */}
          </div>
      </div>  
    
    
  )
}

export default Movies