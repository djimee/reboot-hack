import React from 'react'
import { Table } from 'react-bootstrap'
import TableComponent from '../components/TableComponent.js'
import { TablesContainer } from '../components/TablesContainer/style'
import map from '../map.png'
import { Container } from './style'

const imageStyle = { width: '700px', height: '500px' }

function Dashboard() {
    return (
        <div>
            <Container>
                <TablesContainer>
                    <h2>Relevant SME's</h2>
                    <TableComponent />
                    <h2>Existing Networks</h2>
                    <TableComponent />
                </TablesContainer>
                <img style={imageStyle} src={map} alt="Logo" />;
            </Container>
        </div>
    )
}

export default Dashboard