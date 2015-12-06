$('document').ready(function(){
// initialize document or que functions
// display first image
	displayFirstImage('#thumbs');
// pre-load remaining images
	preloadImages('#thumbs');
// load the gallery
	gallery('#thumbs');
});
 
// function library
/*
1. Attach a function to the clicked thumbnail
2. Stop default link behavior
3. Get the path to the big image for the clicked thumbnail
4. Create a new image object for the clicked image
5. Hide the new image so we can place it invisibly
6. Insert the new invisible image after the thumbnails
7a. Fade in the new image
7b. At the same time, remove the old image
	Oh! That means that at some point, we have to figure out what the old image was
	We should probably do that early - before we start working with a new image...
	...so maybe do that between steps 1 and 2
*/
function displayFirstImage(thumbs){
	var firstPath = $(' ' + thumbs + ' a:first').attr('href');
	
	var firstImage = '<img src="'+firstPath+'" id="galleryBig">';
	
	$(thumbs).after(firstImage);
}

function preloadImages(thumbs){
	var arrGalleryImages = [];
	var arrGalleryImageLinks = $(' ' + thumbs + ' a');
	for(i=0; i<arrGalleryImageLinks.length; i++){
		arrGalleryImages[i] = new Image();
		arrGalleryImages[i].src = arrGalleryImageLinks[i];
	}
}

function gallery(thumbs){
	$(' ' + thumbs + ' a').click(function(evt){
		evt.preventDefault();
		var oldImage = $('#thumbs').next();
		var imgPath = $(this).attr('href');
		var imgTitle = $(this).attr('title');
		alert(imgTitle);
		var newImage = $('<img src="' + imgPath + '" id="galleryBig">');
		newImage.hide();
		$('#thumbs').after(newImage);
		newImage.fadeIn();
		oldImage.remove();
	}); // end anon fcn
}








