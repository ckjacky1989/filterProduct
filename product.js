const productListElement = document.getElementById("productList");
const categoryFilterElement = document.getElementById("categoryFilter");
const inStockOnlyElement = document.getElementById("inStockOnly");

document.addEventListener("DOMContentLoaded", ()=> 
{
    categoryFilterElement.addEventListener("change", filterProducts);
    inStockOnlyElement.addEventListener("change", filterProducts);
    filterProducts();
})

const products = 
[
    { name: "Television", category: "Electronics", inStock: true },
    { name: "Computer", category: "Electronics", inStock: false },
    { name: "Apple", category: "Food", inStock: true },
    { name: "Ham", category: "Food", inStock: true },
    { name: "T-Shirt", category: "Clothing", inStock: true },
    { name: "Dress", category: "Clothing", inStock: false }  
];



function filterProducts() 
{
    const category = categoryFilterElement.value;
    const inStockOnly = inStockOnlyElement.checked;

    const filteredList = products.filter(product => 
    {
        const selectedCategory = (category == "All") || (product.category == category);
        const selectedInStock = (!inStockOnly) || product.inStock;
        return selectedCategory && selectedInStock;
    });

    productListElement.innerHTML = "";
    if (filteredList.length == 0) 
    {
        productListElement.innerHTML = "<p>No products found.</p>";
        return;
    }
    else
    {
        const table = document.createElement("table");

        table.innerHTML = 
        `<tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
        </tr>`;

        filteredList.forEach(product => 
        {
            const row = document.createElement("tr");
            row.innerHTML = 
            `<td>${product.name}</td>
            <td>${product.category}</td>`;
            if(product.inStock)
            {
                row.innerHTML+=`<td>In Stock</td>`;
            }else{
                row.innerHTML+=`<td>Out of Stock</td>`;
            }

            table.appendChild(row);
        });

        productListElement.appendChild(table);
    }


}

    

