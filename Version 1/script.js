const categories = {
    "Čokolada": ["čokolada", "cokolada"],
    "Majonez": ["majonez"],
    "Paradajz": ["paradajz"],
    "Kobasice": ["kobasica"],
    "Posebne kobasice / Salame": ["posebna kobasica", "pileca posebna", "salama"],
    "Pileća prsa": ["pileća prsa", "pileca prsa"],
    "Pašteta": ["pašteta", "pasteta"],
    "Ćevapi": ["ćevapi", "cevapi", "ćevapčići"],
    "Šnicla": ["šnicla"],
    "Krilca": ["krilca"],
    "Voće": ["banana", "banane", "jabuka", "jabuke", "mandarine"],
    "Sokovi": ["borovnica", "borovnice", "jabuka", "jabuke", "narandža", "pomorandže", "breskva", "breskve"],
    "Za domaćice": ["daska za peglanje", "bokal", "čistač", "cistac"],
    "Alati": ["metla", "auto set"]
};

//================================================================================

// Function to filter products based on exclusion rules
function filterProducts(category, exclusions) {
    return categories[category].filter(product => {
        let lowerCaseProduct = product.toLowerCase();
        // Check if product does not include any exclusion keyword
        return !exclusions.some(exclusion => lowerCaseProduct.includes(exclusion));
    });
}

// Example usage: Exclude "Krem banana" from the "Voće" category if found as a keyword
let excludedKeywords = ["krem banana"];
categories["Voće"] = filterProducts("Voće", excludedKeywords);

console.log(categories["Voće"]);

//================================================================================0

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

async function loadAllData() {
    const lidlData = await fetchData('lidl_products.json');
    const maxiData = await fetchData('maxi_products.json');
    const gomexData = await fetchData('gomex_products.json');
    return { lidlData, maxiData, gomexData };
}

function filterProductsByCategory(data, keywords) {
    return data.filter(product => keywords.some(keyword => product.title.toLowerCase().includes(keyword)));
}

function renderProduct(shop, product) {
    return `
        <div class="product">
            <strong>Prodavnica:</strong> ${shop}<br>
            <strong>Proizvod:</strong> ${product.title}<br>
            <strong>Cena:</strong> ${product.price}<br>
            ${product.measure ? `<strong>Količina:</strong> ${product.measure}<br>` : ''}
        </div>
    `;
}

function renderCategory(title, products) {
    return `
        <div class="category">
            <h2 class="category-title">${title}</h2>
            ${products.map(product => renderProduct(product.shop, product)).join('')}
        </div>
    `;
}

function renderAdditionalProducts(products) {
    return products.map(product => renderProduct(product.shop, product)).join('');
}

async function comparePrices() {
    const resultsDiv = document.getElementById('results');
    const additionalTitle = document.getElementById('additional-title');
    const additionalResultsDiv = document.getElementById('additional-results');
    resultsDiv.innerHTML = '';
    additionalResultsDiv.innerHTML = '';

    loadAllData().then(({ lidlData, maxiData, gomexData }) => {
        const allProductsByCategory = {};
        const additionalProducts = [];

        Object.keys(categories).forEach(category => {
            const keywords = categories[category];
            const filteredLidl = filterProductsByCategory(lidlData, keywords);
            const filteredMaxi = filterProductsByCategory(maxiData, keywords);
            const filteredGomex = filterProductsByCategory(gomexData, keywords);

            const allProducts = [
                ...filteredLidl.map(product => ({ shop: 'Lidl', ...product })),
                ...filteredMaxi.map(product => ({ shop: 'Maxi', ...product })),
                ...filteredGomex.map(product => ({ shop: 'Gomex', ...product }))
            ];

            if (allProducts.length > 1) {
                allProductsByCategory[category] = allProducts;
            } else {
                additionalProducts.push(...allProducts);
            }
        });

        Object.keys(allProductsByCategory).forEach(category => {
            resultsDiv.innerHTML += renderCategory(category, allProductsByCategory[category]);
        });

        if (additionalProducts.length > 0) {
            additionalTitle.style.display = 'block';
            additionalResultsDiv.innerHTML = renderAdditionalProducts(additionalProducts);
        } else {
            additionalTitle.style.display = 'none';
        }
    }).catch(error => {
        console.error('Error loading data:', error);
        resultsDiv.innerHTML = '<p>There was an error loading the data.</p>';
    });
}

// Automatically compare prices on load
document.addEventListener('DOMContentLoaded', comparePrices);
