// Prevent Cypress from failing test on uncaught exceptions related to gtag
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('gtag is not defined')) {
      return false;
    }
  });
  
  describe('Maxi.rs Product Scraper', () => {
    const url = 'https://www.maxi.rs/Kratko-u-ponudi/c/19';
    let products = [];
  
    beforeEach(() => {
      cy.viewport(3000, 4000); // Set viewport size
      cy.visit(url); // Visit the Maxi.rs URL
      cy.contains('Odbijam').click({ force: true }); // Dismiss cookie popup if it exists
      cy.wait(2000); // Wait for the page to settle
    });
  
    // Function to scrape product details
    function scrapeProduct(index) {
      cy.get('.sc-y4jrw3-1').eq(index).click({ force: true }).wait(6000); // Click on product and wait
      cy.get('.sc-e3oax-8').invoke('text').then((title) => { // Get product title
        cy.get('div[data-testid="product-block-price-per-unit"]').invoke('text').then((price) => { // Get product price
          const cleanedPrice = price.trim().split(/\s+/)[0] + " rsd"; // Clean up price format
          products.push({ title: title.trim(), price: cleanedPrice }); // Push title and price to products array
          cy.visit(url); // Navigate back to main page
          cy.wait(4000); // Wait to avoid overwhelming the server
          cy.scrollTo('bottom').wait(4000);
        });
      });
    }
  
    // Test case to scrape multiple products
    it('Scrape product information from Maxi.rs', () => {
      // Scraping products 1 to 51 (adjust as per your needs)
      for (let i = 0; i < 40; i++) {
        scrapeProduct(i);
      }
    });
  
    // After all scraping is done, save products to a JSON file
    afterEach(() => {
      cy.wrap(products).then((updatedProducts) => {
        cy.writeFile('maxi_products.json', updatedProducts);
      });
    });
  
  });
  