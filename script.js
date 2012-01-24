$(document).ready(function() {

    $('#example').dataTable( {
	"bPaginate": false,
	"bLengthChange": false,
	"bFilter": true,
	"bSort": false,
	"bInfo": false,
	"bAutoWidth": false } );
} );

function show_row_editor () {
    $('tbody').before('\
<tr class="even">\
<td align="left"><input id="row_field_1" type="text" size="8"></td>\
<td align="left"><input id="row_field_2" type="text" size="8"></td>\
<td align="left"><input id="row_field_3" type="text" size="8"></td>\
<td align="left"><input id="row_field_4" type="text" size="8"></td>\
<td class="currency">\
<input id="row_field_5" type="text" size="8" \
onblur="validate_input(); insert_data(); "> \
</td>\
</tr>');

}

function validate_input() {

}

function insert_data() {
}
