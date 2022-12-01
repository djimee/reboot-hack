import React from 'react'
import { Circle, UserDetailsContainer, Container, RightContainer } from './style';
import chart from '../../chart.png'
import Table from 'react-bootstrap/Table';

const imageStyle = { width: '500px', height: '350px' }

function index() {
    return (
        <div>
            <Container>
                <UserDetailsContainer >
                    <Circle />
                    <h2>LoTR Limited</h2>
                    <p>SE12 3EJ</p>
                    <p>Catering</p>
                    <p>LOTR@lloydsbanking.com</p>
                </UserDetailsContainer >
                <RightContainer>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SME Name</th>
                                <th>Postcode</th>
                                <th>Point of Contact</th>
                                <th>Industry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LBG Ltd</td>
                                <td>SE32 2EJ</td>
                                <td>otto@yahoo.com</td>
                                <td>Catering</td>
                            </tr>
                            <tr>
                                <td>ASD Ltd</td>
                                <td>SE32 2EJ</td>
                                <td>asd@yahoo.com</td>
                                <td>Retail</td>
                            </tr>
                            <tr>
                                <td>Carpenters R Us</td>
                                <td>SE32 2EJ</td>
                                <td>otto@yahoo.com</td>
                                <td>Carpentry</td>
                            </tr>
                            <tr>
                                <td>Java People</td>
                                <td>J3 2EJ</td>
                                <td>java@yahoo.com</td>
                                <td>Textiles</td>
                            </tr>
                        </tbody>
                    </Table>
                    <img style={imageStyle} src={chart} alt="Logo" />
                </RightContainer>
            </Container>
        </div>
    )
}

export default index