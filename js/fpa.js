$('document').ready(function(){
	getUpcomingMoves('#movieContent', 'fish', 'results', '#results');
	resourceImprovements('#fishfun', 'fishRowEven', 'fishRowOdd');
	resourceLink('#fishfun');
	displayFirstImage('#survivors', 'galleryBig', 'caption');
	preloadImages('#survivors', 'caption');
	gallery('#survivors', 'galleryBig', '#galleryBig', '#caption', 'caption');
	youAreHere('#navbar a', 'currentLink');
	autoFocus('#fname');
	autoClear();
	addDatePicker('#date');
	addAccordion('#fishfaq');

	addValidationEngineToForm('#mainContent');
	addInputClassToName('#fname');
	});