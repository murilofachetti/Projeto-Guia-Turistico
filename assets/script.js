$('#cadastroForm').submit(function () {
  
let email = $('#inputEmail4');
let senha = $('#inputPassword4');
let endereco = $('#inputAddress');
let cidade = $('#inputCity');
let estado = $('#inputState');
let telefone = $('#inputZip');
  
let erro = $('.alert');
let campo = $('#campo-erro');

  erro.addClass('d-none');
  $('.is-invalid').removeClass('is-invalid');
  
  if (email.val() == ''){
    erro.removeClass('d-none');
    campo.html('email');
    email.focus();
    email.addClass('is-invalid');
    return false;
  }

  if (senha.val() == ''){
    erro.removeClass('d-none');
    campo.html('senha');
    senha.focus();
    senha.addClass('is-invalid');
    return false;
  }

  if (endereco.val() == ''){
    erro.removeClass('d-none');
    campo.html('endereco');
    endereco.focus();
    endereco.addClass('is-invalid');
    return false;
  }

  if (cidade.val() == ''){
    erro.removeClass('d-none');
    campo.html('cidade');
    cidade.focus();
    cidade.addClass('is-invalid');
    return false;
  }

  if (estado.val() == ''){
    erro.removeClass('d-none');
    campo.html('estado');
    estado.focus();
    estado.addClass('is-invalid');
    return false;
  }

  if (telefone.val() == ''){
    erro.removeClass('d-none');
    campo.html('telefone');
    telefone.focus();
    telefone.addClass('is-invalid');
    return false;
  }
  
return true;
});