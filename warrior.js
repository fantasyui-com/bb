/*

  This book is a JavaScript module.

*/

import introduction from './modules/introduction.mjs';


const elements = [
	introduction,



    ]
	},

];

elements.forEach(element => {
	element.html = element.html.replace(/^\t{3}/gm, '');
});

export default elements;


/*

{"name":"introduction", "title":"Introduction"},

{"name":"hunter", "title":"The Hunter"},
{"name":"adventurer", "title":"The Adventurer"},
{"name":"soldier", "title":"The Soldier"},

{"name":"knight", "title":"The Knight of Virtue"},
{"name":"gentleman", "title":"Lady and Gentleman"},
{"name":"officer", "title":"The Officer"},

{"name":"intellectual", "title":"The Intellectual"},
{"name":"athlete", "title":"The Athlete"},
{"name":"humanitarian", "title":"The Humanitarian"},

{"name":"ultra", "title":"The Ultra"},
{"name":"superhero", "title":"The Superhero"},
{"name":"astronomer", "title":"The Astronomer"},
{"name":"philosopher", "title":"The Philosopher"},


{"name":"skeptic", "title":"The Skeptic"},
{"name":"scientist", "title":"The Scientist"},


{"name":"explorer", "title":"The Explorer"},
{"name":"discoverer", "title":"The Discoverer"},

{"name":"dancer", "title":"The Dancer"},
{"name":"bodybuilder", "title":"The Bodybuilder"},


{"name":"chef", "title":"The Chef"},
{"name":"maker", "title":"The Maker"},

{"name":"dj", "title":"The DJ"},
{"name":"musician", "title":"The Musician"},

{"name":"sculptor", "title":"The Sculptor"},
{"name":"photographer", "title":"The Photographer"},

{"name":"artist", "title":"The Artist"},
{"name":"designer", "title":"The Designer"},
{"name":"graffitist", "title":"The Graffitist"},


{"name":"hacker", "title":"The Hacker"},
{"name":"wizard", "title":"The Wizard"},
{"name":"guru", "title":"The Guru"},
{"name":"programmer", "title":"The Programmer"},
{"name":"web-developer", "title":"The Web Developer"},

{"name":"visionary", "title":"The Visionary"},
{"name":"founder", "title":"The Founder"}

*/
