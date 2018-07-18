require(['c3', 'jquery'], function (c3, $) {
    $(document).ready(function() {

      $('.product-card').find('*').prop('disabled', true);
      $('.product-card').find('#enableProduct').prop('disabled', false);




  $("#enableProduct").change(function() {
      if ($(this).is(':checked')) {
          $('.product-card').find('*').prop('disabled', false);
      }else {
        $('.product-card').find('*').prop('disabled', true);
        $('.product-card').find('#enableProduct').prop('disabled', false);

      }

    });

  var services = 1;

  var serviceRow = '<tr class="service-row">'+
  '    					<td class="pl-0">'+
  '    						<select class="custom-select" name="venta_atendio">'+
  '    							<option value="STATUS_CODE" selected>Francisco</option>'+
  '    							<option value="JSON_BODY">Camila</option>'+
  '    							<option value="HEADERS">Cote</option>'+
  '    						</select>'+
  '    					</td>'+
  '    					<td>'+
  '                <select class="custom-select" name="venta_atendio">'+
  '    							<option value="STATUS_CODE" selected>Francisco</option>'+
  '    							<option value="JSON_BODY">Camila</option>'+
  '    							<option value="HEADERS">Cote</option>'+
  '    						</select>'+
  '    					<td>'+
  '                <select class="custom-select" name="venta_atendio">'+
  '    							<option value="STATUS_CODE" selected>Francisco</option>'+
  '    							<option value="JSON_BODY">Camila</option>'+
  '    							<option value="HEADERS">Cote</option>'+
  '    						</select>'+
  '    					</td>'+
  '    					<td class="pr-0">'+
  '    						<input type="text" class="form-control" value="200">'+
  '    					</td>'+
  '    				</tr>';



var productRow = '<tr class="product-row">'+
'                <td>'+
'                  <input type="text" name="venta_producto_codigo" class="form-control">'+
'                </td>'+
'                <td class="pl-0">'+
'                  <select class="custom-select" name="venta_producto_categoria">'+
'                    <option value="STATUS_CODE" selected>*</option>'+
'                    <option value="JSON_BODY">-</option>'+
'                    <option value="HEADERS">-</option>'+
'                  </select>'+
'                </td>'+
'                <td>'+
'                  <select class="custom-select" name="venta_producto_detalle">'+
'                    <option value="STATUS_CODE" selected>Francisco</option>'+
'                    <option value="JSON_BODY">Camila</option>'+
'                    <option value="HEADERS">Cote</option>'+
'                  </select>'+
'                <td class="pr-0">'+
'                  <input type="text" class="form-control" value="200" name="venta_producto_precio">'+
'                </td>'+
'              </tr>';




function evaluaBoton(boton){
  // Evalua boton
  if (services != 1) {
    $(boton).prop('disabled', false);
  }else if (services === 1) {
    $(boton).prop('disabled', true);
  }
  return services;
};

// FUNCION AGREGA FILA
  function addRow(ultimo,agrega){
      event.preventDefault();

      $(ultimo).after(agrega);
      services++;


      return services;
  };

// FUNCION REMUEVE FILA
  function removeRow(ultimo){
    event.preventDefault();
    $(ultimo).remove();
    services--;
    evaluaBoton();
    return services;

  };

// agregar servicio

     $("#addService").click(function(event) {
        /* Act on the event */
        addRow(".service-row:last", serviceRow);
        evaluaBoton("#removeService");

      });

      //
      $("#removeService").click(function(event) {
        /* Act on the event */

        removeRow(".service-row:last");
        evaluaBoton("#removeService");


      });

      $("#addProduct").click(function(event) {
        /* Act on the event */
        addRow(".product-row:last", productRow);
        evaluaBoton("#removeProduct");
      });

      $("#removeProduct").click(function(event) {
        /* Act on the event */

        removeRow(".product-row:last");
        evaluaBoton("#removeProduct");
      });







  //


    });
});
