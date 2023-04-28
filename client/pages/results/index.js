import React, {Component}  from 'react';
import Layout from '../../components/Layout';
import {Button , Table} from 'semantic-ui-react';
import web3 from "../../lib/web3";
import contractDefinition from '../../../build/contracts/Tally.json';
import getContract from '../../lib/getContract';
import RequestRow from '../../components/RequestRow';


class ResultsIndex extends Component{

static async getInitialProps(){
const contract = await getContract(web3, contractDefinition);
const requestCount = await contract.methods.getRequestCount().call();
const requests = await Promise.all(
    Array(parseInt(requestCount)).fill().map((element , index)=> {
        return contract.methods.verifiersList(index).call();}));
console.log(requests);

return {requests, requestCount}
}

renderRequests(){ 
    return this.props.requests.map((request, index)=>
        {
            return <RequestRow
            key = {index}
            id = {index}
            request ={request}
            />
        });

}

render(){ 

    const {Header , Row , HeaderCell ,Body , Cell} = Table;
    return(
        <Layout>
             <div style={{height : '12'}}>{this.props.requestCount} Polling stations results released out of 46,229</div>
            <h3>Total Number of submitted votes </h3>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>Verifier List</HeaderCell>
                        <HeaderCell>Voter Address </HeaderCell>
                        <HeaderCell>State </HeaderCell>
                        <HeaderCell>County</HeaderCell>
                        <HeaderCell>City </HeaderCell>
                        <HeaderCell>Polling Station Name</HeaderCell>
                        <HeaderCell>Polling ID</HeaderCell>
                        <HeaderCell> Joe Biden </HeaderCell>
                        <HeaderCell> Donald J. Trump </HeaderCell>
                    </Row>
                </Header>
            <Body>
           {this.renderRequests()}
            </Body>
            </Table>
        </Layout>)
}

}

export default ResultsIndex;
