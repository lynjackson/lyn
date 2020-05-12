export default function(state = 'menu', action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
		case 'MENUX':
			return action.payload;
			break;
		default:
			return state;
			break;
	}
};
