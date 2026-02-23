/**
 * OneKarma.AI Landing Website - Main JavaScript
 * 
 * This file handles:
 * - Dynamic product card rendering
 * - Smooth scroll navigation
 * - Scroll-triggered animations
 * - Dynamic year in footer
 */

// ============================================
// Product Data
// ============================================

/**
 * Product data array
 * Each product has: icon, name, description, and status
 * Status can be: 'live', 'beta', or 'coming-soon'
 */
const products = [
  {
    icon: '🧠',
    name: 'Care Management AI',
    description: 'Intelligent care coordination and patient management for healthcare workflows',
    status: 'live'
  },
  {
    icon: '🔧',
    name: 'JIRA AI Integration',
    description: 'AI-powered enhancements for JIRA project management and workflow automation',
    status: 'beta'
  },
  {
    icon: '🔐',
    name: 'OneKarma SSO',
    description: 'Unified single sign-on solution for seamless authentication across platforms',
    status: 'live'
  },
  {
    icon: '⚙️',
    name: 'AI Task & Workflow Engine',
    description: 'Intelligent task automation and workflow orchestration powered by AI',
    status: 'coming-soon'
  },
  {
    icon: '🌐',
    name: 'Enterprise API Platform',
    description: 'Comprehensive API infrastructure for building custom AI-driven solutions',
    status: 'coming-soon'
  }
];

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

/**
 * Main initialization function
 */
function initializeApp() {
  // Set current year in footer
  setCurrentYear();
  
  // Render product cards
  renderProducts();
  
  // Initialize smooth scroll for CTA buttons
  initializeSmoothScroll();
  
  // Initialize scroll animations
  initializeScrollAnimations();
}

// ============================================
// Footer Year
// ============================================

/**
 * Set the current year in the footer copyright
 */
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ============================================
// Product Rendering
// ============================================

/**
 * Validate product data and provide defaults for missing fields
 * @param {Object} product - Product object to validate
 * @returns {Object} Validated product object
 */
function validateProduct(product) {
  return {
    icon: product.icon || '📦',
    name: product.name || 'Unnamed Product',
    description: product.description || 'Description coming soon',
    status: ['live', 'beta', 'coming-soon'].includes(product.status) 
      ? product.status 
      : 'coming-soon'
  };
}

/**
 * Render all product cards to the products grid
 */
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  if (!productsGrid) {
    console.warn('Products grid element not found');
    return;
  }
  
  // Clear existing content
  productsGrid.innerHTML = '';
  
  // Render each product
  products.forEach(product => {
    const validatedProduct = validateProduct(product);
    const card = createProductCard(validatedProduct);
    productsGrid.appendChild(card);
  });
}

/**
 * Create a product card element
 * @param {Object} product - Product data
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
  // Create card container
  const card = document.createElement('article');
  card.className = 'product-card fade-in';
  card.setAttribute('data-status', product.status);
  
  // Create icon
  const icon = document.createElement('div');
  icon.className = 'product-icon';
  icon.textContent = product.icon;
  icon.setAttribute('aria-hidden', 'true');
  
  // Create name
  const name = document.createElement('h3');
  name.className = 'product-name';
  name.textContent = product.name;
  
  // Create description
  const description = document.createElement('p');
  description.className = 'product-description';
  description.textContent = product.description;
  
  // Create status badge
  const status = document.createElement('span');
  status.className = 'product-status';
  status.textContent = formatStatus(product.status);
  
  // Assemble card
  card.appendChild(icon);
  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(status);
  
  return card;
}

/**
 * Format status string for display
 * @param {string} status - Status value
 * @returns {string} Formatted status
 */
function formatStatus(status) {
  const statusMap = {
    'live': 'Live',
    'beta': 'Beta',
    'coming-soon': 'Coming Soon'
  };
  return statusMap[status] || 'Coming Soon';
}

// ============================================
// Smooth Scroll Navigation
// ============================================

/**
 * Initialize smooth scroll for CTA buttons
 */
function initializeSmoothScroll() {
  const scrollButtons = document.querySelectorAll('[data-scroll-to]');
  
  scrollButtons.forEach(button => {
    button.addEventListener('click', handleScrollClick);
  });
}

/**
 * Handle click on scroll button
 * @param {Event} event - Click event
 */
function handleScrollClick(event) {
  const targetId = event.currentTarget.getAttribute('data-scroll-to');
  const targetSection = document.getElementById(targetId);
  
  if (targetSection) {
    targetSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

// ============================================
// Scroll Animations
// ============================================

/**
 * Initialize Intersection Observer for scroll-triggered animations
 */
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => observer.observe(element));
}

/**
 * Handle intersection observer callback
 * @param {Array} entries - Intersection observer entries
 */
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}
