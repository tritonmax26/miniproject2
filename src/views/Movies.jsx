import { useEffect, useState } from "react"
import http from "../lib/http"
import { Button , Card } from "react-bootstrap"
import Pagination2 from "../components/Pagination"


const Movies = () => {
  const [titles, setTitles] = useState([]) 
  const [year, setYear] = useState([]) 
  

useEffect (() => {
  async function getTitles() {
    const res = await http.get("/titles")
    setTitles(res.data.results)
    // console.log(res.data.results)
    
  }
  getTitles ()
  return  
},[])

return (
  
    <div>
      <section className="cardscontainer">
        {titles.map ((title,index) =>{
          return(
            <Card className="p-2" key={index} style={{ margin: '20px', width: '20rem'}}>
              <div className="container">
              <Card.Img src={title.primaryImage?.url} />
              {/* {title.primaryImage?.url} */}
              <Card.Body>
              <div className="">
                <Card.Title >
                  {/* {title.id}                 */}
                </Card.Title>
                <Card.Text>
                  {title.primaryImage?.caption.plainText}
                </Card.Text>
                <Button variant="dark">
                  More
                </Button>                
              </div>
              </Card.Body>
              </div>
            </Card>             
          )
        })}
      </section>
      <div>
        <Pagination2>

        </Pagination2>
      </div>  
    </div>
    
  )
}

export default Movies