function menuToggle() {
  const toggleMenu = document.querySelector('.dropdown-menu');
  toggleMenu.classList.toggle('active')
}

const d = new Date;

let hours = d.getHours();
let minutes = d.getMinutes();

function roundTo5() {

  if (minutes < 10) {
    return hours + ":" + "0" + Math.floor(minutes / 5) * 5;
  }
  else {
    return hours + ":" + Math.floor(minutes / 5) * 5;
  }
}
document.getElementById("hour").innerHTML = roundTo5();

function openTab(evt, dataSet) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }
  document.getElementById(dataSet).style.display = "block";
  evt.currentTarget.className += "active";
}


function tableHidden(idOffice) {
  let tableElement = document.getElementById(idOffice);

  tableElement.style.display = "none";
}


function calculatePercentage(idCell1, idCommunity, idOutput) {

  let firstNumber = document.getElementById(idCell1).value;
  let secondNumber = document.getElementById(idCommunity).innerHTML;

  let result = (firstNumber / secondNumber) * 100;

  document.getElementById(idOutput).innerHTML = result.toFixed(0) + "%";
}

window.onload = function () {
  tableHidden("office");

  calculatePercentage("cell1", "community", "output");
  calculatePercentage("cell2", "community2", "output2");
  calculatePercentage("cell3", "community3", "output3");
}

document.getElementById("thisMonth").style.display = "none";
document.getElementById("lastMonth").style.display = "none";
document.getElementById("year").style.display = "none";

function darkMode() {
  pageBodyElement = document.body;
  pageBodyElement.classList.toggle("dark-mode");
}
