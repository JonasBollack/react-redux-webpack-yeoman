/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import {
	combineReducers
} from 'redux';
import todoApp from './todoReducer.js';
/* Populated by react-webpack-redux:reducer */


let list = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [createItem(action.text), ...state]

		default:
			return state
	}
}
console.log(todoApp);
const reducers = {
	list,
	todoApp
};
module.exports = combineReducers(reducers);