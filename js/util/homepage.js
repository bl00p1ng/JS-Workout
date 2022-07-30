document.addEventListener('DOMContentLoaded', function() {
    // Habilitar el botón flotante
    const floatingBtn = document.querySelectorAll('.fixed-action-btn');
    const instancesFloatingBtn = M.FloatingActionButton.init(floatingBtn);

    // Habilitar el modal
    const modals = document.querySelectorAll('.modal');
    const instancesModal = M.Modal.init(modals, {
        // Refrescar la página al cerrar el modal
        onCloseEnd: () => {
            window.location.reload()
        }
    })

});