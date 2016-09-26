$(document).ready(function(){
    hoy();
    beneficiosForm();
    enviarFormulario();
    enviarFormularioContacto();
    $('#beneficiosForm').on('keyup keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });
});
function hoy(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd;
    }
    if(mm<10) {
      mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    $('#today').val(today);
}
function enviarFormulario(){
    $('#beneficiosForm').submit(function(e){
      e.preventDefault();
      e.stopPropagation();
        $.ajax({
            type: 'POST',
            url: "datos/ameBeneficios.php",
            data: $(this).serialize() +"&orden="+1,
            success:function(data){
                    if(data.success === true ){
                        registroMail(data.nombreApellido, data.dni, data.email);
                        avisoRegistro(data.nombreApellido, data.dni, data.email);
                        alert('Gracias por registrarse.');
                        $('#beneficiosForm')[0].reset();
                    }
                    if(data.success === false ){
                        alert(data.message);
                    }
                }
        });
        return false;
    });
}
function registroMail(nombreApellido, dni, email){
  $.ajax({
      type: 'POST',
      url: "datos/registroMail.php",
      data: $(this).serialize() +"&nombreApellido="+nombreApellido +"&dni="+dni +"&email="+email,
      success:function(data){
              if(data.success === true ){
                  alert(data.message);
              }
              if(data.success === false ){
                  alert(data.message);
              }
          }
  });
}
function avisoRegistro(nombreApellido, dni, email){
  $.ajax({
      type: 'POST',
      url: "datos/avisoRegistro.php",
      data: $(this).serialize() +"&nombreApellido="+nombreApellido +"&dni="+dni +"&email="+email,
      success:function(data){
              if(data.success === true ){
                  alert(data.message);
              }
              if(data.success === false ){
                  alert(data.message);
              }
          }
  });
}
function enviarFormularioContacto(){
    $('#formularioContacto').submit(function(e) {
      e.preventDefault();
      e.stopPropagation();
        $.ajax({
            type: 'POST',
            url: "datos/enviarMail.php",
            data: $(this).serialize(),
            success:function(data){
                    if(data.success === true ){
                        alert(data.message);
                        $('#formularioContacto')[0].reset();
                    }
                    if(data.success === false ){
                        alert(data.message);
                    }
                }
        });
        return false;
    });
}
function beneficiosForm(){
  $('#beneficiosForm').bootstrapValidator({
    message: 'Este valor no es valido.',
    fields: {
      nombreApellido: {
        message: 'El nombre no es valido.',
        validators: {
          notEmpty: {
            message: 'El nombre no puede estar vacio.'
          },
          stringLength: {
            min: 1,
            max: 30,
          },
          regexp: {
            regexp: /^[a-zA-Z_\.\s]+$/,
            message: 'El nombre de usuario sólo puede contener letras'
          }
        }
      },
      dni: {
        message: 'El DNI no es valido.',
        validators: {
          notEmpty: {
            message: 'El DNI no puede estar vacio.'
          },
          stringLength: {
            min: 8,
            max: 8,
            message: 'El DNI debe tener 8 caracteres.'
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: 'El nombre de usuario sólo puede contener numeros'
          }
        }
      },
      fechaNacimiento: {
        message: 'La fecha no es valida',
        validators: {
          notEmpty: {
            message: 'La feha no puede estar vacio.'
          },
          stringLength: {
            min: 10,
            max: 10,
            message: 'La fecha debe tener el formato dd/mm/aaaa'
          },
          regexp: {
            regexp: /^[0-9\/]+$/,
            message: 'La fecha sólo puede contener numeros'
          }
        }
      },
      sexo: {
        message: 'El sexo no es valido.',
        validators: {
          notEmpty: {
            message: 'El sexo no puede estar vacio.'
          }
        }
      },
      telefono: {
        message: 'El telefono no es valido.',
        validators: {
          stringLength: {
            min: 7,
            max: 10,
            message: 'El telefono debe tener el formato 2994472312'
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: 'El telefono sólo puede contener numeros'
          }
        }
      },
      celular: {
        message: 'El celular no es valido.',
        validators: {
          notEmpty: {
            message: 'El celular no puede estar vacio.'
          },
          stringLength: {
            min: 12,
            max: 12,
            message: 'El celular debe tener el siguiente formato 299156123456'
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: 'El celular sólo puede contener numeros'
          }
        }
      },
      email: {
				validators: {
					notEmpty: {
						message: 'El mail no puede estar vacio.'
					},
					emailAddress: {
						message: 'El mail ingresado no es valido.'
					}
				}
			},
      ocupacion: {
        message: 'La ocupacion no es valida',
        validators: {
          stringLength: {
            min: 2,
            max: 30,
            message: 'La ocupacion debe tener entre 2 y 30 caracteres'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\s]+$/,
            message: 'La ocupacion sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      empresa: {
        message: 'La empresa no es valida',
        validators: {
          stringLength: {
            min: 2,
            max: 30,
            message: 'La empresa debe tener entre 2 y 30 caracteres'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\s]+$/,
            message: 'La empresa sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      calle: {
        message: 'La calle no es valida',
        validators: {
          stringLength: {
            min: 2,
            max: 30,
            message: 'La calle debe tener entre 2 y 30 caracteres'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\s]+$/,
            message: 'El nombre de usuario sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      numeroCalle: {
        message: 'El numero no es valido.',
        validators: {
          stringLength: {
            min: 1,
            max: 30,
            message: 'El numero debe tener entre 1 y 30 caracteres.'
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: 'Solo puede contener numeros'
          }
        }
      },
      piso: {
        message: 'El piso no es valido',
        validators: {
          stringLength: {
            min: 1,
            max: 6,
            message: 'El piso debe tener entre 1 y 6 caracteres: Ej 1 A'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\n]+$/,
            message: 'El piso sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      localidad: {
        message: 'La localidad no es valida',
        validators: {
          notEmpty: {
            message: 'La localidad no puede estar vacia'
          },
          stringLength: {
            min: 3,
            max: 30,
            message: 'La localidad debe tener entre 3 y 30 caracteres'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\n]+$/,
            message: 'La localidad sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      cp: {
        message: 'El codigo postal no es valido.',
        validators: {
          notEmpty: {
            message: 'El codigo postal no puede estar vacio.'
          },
          stringLength: {
            min: 4,
            max: 4,
            message: 'El codigo postal debe tener 4 caracteres.'
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: 'El codigo postal sólo puede contener numeros'
          }
        }
      },
      provincia: {
        message: 'La provincia no es valida.',
        validators: {
          notEmpty: {
            message: 'La provincia no puede estar vacia.'
          },
          stringLength: {
            min: 3,
            max: 30,
            message: 'La provincia debe tener entre 3 y 30 caracteres.'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\s]+$/,
            message: 'La provincia sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
      fecha: {
        message: 'La fecha no es valida.',
        validators: {
          notEmpty: {
            message: 'La fecha no puede estar vacia.'
          },
          stringLength: {
            min: 10,
            max: 10,
            message: 'La fecha debe tener 10 caracteres.'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_\.\/]+$/,
            message: 'La fecha sólo puede consistir en orden alfabético, número, puntos y guión'
          }
        }
      },
    }
});
}
