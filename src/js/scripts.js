'use strict';

$(document).ready(function(){
    showSuccessForm('#f1'); //Form 1
    showSuccessForm('#ef1'); //extendetForm 1
});


function showSuccessForm(formID) {
    $(`${formID} .btn`).on('click', function(e){
        e.preventDefault();
        $(this).closest('.form__content').fadeOut(300);
        $(`${formID} .form__success`).slideDown(1000);
    })
}