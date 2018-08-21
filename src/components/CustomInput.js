import React from 'react';
import {Input} from 'reactstrap';

import { connect}  from 'react-redux';
import * as actions from '../redux/actions';

const CustomInput = props => {
	let isValid = props.title.length ? true: false;

	return(
		<Input type="text"
		placeholder= "type me ..."
		value= { props.title}
		onChange={event => props.updateTitle(event.target.value)}
		valid= {isValid}
		invalid={!isValid}
		/>
		)
}
const mapStateToProps = ({todo}) => {
	const {title} = todo;
	return {title}
}

export default connect(mapStateToProps,actions)(CustomInput);

	
