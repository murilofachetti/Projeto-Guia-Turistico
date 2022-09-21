// PRÉ LOADER

$(window).on('load', function() {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow': 'visible'});
})
// PRÉ LOADER

// Config Slick
$(document).ready(function(){
$('.listaturismo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
// Config Slick

// Config Cadastro
const cadastro = document.querySelector("#cadastro");

// EMAIL
function validaEmail(inputEmail4) {
  var validacao = /\S+@\S+\.\S+/;
  var booleanoValidacao = validacao.test(inputEmail4);

  if (booleanoValidacao) {
    return [booleanoValidacao, ""];
  } else {
    return [booleanoValidacao, "O e-mail é inválido"];
  }
}

function validaSenha(password){
            let caracteresEspeciais = ['#', '@', '%', '&', '*', '¨'];

            if(password.length < 6){
                return [false, "A senha precisa ter 6 ou mais caractéres"];
            }

            for(let caracter of caracteresEspeciais){
                if(password.indexOf(caracter) > -1){
                    return [false, "A senha não pode ter caracter especial."];
                }
            }

            const passwordConfirm = document.querySelector('#password_confirm');
            if(passwordConfirm.value !== password){
                return [false, "As senhas não coincidem."];
            }

            return [true, ""];
        }

cadastro.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(cadastro)
  const verify = {
    'inputEmail4': {
      required: true,
      validaField: validaEmail
    },
    'inputPassword4': {
      required: true,
      validaField: null,
    },
    'inputAddress': {
      required: true,
      validaField: null,
    },
    'inputCity': {
      required: true,
      validaField: null,
    },
    'inputZip': {
      required: true,
      validaField: null,
    },
  }

  let camposOk = true;

  for (let key of formData.keys()) {
    let validationElement = document.querySelector(`#validation_${key}`);

    if (Object.keys(verify).includes(key)) {
      let requiredPass = true;

      if (verify[key].required) {
        if (formData.get(key) === undefined || formData.get(key) === null || formData.get(key) === "") {
          validationElement.style.display = 'block';
          validationElement.innerText = 'Campo obrigatório';
          requiredPass = false;
          camposOk = false;
        } else {
          validationElement.style.display = 'none';
          validationElement.innerText = '';
        }
      }

      if (requiredPass) {
        if (verify[key].validaField) {
          let arrayVerificacao = verify[key].validaField(formData.get(key));
          if (arrayVerificacao[0]) {
            validationElement.style.display = 'none';
            validationElement.innerText = '';
          } else {
            validationElement.style.display = 'block';
            validationElement.innerText = arrayVerificacao[1];
            camposOk = false;
          }
        }
      }

    }
  }

  if (camposOk) {
    for (let value of formData.values()) {
      console.log(value)
    }
  }

});

// Validação Cadastro
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


// Validação Cadastro
const form = document.getElementById('cadastroForm')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
})

// Config Cadastro
// Config Spinner
const spinnerLoading = document.querySelector('#titulospinner')
setTimeout(() => {
  spinnerLoading.remove()
}, 1000);


// Config Spinner
