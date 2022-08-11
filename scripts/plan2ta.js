const l = require("library")
const multi = l.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "planta", [
{//1
input: {
items: ["ggh2.1-semla/1",],
liquids: ["water/0.1"],
power: 1
},
output: {
items: ["ggh2.1-bleck/4",],
},
craftTime: 60
},
{//2
input: {
items: ["ggh2.1-semla/1",],
liquids: ["water/0.3"],
power: 1.5
},
output: {
items: ["ggh2.1-elov/3",],
},
craftTime: 60
},
{//3
input: {
items: ["ggh2.1-fosfor/1", "ggh2.1-semla/1",],
	liquids: ["water/0.5"],
power: 2.0
},
output: {
items: ["ggh2.1-gryn/2",],
},
craftTime: 60
},
{//4	
input: {
items: ["ggh2.1-fosfor/1","ggh2.1-azot/1", "ggh2.1-semla/3",],	
liquids: ["water/0.8"],
power: 2.5
},
output: {
items: ["ggh2.1-esinii/1",],
},
craftTime: 60
},
],{},{})