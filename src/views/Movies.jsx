import { useEffect, useState } from "react"
import http from "../lib/http"
import { Button , Card } from "react-bootstrap"


const Movies = () => {
const [titles, setTitles] = useState([]) 

useEffect (() => {
  async function getTitles() {
    const res = await http.get("/titles")
    setTitles(res.data.results)
    console.log(res.data.results)
  }
  getTitles ()  
},[])

return (
    <div>
      {titles.map ((title,index) =>{
        return(
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            {/* {title.primaryImage.url} */}
            <Card.Body>
              <Card.Title >
                {title.id }
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      })}

    </div>
  )
}

export default Movies