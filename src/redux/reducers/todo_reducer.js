import {UPDATE_TITLE} from '../actions/actionType';


const INITIAL_STATE ={
	title: '',
	list: []
}

export default (state = INITIAL_STATE, action) =>{
	switch (action.type) {
		case UPDATE_TITLE:
			return {...state, title: action.payload}
		default:
			return state
	}
}