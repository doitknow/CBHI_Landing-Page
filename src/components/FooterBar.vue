<template>
  <footer class="footer">
    <div class="footer-container">
      
      <!-- Logo + Tagline + Socials -->
      <div class="footer-section logo-section">
        <div class="logo-container">
          <img src="../assets/images/logo1.jpg" alt="EHIS logo" class="footer-logo" />
          <div class="logo-text">
            <span class="organization-name">Ethiopian Health Insurance</span>
            <span class="footer-tagline">
              Guarding Your Health, Securing Your Future: Our Insurance, Your Assurance.
            </span>
          </div>
        </div>
        <div class="social-container">
          <h3>Follow Us</h3>
          <ul class="social-links">
            <li>
              <a target="_blank" href="https://www.facebook.com/EthioHIS" class="social-icon facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/@ethiopianhealthinsurance9944" class="social-icon youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/en">Home</a></li>
          <li><a href="/en">Services</a></li>
          <li><a href="/en">About EHIS</a></li>
          <li><a href="/en">Contact Us</a></li>
          <li><a href="/en">FAQs</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-section resources-section">
        <h2>Resources</h2>
        <ul>
          <li><a href="/en">Strategic Plan</a></li>
          <li><a href="/en">CBHI Manual</a></li>
          <li><a href="/en">HSTP2</a></li>
          <li><a href="/en">Annual Reports</a></li>
          <li><a href="/en">Policy Documents</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-section contact-section">
        <h2>Get In Touch</h2>
        <ul>
          <li>
            <span class="icon">📍</span>
            <span>Gotera around Pepsi Factory - Woreda 7, Nifas Silk Lafto Subcity, Addis Ababa, Ethiopia</span>
          </li>
          <li>
            <span class="icon">📞</span>
            <span>(+251) 011-5-576721/23 | (+251) 011-5-576758/36</span>
          </li>
          <li>
            <span class="icon">✉️</span>
            <span>ehis@ehis.gov.et</span>
          </li>
          <li>
            <span class="icon">🕒</span>
            <span>Monday - Friday: 8:30 AM - 5:30 PM</span>
          </li>
        </ul>
      </div>
      </div>
    
    <!-- Copyright Section -->
    <div class="copyright">
      <div class="copyright-container">
        <p>&copy; 2023 Ethiopian Health Insurance Service. All rights reserved.</p>
        <div class="legal-links">
          <a href="/en/privacy-policy">Privacy Policy</a>
          <a href="/en/terms-of-service">Terms of Service</a>
          <a href="/en/sitemap">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Footer Styles */
.footer {
  background: linear-gradient(to right, #1a365d, #2d3748);
  color: #ffffff;
  padding: 60px 0 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
  gap: 16px;
}

.logo-section {
  min-width: 280px;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
}

.footer-logo {
  width: 180px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.organization-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  display: block;
  color: #ecc94b;
}

.footer-tagline {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  max-width: 280px;
  display: block;
  color: #cbd5e0;
}

.social-container h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #ecc94b;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-links li {
  transition: transform 0.2s ease;
}

.social-links li:hover {
  transform: translateX(5px);
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  color: #cbd5e0;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.facebook:hover {
  color: #3b5998 !important;
}

.youtube:hover {
  color: #ff0000 !important;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  color: #ecc94b;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background-color: #ecc94b;
  border-radius: 2px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
  transition: transform 0.2s ease;
}

.footer-section ul li:hover {
  transform: translateX(5px);
}

.footer-section ul li a {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
  padding: 4px 0;
}

.footer-section ul li a:hover {
  color: #ffffff;
}

.contact-section ul li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.icon {
  background-color: #4a5568;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  min-width: 36px;
  min-height: 36px;
  flex-shrink: 0;
}

.copyright {
  border-top: 1px solid #4a5568;
  padding: 24px 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.copyright-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright p {
  margin: 0;
  color: #cbd5e0;
  font-size: 14px;
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-links a {
  color: #cbd5e0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #ecc94b;
}

@media (max-width: 968px) {
  .footer-container {
    gap: 30px;
  }
  
  .footer-section {
    min-width: calc(50% - 20px);
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
  }
  
  .footer-container {
    flex-direction: column;
    gap: 30px;
    padding: 0 20px 30px;
  }
  
  .footer-section {
    min-width: 100%;
    text-align: center;
    align-items: center;
  }
  
  .logo-container {
    align-items: center;
  }
  
  h2::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-section ul li {
    justify-content: center;
    text-align: center;
  }
  
  .copyright-container {
    flex-direction: column;
    text-align: center;
  }
  
  .legal-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .legal-links {
    flex-direction: column;
    gap: 12px;
  }
  
  .footer-tagline {
    max-width: 100%;
  }
}
</style>