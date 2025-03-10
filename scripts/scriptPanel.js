function openForm() {
    document.getElementById("form-container").style.display = "block";
}

function closeForm() {
    document.getElementById("form-container").style.display = "none";
}

document.getElementById("product-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const image = document.getElementById("image").files[0];
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    const productElement = document.createElement("div");
    productElement.classList.add("producto");

    const imageUrl = URL.createObjectURL(image);

    productElement.innerHTML = `
        <img src="${imageUrl}" alt="${name}" style="width:100%; border-radius:5px;">
        <div class="producto-info">
            <h3 class="producto-nombre">${name}</h3>
            <p class="producto-descripcion">${description}</p>
            <p class="producto-precio">$${price}</p>
            <button class="producto-boton" onclick="removeProduct(this)">Eliminar</button>
        </div>
    `;

    document.getElementById("product-list").appendChild(productElement);

    closeForm();

    document.getElementById("product-form").reset();
});


function removeProduct(button) {
    const productElement = button.parentElement.parentElement;
    productElement.remove();
}
