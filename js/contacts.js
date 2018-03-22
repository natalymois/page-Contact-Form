

//  Страница page contact-form (для Колбеевой)

/*---Вторая часть формы (раскрывается при клике)----*/

var openBlock = document.getElementById ('js_open-second-block');
var slideupBlock = document.getElementsByClassName('js-slideup-block')[0];
var contactsForm = document.getElementsByClassName('contacts-form__second-block')[0];

   openBlock.onclick = function() {
		this.style.opacity = "0";
		this.style.display = "none";
		slideupBlock.classList.add('open');
		
   }
   
   /*----выбор input:checked с помощью добавления класса в JS---*/
   
/*var activeLabel = document.getElementsByClassName('blue-ic-w'); 
	for (let i = 0; i < activeLabel.length; i++) {
		activeLabel[i].onclick = function() {					
			this.classList.toggle("active");			
		}
	}    
   */
   
   /*---button.onclick - форма благодарности---*/
   //contact-form__button > .discuss-form__thanks
   var discussForm = document.getElementById('discuss_form');
   var ctButton = document.getElementById('button-thanks');
   var formThanks = document.getElementsByClassName('discuss-form__thanks')[0];
   var ppt = document.getElementsByClassName('contact-form__button-d')[0];
   
	ctButton.onclick = function() {
		formThanks.classList.add('open');		
		discussForm.style.opacity = "0";
		ppt.classList.add('clear');
		if((window.innerWidth <= 750)) {	
			slideupBlock.classList.add('clear');		
		}
		            
	}
	
   /*contact Map*/
   /* #spb >.contact-info__tab.active > contact-info__tab-item--1.active > contact-info__bg active > #contact_map-spb */
var spb = document.getElementById('spb'); 
 
	/* #msk >.contact-info__tab.active > contact-info__tab-item--2.active > contact-info__bg > #contact_map-msk */					
var msk = document.getElementById('msk');  
											
var contactBg = document.getElementsByClassName('contact-info__bg')[0];
var item1 = document.getElementsByClassName('contact-info__tab-item--1')[0];
var item2 = document.getElementsByClassName('contact-info__tab-item--2')[0];
var mapSpb = document.getElementById('contact_map-spb'); 
var mapMsk = document.getElementById('contact_map-msk'); 

	spb.onclick = function() {
		msk.classList.remove('active');
		this.classList.remove('active'); this.classList.add('active');
		item2.classList.remove('active');
		item1.classList.remove('active');
		item1.classList.add('active');
		contactBg.classList.remove('active');
		
		mapSpb.style.display = "block";
		mapMsk.style.display = "none";
	}
	
	msk.onclick = function() {
		spb.classList.remove('active');
		this.classList.remove('active'); this.classList.add('active');
		item1.classList.remove('active');
		item2.classList.remove('active');
		item2.classList.add('active');
		contactBg.classList.remove('active');
		contactBg.classList.add('active');
		
		mapSpb.style.display = "none";
		mapMsk.style.display = "block";
	}
	

