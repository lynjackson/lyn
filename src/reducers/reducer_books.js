export default function(state = [], action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
			break;
		default:
			return state;
			break;
	}
};
