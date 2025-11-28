// login.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtiene el formulario por su ID
    const formLogin = document.getElementById('formLogin');
    
    // Verifica que el formulario exista
    if (formLogin) {
        // 2. Inicializa el objeto Modal de Bootstrap usando su ID
        const modalExito = new bootstrap.Modal(document.getElementById('modalExitoLogin'));

        // 3. Agrega el escuchador de eventos al formulario
        formLogin.addEventListener('submit', function(event) {
            
            // 4. Detiene el envío predeterminado del formulario para evitar la recarga
            event.preventDefault(); 
            
            // **Aquí iría la lógica REAL de validación/AJAX**
            // Si el login es exitoso, llamamos a .show()
            
            // Muestra el modal
            modalExito.show();
        });
    } else {
        console.error("Error JS: El formulario con ID 'formLogin' no se encontró. Revisa tu HTML.");
    }
});