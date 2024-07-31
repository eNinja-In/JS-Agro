document.addEventListener('DOMContentLoaded', () => {
    fetch('../resources/db/machine.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.PRODUCTS.forEach(product => {
                const productElement = document.createElement('button');
                productElement.classList.add('product');
                
                const imgElement = document.createElement('img');
                imgElement.src = `../resources/assets/${product.IMAGE}.png`;  // Assuming the images are in the same directory and have .jpg extension
                imgElement.alt = product.TITLE;
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = product.TITLE;
                
                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = product.Discription;

                const ButtonElement = document.createElement('button');
                ButtonElement.classList.add('productBtn');
                ButtonElement.textContent = "Learn More"

                productElement.appendChild(imgElement);
                productElement.appendChild(titleElement);
                productElement.appendChild(descriptionElement);
                productElement.appendChild(ButtonElement);
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
let proUpper = document.querySelector(".productMainUpper")
proUpper.innerHTML = `<h2>JS-Agro Equipments</h2><p>"Next-Generation Equipment for the Modern Farmer"</p>`;

document.addEventListener('DOMContentLoaded', () => {
    let proClickStyle = document.querySelectorAll(".product");
    proClickStyle.forEach((elmt) => {
        elmt.addEventListener("click", () => {
            console.log("Clicked");
            // Apply multiple styles
            elmt.style.cssText = `width: 32%; margin: 0; margin-bottom: 3%; padding: 0;`;
        });
    });
});


