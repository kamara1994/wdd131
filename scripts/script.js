document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" }
    ];

    // Populate the product dropdown
    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Handle review counter on review.html
    const reviewCounterElement = document.getElementById("reviewCounter");
    if (reviewCounterElement) {
        const reviewCount = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", parseInt(reviewCount) + 1);
        reviewCounterElement.textContent = `Number of reviews submitted: ${localStorage.getItem("reviewCount")}`;
    }
});
