alert("hola mundo"); 
alert("hola mundo_editado"); 
Console.log(“cambios en el archivo”);
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>jQuery  Datepicker </title>
		  <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
		  <link rel="stylesheet" href="style.css">
		  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
		  <script src="jquery.ui.datepicker-es.js"></script>
		<script>

		   $(function() {

		    	$( "#datepicker" ).datepicker({
						regional: "Es",
					  changeMonth: true,
					  changeYear: true,
					  yearRange: '1925:2025'
					});

		   });

		</script>
	</head>
	 <body>
	    <p>Date: <input type="text" id="datepicker">
	 </body>
</html>
