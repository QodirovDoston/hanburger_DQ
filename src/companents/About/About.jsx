import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={8}>
                        <h2 style={{textAlign:'center', marginBottom:'25px'}}>Hello about Me <br>
                        </br>
                        </h2>
                        <p style={{fontSize:'20px', textAlign:'center'}}>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate minima aliquam id fuga ipsum aut dolorem ipsam voluptatem cum excepturi odio ad hic in a sit quaerat fugiat laudantium quisquam, deleniti magni quos inventore enim nemo! Non cupiditate iusto, at voluptates nulla a molestiae assumenda facere voluptatibus illo dolores in perspiciatis? Animi unde ullam nostrum mollitia aliquam laborum eligendi quis? Natus explicabo, eos repellat aut quisquam consectetur debitis odio laudantium quidem quos tempora est ipsa molestias quae eligendi corporis excepturi nobis aspernatur inventore quibusdam dolorem laborum. At ipsum architecto unde minus earum praesentium nulla ipsam eligendi voluptatum. Omnis, eos.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About