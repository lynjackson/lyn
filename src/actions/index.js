export function selectBook(){
return {
	type: 'BOOK_SELECTED',
	payload: 'book'
};
}

export function defaultView(book){
return {
	type: 'DEFAULT',
	payload: book
};
}

export function overlay(book){
	menuHeader();
	return {
		type: 'OVERLAY',
		payload: book
	};
}

export function front(book){
return {
	type: 'FRONT',
	payload: book
};
}

export function values(book){
	return {
		type: 'VALUES',
		payload: book
	};
}

export function valueNextPage(book){
	return {
		type: 'NEXTPAGE',
		payload:book,
	};
}

export function valuePrevPage(book){
	return {
		type: 'PREVPAGE',
		payload:book,
	};
}

export function invertHeader(book){
	return {
		type: 'INVERTHEADER',
		payload:book,
	};
}

export function defaultHeader(book){
	return {
		type: 'DEFAULTHEADER',
		payload:book,
	};
}

export function valuesHeader(book){
	return {
		type: 'VALUESHEADER',
		payload:book,
	};
}

export function menuHeader(book){
	return {
		type: 'MENUHEADER',
		payload:book,
	};
}
export function scrollHeader(book){
	return {
		type: 'SCROLLHEADER',
		payload:book,
	};
}

export function engagementNav(book){
	return {
		type: 'ENGAGEMENT_NAV',
		payload:book,
	};
}

export function identityNav(book){
	return {
		type: 'IDENTITY_NAV',
		payload:book,
	};
}

export function expectationNav(book){
	return {
		type: 'EXPECTATION_NAV',
		payload:book,
	};
}

export function informationNav(book){
	return {
		type: 'INFORMATION_NAV',
		payload:book,
	};
}
