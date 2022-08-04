import React, {Component}  from 'react';

import {Table} from 'semantic-ui-react';


class RequestRow extends Component{

render (){
    const {Row , Cell} = Table

    return (
        <Row>
            <Cell>{this.props.id}</Cell>
            <Cell>{this.props.request.voterAdress}</Cell>
            <Cell>{this.props.request.county}</Cell>
            <Cell>{this.props.request.constituency}</Cell>
            <Cell>{this.props.request.ward}</Cell>
            <Cell>{this.props.request.pollingId}</Cell>
            <Cell>{this.props.request.pollingName}</Cell>
            <Cell>{this.props.request.cand1}</Cell>
            <Cell>{this.props.request.cand2}</Cell>
            <Cell>{this.props.request.cand3}</Cell>
            <Cell>{this.props.request.cand4}</Cell>
        </Row>);
}
}

export default RequestRow;