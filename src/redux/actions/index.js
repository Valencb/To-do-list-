import {UPDATE_TITLE} from './actionType';

export const updateTitle = title =>{
	return {
		type: UPDATE_TITLE,
		payload: title
	}
}
