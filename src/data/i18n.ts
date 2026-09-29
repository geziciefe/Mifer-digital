export type Locale = 'tr' | 'en';

export const locales: Record<Locale, {
  htmlLang: string;
  ogLocale: string;
  label: string;
  switchLabel: string;
  homePath: string;
  workPath: string;
}> = {
  tr: {
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    label: 'TR',
    switchLabel: 'EN',
    homePath: '/tr',
    workPath: '/tr/demo-calismalar'
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    label: 'EN',
    switchLabel: 'TR',
    homePath: '/en',
    workPath: '/en/demo-work'
  }
};

export const content = {
  tr: {
    meta: {
      title: 'Mifer Digital | Web Tasarım, SEO ve Google Görünürlüğü',
      description: 'Mifer Digital, İstanbul merkezli web tasarım ve dijital görünürlük stüdyosudur. Markalara özel web siteleri, SEO altyapısı ve Google görünürlüğü çözümleri geliştirir.'
    },
    nav: {
      work: 'Çalışmalar',
      services: 'Hizmetler',
      approach: 'Yaklaşım',
      about: 'Biz',
      contact: 'İletişim',
      contactCta: 'Bir proje konuşalım',
      menu: 'Menü',
      close: 'Kapat'
    },
    hero: {
      line1: 'İŞİNİZ',
      line2: 'GÖZÜKSÜN',
      line3: 'MARKANIZ BÜYÜSÜN',
      summary: 'Web sitenizi, Google görünürlüğünüzü ve dijital temas noktalarınızı büyümeyi destekleyen tek bir sistemde kuruyoruz.',
      cta: 'Çalışmaları gör',
      contact: 'Projeyi konuşalım'
    },
    intro: {
      label: 'Ne yapıyoruz',
      title: 'Tek bir dijital sistem',
      capabilities: [
        ['İşiniz doğru anlaşılsın', 'Ne sunduğunuzu ve kime hitap ettiğinizi açıkça anlatan, markanıza ait bir web sitesi.'],
        ['Aramalarda bulunabilsin', 'İlgili aramalarda keşfedilmeyi destekleyen, düzenli içerik ve sağlam bir sayfa yapısı.'],
        ['İletişim kolaylaşsın', 'Ziyaretçinin sorusuna yanıt bulup size ulaşabildiği, açık ve kısa bir yol.']
      ]
    },
    services: {
      label: 'Hizmetler',
      title: 'Web sitesi, görünürlük ve destek.',
      items: [
        ['Web tasarım ve geliştirme', 'İşletmenize özel sayfa tasarımı, içerik yerleşimi ve mobil uyumlu site geliştirme. Ziyaretçinin bilgiye ve iletişime kolayca ulaşacağı bir yapı.', 'TASARIM · GELİŞTİRME'],
        ['Google ve yerel görünürlük', 'Uygun işletmeler için Google İşletme Profili kurulumu veya düzenlenmesi; kategori, konum, çalışma saatleri ve iletişim bilgilerinin tutarlılığı.', 'İŞLETME PROFİLİ · HARİTALAR'],
        ['Bakım ve geliştirme', 'Yayın sonrası içerik ve görsel güncellemeleri, performans kontrolleri ve ihtiyaç duyulan yeni özellikler. Kapsam, işletmenizin ihtiyacına göre belirlenir.', 'GÜNCELLEME · DESTEK'],
        ['SEO ve arama görünürlüğü', 'Sayfa başlıkları, açıklamalar, içerik hiyerarşisi ve teknik kontroller. Arama motorlarının sitenizi anlamasını destekleyen temel düzenlemeler.', 'İÇERİK · TEKNİK ALTYAPI']
      ]
    },
    work: {
      label: 'Seçili çalışmalar',
      titleA: 'FARKLI SEKTÖRLER',
      titleB: 'ÖZEL TASARIMLAR',
      summary: 'Her sektörün kullanıcı alışkanlığı, güven dili ve dönüşüm yolu farklı. Seçili çalışmalarımızda aynı şablonu tekrar etmek yerine her marka için ayrı bir dijital dünya kuruyoruz.',
      all: 'Tüm çalışmaları incele',
      concept: 'Tasarım çalışması',
      coming: 'Canlı demo yakında',
      open: 'Canlı demoyu aç'
    },
    approach: {
      label: 'Yaklaşım',
      title: 'İlk görüşmeden yayına.',
      items: [
        ['Netleştiririz', 'İşletmenizi ve müşterilerinizi tanır; sitenin amacını, içeriğini ve önceliklerini birlikte belirleriz.'],
        ['Tasarlarız', 'Bu kararları sayfa düzenine, markanızın görsel diline ve ziyaretçinin izleyeceği anlaşılır bir yola dönüştürürüz.'],
        ['Üretiriz', 'Tasarımı çalışan, mobil uyumlu ve hızlı bir siteye dönüştürür; bağlantıları ve temel kullanım akışlarını kontrol ederiz.'],
        ['Görünür kılarız', 'Sayfa başlıklarını, içerik düzenini ve teknik arama altyapısını hazırlar; uygun projelerde Google İşletme Profilini düzenleriz.']
      ]
    },
    about: {
      label: 'Mifer hakkında',
      kicker: 'BAĞIMSIZ DİJİTAL STÜDYO · İSTANBUL',
      title: 'İşinizi tanıyan bir dijital ekip.',
      body: 'Mifer Digital, Maltepe, İstanbul merkezli bir dijital ekip. Mühendisler, yazılımcılar ve tasarımcılardan oluşan ekibimiz, işletmenizin ihtiyaçlarını birlikte değerlendirir; tasarımı ve teknik üretimi aynı süreçte yürütür. Projenizde çalışan kişilerle doğrudan iletişim kurarsınız. İşin kapsamı ve sorumlulukları baştan bellidir; sorularınızın ve üstlendiğimiz işin takibini yaparız.',
      disciplines: ['STRATEJİ', 'TASARIM', 'KOD', 'GÖRÜNÜRLÜK'],
      ribbon: 'STRATEJİ / TASARIM / GELİŞTİRME / GÖRÜNÜRLÜK / DOĞRUDAN ÜRETİM / '
    },
    contact: {
      label: 'Yeni proje',
      titleA: 'BİR ŞEYLERİ',
      titleB: 'DAHA İYİ YAPALIM',
      mail: 'E-posta gönder',
      sectionLocation: 'Maltepe, İstanbul',
      location: 'Maltepe, İstanbul · Dünya genelinde projeler',
      whatsapp: 'WhatsApp’tan yaz',
      instagram: 'Instagram’da gör'
    },
    contactForm: {
      label: 'Yeni proje',
      title: 'BİR PROJE KONUŞALIM',
      summary: 'Markanızı, hedefinizi ve neyi değiştirmek istediğinizi birkaç cümleyle anlatın. İlk görüşme için ihtiyacımız olan şey bu.',
      close: 'İletişim formunu kapat',
      directLabel: 'Doğrudan ulaşın',
      directText: 'Form yerine e-posta veya WhatsApp üzerinden de başlayabilirsiniz.',
      formLabel: 'Proje bilgileri',
      formNote: 'Kısa tutuyoruz. İlk temas için yalnızca gerekli bilgiler.',
      name: 'Ad Soyad *',
      email: 'E-posta *',
      business: 'İşletme / Marka *',
      phone: 'Telefon *',
      website: 'Web sitesi',
      websitePlaceholder: 'Opsiyonel',
      instagram: 'Instagram',
      instagramPlaceholder: 'Opsiyonel',
      message: 'Projeyi kısaca anlatın *',
      consent: 'Bu bilgilerin proje talebime dönüş yapılması amacıyla kullanılmasını kabul ediyorum.',
      submit: 'PROJEYİ GÖNDER',
      mailSubject: 'Mifer Digital — Yeni proje talebi',
      mailFields: { name: 'Ad Soyad', email: 'E-posta', business: 'İşletme / Marka', phone: 'Telefon', website: 'Web sitesi', instagram: 'Instagram', message: 'Proje' }
    },
    workPage: {
      label: 'Seçili çalışmalar',
      title: 'TEK ŞABLON YOK. HER İŞE AYRI BİR FİKİR.',
      summary: 'Farklı sektörler için geliştirdiğimiz seçili konsept çalışmalar; kullanıcı deneyimi, görsel sistem ve dönüşüm kurgusuna nasıl yaklaştığımızı gösteriyor.',
      back: 'Ana sayfaya dön'
    }
  },
  en: {
    meta: {
      title: 'Mifer Digital | Web Design, SEO & Google Visibility',
      description: 'Mifer Digital is an Istanbul-based digital studio building bespoke websites, SEO foundations and Google visibility systems for ambitious brands.'
    },
    nav: {
      work: 'Work',
      services: 'Services',
      approach: 'Approach',
      about: 'About',
      contact: 'Contact',
      contactCta: 'Start a project',
      menu: 'Menu',
      close: 'Close'
    },
    hero: {
      line1: 'GET YOUR BUSINESS SEEN',
      line2: 'GROW YOUR',
      line3: 'BRAND',
      summary: 'We build your website, search visibility and digital touchpoints as one system designed to support growth.',
      cta: 'View our work',
      contact: 'Start a project'
    },
    intro: {
      label: 'What we do',
      title: 'One connected digital system',
      capabilities: [
        ['Make your business clear', 'A website that explains what you offer and who it is for, with a look that feels like your brand.'],
        ['Support discovery', 'Organised content and a sound page structure that help people find you through relevant searches.'],
        ['Make contact easier', 'A clear, short path from finding an answer to getting in touch with your business.']
      ]
    },
    services: {
      label: 'Services',
      title: 'Websites, visibility and support.',
      items: [
        ['Web design and development', 'Custom page design, content layouts and responsive development. A website that makes information easy to find and contact easy to make.', 'DESIGN · DEVELOPMENT'],
        ['Google and local visibility', 'Google Business Profile setup or updates for eligible businesses, with consistent categories, location, opening hours and contact details.', 'BUSINESS PROFILE · MAPS'],
        ['Maintenance and development', 'Content and image updates, performance checks and new features after launch. The scope is agreed around what your business needs.', 'UPDATES · SUPPORT'],
        ['SEO and search visibility', 'Page titles, descriptions, content hierarchy and technical checks. Practical foundations that help search engines understand your website.', 'CONTENT · TECHNICAL FOUNDATIONS']
      ]
    },
    work: {
      label: 'Selected work',
      titleA: 'DIFFERENT INDUSTRIES',
      titleB: 'BESPOKE DESIGNS',
      summary: 'Every industry has a different audience, trust signal and path to conversion. Our selected studies explore a distinct digital world for each brand instead of repeating one template.',
      all: 'View all work',
      concept: 'Design study',
      coming: 'Live demo coming soon',
      open: 'Open live demo'
    },
    approach: {
      label: 'Approach',
      title: 'From first conversation to launch.',
      items: [
        ['Clarify', 'We get to know your business and customers, then agree on the purpose, content and priorities of the website.'],
        ['Design', 'We turn those decisions into page layouts, a visual language for your brand and a clear journey for visitors.'],
        ['Build', 'We turn the design into a working, responsive and fast website, checking links and the main user journeys.'],
        ['Support discovery', 'We prepare page titles, content structure and technical search foundations, including Google Business Profile where appropriate.']
      ]
    },
    about: {
      label: 'About Mifer',
      kicker: 'INDEPENDENT DIGITAL STUDIO · ISTANBUL',
      title: 'A digital team that knows your business.',
      body: 'Mifer Digital is a digital team based in Maltepe, Istanbul. Our engineers, software developers and designers consider your business needs together, bringing design and technical delivery into one process. You speak directly with the people working on your project. Scope and responsibilities are clear from the start, and we follow through on questions and commitments.',
      disciplines: ['STRATEGY', 'DESIGN', 'CODE', 'VISIBILITY'],
      ribbon: 'STRATEGY / DESIGN / DEVELOPMENT / VISIBILITY / DIRECT PRODUCTION / '
    },
    contact: {
      label: 'New project',
      titleA: 'LET’S MAKE',
      titleB: 'SOMETHING BETTER',
      mail: 'Send an email',
      sectionLocation: 'Maltepe, Istanbul',
      location: 'Maltepe, Istanbul · Projects worldwide',
      whatsapp: 'Message us on WhatsApp',
      instagram: 'See our Instagram'
    },
    contactForm: {
      label: 'New project',
      title: 'LET’S TALK PROJECTS',
      summary: 'Tell us about your brand, your goal and what you want to change in a few lines. That is enough for the first conversation.',
      close: 'Close contact form',
      directLabel: 'Reach us directly',
      directText: 'You can also start by email or WhatsApp instead of the form.',
      formLabel: 'Project details',
      formNote: 'Short by design. Only the information we need for a first reply.',
      name: 'Name *',
      email: 'Email *',
      business: 'Business / Brand *',
      phone: 'Phone *',
      website: 'Website',
      websitePlaceholder: 'Optional',
      instagram: 'Instagram',
      instagramPlaceholder: 'Optional',
      message: 'Tell us about the project *',
      consent: 'I agree that this information may be used to respond to my project enquiry.',
      submit: 'SEND PROJECT',
      mailSubject: 'Mifer Digital — New project enquiry',
      mailFields: { name: 'Name', email: 'Email', business: 'Business / Brand', phone: 'Phone', website: 'Website', instagram: 'Instagram', message: 'Project' }
    },
    workPage: {
      label: 'Selected work',
      title: 'NO TEMPLATE. A DIFFERENT IDEA FOR EVERY BRAND.',
      summary: 'Selected concept studies across different industries, showing how we approach user experience, visual systems and conversion around the needs of each brand.',
      back: 'Back to home'
    }
  }
} as const;
