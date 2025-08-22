<template>
  <header class="site-header" role="banner" transparent>
    <div class="left-block">
      <img src="/logo.png" alt="Logo" class="logo-main" width="300" height="68" />
      <!-- <p>Ethiopian </p> -->
    </div>

    <nav class="main-nav" role="navigation" aria-label="Main navigation">
      <a href="#home" @click.prevent="scrollTo('home')">{{ t('home') }}</a>
      <a href="#features" @click.prevent="scrollTo('features')">{{ t('features') }}</a>
      <a href="#about" @click.prevent="scrollTo('about')">{{ t('about') }}</a>
      
      <a href="#counters" @click.prevent="scrollTo('counters')">{{ t('stats') }}</a>
      <a href="#contact" @click.prevent="scrollTo('contact')">{{ t('contact') }}</a>
    </nav>

    <div class="right-block">
     <div class="lang-switcher p-2">
  
    <select
      id="lang"
      v-model="lang"
      @change="setLang(lang)"
       class="lang-switcher"
    >
      <option value="en">EN</option>
      <option value="am">አማ</option>
    </select>
  </div>
      <!-- <img src="/logo2.png" alt="Logo 2" class="logo-2" width="100" height="70" /> -->
    </div>
  </header>
</template>

<script setup>
import { lang, setLang, translations } from '../i18n.js'
const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key

const scrollTo = (id) => {
  const target = document.getElementById(id)
  const header = document.querySelector('.site-header')
  const headerHeight = header ? header.offsetHeight : 0
  if (target) {
    const rect = target.getBoundingClientRect()
    const top = rect.top + window.pageYOffset - headerHeight - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.left-block {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-main {
  height: 60px;
  width: auto;
  object-fit: contain;
}

/* Navigation */
.main-nav {
  display: flex;
  gap: 28px;
  margin-left: auto;
  align-items: center;
}

.main-nav a {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
  padding: 6px 0;
}

.main-nav a:hover {
  color: var(--brand);
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: var(--brand);
  transition: width 0.3s ease;
}

.main-nav a:hover::after {
  width: 100%;
}

/* Right section (lang switcher) */
.right-block {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 0 0 auto;
  margin-left: 32px;
}

/* Language Switcher */
.lang-switcher {
  border: 1px solid rgba(0,0,0,0.15);
  background: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: all 0.2s ease;
}

.lang-switcher:hover {
  border-color: var(--brand);
  color: var(--brand);
}

/* Responsive */
@media (max-width: 900px) {
  .main-nav {
    display: none;
  }
  .right-block {
    margin-left: auto;
  }
  .logo-main {
    height: 50px;
  }
}

</style>
