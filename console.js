//Capture keyboard focus repeatedly
window.onload = function(){
    window.setInterval(
        function commandFocus() {
            $("#console-command").focus();
        },
        300
    );
}

//On screen println equiv
function log(new_row) {
    NUM_OF_ROWS = 12;
    for (var i = NUM_OF_ROWS; i > 1; i--) 
        $("#console-log-row-" + String(i)).html($("#console-log-row-" + String(i-1)).html());
    $("#console-log-row-1").html(new_row);
}

////////////Commands////////////
var help = { 
    command_alias_list: ["help"],
    on_execute: function(args) {
        log("&nbsp;");
        log("&nbsp;");
        log("&nbsp;");
        log("Welcome to Diego Perini's personal website.");
        log("&nbsp;");
        log("These are available commands that you can invoke:");
        log("help, who, doppl, linkedin, github, about, mailto, pgp");
        log("&nbsp;");
        log("(there are some hidden ones as well, discover yourself)");
        log("&nbsp;");
        log("Have fun!");
        log("&nbsp;");
    }
}

var cls = { 
    command_alias_list: ["clear", "cls"],
    on_execute: function(args) {
        for (var i = NUM_OF_ROWS; i > 0; i--) 
            $("#console-log-row-" + String(i)).html("&nbsp;");
    }
}

var nerd = { 
    command_alias_list: ["cd", "chmod", "ls"],
    on_execute: function(args) {
        log("Leave it alone nerd! (-_-\")");
    }
}

var acm = { 
    command_alias_list: ["acm"],
    on_execute: function(args) {
        log("&nbsp;");
        log("All Hail ACIMAYIZ!");
        log("&nbsp;");
    }
}

var about = { 
    command_alias_list: ["about"],
    on_execute: function(args) {
        alert("Diego PERINI\n\nE-mail: \ndiego@dperini.com\n\nSteam ID: \ndiegodeddo\n\nOrigin ID: \ndiegodeddo\n\n\nAny Javascript code found in this site\n(except JQuery) can freely be used without \nany permission. You may use jQuery project \nunder the terms of the MIT License. \n\nDejaVuSansMono typeface is freely available \nunder Public Domain.\n\n\nLast updated 29th March 2014");
    }
}

var linkedin = { 
    command_alias_list: ["linkedin"],
    on_execute: function(args) {
        window.open('http://www.linkedin.com/in/diegoperini','_blank');
    }
}

var github = { 
    command_alias_list: ["github"],
    on_execute: function(args) {
        window.open('https://github.com/diegoperini','_blank');
    }
}

var mailto = { 
    command_alias_list: ["mailto"],
    on_execute: function(args) {
        window.open('mailto:diego@dperini.com','_blank');
    }
}

var doppl = { 
    command_alias_list: ["doppl"],
    on_execute: function(args) {
        window.open('http://doppl.org','_blank');
    }
}

var pgp = { 
    command_alias_list: ["pgp","gpg"],
    on_execute: function(args) {
        window.open('http://dperini.com/pgp.txt','_blank');
    }
}

var who = { 
    command_alias_list: ["who", "who_are_you"],
    on_execute: function(args) {
        log("&nbsp;");
        log("&nbsp;");
        log("&nbsp;");
        log("I am Diego PERINI, a hobbyist computer engineer with idealistic goals and fancy ideas.");
        log("&nbsp;");
        log("This website is my playground, like a sandbox.");
        log("&nbsp;");
        log("If you lack necessary 'geek patience' to navigate around, please refer to the user friendly site.");
        log("&nbsp;");
        log("&nbsp;");
        log("&nbsp;");
    }
}
////////////////////////////////

//Available commands
var commands = {
    registered: [help, cls, nerd, acm, about, linkedin, github, mailto, doppl, who, pgp]
}

//Executes a command
function command(e) {
    if (e.keyCode == 13) {
        //if command is empty empty 
        var text = $("#console-command").val();
        if(text == "")
            return false;

        //Invoke command with arguments
        var invoked = false;
        var cmd = text.split(" ");
        for (var i = commands.registered.length - 1; i >= 0; i--) {
            var to_invoke = commands.registered[i];
            for (var j = to_invoke.command_alias_list.length - 1; j >= 0; j--) {
                if(to_invoke.command_alias_list[j] == cmd[0]) {
                    to_invoke.on_execute(cmd);
                    invoked = true;
                    break;
                }
            };
            
        };

        if(!invoked)
            log("Unknown command \"" + cmd[0] + "\"");

        //Clear command line
        $("#console-command").val("");
        return false;
    }
}
