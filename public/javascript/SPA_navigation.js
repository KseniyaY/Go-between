$(document).ready(function(){
    $("#showHideContent").click(function () {
        if ($("#content").is(":hidden")) {
			$("#content").show("slow");
        } else {
            $("#content").hide("slow");
        }
	return false;
	});
});

var container = document.querySelectorAll(".container-fluid");
var goToMyProfile = document.querySelectorAll('.goToMyProfile');
var goToMySettings = document.querySelectorAll('.goToMySettings');
var goToMyCircles = document.querySelectorAll('.goToMyCircles');
var goToMyMessages = document.querySelectorAll('.goToMyMessages');
var goToFindPeople = document.querySelectorAll('.goToFindPeople');
var myProfile =  document.querySelector('.myProfile');
var myCircles =  document.querySelector('.myCircles');
var myMessages =  document.querySelector('.myMessages');
var findPeople =  document.querySelector('.findPeople');
var mySettings =  document.querySelector('.mySettings');

toggleDisplay(goToMyProfile, container, myProfile)
toggleDisplay(goToMyMessages, container, myMessages)
toggleDisplay(goToMyCircles, container, myCircles)
toggleDisplay(goToFindPeople, container, findPeople)
toggleDisplay(goToMySettings, container, mySettings)


function toggleDisplay (element1, container, element3) {
	this.element1 = element1;
	this.container = container;
	this.element3 = element3;
	for (var i=0; i < element1.length; i++) {
		element1[i].addEventListener('click', function (e) {
				console.log(e);
				for (var j = 0; j < container.length; j++) {
					container[j].style.display="none";
				};
				element3.style.display="block";

		});
	};	
};		
	
