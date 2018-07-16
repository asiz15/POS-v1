require(['c3', 'jquery'], function (c3, $) {
    $(document).ready(function() {

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


// ADD SERVICE

      $("#addService").click(function(event) {
        /* Act on the event */
        event.preventDefault();
        services++;
        $(".service-row:last").after(serviceRow);
        if (services != 1) {
          $("#removeService").prop('disabled', false);
        }
        return services;
      });

// REMOVE SERVICE

      $("#removeService").click(function(event) {
        /* Act on the event */
        event.preventDefault();
        services--;
        $(".service-row:last").remove();
        if (services === 1) {
          $("#removeService").prop('disabled', true);
        }
        return services;
      });


    });
});
