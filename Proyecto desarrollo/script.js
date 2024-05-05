document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el botón realice su acción por defecto (navegar a "#consulta")
        document.querySelector('#consulta .panel').style.display = 'flex'; // Hace visible el panel
    });
});