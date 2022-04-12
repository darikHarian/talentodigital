var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')); 
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl) });

$(document).ready(function(){
    $("#enviarCorreo").on('click', function(){
        alert("El correo fue enviado correctamente...");
    });
});

$(document).ready(function(){
    $(".change-color").dblclick(function(){ $(this).css({
          "color": "red",
        });
    });
});

function toggle1() {

    var x = document.getElementById('toggle1');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

  function toggle2() {

    var x = document.getElementById('toggle2');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

  function toggle3() {

    var x = document.getElementById('toggle3');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }