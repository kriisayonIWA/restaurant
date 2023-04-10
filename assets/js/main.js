$(document).ready(function() {
    // Configuración del modal
    var modal = $("#myModal");
    var btn = $("#myBtn");
    var span = $(".modal-close");
  
    // Abrir el modal cuando se hace clic en el botón
    btn.click(function() {
      modal.css("display", "block");
    });
  
    // Cerrar el modal cuando se hace clic en la X
    span.click(function() {
      modal.css("display", "none");
    });
  
    // Cerrar el modal cuando se hace clic fuera del contenido
    $(window).click(function(event) {
      if (event.target == modal[0]) {
        modal.css("display", "none");
      }
    });
  
    // Manejar el botón de aumentar
    $("#increaseBtn").click(function() {
      var quantityInput = $("#quantityInput");
      var quantity = parseInt(quantityInput.val());
      quantityInput.val(quantity + 1);
    });
  
    // Manejar el botón de disminuir
    $("#decreaseBtn").click(function() {
      var quantityInput = $("#quantityInput");
      var quantity = parseInt(quantityInput.val());
      if (quantity > 1) {
        quantityInput.val(quantity - 1);
      }
    });
  
    // Manejar el botón "Añadir pedido"
    $("#addPedidoBtn").click(function() {
      // Obtener los valores de los checkboxes
      var ají = $("#ajíCheckbox").prop("checked");
      var ensalada = $("#ensaladaCheckbox").prop("checked");
      var canchita = $("#canchitaCheckbox").prop("checked");
      var tequeños = $("#tequeñosCheckbox").prop("checked");
  
      // Obtener la cantidad
      var quantity = parseInt($("#quantityInput").val());
  
      // Calcular el total
      var total = 18.00; // Precio inicial del menú
      if (canchita) {
        total += 1.50;
      }
      if (tequeños) {
        total += 3.50;
      }
      total *= quantity;
  
      // Mostrar el modal de confirmación
      $("#confirmModal").modal("show");
  
      // Configurar el contenido del modal de confirmación
      $("#confirmModalTitle").text("Confirmar pedido");
      $("#confirmModalContent").empty();
      $("#confirmModalContent").append("<p>¿Desea añadir " + quantity + " menú(s) al carrito?</p>");
      if (ají) {
        $("#confirmModalContent").append("<p>Con ají</p>");
      }
      if (ensalada) {
        $("#confirmModalContent").append("<p>Sin ensalada</p>");
      }
      $("#confirmModalContent").append("<p>Porción de canchita: " + (canchita ? "+ S/ 1.50" : "No") + "</p>");
      $("#confirmModalContent").append("<p>Porción de tequeños: " + (tequeños ? "+ S/ 3.50" : "No") + "</p>");
      $("#confirmModalContent").append("<p>Total: S/ " + total.toFixed(2) + "</p>");
  
      // Manejar el botón "Confirmar"
    $("#confirmModalConfirmBtn").off(); // Remover cualquier evento previo
    $("#confirmModalConfirmBtn").click(function() {
    // Añadir el pedido al carrito (aquí se debe agregar la lógica para agregar el pedido al carrito)
    $("#confirmModal").modal("hide");
    });
    });

// Manejar el botón "Agregar al carrito"
$("#addToCartBtn").click(function() {
    // Obtener la cantidad
    var quantity = parseInt($("#quantityInput").val());

    // Obtener los valores de los checkboxes
var ají = $("#ajíCheckbox").prop("checked");
var ensalada = $("#ensaladaCheckbox").prop("checked");
var canchita = $("#canchitaCheckbox").prop("checked");
var tequeños = $("#tequeñosCheckbox").prop("checked");

// Calcular el total
var total = 18.00; // Precio inicial del menú
if (canchita) {
  total += 1.50;
}
if (tequeños) {
  total += 3.50;
}
total *= quantity;

// Añadir el pedido al carrito (aquí se debe agregar la lógica para agregar el pedido al carrito)

// Mostrar el modal de éxito
$("#successModal").modal("show");

// Configurar el contenido del modal de éxito
$("#successModalTitle").text("Pedido agregado");
$("#successModalContent").empty();
$("#successModalContent").append("<p>Se ha añadido " + quantity + " menú(s) al carrito.</p>");
if (ají) {
  $("#successModalContent").append("<p>Con ají</p>");
}
if (ensalada) {
  $("#successModalContent").append("<p>Sin ensalada</p>");
}
$("#successModalContent").append("<p>Porción de canchita: " + (canchita ? "+ S/ 1.50" : "No") + "</p>");
$("#successModalContent").append("<p>Porción de tequeños: " + (tequeños ? "+ S/ 3.50" : "No") + "</p>");
$("#successModalContent").append("<p>Total: S/ " + total.toFixed(2) + "</p>");

// Limpiar los valores de los inputs y los checkboxes
$("#quantityInput").val(1);
$("#ajíCheckbox").prop("checked", false);
$("#ensaladaCheckbox").prop("checked", true);
$("#canchitaCheckbox").prop("checked", false);
$("#tequeñosCheckbox").prop("checked", false);
});
});
  