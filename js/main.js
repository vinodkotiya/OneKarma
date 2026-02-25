/**
 * OneKarma.AI Landing Website - Main JavaScript
 * 
 * This file handles:
 * - Neural network background animation
 * - Dynamic product card rendering
 * - Smooth scroll navigation
 * - Scroll-triggered animations
 * - Dynamic year in footer
 */

// ============================================
// Neural Network Background Animation
// ============================================

/**
 * Neural Network Canvas Animation
 * Creates a cosmos/brain-inspired particle network
 */
class NeuralNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    this.maxDistance = 150;
    this.mouse = { x: null, y: null, radius: 150 };
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }
  
  init() {
    this.resize();
    this.createParticles();
  }
  
  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
  }
  
  drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
      this.ctx.fill();
      
      // Add glow effect
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
    });
    this.ctx.shadowBlur = 0;
  }
  
  connectParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.maxDistance) {
          const opacity = (1 - distance / this.maxDistance) * 0.3;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
      
      // Connect to mouse
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.particles[i].x - this.mouse.x;
        const dy = this.particles[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.mouse.radius) {
          const opacity = (1 - distance / this.mouse.radius) * 0.5;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1;
      }
      
      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.drawParticles();
    this.connectParticles();
    this.updateParticles();
    
    requestAnimationFrame(() => this.animate());
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }
}

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
    icon: '🔐',
    name: 'OneKarma SSO',
    description: 'Unified single sign-on solution for seamless and secure authentication across all your enterprise platforms and applications',
    status: 'live'
  },
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
  // Initialize neural network background
  const canvas = document.getElementById('neural-canvas');
  if (canvas) {
    new NeuralNetwork(canvas);
  }
  
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
