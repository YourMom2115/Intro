

const contenedorProductos = document.getElementById("contenedor-productos");

productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.className = "producto";

    productoDiv.innerHTML = `
    <img src="${producto.imagen}"
                    <h2 class="producto-nombre">${producto.nombre}</h2>
                    <p class="producto-descripcion">${producto.descripcion}.</p>
                    <div class="producto-precio-carrito">
                        <span class="producto-precio">$${producto.precio}</span>
                        <button class="producto-boton">Añadir al carrito</button>
                    </div>
                </div>
            </div>
`;
    contenedorProductos.appendChild(productoDiv);
});
