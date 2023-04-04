import {Button , Form} from "react-bootstrap"
import movieimg from "../assets/background-yellow.jpg"

const Search = () => {
  return (    
    <div>
        <h1 className="container">Sign in</h1>
        <div className="pt-2 d-flex">
            <div className="col-4 p-4 signinborder">
                <div>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>       
            </div>

            <div className="col-8 p-4">
                <div>
                   <img className="imgmovie" src= {movieimg} alt="" />
                </div>       
            </div>
        </div>
    </div>
  )
}

export default Search