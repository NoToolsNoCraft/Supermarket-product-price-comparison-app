/// <reference types="cypress" />

describe('Scrape Gomex Website', () => {
    it('Scrapes product titles and prices from the Gomex website', () => {
      // Open Gomex website
      cy.visit('https://gomex.rs/');
  
      // Wait for the page to load
      cy.wait(3000); // Adjust waiting time as needed
  
      // Click on "Nedeljna ponuda" button to navigate to the weekly offer
      cy.get('button[aria-label="Catalog Nedeljna ponuda"]').click();
  
      // Wait for the weekly offer products to load
      cy.wait(3000); // Adjust waiting time as needed
  
      // Initialize an array to store product data
      let products = [];
  
      // Function to scrape product details
      const scrapeProducts = () => {
        // Get all subtabs with product categories
        cy.get('button.ProductsCatalog-module_category__-vsdj').each((subcategoryBtn) => {
          // Click on each subcategory button to view products
          cy.wrap(subcategoryBtn).click({ force: true }); // Use { force: true } to force click if necessary
  
          // Wait for products to load in the subcategory
          cy.wait(1000); // Adjust waiting time as needed
  
          // Get product titles and prices
          cy.get('p.ProductCard-module_nameLabel__SLKoV').each((productName, index) => {
            // Ensure we click the next slider button to bring products into view
            cy.get('button.Slider-module_emblaButton__n3hj-').eq(index).click({ force: true }); // Adjust selector if needed
  
            cy.get('div.Slider-module_embla__container__I6-GW').eq(index).then((priceElement) => {
              const title = productName.text().trim();
              let price = priceElement.text().trim();
  
              // Append "din" to the price
              price = `${price} din`;
  
              // Store product data in the products array
              products.push({ title, price });
            });
          });
        }).then(() => {
          // After scraping all subcategories, save data to JSON file
          cy.writeFile('gomex_products.json', JSON.stringify(products, null, 2));
        });
      };
  
      // Initial scrape for the first page
      scrapeProducts();
    });
  });
  