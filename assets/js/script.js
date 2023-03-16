$(document).ready(function () {

  $("#correo").click(function () {
    alert("Fue enviado correctamente"); // Se ha enviado correctamente
  });

  $("h6").on("dblclick", function () {
    $(this).css({
      "color": "red"
    })
  });


  $("div h5.card-title").click(function () {
    $(" div p.card-text").toggle();
  });

});
