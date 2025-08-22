<template>
  <section class="about section-inner" id="about">
    <div class="two-col">
      <div class="left">
        <img src="https://picsum.photos/seed/about2/1000/700" alt="About us image" />
      </div>
      <div class="right">
        <h3>{{ t('about') }}</h3>
        <p class="lead">{{ t('ehis_tagline') }}</p>
        <p>{{ t('ehis_about') }}</p>
        <h4>Why clients choose us</h4>
        <ul>
          <li>Independent advice — we compare multiple carriers to get the right fit.</li>
          <li>Dedicated claims support — a single point of contact through the claims process.</li>
          <li>Ongoing review — annual policy checkups to keep coverage aligned with life changes.</li>
        </ul>
      </div>
    </div>

    <div class="leadership">
      <h3>Senior Leadership & Lead Executive Officers</h3>
      <p class="note">(Names & roles taken from EHIS 'About Us' and recent EHIS releases.)</p>
      <div class="grid">
        <div class="profile card-soft">
          <img src="https://i.pravatar.cc/200?img=32" alt="Felegush Birhane" class="avatar" />
          <h4>Felegush Birhane</h4>
          <p class="role">Lead Executive Officer — Quality & Assurance of Health Service Providers.</p>
          <p class="source">Source: EHIS news release mentioning Felegush Birhane in that role.</p>
        </div>
        <div class="profile card-soft">
          <img src="https://i.pravatar.cc/200?img=12" alt="Adamu Wondimtekahu" class="avatar" />
          <h4>Adamu Wondimtekahu</h4>
          <p class="role">Lead Executive Officer — Resources Mobilization & Members Administration (as referenced in EHIS news).</p>
          <p class="source">Source: EHIS news release and resources.</p>
        </div>
        <div class="profile card-soft">
          <img src="https://i.pravatar.cc/200?img=5" alt="Tesfaye Worku" class="avatar" />
          <h4>Tesfaye Worku</h4>
          <p class="role">Director General / Senior Executive (referenced in EHIS communications).</p>
          <p class="source">Source: EHIS About & news pages.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { translations, lang } from '../i18n.js'
const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key
</script>

<style scoped>
.about{margin:40px 0}.two-col{display:flex;gap:24px;align-items:center}.left img{border-radius:12px;width:100%;height:auto}.right h3{color:var(--brand);margin-bottom:8px}.lead{font-weight:700;margin-bottom:8px}
.leadership{margin-top:28px}.grid{display:flex;gap:18px;margin-top:12px}.profile{padding:18px;text-align:center;border-radius:12px}.avatar{width:120px;height:120px;border-radius:8px;object-fit:cover;margin-bottom:10px}.role{font-weight:700;color:var(--muted)}.source{font-size:12px;color:#777;margin-top:8px}
@media(max-width:900px){.grid{flex-direction:column;align-items:center}}
</style>
