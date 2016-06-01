var App = App || {};

var qs = function (selector) {
 return document.querySelector(selector);
}

//функция для возврата из окна профиля на главную страницу + log out
function backHome() {
    window.location.assign("main_page");
}

//объект с основной функцией для формирования динамического контента через переданный код в innerHTML элементов по факту срабатывания событий - кликов по разделам меню
App.navEvents = (function eventListeners() {
	// function manageNav () {
		var contentContainer = document.querySelector('.content');
		var goToMyProfile = document.querySelectorAll('.goToMyProfile');
		var profileContainer = document.createElement('div');
		var circlesContainer = document.createElement('div');
		var findMyPeopleContainer = document.createElement('div');
		var underConstruction = document.createElement('div');

		var goToMyCircles = document.querySelectorAll('.goToMyCircles');
		var goToMyMessages = document.querySelectorAll('.goToMyMessages');
		var goTofindMyPeople = document.querySelectorAll('.findMyPeople');
		var goToMySettings = document.querySelectorAll('.goToMySettings');
		// var renderSettings = document.querySelector('.mySettings');


		var profileContent = '<div class="container-fluid myProfile">\
			<section class="row gallery">\
			<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 profilePic">\
							<img class = "mainPic" src="../images/profile_pics/profile_main_pic_resized.jpg" alt="my_profile_pic" width="174px" height="232px">\
						</div>\
							<div class="col-lg-10 col-md-9 col-sm-9 col-xs-12 picIconsGallery">\
							<div class="row picIconsRow">\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="../images/profile_pics/stub_vidIcon.jpg" alt="my video" width="145px" height="110px">\
								</div>\
							</div>\
						</div>\
					</section>\
					<section class="row profileDescr">\
						<div class="col-md-6 col-xs-12 briefInfo">\
							<h2 class="briefInfoTitle">Brief info</h2>\
						<div class="briefInfoItems">\
							<span class="descrQuest"><strong>Gender: </strong></span>\
							<span class="descrReply">Female</span><br>\
							<span class="descrQuest"><strong>Age: </strong></span>\
							<span class="descrReply">34</span><br>\
							<span class="descrQuest"><strong>Location: </strong></span>\
							<span class="descrReply">Ukraine</span><br>\
							<span class="descrQuest"><strong>Education: </strong></span>\
							<span class="descrReply">University degree, MS, major in Marketing</span><br>\
							<span class="descrQuest"><strong>Professional Area: </strong></span>\
							<span class="descrReply">IT, Marketing & Brand 		Management</span><br>\
						</div>\
						</div>\
						<div class="col-md-6 col-xs-12 interests">\
							<h2 class="interestsTitle">Interests</h2>\
							<div class="tags">\
								<div type="button" class="btn btn-primary">Dating & Relationship</div>\
								<div type="button" class="btn btn-primary">Interested in: <span class="fa fa-male"></span></div>\
								<div type="button" class="btn btn-primary">Fitness</div>\
								<div type="button" class="btn btn-primary">Hiking</div>\
								<div type="button" class="btn btn-primary">Learning English</div>\
								<div type="button" class="btn btn-primary">Books</div>\
								<div type="button" class="btn btn-primary">Board Games</div>\
								<div type="button" class="btn btn-primary">Travelling</div>\
								<div type="button" class="btn btn-primary">Foodie</div>\
								<div type="button" class="btn btn-primary">Materialization of thoughts</div>\
								<div type="button" class="btn btn-primary">Hunting dragons</div>\
								<div type="button" class="btn btn-primary">Extraordinary people</div>\
								<div type="button" class="btn btn-primary">Pirates</div>\
								<div type="button" class="btn btn-primary">Seriousness!</div>\
								<div type="button" class="btn btn-primary">Co-working</div>\
								<div type="button" class="btn btn-primary">FrontEnd Dev</div>\
								<div type="button" class="btn btn-primary">etc</div>\
							</div>\
						</div>\
						<div class="col-md-12 col-xs-12 aboutInfo">\
							<div class="col-md-6 col-xs-12 aboutTitle">\
								<h2>About myself</h2>\
							</div>\
							<div class="col-md-12 col-xs-12 aboutText">\
								<p>\
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit.</p>\
								<p>\
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit.</p>\
							</div>\
						</div>\
		</section></div>';

		
		var circlesContent = '<div class="container-fluid myCircles">\
			<section class="row circlesFilter">\
							<div class="col-md-5 searchUsers">\
								<select class="selectScopes" name="scopes" id="scopes">\
									<option value="select">Select scopes</option>\
									<option value="dating">Dating & Relationship</option>\
									<option value="hobbies">Hobbies & Interests</option>\
									<option value="sport">Sport & Activities</option>\
									<option value="friendship">Friendship & Roommates</option>\
									<option value="co-working">Co-working & Start-ups</option>\
								</select>\
							</div>\
							<div class="col-md-4 col-xs-12 foundUsers">\
								<span class="usersNum"></span><span class="fa fa-users"> users are found</span>\
							</div>\
							<div class="col-md-3 col-xs-12 searchReset">\
								<div type="button" class="btn btn-primary">Search reset</div>\
							</div>\
							</section>\
							<section class="row circlesDisplay">\
							</section></div>'
		
		var applicationForm = ''		
		//используются циклы, так как событие должно срабатывать для всех селекторов класса (мы применяем querySelectorAll и проходимся по всем элементам массива отобранных нодов с названием класса), как для стандартного меню, так и адаптивного под мобильные устройства					
		for(var i=0; i < goToMyProfile.length; i++) {
			goToMyProfile[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				// profileContainer.setAttribute('class','container-fluid');
				contentContainer.appendChild(profileContainer);
				profileContainer.innerHTML = profileContent;
			})
		}


		for(var i=0; i < goToMyMessages.length; i++) {
			goToMyMessages[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				contentContainer.appendChild(underConstruction);
				underConstruction.setAttribute('class','underConstruction');
				underConstruction.classList.add('container-fluid');
				underConstruction.innerHTML = '<span class="fa fa-cogs"></span>' + "Sorry, this section is under construction";
			})
		}

			
		for(var i=0; i < goTofindMyPeople.length; i++) {	
			goTofindMyPeople[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				//добавить, когда будет готов xml модуль и json объект
				// circlesContainer.setAttribute('class','container-fluid');
				// contentContainer.appendChild(findMyPeopleContainer);
				// findMyPeopleContainer.innerHTML = findPeopleContent;
				contentContainer.appendChild(underConstruction);
				underConstruction.setAttribute('class','underConstruction');
				underConstruction.classList.add('container-fluid');
				underConstruction.innerHTML = '<span class="fa fa-cogs"></span>' + "Sorry, this section is under construction";
			})
		}

		for(var i=0; i < goToMySettings.length; i++) {
			goToMySettings[i].addEventListener('click', function (e) {
				console.log(e);
				$("main").load("SPA_application.html");
			})		
				// document.querySelector(".myProfile").style.display='none';
				// document.querySelector(".mySettings").style.display='block';
		}	

	// }
})()



//пока без участия xml создаем json-объект готовый
App.jsonobj = {
 	circles: [
		{
			image: "../images/circles_pics/spartan.jpg",
			name: "Spartan",
			scope: "Hobbies & Interests",
			scopeId: "2",
	      	id: "1"
	  	},
	  	{
	  		image: "../images/circles_pics/wolverine.jpg",
			name: "Wolverine",
			scope: "Hobbies & Interests",
			scopeId: "2",
	      	id: "2"
	  	},
	  	{
	  		image: "../images/circles_pics/jack_sparrow.jpg",
			name: "Jack Sparrow",
			scope: "Hobbies & Interests",
			scopeId: "2",
	      	id: "3"
	  	},
	  	{
	  		image: "../images/circles_pics/phoebe.jpg",
			name: "Phoebe",
			scope: "Friendship & roommates",
			scopeId: "4",
	      	id: "4"
	  	},
	  	{
	  		image: "../images/circles_pics/rachel.jpg",
			name: "Rachel",
			scope: "Friendship & roommates",
	      	scopeId: "4",
	      	id: "5"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",	
			name: "Someone",
			scope: "Friendship & roommates",
	      	scopeId: "4",
	      	id: "6"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Friendship & roommates",
	      	scopeId: "4",
	      	id: "7"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Friendship & roommates",
	      	scopeId: "4",
	      	id: "8"
	  	},
	  	{
	  		image: "../images/circles_pics/invisible_man.jpg",
			name: "Invisible man",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "9"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "10"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "11"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "12"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "13"
	  	},{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Co-working & start-ups",
	      	scopeId: "5",
	      	id: "14"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "15"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "16"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "17"
	  	},
	  	{
	  	 	image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "18"
	  	},
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "19"
	  	}, 	
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "20"
	  	}, 	
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
	      	scopeId: "3",
	      	id: "21"
	  	}, 	
	  	{
	  		image: "../images/circles_pics/stub_picIcon.jpg",
			name: "Someone",
			scope: "Sports & activities",
			scopeId: "3",
			id: "22"
	  	},
	  	{	
	  		image: "../images/circles_pics/stub_picIcon.jpg",
	  		name: "Prince on a white horse :)",
			scope: "Dating & relationship",
	      	scopeId: "1",
	      	id: "23"
	  	}
	],
	scopes: [
	  {
	   id: "0",
	   name: "Select a scope"
	  },		
	  {
	   id: "1",
	   name: "Dating & Relationship"
	  },
	  {
	   id: "2",
	   name: "Hobbies & Interests"
	  },
	  {
	   id: "3",
	   name: "Sports & Activities"
	  },
	  {
	   id: "4",
	   name: "Friendship & Roommates"
	  },
	  {
	   id: "5",
	   name: "Co-working & Start-ups"
	  }
	]
};


//добавляем метод объекту App, который будет служить шаблоном структуры блока с информацией о пользователе
App.memberTemplates = {
	memberContent: '<div class="row circleMember">\
	<div class="col-md-3 memberImage">\
			<img src={{image}} alt={{name}}>\
		</div>\
		<div class="col-md-9 memberPanel">\
			<div class="col-md-12 memberName">{{name}}</div>\
			<div class="col-md-5 memberControls">\
				<div type="button" class="btn btn-primary scope">{{scope}}</div>\
			</div>\
			<div class="col-md-5">\
				<div type="button" class="btn btn-primary message">\
					<span class="fa fa-edit"></span>\
					Write a message\
				</div>\
			</div>\
			<div class="col-md-2">\
				<div type="button" class="btn btn-primary del">Bow out?</div>\
			</div>\
	 	</div>\
	 </div>'
}

//добавляем метод, который будет отвечать за срабатывание событий при работе с элементом select, предназначенным для сортировки по соц. группам
App.selectScope = (function () {
	
	var goToMyCircles = document.querySelectorAll('.goToMyCircles');

	function addScopes () {  
		App.jsonobj.scopes.forEach(function (val) {  
			scopes.innerHTML+= '<option value="' + val.id + '">' + val.name +'</option>';
		})
	}

	//функция, инициализирующая событие change по клику на select
	function initListeners (callbackObject) {
		
		for(var i=0; i < goToMyCircles.length; i++) {
				goToMyCircles[i].addEventListener('click', callbackObject.goToCircles);
		}	
	}

 
	return {
		addScopes: addScopes,
		initListeners: initListeners
	}

})();


//добавляем в объект новый метод, который отвечает за прохождение циклом по переданным данным в виде jsonobj с возвращением фильтра по id соц.группы, выбранной через select

App.Member = (function () {
	var Member = function (data) {
		for (var i in data) {
			this[i] = data[i];
		}
		this.template = App.memberTemplates.memberContent;
		this.scopes = App.jsonobj.scopes.filter(function (val) {
			return val.id === data.scopeId;
		})[0];
	};

	//к прототипу метода Member добавляем метод  getHTML, для проверки HTML кода, который передан выше в виде контекста App.memberTemplates.memberContent для this.template

	Member.prototype.getHTML= function () {
		var reg = /{{([A-Za-z0-9\+\-\_\,\ ]+)}}/g;
		var self = this;
		return this.template.replace(reg, function (substring) {
   			return self[substring.split(/{|}/).join("")];
		});
	} 

	return Member; //возвращаем результат функции, сохраненной в переменную Member
 
})();

//сздаем метод управления разделом странички, отображающей наших пользователей
App.manageCircles = (function () {
	var members = []; //создаем пустой массив для сохранения отсортированных пользователей, информацию о которых мы получили из jsonobj
	var filteredMembers = [];  //создаем пустой массив для сохранения отфильтрованных пользователей
	var currentSort = "Name"; //сохраняем в переменную признак, по которому будет произведена сортировка по умолчанию
	// var goToMyCircles = document.querySelectorAll('.goToMyCircles');
	var contentContainer = document.querySelector('.content');
	var circlesContainer = document.createElement('div');

	// App.navEvents.goToCircles();
	
	 //вызываем функцию, которая будет срабатывать пока только на событие change при выборе значения из нашего select элемента
	App.selectScope.initListeners({
		goToCircles: goToCircles,
	});

	createMembers(); //вызываем функцию createMembers
	
	function createMembers () {  
		App.jsonobj.circles.forEach(function (obj) {
			var oneMember = new App.Member(obj); //создаем новый объект класса Member и пушим его в наш массив members
			members.push(new App.Member(obj));
		});

		
		//выводим количество пользователей в наших кругах в меню навигации
		navTotalMembers(members);
		//далее массив filteredMembers подменяем контентом массива members
		filteredMembers = members;
	}
	
	//функция, вызываемая при клике на раздел "Мои круги" в панелю меню
	function goToCircles () {
			
		var circlesContent = '<div class="container-fluid myCircles">\
			<section class="row circlesFilter">\
							<div class="col-md-5 searchUsers">\
								<select class="selectScopes" name="scopes" id="scopes">\
								</select>\
							</div>\
							<div class="col-md-4 col-xs-12 foundUsers">\
								<span class="usersNum"></span><span class="fa fa-users"> users are found</span>\
							</div>\
							<div class="col-md-3 col-xs-12 searchReset">\
								<div type="button" class="btn btn-primary">Search reset</div>\
							</div>\
							</section>\
							<section class="row circlesDisplay">\
							</section></div>'

		contentContainer.innerHTML="";
		contentContainer.appendChild(circlesContainer);
		circlesContainer.innerHTML = circlesContent;

		//вызов функции сортировки значений переданных в массив filteredMembers при выполнении функции createMembers
		
		sortBy(currentSort);

		//вызов функции построения HTML-структуры для переданных данных из массива filteredMembers
		renderMembers(filteredMembers);

		//вызов функции подсчета количества пользователей в кругах, переданных в массив filteredMembers
		countTotalMembers(filteredMembers);

		//вызов функции добавления наименования категорий пользователей из App.jsonobj
		App.selectScope.addScopes();
		
		//инициируем и декларируем переменные для наших DOM-элементов для навешивания событий с функциями, описанными ниже
		var selectScope = qs('.selectScopes'),
		resetSearch = qs('.searchReset');

		selectScope.addEventListener("change", scopeChange);
		resetSearch.addEventListener("click", resetFilter);
	}
	
 	//пишем функцию, которая применяет метод forEach к нашему объекту jsonobj, а конкретно к массиву circles

	
	
	//создаем функцию для формирования HTML-структуры для наполнения нашей страницы контентом о каждом пользователе. В качестве аргумента будем передавать один из массивом с информацией о пользователях 
	function renderMembers (membersArray) {
	  	var circlesDisplay = qs('.circlesDisplay');
	  	var html = ""; //сохраняем в переменную пустой string, чтобы через вызов следующей функции можно было добавлять в innerHTML нашего div всегда новый HTML-фрагмент, содержащий совйства объекта jsonobj.circles, полученный посредством вызова функции getHTML для каждого элемента массива
	   
	  	//по массиву membersArray проходимся методом forEach и выводим при каждой итерации контент в наш div с классом circlesDisplay
	  	membersArray.forEach(function (member) {
	   		html+= member.getHTML();
	  	});
	  	circlesDisplay.innerHTML = html;
	}


	//функция для подсчета отфильтрованного по селекту количества пользователей в определенной категории
	function countFilteredMembers (membersArray) {
		var usersNum = qs('.usersNum');
		usersNum.innerHTML = membersArray.length;
	}


	//функция для подсчета общего количества пользователей при обнуленном селекте
	function countTotalMembers (membersArray) {
		var usersNum = qs('.usersNum');
		usersNum.innerHTML = membersArray.length;
	}

	//функция подсчета количества пользователей для значка в панели меню
	function navTotalMembers (membersArray) {
		usersTotalNum = document.querySelectorAll('.usersTotalNum');
		for(var i=0; i < usersTotalNum.length; i++) {
			usersTotalNum[i].innerHTML = membersArray.length;
		}
	}


	//прописываем функцию сортировки с аргументом, переданным в виде val
	function sortBy (val) {
		//на даннм этапе применяю только сортироку по признаку name
	  	var sorters = {
	    	"Name": function (val1, val2) {
	     		var a = val1.name;
	    		var b = val2.name;
	     		return a === b ? 0 : a < b ? -1 : 1;
	    	}
		};
	
		filteredMembers.sort(sorters[val]); //и уже отфильтрованный массив сортирую по интересующему признаку
	}
	
	//функция, которая непосредственно отвечает за фильтрацию данных массива members по значению, выбранному из select
	function scopeChange () {
	  	var val = this.value; // сохраняем в переменную текущее значение value по факту срабатывания события change при выборе опции из элемента select

	 	//в массив filteredMembers перезаписываем результат, полученный после применения метода filter к массиву members. Метод фильтр вернет нам значение из массива members, которое будет равно значению текущей переменной val
	  	filteredMembers = members.filter(function (member) {
	   		return member.scopeId === val;
	 	});

	 //после этого отфильтрованный по такому значению массив с данными будет отсроен в новый HTML-фрагмент через вызов функции renderMembers
		sortBy(currentSort);
		renderMembers(filteredMembers);
		countFilteredMembers(filteredMembers);
	}

	//функция для сброса счетчика пользователей и фильтров при нажатии на кнопку сброса фильтра/поиска

	function resetFilter () {
		var selectScope = qs('.selectScopes');
		selectScope.innerHTML="";
		renderMembers(members);
		countTotalMembers(members);
		App.selectScope.addScopes();
		filteredMembers = members;
	}

})();


