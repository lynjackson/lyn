export default function(state = {
  overlay: 'none',
  aboveFold: 'flex',
  menu: 'menu',
  header: 'invert(0)',
  opacity:0,
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
    case 'DEFAULT':
			return {
        overlay: 'none',
        aboveFold: 'flex',
        menu: 'menu',
        header: 'invert(0)',
        opacity:0,
      };
			break;
    case 'OVERLAY':
			return {
        overlay: 'flex',
        aboveFold: 'none',
        menu: 'close',
        header: 'invert(1)',
        opacity:1,
        ePosition: 'fixed',
      };
			break;
      case 'FRONT':
  			return {
          overlay: 'none',
          aboveFold: 'flex',
          menu: 'menu',
          header: 'invert(0)',
        };
  			break;
        case 'VALUES':
    			return {
            overlay: 'none',
            aboveFold: 'flex',
            menu: 'menu',
            header: 'invert(1)',
          };
    			break;
		default:
			return state;
			break;
	}
};
