'use strict';
window.addEventListener('DOMContentLoaded', () => {

  function submitForm(formClass) {

    const form = document.querySelector(formClass);
    const row = form.querySelector('.snform__row');

    form.addEventListener('submit', formSend);
    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      if (error === 0) {
      //Отправить форму
    }
    else {

    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);      
      if (input.value === '') {
        formAddError(input);
        formAddError(row);
        error++;
      }
      else if ( input.getAttribute("type") === "checkbox" && input.checked === false ) {
        formAddError(input);
        error++;
      }
    }
    return error;
  }


  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
}

submitForm('.snform__form-1');


});


jQuery(document).ready(function( $ ) {

  $('#where_search').on('input', function() { 
    $('.filter-where-list').show();
    $('.input-where-delete').show();
    $('._error').removeClass('_error')
  });

  $('#where_search').hideseek({
    hidden_mode: true,
    nodata: 'Пока ничего не найдено...'
  });



  $('.filter-where-list li').click(function (e) {
    e.preventDefault();    
    $('#where_search').val($(this).text());
    $('.filter-where-list').hide();


    $('.snform__phone').attr('href', 'mailto:'+$(this).attr('data-phone'))
    $('.snform__phone-number').text($(this).attr('data-phone'));    
  });

  $('.snform__button-2').click(function (e) {
    e.preventDefault();
    $('.snform__phone-row').addClass('show')
  });

}); 
