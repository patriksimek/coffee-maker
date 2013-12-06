var cp = require('child_process');
var fs = require('fs');

if (!fs.existsSync(process.cwd() +"/.coffeemaker")) {
	console.error("File .coffeemaker not found.");
	process.exit(1);
};

var coffees = fs.readFileSync(process.cwd() +"/.coffeemaker", "utf8").split("\n");
var processes = [];

for (var i = 0; i < coffees.length; i++) {
	if (coffees[i]) {
		var cmd = coffees[i].split(' ');
		
		if (process.platform == 'win32') {
			cmd.unshift('/c');
			var proc = cp.spawn(process.env.comspec, cmd, {stdio: 'inherit'});
		} else {
			var proc = cp.spawn(cmd.shift(), cmd, {stdio: 'inherit'});
		};

		processes.push(proc);
	}
};

if (processes.length == 0) {
	console.log("File .coffeemaker is empty.");
	process.exit()
};