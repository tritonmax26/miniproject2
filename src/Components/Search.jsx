import {Button , Form} from "react-bootstrap"
import movieimg from "../assets/background-yellow.jpg"

const Search = () => {
  return (    
    <div>
        <h1 className="container">Sign in</h1>
        <div>
            <div className="pt-2 pb-2 d-flex">
            <img className="imgmovie" src= {movieimg} alt="" />
                <div className="col-4 p-4 signinborder">
                    <div className="pt-4">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h3>Email address</h3>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                            <h3>Password</h3>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>       
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Search