import React, {Component} from "react";
import { Button, Container, Grid , Item, Image , Card} from "semantic-ui-react";
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
    cand3Count: resultsCount[2],
    cand4Count: resultsCount[3],
    sum : resultsCount[4]

};}

renderResults(){
    const {

        cand1Count,
        cand2Count,
        cand3Count,
        cand4Count,
        sum,
    } = this.props 

const  items = [
    {
        header : cand1Count,
        meta : 'William Samoei Ruto',
        fluid : true
    },
    {
        header : cand2Count,
        meta : 'Raila Amollo Odinga',
        fluid : true
    },
    {
        header : cand3Count,
        meta : 'Proffessor George Wajacoyah',
        description : 'the manager creates projects and creates requests',
        fluid : true
    },
    {
        header : cand4Count,
        meta : 'David Waihiga Mwaure',
        fluid : true
    },
    {
        header : sum,
        meta : 'Total Number of Votes Counted  out of 22 miilion',
        fluid : true
    },

];
return <Card.Group items={items}/>
}

render(){
    return (
        <Layout>
            <div><h2>Check the Results in the Blockchain <Link route='https://alfajores-blockscout.celo-testnet.org/address/0x9cCA1206190Bf931B4C333f29218dc2B1132A50e/transactions'>
                <a>
                0x9cCA1206190Bf931B4C333f29218dc2B1132A50e
                </a>
            </Link></h2>
            </div>

            <div>
                <Container>
                <h3>Welcome to kenya  Election Result 2022 </h3>
                {this.renderResults()}
                </Container>
            </div> 
        </Layout>
    );
};
}

export default ElectionIndex;