document.querySelector("#submit9").addEventListener("click", function() {
  event.preventDefault();
  var toDo9 = document.getElementById("nineToDo").value;
  localStorage.setItem("toDo9", toDo9);
  getData9();
});
getData9();
function getData9() {
  var field1 = localStorage.getItem("toDo9");
  document.getElementById("nineToDo").value = field1;
}

document.querySelector("#submit10").addEventListener("click", function() {
  event.preventDefault();
  var toDo10 = document.getElementById("tenToDo").value;
  localStorage.setItem("toDo10", toDo10);
  getData10();
});
getData10();
function getData10() {
  var field1 = localStorage.getItem("toDo10");
  document.getElementById("tenToDo").value = field1;
}

document.querySelector("#submit11").addEventListener("click", function() {
  event.preventDefault();
  var toDo11 = document.getElementById("elevenToDo").value;
  localStorage.setItem("toDo11", toDo11);
  getData11();
});
getData11();
function getData11() {
  var field1 = localStorage.getItem("toDo11");
  document.getElementById("elevenToDo").value = field1;
}

document.querySelector("#submit12").addEventListener("click", function() {
  event.preventDefault();
  var toDo12 = document.getElementById("twelveToDo").value;
  localStorage.setItem("toDo12", toDo12);
  getData12();
});
getData12();
function getData12() {
  var field1 = localStorage.getItem("toDo12");
  document.getElementById("twelveToDo").value = field1;
}

document.querySelector("#submit1").addEventListener("click", function() {
  event.preventDefault();
  var toDo1 = document.getElementById("oneToDo").value;
  localStorage.setItem("toDo1", toDo1);
  getData1();
});
getData1();
function getData1() {
  var field1 = localStorage.getItem("toDo1");
  document.getElementById("oneToDo").value = field1;
}

document.querySelector("#submit2").addEventListener("click", function() {
  event.preventDefault();
  var toDo2 = document.getElementById("twoToDo").value;
  localStorage.setItem("toDo2", toDo2);
  getData2();
});
getData2();
function getData2() {
  var field1 = localStorage.getItem("toDo2");
  document.getElementById("twoToDo").value = field1;
}

document.querySelector("#submit3").addEventListener("click", function() {
  event.preventDefault();
  var toDo3 = document.getElementById("threeToDo").value;
  localStorage.setItem("toDo3", toDo3);
  getData3();
});
getData3();
function getData3() {
  var field1 = localStorage.getItem("toDo3");
  document.getElementById("threeToDo").value = field1;
}

document.querySelector("#submit4").addEventListener("click", function() {
  event.preventDefault();
  var toDo4 = document.getElementById("fourToDo").value;
  localStorage.setItem("toDo4", toDo4);
  getData4();
});
getData4();
function getData4() {
  var field1 = localStorage.getItem("toDo4");
  document.getElementById("fourToDo").value = field1;
}

document.querySelector("#submit5").addEventListener("click", function() {
  event.preventDefault();
  var toDo5 = document.getElementById("fiveToDo").value;
  localStorage.setItem("toDo5", toDo5);
  getData5();
});
getData5();
function getData5() {
  var field1 = localStorage.getItem("toDo5");
  document.getElementById("fiveToDo").value = field1;
}
