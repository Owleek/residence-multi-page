'use strict';

$(document).ready(function(){
    $('#ef1 .btn').on('click', function(e){
        e.preventDefault();
        $(this).closest('.form__content').fadeOut(300);
        $('#ef1 .form__success').slideDown(1000);
    })
});