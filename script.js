$(document).ready(function() {

    $('#example').dataTable( {
	"bPaginate": false,
	"bLengthChange": false,
	"bFilter": true,
	"bSort": false,
	"bInfo": false,
	"bAutoWidth": false } );
} );

function show_row_editor() {
    var elem = document.getElementById("input_line");
    elem.style.display='';
}

function hide_row_editor() {
    var elem = document.getElementById("input_line");
    elem.style.display='none';
}

function clear_row_editor() {
    var inputs = document.getElementById("input_line").children;

    for( i = 0; i < inputs.length; i++ ) {
	inputs[i].firstElementChild.value = "";
    }
}

function validate_and_insert() {
    var tmp = validate_input();
    if (tmp == null) return;
    else insert_data(tmp);
}

function validate_input() {
    var inputs = document.getElementById("input_line").children;
    var tmp = [];

    for( i = 0; i < inputs.length; i++ ) {
	tmp.push(inputs[i].firstElementChild.value);
    }

    console.log(tmp);
    // Check conditions

    for( i = 0; i < tmp.length; i++ ) {
	if (tmp[i] == "") {
	    console.warn("Cell " + i + " is empty!");
	    return null;
	}
    }

    return tmp;
}

function handleEnter(inField, e) {
    var charCode;
    if (e && e.which) {
	charCode = e.which;
    } else if (window.event) {
	e = window.event;
	charCode = e.keyCode;
    }

    if (charCode == 13) {
	validate_and_insert();
    }
}

function insert_data(tmp) {
    $('#example').dataTable().fnAddData(tmp, true);
    clear_row_editor();
    hide_row_editor();
}
