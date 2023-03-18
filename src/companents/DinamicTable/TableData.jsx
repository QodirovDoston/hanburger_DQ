import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const TableData = () => {
    return (
        <div>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={7}>
                            <h1 style={{textAlign:'center' ,fontSize:'30px', marginBottom:'30px'}}>hello table page</h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default TableData