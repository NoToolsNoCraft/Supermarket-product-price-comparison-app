Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('gtag is not defined') || err.message.includes('replaceChild')) {
      return false; // prevents Cypress from failing the test
  }
});

describe('Lidl.rs Product Scraper', () => {
    const URL = 'https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week';
    const products = [];

  it('Scrape product information from Lidl.rs', () => {
    cy.viewport(2000,2000)  
    cy.visit(URL).wait(1000);

       // Handle cookie popup if it exists
       cy.get('#onetrust-reject-all-handler', { timeout: 10000 }).should('be.visible').click({ force: true }).then(() => {
        // Wait for the page to load
        cy.wait(1000);

//========================================================================================================================
//Product 1

          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(0).scrollIntoView().click({ force: true }).then(() => {
              // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 2
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(1).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 3
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(2).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 4
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(3).scrollIntoView({ force: true }).click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 5
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(4).scrollIntoView().click({ force: true }).then(() => {
           // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 6
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(5).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 7
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(6).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 8
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(7).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 9
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(8).scrollIntoView().click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 10
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(9).click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//Product 11
cy.visit('https://www.lidl.rs/c/nize-cene/a10044360?channel=store&tabCode=Current_Sales_Week').wait(1000);
          // Retry logic for dynamic content
          cy.get('.ods-image-gallery__image').eq(10).click({ force: true }).then(() => {
            // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});
        

//========================================================================================================================
//                                   NAVIGATE TO THE NEXT PRODUCT SECTION (URL2)
//========================================================================================================================
//product 1
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

              // Retry logic for dynamic content
              cy.get('.ods-image-gallery__image').eq(0).click({ force: true }).then(() => {
                cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
                    // Initialize variables for price and measure
                    let cleanedPrice = 'N/A';
                    let measureText = 'N/A';
                
                    // Scrape product price if available
                    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
                      if ($price.length) {
                        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
                      }
                    }).then(() => {
                      // Scrape product measure if available
                      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
                        if ($measure.length) {
                          measureText = $measure.text().trim();
                        }
                      }).then(() => {
                        // Push product information to the array
                        products.push({
                          title: title.trim(),
                          price: cleanedPrice,
                          measure: measureText
                        });
                      });
                    });
                  });
                });


//========================================================================================================================
//product 2
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(1).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 3
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(2).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 4
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(3).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 5
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(4).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 6
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(5).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 7
cy.visit('https://www.lidl.rs/c/lidlova-mesara/a10050944?channel=store&tabCode=Current_Sales_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(6).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//                                          NAVIGATE TO THE NEXT PRODUCT SECTION (URL3)
//========================================================================================================================
//product 1
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(0).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 2
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(1).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 3
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(2).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 4
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(3).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 5
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(4).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 6
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(5).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });

//========================================================================================================================
//product 7
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(6).click({ force: true }).then(() => {
  // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//product 8
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(7).click({ force: true }).then(() => {
  // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//product 9
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(8).click({ force: true }).then(() => {
  // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//product 10
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(9).click({ force: true }).then(() => {
    // Scrape product title
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
      // Initialize variables for price and measure
      let cleanedPrice = 'N/A';
      let measureText = 'N/A';
  
      // Scrape product price if available
      cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
        if ($price.length) {
          cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
        }
      }).then(() => {
        // Scrape product measure if available
        cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
          if ($measure.length) {
            measureText = $measure.text().trim();
          }
        }).then(() => {
          // Push product information to the array
          products.push({
            title: title.trim(),
            price: cleanedPrice,
            measure: measureText
          });
        });
      });
    });
  });
  
//========================================================================================================================
//product 11
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(10).click({ force: true }).then(() => {
  // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//product 12
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(11).click({ force: true }).then(() => {
  // Scrape product title
  cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
    // Initialize variables for price and measure
    let cleanedPrice = 'N/A';
    let measureText = 'N/A';

    // Scrape product price if available
    cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
      if ($price.length) {
        cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
      }
    }).then(() => {
      // Scrape product measure if available
      cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
        if ($measure.length) {
          measureText = $measure.text().trim();
        }
      }).then(() => {
        // Push product information to the array
        products.push({
          title: title.trim(),
          price: cleanedPrice,
          measure: measureText
        });
      });
    });
  });
});

//========================================================================================================================
//product 13
cy.visit('https://www.lidl.rs/c/lidlova-svezina/a10050945?channel=store&tabCode=Previous_Week').wait(1000);

// Retry logic for dynamic content
cy.get('.ods-image-gallery__image').eq(12).click({ force: true }).then(() => {
    cy.get('.keyfacts__title', { timeout: 10000 }).should('be.visible').invoke('text').then((title) => {
        // Initialize variables for price and measure
        let cleanedPrice = 'N/A';
        let measureText = 'N/A';
    
        // Scrape product price if available
        cy.get('div.m-price__price', { timeout: 10000 }).then(($price) => {
          if ($price.length) {
            cleanedPrice = $price.text().trim().split(/\s+/)[0] + " rsd";
          }
        }).then(() => {
          // Scrape product measure if available
          cy.get('div.price-footer', { timeout: 10000 }).then(($measure) => {
            if ($measure.length) {
              measureText = $measure.text().trim();
            }
          }).then(() => {
            // Push product information to the array
            products.push({
              title: title.trim(),
              price: cleanedPrice,
              measure: measureText
            });
          });
        });
      });
    });



//========================================================================================================================
//                                          DONE! Ready for printing the data
//========================================================================================================================


      }).then(() => {
          // Save the products to a JSON file after all scraping is done
          cy.writeFile('lidl_products.json', products);
      });
  });
});
