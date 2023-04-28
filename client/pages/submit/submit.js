import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import web3 from "../../lib/web3";
import contractDefinition from '../../../build/contracts/Tally.json';
import getContract from '../../lib/getContract';


class SubmitIndex extends Component{


    state = {
    state : '',
    county : '',
    city : '',
    pollingId : '',
    pollingName : '',
    cand1 : '',
    cand2 : '',
    }

    onSubmit = async ()=> {

        event.preventDefault();
          this.setState({loading: true, errorMessage:''});
          const {county, constituency, ward, pollingId, pollingName, cand1, cand2 } = this.state;
          try
          {
            const contract = await getContract(web3, contractDefinition);
            const accounts = await web3.eth.getAccounts();
            await contract.methods.createRequest(county , constituency,
                ward , pollingName,
                pollingId, cand1,
                cand2).
            send({ from : accounts[0]});
          }
          catch(err){
            this.setState({errorMessage : err.message});}
            this.setState({loading : false})}    
render (){

    return(
        <Layout>
            <h3>Submit Your Polling Station results here </h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
            <label> State  </label>
            <Input
              value ={this.state.state}
              onChange={event => this.setState({state: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label>County</label>
            <Input
              value ={this.state.county}
              onChange={event => this.setState({county: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label>City </label>
            <Input
              value ={this.state.city}
              onChange={event => this.setState({city: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label>Polling ID</label>
            <Input
              value ={this.state.pollingId}
              onChange={event => this.setState({pollingId: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label>Polling Name</label>
            <Input
              value ={this.state.pollingName}
              onChange={event => this.setState({pollingName: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label> Joe Biden  </label>
            <Input
              value ={this.state.cand1}
              onChange={event => this.setState({cand1: event.target.value })}
            />
             </Form.Field>
             <Form.Field>
            <label>Donald J. Trump</label>
            <Input
              value ={this.state.cand2}
              onChange={event => this.setState({cand2: event.target.value })}
            />
             </Form.Field>
                <Message error header='Oops' content ={this.state.errorMessage}/>
                <Button primary loading={this.state.loading}>  add </Button> 
            </Form>
        </Layout>);
}

}

export default SubmitIndex;