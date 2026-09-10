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
      title: 'Mifer Digital | Web Tasarım, SEO ve Dijital Görünürlük',
      description: 'Mifer Digital; markalara özel web siteleri, SEO altyapısı ve Google görünürlüğü sistemleri geliştirir.'
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
      title: 'Web sitesi, arama görünürlüğü ve marka hissi. Hepsini tek bir büyüme fikri etrafında kuruyoruz.',
      capabilities: [
        ['Netleştiririz', 'Markanın dijitalde ne söylemesi ve nasıl görünmesi gerektiğini belirleriz.'],
        ['Tasarlayıp üretiriz', 'Arayüzü, içeriği ve geliştirmeyi aynı sistem içinde birlikte ele alırız.'],
        ['Görünür kılarız', 'SEO ve Google altyapısını tasarımın doğal bir parçası olarak kurarız.']
      ]
    },
    services: {
      label: 'Hizmetler',
      title: 'Tasarım, teknoloji ve görünürlük. Markanızın dijital çekirdeğini tek sistem olarak kuruyoruz.',
      items: [
        ['01', 'Web Tasarım & Geliştirme', 'Markanıza özel web siteleri tasarlayıp geliştiriyoruz. Hazır şablon kullanmıyoruz; yapıyı işletmenize, hedef kitlenize ve ihtiyaçlarınıza göre kuruyoruz.'],
        ['02', 'SEO & Google Görünürlüğü', 'Teknik SEO, içerik yapısı ve arama görünürlüğünü sonradan eklenen bir katman değil, sitenin temeli olarak kuruyoruz.'],
        ['03', 'Google Maps & Yerel Vitrin', 'Google Business Profile, konum, yorumlar ve iletişim kanallarını aynı güven veren dijital görünümde birleştiriyoruz.'],
        ['04', 'Bakım & Sürekli Geliştirme', 'Site yayına çıktıktan sonra içerik, görsel, performans ve yeni özellik ihtiyaçlarında sistemi canlı tutuyoruz.']
      ]
    },
    work: {
      label: 'Seçili çalışmalar',
      titleA: 'FARKLI SEKTÖRLER',
      titleB: 'ÖZEL TASARIMLAR',
      summary: 'Her sektörün kullanıcı alışkanlığı, güven dili ve dönüşüm yolu farklı. Seçili çalışmalarımızda aynı şablonu tekrar etmek yerine her marka için ayrı bir dijital dünya kuruyoruz.',
      all: 'Tüm çalışmaları incele',
      concept: 'Tasarım çalışması',
      demoNote: 'Demo çalışmalardır. Marka isimleri kurgusaldır.',
      coming: 'Canlı demo yakında',
      open: 'Canlı demoyu aç'
    },
    approach: {
      label: 'Yaklaşım',
      title: 'Net düşünürüz. Hızlı üretiriz. Markanızı sahipleniriz.',
      items: [
        ['01', 'Anlarız', 'İşletmeyi, müşteriyi ve mevcut dijital görünümü inceleriz.'],
        ['02', 'Kurgularız', 'İçerik mimarisini, görsel sistemi ve kullanıcı akışını tasarlarız.'],
        ['03', 'Üretiriz', 'Tasarladığımız yapıyı hızlı, erişilebilir ve performanslı geliştiririz.'],
        ['04', 'Büyütürüz', 'Yayın sonrası ölçer, günceller ve ihtiyaç oldukça sistemi geliştiririz.']
      ]
    },
    about: {
      label: 'Mifer hakkında',
      title: 'Projeyi uzaktan izlemiyoruz. Fikirden yayına kadar doğrudan içindeyiz.',
      body: 'Mifer Digital, İstanbul merkezli bir dijital stüdyo. Aynı anda az sayıda projeye odaklanıyor; strateji, tasarım, geliştirme ve görünürlüğü aynı masada çözüyoruz. Böylece kararlar hızlanıyor, işin karakteri kaybolmuyor ve sonuç markanıza gerçekten ait hissediliyor.',
      ribbon: 'STRATEJİ / TASARIM / GELİŞTİRME / GÖRÜNÜRLÜK / DOĞRUDAN ÜRETİM / '
    },
    contact: {
      label: 'Yeni proje',
      titleA: 'BİR ŞEYLERİ',
      titleB: 'DAHA İYİ YAPALIM',
      mail: 'E-posta gönder',
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
      title: 'Mifer Digital | Web Design, SEO & Digital Visibility',
      description: 'Mifer Digital builds bespoke websites, SEO foundations and Google visibility systems for ambitious brands.'
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
      title: 'Website, search visibility and brand presence. We build all three around one clear growth idea.',
      capabilities: [
        ['Define the direction', 'We decide what the brand should say and how it should show up online.'],
        ['Design and build', 'Interface, content and development move together as one connected system.'],
        ['Make it visible', 'SEO and Google foundations are built into the experience from day one.']
      ]
    },
    services: {
      label: 'Services',
      title: 'Design, technology and visibility. We build the digital core of your brand as one system.',
      items: [
        ['01', 'Web Design & Development', 'We design and build websites specifically for your brand. No off-the-shelf templates; the structure is shaped around your business, audience and goals.'],
        ['02', 'SEO & Search Visibility', 'Technical SEO, content structure and discoverability are built into the foundation rather than bolted on at the end.'],
        ['03', 'Google Maps & Local Presence', 'We connect Google Business Profile, location, reviews and contact channels into one trustworthy digital presence.'],
        ['04', 'Maintenance & Continuous Growth', 'After launch, we keep the system current with content, visuals, performance work and new features when needed.']
      ]
    },
    work: {
      label: 'Selected work',
      titleA: 'DIFFERENT INDUSTRIES',
      titleB: 'BESPOKE DESIGNS',
      summary: 'Every industry has a different audience, trust signal and path to conversion. Our selected studies explore a distinct digital world for each brand instead of repeating one template.',
      all: 'View all work',
      concept: 'Design study',
      demoNote: 'Demo projects. Brand names are fictional.',
      coming: 'Live demo coming soon',
      open: 'Open live demo'
    },
    approach: {
      label: 'Approach',
      title: 'Think clearly. Move fast. We take ownership of your brand.',
      items: [
        ['01', 'Understand', 'We study the business, its customers and the current digital presence.'],
        ['02', 'Shape', 'We define the content architecture, visual system and user journey.'],
        ['03', 'Build', 'We turn the design into a fast, accessible and performance-focused product.'],
        ['04', 'Grow', 'After launch, we measure, update and evolve the system as the business grows.']
      ]
    },
    about: {
      label: 'About Mifer',
      title: 'We do not watch from the sidelines. We stay close from first idea to launch.',
      body: 'Mifer Digital is a digital studio based in Istanbul. We focus on a small number of projects at a time, bringing strategy, design, development and visibility to the same table. Decisions move faster, the character of the work stays intact, and the result feels genuinely yours.',
      ribbon: 'STRATEGY / DESIGN / DEVELOPMENT / VISIBILITY / DIRECT PRODUCTION / '
    },
    contact: {
      label: 'New project',
      titleA: 'LET’S MAKE',
      titleB: 'SOMETHING BETTER',
      mail: 'Send an email',
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
