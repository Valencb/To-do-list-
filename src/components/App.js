import React, { Component } from 'react';
import CustomInput from './CustomInput'
import { Card, CardHeader, Row, Col } from 'reactstrap'


class App extends Component {
  render() {
    return (
    	<div className="bg-secondary">
    		<Row>
      			<Col sm="7">
    				<Card className="d-flex justify-content-center" body inverse color="primary">
        				<CardHeader> To do list </CardHeader>
        				<hr/>
      					<CustomInput/>
        			</Card>
     			</Col>
     		</Row>
      	</div>
    );
  }
}

export default App;
