import configData from './tabelle.json' assert {type: 'json'};

const tabData = configData;

const myJsonData = JSON.stringify(tabData);

const jsonParsed = JSON.parse(myJsonData);

console.log(jsonParsed.data.home[getRandomInt(3)].Production.Local);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById("cell1").value = jsonParsed.data.home[getRandomInt(5)].Production.Local;
document.getElementById("cell2").value = jsonParsed.data.home[getRandomInt(5)].Consumption.Local;
document.getElementById("cell3").value = jsonParsed.data.home[getRandomInt(5)].Balance.Local;

document.getElementById("community").innerHTML = jsonParsed.data.home[getRandomInt(5)].Production.Community;
document.getElementById("community2").innerHTML = jsonParsed.data.home[getRandomInt(5)].Consumption.Community;
document.getElementById("community3").innerHTML = jsonParsed.data.home[getRandomInt(5)].Balance.Community;

document.getElementById("cell4").value = jsonParsed.data.ufficio[getRandomInt(5)].Production.Local;
document.getElementById("cell5").value = jsonParsed.data.ufficio[getRandomInt(5)].Consumption.Local;
document.getElementById("cell6").value = jsonParsed.data.ufficio[getRandomInt(5)].Balance.Local;

document.getElementById("community4").innerHTML = jsonParsed.data.ufficio[getRandomInt(5)].Production.Community;
document.getElementById("community5").innerHTML = jsonParsed.data.ufficio[getRandomInt(5)].Consumption.Community;
document.getElementById("community6").innerHTML = jsonParsed.data.ufficio[getRandomInt(5)].Balance.Community;