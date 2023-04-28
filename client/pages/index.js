import React, {Component} from "react";
import {  Container, Card} from "semantic-ui-react";
import Layout from "../components/Layout";
import web3 from "../lib/web3";
import contractDefinition from '../../build/contracts/Tally.json';
import getContract from '../lib/getContract';
import {Link} from '../routes';



class ElectionIndex extends Component{

static async getInitialProps(){

const contract = await getContract(web3 , contractDefinition);
const resultsCount = await contract.methods.getFinalResults().call();
console.log(resultsCount); 
return {
    cand1Count: resultsCount[0],
    cand2Count: resultsCount[1],
    sum : resultsCount[4]

};}

renderResults(){
    const {

        cand1Count,
        cand2Count,
        sum,
    } = this.props 

const  items = [
    {
        header : cand1Count,
        meta : 'Joe Biden',
        fluid : true
    },
    {
        header : cand2Count,
        meta : ' Donald J. Trump',
        fluid : true
    },
    {
        header : sum,
        meta : 'Total Number of Votes Counted  out of 355 miilion',
        fluid : true
    },

];
return <Card.Group items={items}/>
}

render(){
    return (
        <Layout>
            <div><h2>Check the Results in the Blockchain <Link route='https://explorer.celo.org/alfajores/address/0xd9a59477C7AD8D55A8fCb58a6225DbBcBBFE4D4F/transactions#address-tabs'>
                <a>
                0xd9a59477C7AD8D55A8fCb58a6225DbBcBBFE4D4F
                </a>
            </Link></h2>
            </div>

            <div>
                <Container>
                <h3>Welcome to 2024 US Election Results. </h3>
                {this.renderResults()}
                </Container>
            </div> 
        </Layout>
    );
};
}

export default ElectionIndex;