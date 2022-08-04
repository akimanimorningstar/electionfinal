import React , {Component} from 'react';
import { Form, Input,Button,Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from "../../lib/web3";
import contractDefinition from '../../../build/contracts/Tally.json';
import getContract from '../../lib/getContract';


class AddVoter extends Component{
state = {
verifier :  '',}


onSubmit = async ()=> {

  event.preventDefault();
    this.setState({loading: true, errorMessage:''});
    try
    {
      const contract = await getContract(web3, contractDefinition);
      const accounts = await web3.eth.getAccounts();
      await contract.methods.addOwners(this.state.verifier).
      send({ from : accounts[0]});
    }
    catch(err){
      this.setState({errorMessage : err.message});}
      this.setState({loading : false})
}
render(){
    return (
        <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             <Form.Field>
            <label>Verifier Address </label>
            <Input
              value ={this.state.verifier}
              onChange={event => this.setState({verifier: event.target.value })}
            />
             </Form.Field>
                <Message error header='Oops' content ={this.state.errorMessage}/>
                <Button primary loading={this.state.loading}>  add </Button> 
                </Form>
                </Layout>

    );
}
}

export default AddVoter;