import Table from 'react-bootstrap/Table';

const tableData = [{
    name: "LOTR Ltd",
    postcode: "SE34 1SJ",
    contact: "asd@yahoo.com",
    industry: "catering"

}]

function TableComponent() {
    return (
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
        </Table >
    );
}

export default TableComponent;