// const titles = [
//   'Openness',
//   'Experience',
//   'Service',
//   'Evaluation',
//   'Abundance',
//   'Renunciation',
//   'Joy'
//   ]

// const texts = [
//   'Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.',
//   "To us, experience is the whole point. We don't take ours or that of others’ for granted.",
//   'We strive to make the needs of those we serve as important to us as they are to them.',
//   'We regularly reassess what behaviors are productive and which are destructive, and adjust accordingly.',
//   'We cling to ideas no longer than necessary because we know there will always be more.',
//   "When we compulsively crave the outcomes of our actions, it's more difficult to simply enjoy what we're doing...",
//   "... and if you're not enjoying what you're doing, then you're doing it wrong.",








// ]


// export default function(state = {
//   page: 0,
//   backgroundColorValue: 26,
//   headerInvert: 1,
//   textColor: 'white',
//   title: 'Openness',
//   text: 'Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.',
// }, action) {
// //initial state should be set to whatever data structure you want your new state contained in
// 	switch (action.type) {
// 		case 'NEXTPAGE':
// 			return Object.assign(state, {
//           page: state.page+1,
//           backgroundColorValue: state.backgroundColorValue+50,
//           headerInvert: ()=>{(state.page > 1) ? 1: 0},
//           textColor: ()=>{state.page > 1 ? 'white': 'black'},
//           title: titles[state.page+1],
//           text: texts[state.page+1],
//       });
// 			break;
//       case 'PREVPAGE':
//   			return Object.assign(state, {
//             page: state.page-1,
//             backgroundColorValue: state.backgroundColorValue-50,
//             headerInvert: ()=>{(state.page > 1) ? 1: 0},
//             textColor: ()=>{state.page > 1 ? 'white': 'black'},
//             title: titles[state.page-1],
//             text: texts[state.page-1],
//         });
//   			break;
// 		default:
// 			return state;
// 			break;
// 	}
// };

// // backgroundColor: this.state.backgroundColorValue + 20,
// // headerInvert: ()=>{return this.page > 1 ? 1: 0},
// // textColor: ()=>{return this.page > 1 ? 'white': 'black'},
// // title: 'Good Design Aims to Be Part Of Something Greater than Itself',
// // text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',


// // backgroundColor: `rgb(${state.backgroundColorValue}, ${state.backgroundColorValue}, ${state.backgroundColorValue}, )`,

// // const characters = {
// //   1: { id: 1, firstName: "Jeffrey", lastName: "Lebowski" },
// //   2: { id: 2, firstName: "Walter", lastName: "Sobchak" },
// //   3: { id: 3, firstName: "Donald", lastName: "Kerabatsos" }
// // };
// // const maude = { id: 4, firstName: "Maude", lastName: "Lebowski" };
// //
// // const newCharacters = { ...characters, [maude.id]: maude };
// // //add maude
// //
// //
// // const updateId = 1;
// // const updatedCharacter = { id: 1, firstName: "The", lastName: "Dude" };
// //
// // const newCharacters = { ...characters, [updateId]: updatedCharacter };
// // //Modify The Dude's property
