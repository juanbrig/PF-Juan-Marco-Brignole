function buscarProducto() {
    const input = document.getElementById('buscarInput').value.toLowerCase();
    buscarProductoDesdeInput(input);
}

function buscarProductoDesdeInput(input) {
    const productos = document.querySelectorAll('.grid-item');
    
    productos.forEach(producto => {
        producto.style.display = producto.getAttribute('nombre_producto').toLowerCase().includes(input) ? 'block' : 'none';
    });
}

document.getElementById('buscarInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarProducto();
    }
});