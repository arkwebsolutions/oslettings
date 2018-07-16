function openSlideMenu(){
	document.getElementById('side-menu').style.width='250px';
	document.getElementById('main').style.marginLeft='250px';
}

function closeSideMenu(){
	document.getElementById('side-menu').style.width='0px';
	document.getElementById('main').style.marginLeft='0px';
}

// Get form element
var form = document.getElementById('popupForm');
// Get open form button
var formBtn = document.getElementById('formBtn');
var formBtnBottom = document.getElementById('formBtnBottom');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

var confirmationId = document.getElementById('submit');


function displayConfirmationMessage() {
	// setTimeout(closeForm, 4000);
	// document.getElementById('confirmation-message').style.display='inline';
	document.getElementById('test').style.display='inline';
}


if (confirmationId != null) {
	confirmationId.addEventListener('click', displayConfirmationMessage);	
}

if (formBtn != null) {
	//Listen for click
	formBtn.addEventListener('click', openForm);	
}

if (formBtnBottom != null) {
	formBtnBottom.addEventListener('click', openForm);	
}

if (closeBtn != null) {
	//Listen for close click
	closeBtn.addEventListener('click', closeForm);
}


//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open form
function openForm(){
	document.getElementById('confirmation-message').style.display='none';
	form.style.display = 'block';
}

//function to close form
function closeForm(){
	form.style.display = 'none';
}

//Function to close form if outside click
function outsideClick(e){
	if(e.target == form){
		form.style.display = 'none';
	}
}

$(document).ready(function(){
	if (document.getElementsByClassName('form-submission')[0] != null) {
		$(".form-submission").delay(800).fadeIn();
		setTimeout(redirect, 4000);	
	}
});


var redirect = function(){
  window.location.href = "http://oslettings.co.uk/uat/index.html";
};


