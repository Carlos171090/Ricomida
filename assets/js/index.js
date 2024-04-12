$(document).ready(function(){
   
   $("#enviarCorreo").click( function(){
    alert("el correo fue en enviado correctamente")
   })

   $("h1").dblclick(function(){
      $(this).css({"color": "red"})
    });

    $("h2").click(function(){
      $("section").toggle();
    });
  
  });

   

  

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))