export default function(state = {
  engagementWeight: 900,
  identityWeight: 500,
  expectationWeight: 500,
  informationWeight: 500,
  engagementBorder: '2px solid black'
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
    case 'ENGAGEMENT_NAV':
			return {
        engagementWeight: 900,
        identityWeight: 500,
        expectationWeight: 500,
        informationWeight: 500,
        engagementBorder: '2px solid black'
      }
			break;
      case 'IDENTITY_NAV':
  			return {
          engagementWeight: 500,
          identityWeight: 900,
          expectationWeight: 500,
          informationWeight: 500,
          identityBorder: '2px solid black'
        }
  			break;
        case 'EXPECTATION_NAV':
    			return {
            engagementWeight: 500,
            identityWeight: 500,
            expectationWeight: 900,
            informationWeight: 500,
            expectationBorder: '2px solid black'
          }
    			break;
          case 'INFORMATION_NAV':
      			return {
              engagementWeight: 500,
              identityWeight: 500,
              expectationWeight: 500,
              informationWeight: 900,
              informationBorder: '2px solid black'
            }
      			break;

		default:
			return state;
			break;
	}
};
