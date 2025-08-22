<template>
  <section class="hero-slider" id="home">
    <swiper
      :modules="[Navigation, Pagination, Autoplay, EffectFade]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5500 }"
      :effect="'fade'"
      navigation
      pagination
      class="mySwiper"
    >
      <swiper-slide v-for="(s, i) in slideKeys" :key="i" class="slide">
        <div class="slide-inner" :style="{ backgroundImage: 'linear-gradient(180deg, rgba(108,59,166,0.12), rgba(79,176,255,0.06)), url(' + slides[i].image + ')' }">
          <div class="overlay"></div>
          <div class="content">
            <h1>{{ t(slideKeys[i] + '_title') }}</h1>
            <p class="lead">{{ t(slideKeys[i] + '_lead') }}</p>
            <p class="body">{{ t(slideKeys[i] + '_body') }}</p>
            <div class="actions">
              <button class="primary">{{ t('Get Started') }}</button>
           
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { translations, lang } from '../i18n.js'

const slides = [
  { image: './card.png' },
  { image: './addisaba.png' },
  { image: './bg.png'}
]

const slideKeys = ['slide1', 'slide2', 'slide3']

const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key
</script>

<style scoped>
.hero-slider {
  position: relative;
  font-family: "Inter", sans-serif;
}

.slide-inner {
  position: relative;
  height: 720px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 32px;
  border-radius: 0 0 32px 32px;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 30, 60, 0.4), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

.swiper-slide .content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  max-width: 880px;
  padding: 32px 20px;
  transition: opacity .45s ease, transform .45s ease;
  opacity: 0;
  transform: translateY(10px) scale(.98);
  pointer-events: none;
}

.swiper-slide-active .content {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.content h1 {
  font-size: 48px;
  margin-bottom: 18px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
}

.lead {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #e8f4ff;
}

.body {
  font-size: 16px;
  line-height: 1.5;
  color: #f0f0f0;
  margin-bottom: 24px;
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 12px;
}

/* Primary CTA */
.primary {
  display: inline-block;
  border-radius: 9999px;
  padding: 16px 44px;
  background: linear-gradient(90deg, #0066ff, #00c6ff);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.4);
  transition: all 0.3s ease;
}

.primary:hover {
  background: linear-gradient(90deg, #00c6ff, #0066ff);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 28px rgba(0, 102, 255, 0.6);
}

.primary:active {
  transform: scale(0.97);
}

/* Secondary CTA (ghost button) */
.btn-ghost {
  border-radius: 9999px;
  padding: 14px 32px;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

/* Swiper Controls */
.swiper-button-next,
.swiper-button-prev {
  color: #0066ff;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.6);
  opacity: 0.9;
}

.swiper-pagination-bullet-active {
  background: #0066ff;
  width: 20px;
  height: 6px;
  border-radius: 4px;
  transform: none;
}

/* Responsive */
@media (max-width: 1000px) {
  .slide-inner {
    height: 500px;
    padding: 20px;
  }
  .content h1 {
    font-size: 32px;
  }
  .lead {
    font-size: 18px;
  }
  .body {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .slide-inner {
    height: 380px;
    padding: 16px;
  }
  .content h1 {
    font-size: 22px;
  }
  .lead {
    font-size: 16px;
  }
  .body {
    display: none;
  }
  .actions {
    flex-direction: column;
  }
}

</style>
