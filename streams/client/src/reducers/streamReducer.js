import {
	CREATE_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
} from "../actions/types";
import _ from "lodash";

export const streamReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case EDIT_STREAM:
			// [] allows to get the value inside instead of using "action.payload.id" as a litteral key. Also this just makes a new object with the same key value pairs as state and then adds on a new key value pair
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
