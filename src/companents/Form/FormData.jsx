import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const FormData = () => { 
    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={8}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Teacher Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default FormData
