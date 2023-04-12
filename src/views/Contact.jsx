import { Form , Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className='formBackground'>
      <section className='formContainer'>
        
        <div className="formwidth">
        
          <Form className='p-4'>
          <h1>For more info, Please leave your contact details</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>
                
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="fullname" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="contactnumber" placeholder="Contact Number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder="Enter Full Address" />
            </Form.Group>


            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div> 

      </section>
      
    </div>
    
  )
}

export default Contact