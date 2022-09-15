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