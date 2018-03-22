/*---  Маска ввода телефона в заданном формате "+7 (___) ___ __ __"  ---*/
window.addEventListener("DOMContentLoaded", function() {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ __ __",
            i = 0,
           def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    var input = document.querySelector("#discuss_form_phone"); // где #discuss_form_phone - id инпута ввода телефоа
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
});

/*---  Проверка правильности ввода в форму е-мейла  ---*/

var inputEmail = document.getElementById('discuss_form_email'); // input[type="email"]
var controlEmail = document.getElementById('controlEmail');  // всплывающая подсказка в случае неправильного ввода

// электронный адрес введен и пользователь кликнул в другом месте
inputEmail.onblur = function(e){

	str = this.value;
 	var result = str.search( /^.+@.+\..+$/ );
	 if (result == -1) // неправильно введен e-mail
 	{
		controlEmail.style.display='block';
 		e.preventDefault();
 	}
 };
 // cброс подсказки ошибки, если она есть
 inputEmail.onfocus = function(e) {
		controlEmail.style.display='none';
 }