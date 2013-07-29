window.onload = function(){
	window.setInterval(
		function commandFocus() {
			$("#console-command").focus();
		},
		300
	);
};

function log(new_row) {
	$("#console-log-row-12").html($("#console-log-row-11").html());
	$("#console-log-row-11").html($("#console-log-row-10").html());
	$("#console-log-row-10").html($("#console-log-row-9").html());
	$("#console-log-row-9").html($("#console-log-row-8").html());
	$("#console-log-row-8").html($("#console-log-row-7").html());
	$("#console-log-row-7").html($("#console-log-row-6").html());
	$("#console-log-row-6").html($("#console-log-row-5").html());
	$("#console-log-row-5").html($("#console-log-row-4").html());
	$("#console-log-row-4").html($("#console-log-row-3").html());
	$("#console-log-row-3").html($("#console-log-row-2").html());
	$("#console-log-row-2").html($("#console-log-row-1").html());
	$("#console-log-row-1").html(new_row);
}

function command(e) {
	if (e.keyCode == 13) {
		var text = $("#console-command").val();
		if(text == "")
			return false;
		switch(text) {
			case "help":
				log("&nbsp;");
				log("&nbsp;");
				log("&nbsp;");
				log("Welcome to Diego Perini's personal website.");
				log("&nbsp;");
				log("These are available commands that you can invoke:");
				log("help, linkedin, about, mailto");
				log("&nbsp;");
				log("Have fun!");
				log("&nbsp;");
				log("&nbsp;");
				log("&nbsp;");
				break;
			case "clear":
			case "cls":
				$("#console-log-row-1").html("&nbsp;");
				$("#console-log-row-2").html("&nbsp;");
				$("#console-log-row-3").html("&nbsp;");
				$("#console-log-row-4").html("&nbsp;");
				$("#console-log-row-5").html("&nbsp;");
				$("#console-log-row-6").html("&nbsp;");
				$("#console-log-row-7").html("&nbsp;");
				$("#console-log-row-8").html("&nbsp;");
				$("#console-log-row-9").html("&nbsp;");
				$("#console-log-row-10").html("&nbsp;");
				$("#console-log-row-11").html("&nbsp;");
				$("#console-log-row-12").html("&nbsp;");
				break;
			case "ls":
			case "chmod":
			case "cd":
				log("Leave it alone nerd! (-_-\")");
				break;
			case "acm":
				log("&nbsp;");
				log("All Hail ACIMAYIZ!");
				log("&nbsp;");
				break;
			case "about":
				alert("Diego PERINI\n\nGithub: \ndiegoperini\n\nE-mail: \ndiego@dperini.com\n\nSteam ID: \ndiegodeddo\n\nOrigin ID: \ndiegodeddo\n\n\nAny Javascript code found in this site\n(except JQuery) can freely be used without \nany permission. You may use jQuery project \nunder the terms of the MIT License. \n\nDejaVuSansMono typeface is freely available \nunder Public Domain.\n\n\nLast updated 18th March 2013");
				break;
			case "linkedin":
				window.open('http://www.linkedin.com/in/diegoperini','_newtab');
				break;
			case "mailto":
				window.open('mailto:diego@dperini.com','_newtab');
				break;
			default:
				log("Unknown command: " + text);
		}
		$("#console-command").val("");
        return false;
    }
}