export default function(state = {
  headerInvert: 'invert(0)',
  backgroundColor: 'rgba(0,0,0,0)',
  mode: 'start',
  headerHeight: '62px',
  display: 'none',
  opacity:0,
  zIndex: -10,
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
    case 'DEFAULTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(0)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'default',
        headerHeight: '62px',
        display: 'none',
        opacity:0,
        zIndex: -10,
      });
      case 'VALUESHEADER':
  			return Object.assign({}, {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgba(0,0,0,0)',
          mode: 'default',
          headerHeight: '62px',
          display: 'none',
          opacity:0,
          zIndex: -10,
        });
			break;
    case 'INVERTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(1)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'invert',
        headerHeight: '62px',
        display: 'none',
        opacity:0,
        zIndex: -10,
      });
			break;
      case 'SCROLLHEADER':
  			return {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgb(26, 26, 26)',
          mode: 'scroll',
          headerHeight: '62px',
          display: 'none',
          opacity:0,
          zIndex: -10,
        };
      case 'MENUHEADER':
  			return {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgb(26,26,26)',
          mode: 'menu',
          headerHeight: '100vh',
          display: 'flex',
          opacity:1,
          zIndex: 10,
        };
  			break;

		default:
			return state;
			break;
	}
};





// case 'INVERTHEADER':
//   return Object.assign({}, {
//     headerInvert: 'invert(1)',
//     headerHeight: '50px',
//     display: 'none'
//   });
//   break;
