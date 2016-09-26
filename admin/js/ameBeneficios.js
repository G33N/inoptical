$(document).ready(function(){
    listarRegistrados();
});
function borrarRegistrados(id){
  $.ajax({
      type: 'POST',
      url: "datos/ameBeneficios.php",
      data: $(this).serialize() +"&orden="+3+"&id="+id,
      success:function(data){
              if(data.success === true ){
                  listarRegistrados();
                  alert(data.message);
              }
              if(data.success === false ){
                  alert(data.message);
              }
          }
  });
  return false;
}
function listarRegistrados(){
$.ajax({
        type: 'POST',
        url: "datos/ameBeneficios.php",
        data: $(this).serialize() +"&orden="+0,
        success: function(data){
                                $('#listarRegistrados').html("");
                                json=jQuery.parseJSON(data);
                                var objeto=json;
                                    for(i=0; i<= (objeto.length -1); i++){
                                        id=objeto[i].id;
                                        nombreApellido=objeto[i].nombreApellido;
                                        dni=objeto[i].dni;
                                        telefono=objeto[i].telefono;
                                        celular=objeto[i].celular;
                                        email=objeto[i].email;
                                        localidad=objeto[i].localidad;
                                        calle=objeto[i].calle;
                                        numeroCalle=objeto[i].numeroCalle;
                                        ocupacion=objeto[i].ocupacion;
                                        fecha=objeto[i].fecha;
                                        $('#listarRegistrados').append('<tr><td>'+dni+'</td><td>'+nombreApellido+'</td><td>'+telefono+'</td><td>'+celular+'</td><td>'+email+'</td><td>'+localidad+'</td><td>'+calle+' '+numeroCalle+'</td><td>'+ocupacion+'</td><td>'+fecha+'</td><td style="text-align: center;"><a href="javascript:" id="modalPedido" data-toggle="modal" data-target="#myModal'+i+'"><i class="fa fa-edit"></i></a><td style="text-align: center;"><a href="javascript:" class="g3" onClick="borrarRegistrados('+id+')"><i class="fa fa-times"></i></a></td></tr>');
                                        $('#modalProducto').append('<div id="myModal'+i+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Contact Form</h4></div><div class="modal-body"><form action="datos/ameProducto.php" method="POST" class="form-horizontal" role="form" id="formModificarProducto"><div class="form-group"><label class="col-sm-2 control-label">Nombre</label><div class="col-sm-4"><input type="text" class="form-control" name="txtnom"  value="'+nombreApellido+'" data-placement="bottom"></div><label class="col-sm-2 control-label">Telefono</label><div class="col-sm-4"><input type="text" class="form-control" name="txtdet" value="'+telefono+'" data-placement="bottom"></div></div><div class="form-group"><label class="col-sm-2 control-label">Celular</label><div class="col-sm-4"><input type="text" class="form-control" name="txtmar" value="'+celular+'" data-placement="bottom"></div><label class="col-sm-2 control-label">Email</label><div class="col-sm-4"><input type="text" class="form-control" name="txtsto" value="'+email+'" data-placement="bottom"></div></div><div class="form-group"><label class="col-sm-2 control-label">Localidad</label><div class="col-sm-4"><input type="text" class="form-control" name="txtcos" value="'+localidad+'" data-placement="bottom"></div><label class="col-sm-2 control-label">Calle</label><div class="col-sm-4"><input type="text" class="form-control" name="txtven" value="'+calle+'" data-placement="bottom"><input type="hidden" name="txtid" value="'+id+'"></div></div><h4 class="page-header"></h4><div class="row form-group"><div class="col-sm-6 pull-right"><button type="submit" class="btn btn-success" name="orden" value="2">Modificar</button><button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button></div></div></form></div></div></div></div>');
                                      }
                                    }
                                  });
                                  }
