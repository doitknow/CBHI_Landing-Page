import { ref } from 'vue'
const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
export const lang = ref(saved || 'en')
export const setLang = (l) => {
  lang.value = l
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', l)
}

// NOTE: am (Amharic) contains Amharic strings; 'om' (Oromo) and 'ti' (Tigrinya) currently fall back to English placeholders.
// If you want proper Oromo/Tigrinya translations I can add them (or fetch official translations).
export const translations = {
  en: {
    home: 'Home', features: 'Features', about: 'About',  stats: 'Stats', contact: 'Contact',
    ehis_tagline: 'Guarding Your Health, Securing Your Future: Our Insurance, Your Assurance.',
    ehis_about: 'Need any type of support on Health Insurance in Ethiopia, you can contact us without any hesitation.',
    ehis_address: 'Gotera around Pepsi Factory - Woreda 7, Nifas Silk Lafto Subcity, Addis Ababa, Ethiopia',
    ehis_phone: '(+251) 011-5-576721/23 | (+251) 011-5-576758/36', ehis_email: 'ehis@ehis.gov.et',
    slide1_title: 'Protect Your Future With Confidence', slide1_lead: 'Tailored insurance solutions designed around your life and aspirations.', slide1_body: 'Our advisors work with you to build a plan that balances coverage with affordability.',
    slide2_title: 'Comprehensive Plans For Individuals & Businesses', slide2_lead: 'Flexible policies to protect what matters most.', slide2_body: 'We combine market-leading carriers with personalized underwriting to deliver plans that suit your needs.',
    slide3_title: 'Welcome to Ethiopian Health Insurance ', slide3_lead: 'A local touch backed by national strength and experience.', slide3_body: 'With decades of industry experience, our team helps clients navigate choices with clarity.',
    Get Started: 'Get Started'
  },
  am: {
    home: 'መነሻ', features: 'አገልግሎቶች', about: 'ስለ እኛ', stats: 'ቁጥሮች', contact: 'እውነታ',
    ehis_tagline: 'የጤናዎን ጥበቃ እና የወደፊት ደህንነት፡ እኛ የተደረገው የኢንሹራንስ ማስረጃ ነው።',
    ehis_about: 'በኢትዮጵያ የጤና ቋሚ ጥገና ስለሚፈልጉ የሚያስፈልጋችሁ ድጋፍ ከሆነ በእርግጥ ያግኙን።',
    ehis_address: 'ጎተራ ከፒፒሲ ፋብሪካ ዙሪያ - ወረዳ 7, ኒፋስ ሲልክ ላፍቶ ንዑስ ከተማ, አዲስ አበባ, ኢትዮጵያ',
    ehis_phone: '(+251) 011-5-576721/23 | (+251) 011-5-576758/36', ehis_email: 'ehis@ehis.gov.et',
    slide1_title: 'የወደፊትዎን ጥበቃ በእርግጥ ይጠብቁ', slide1_lead: 'የሕይወትዎን እና እድሎችዎን የሚመለከቱ የተስማሚ ኢንሹራንስ መፍትሄዎች።', slide1_body: 'አማራጮቻችን ለዋጋ እና ለስርዓት የሚሰሩ ዕቅዶችን ለመገንባት ይረዳዎታል።',
    slide2_title: 'ለግለሰቦች እና ድርጅቶች የተስፋፋ እቅዶች', slide2_lead: 'የሚጠብቁ የውስጥ ፖሊሲዎች።', slide2_body: 'ምርጥ ካርሪዎችን እና የግል እንዲሁ የማስተካከያ አገልግሎት እንዲሰጥ እንሰራለን።',
    slide3_title: 'የአካባቢ አገልግሎት ፣ ብሔራዊ ሀብት', slide3_lead: 'የአካባቢ እርምጃ በብሔራዊ ኃይል የተደጋጋሚ።', slide3_body: 'ለዕድል የሚረዱ ባለሙያዎች ከአለም አቀፍ ልምድ ጋር ይሰራሉ።'
    Get Started: 'መጀመር'
  },
  om: {
    // Oromo translations: currently placeholders (English). Replace when you have translations.
    home: 'Home', features: 'Features', about: 'About', stats: 'Stats', contact: 'Contact',
    ehis_tagline: 'Guarding Your Health, Securing Your Future: Our Insurance, Your Assurance.',
    ehis_about: 'Need any type of support on Health Insurance in Ethiopia, you can contact us without any hesitation.',
    ehis_address: 'Gotera around Pepsi Factory - Woreda 7, Nifas Silk Lafto Subcity, Addis Ababa, Ethiopia',
    ehis_phone: '(+251) 011-5-576721/23 | (+251) 011-5-576758/36', ehis_email: 'ehis@ehis.gov.et',
    slide1_title: 'Protect Your Future With Confidence', slide1_lead: 'Tailored insurance solutions designed around your life and aspirations.', slide1_body: 'Our advisors work with you to build a plan that balances coverage with affordability.'
  },
  ti: {
    // Tigrinya translations: currently placeholders (English). Replace when you have translations.
    home: 'Home', features: 'Features', about: 'About', stats: 'Stats', contact: 'Contact',
    ehis_tagline: 'Guarding Your Health, Securing Your Future: Our Insurance, Your Assurance.',
    ehis_about: 'Need any type of support on Health Insurance in Ethiopia, you can contact us without any hesitation.',
    ehis_address: 'Gotera around Pepsi Factory - Woreda 7, Nifas Silk Lafto Subcity, Addis Ababa, Ethiopia',
    ehis_phone: '(+251) 011-5-576721/23 | (+251) 011-5-576758/36', ehis_email: 'ehis@ehis.gov.et',
    slide1_title: 'Protect Your Future With Confidence', slide1_lead: 'Tailored insurance solutions designed around your life and aspirations.', slide1_body: 'Our advisors work with you to build a plan that balances coverage with affordability.'
  }
}
