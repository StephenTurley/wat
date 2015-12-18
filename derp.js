var wordo = require('wordo');

var nouns = wordo.nouns.all; 
// ['console', 'test', 'describe', 'should', 'it', 'extrapolate',
// 	'space-time', 'quantum', 'filament',
// 	'theorem', 'tachyon', 'multiply', 'beam', 'bioelectromagnetics',
// 	'fossil', 'datums', 'particle', 'locomotion',
// 	'vulcanology', 'conundrum', 'yield', 'fission',
// 	'velocity', 'viable', 'taxonomy'];

var verbs = ['transmogrify', 'combobulate', 'evolutionize', 'test', 'hypothesize', 'destroy',
	'donkey-punch', 'vaporize', 'decimate', 'foster', 'engorge'];

var adjectives = wordo.adjectives.all; 
//['large', 'small', 'fast', 'slow', 'dumb', 'smart', 'very'];

var prepositions = ['on', 'over', 'behind', 'under', 'before', 'off'];

var joiners = ['the', 'a', 'some', 'your', 'their', 'no', 'one', 'few', 'many', 'an'];

var enders = ['.', '!', '!!!', '?', '?!'];

function getSpot(total) { return Math.floor(total * Math.random()) }

function getWord(bank) { return bank[getSpot(bank.length)] }

function add(bank) { return " " + getWord(bank) }

function jibbajabba() {
	var num = Math.floor(Math.random() * 5) + 1;
	var line = "";
	for (var i = 0; i < num; i++) {
		line += getWord(verbs) + add(joiners);
		// {prep} {adjec} {joiner} {noun}
		if (Math.random() < 0.25) {
			line += add(prepositions);
			line += add(joiners);
		}

		if (Math.random() < 0.5) {
			line += add(adjectives);
		}

		line += add(nouns);

		line += add(joiners) + " ";
	}

	line += getWord(nouns);
	line = line.replace(/^(.)/, line[0].toUpperCase());
	
	console.log(line += getWord(enders));
	setTimeout(jibbajabba, num * 100);
}

jibbajabba();