document.querySelector("#submit9").addEventListener("click", function() {
  event.preventDefault();
  var toDo9 = document.getElementById("nineToDo-9").value;
  localStorage.setItem("toDo9", toDo9);
  getData9();
});
getData9();
function getData9() {
  var field1 = localStorage.getItem("toDo9");
  document.getElementById("nineToDo-9").value = field1;
}

document.querySelector("#submit10").addEventListener("click", function() {
  event.preventDefault();
  var toDo10 = document.getElementById("tenToDo-10").value;
  localStorage.setItem("toDo10", toDo10);
  getData10();
});
getData10();
function getData10() {
  var field1 = localStorage.getItem("toDo10");
  document.getElementById("tenToDo-10").value = field1;
}

document.querySelector("#submit11").addEventListener("click", function() {
  event.preventDefault();
  var toDo11 = document.getElementById("elevenToDo-11").value;
  localStorage.setItem("toDo11", toDo11);
  getData11();
});
getData11();
function getData11() {
  var field1 = localStorage.getItem("toDo11");
  document.getElementById("elevenToDo-11").value = field1;
}

document.querySelector("#submit12").addEventListener("click", function() {
  event.preventDefault();
  var toDo12 = document.getElementById("twelveToDo-12").value;
  localStorage.setItem("toDo12", toDo12);
  getData12();
});
getData12();
function getData12() {
  var field1 = localStorage.getItem("toDo12");
  document.getElementById("twelveToDo-12").value = field1;
}

document.querySelector("#submit1").addEventListener("click", function() {
  event.preventDefault();
  var toDo1 = document.getElementById("oneToDo-13").value;
  localStorage.setItem("toDo1", toDo1);
  getData1();
});
getData1();
function getData1() {
  var field1 = localStorage.getItem("toDo1");
  document.getElementById("oneToDo-13").value = field1;
}

document.querySelector("#submit2").addEventListener("click", function() {
  event.preventDefault();
  var toDo2 = document.getElementById("twoToDo-14").value;
  localStorage.setItem("toDo2", toDo2);
  getData2();
});
getData2();
function getData2() {
  var field1 = localStorage.getItem("toDo2");
  document.getElementById("twoToDo-14").value = field1;
}

document.querySelector("#submit3").addEventListener("click", function() {
  event.preventDefault();
  var toDo3 = document.getElementById("threeToDo-15").value;
  localStorage.setItem("toDo3", toDo3);
  getData3();
});
getData3();
function getData3() {
  var field1 = localStorage.getItem("toDo3");
  document.getElementById("threeToDo-15").value = field1;
}

document.querySelector("#submit4").addEventListener("click", function() {
  event.preventDefault();
  var toDo4 = document.getElementById("fourToDo-16").value;
  localStorage.setItem("toDo4", toDo4);
  getData4();
});
getData4();
function getData4() {
  var field1 = localStorage.getItem("toDo4");
  document.getElementById("fourToDo-16").value = field1;
}

document.querySelector("#submit5").addEventListener("click", function() {
  event.preventDefault();
  var toDo5 = document.getElementById("fiveToDo-17").value;
  localStorage.setItem("toDo5", toDo5);
  getData5();
});
getData5();
function getData5() {
  var field1 = localStorage.getItem("toDo5");
  document.getElementById("fiveToDo-17").value = field1;
}

function hourUpdater() {
  var currentHour = moment().hours();
  console.log(currentHour);
  $(".time-block").each(function() {
    var blockHour = parseInt(
      $(this)
        .attr("id")
        .split("-")[1]
    );
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();
