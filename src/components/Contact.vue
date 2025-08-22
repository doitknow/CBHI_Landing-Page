<template>
  <section class="contact section-inner" id="contact">
    <div class="contact-grid">
      <form class="contact-form" @submit.prevent="onSubmit">
        <h3>{{ t('contact') }}</h3>
        <p class="lead">Speak with an advisor today for a free consultation and tailored quote.</p>
        <label>Name<input type="text" v-model="form.name" required /></label>
        <label>Email<input type="email" v-model="form.email" required /></label>
        <label>Phone<input type="tel" v-model="form.phone" /></label>
        <label>Message<textarea v-model="form.message" rows="6" required></textarea></label>
        <button type="submit" class="primary">Send Message</button>
      </form>
      <aside class="contact-info card-soft"><h4>Contact EHIS</h4><p><strong>Address:</strong> {{ t('ehis_address') }}</p><p><strong>Phone:</strong> {{ t('ehis_phone') }}</p><p><strong>Email:</strong> {{ t('ehis_email') }}</p><p><strong>Office Hours:</strong> Mon–Fri | 8:30am–5:00pm</p></aside>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import { translations, lang } from '../i18n.js'
const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key
const form = reactive({ name:'', email:'', phone:'', message:'' })
const onSubmit = () => { alert(`Thanks ${form.name || 'there'} — we received your message and will reach out shortly.`); form.name=''; form.email=''; form.phone=''; form.message='' }
</script>
<style scoped>.contact-grid{display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start;margin:40px 0}.contact-form{background:#fff;padding:20px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.06)}label{display:block;margin-bottom:12px}input,textarea{width:100%;padding:10px;border-radius:6px;border:1px solid #e7e6f0;margin-top:6px}.contact-info{background:#fff;padding:20px;border-radius:8px}@media(max-width:900px){.contact-grid{grid-template-columns:1fr}}</style>
