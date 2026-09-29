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
      services: 'Süreç',
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
      label: "Süreç",
      title: "Projeniz nasıl ilerler?",
      items: [
        ["Tanışma", "İlk görüşme, işletmenizde ve projeyi yürütecek Mifer ekibiyle gerçekleşir. İşinizin günlük akışı, müşterileriniz ve web sitesinden beklentileriniz yerinde konuşulur. Mevcut site, sosyal medya ve iletişim kanalları da bu görüşmenin parçasıdır.", "YERİNDE GÖRÜŞME", "İşletmenizin ihtiyaçları ve projenin amacı.", "Tanışma"],
        ["Planlama", "Görüşmede öne çıkan ihtiyaçlar; sayfa yapısı, içerik ve iletişim yollarıyla birlikte bir proje planına dönüşür. Teslim kapsamı, takvim, içerikleri kimin sağlayacağı ve onay noktaları bu aşamada belirlenir.", "KAPSAM · TAKVİM", "Kapsamı, takvimi ve sorumlulukları belli bir plan.", "Planlama"],
        ["Tasarım ve yapım", "Markanızın görsel dili ve sayfa düzeni şekillenir; tasarım, çalışan bir web sitesine dönüşür. Mobil görünüm, hız, bağlantılar ve iletişim akışları geliştirme boyunca kontrol edilir.", "TASARIM · GELİŞTİRME", "İncelemenize hazır, çalışan bir web sitesi.", "Tasarım"],
        ["Sizin kontrolünüz", "Site, yayına alınmadan önce incelemeniz için paylaşılır. Değişmesini istediğiniz alanlar birlikte değerlendirilir. Anlaşılan kapsam içindeki düzenlemelerin ardından son hâli onayınıza sunulur.", "GERİ BİLDİRİM · ONAY", "Geri bildirimlerinizle tamamlanan ve onayladığınız site.", "Kontrol"],
        ["Yayın ve aktif destek", "Onaylanan site, alan adı ve arama altyapısı kontrollerinin ardından yayına açılır. Seçtiğiniz pakete göre bakım, güncellemeler ve düzenli destek devam eder. Yeni ihtiyaçların takibi yine projede çalışan ekiptedir.", "YAYIN · DESTEK", "Yayındaki siteniz ve devam eden ekip desteği.", "Yayın"]
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
      title: 'Sürecin arkasındaki kararlar.',
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
      title: 'Mifer Digital | Web Design, SEO & Digital Visibility',
      description: 'Mifer Digital builds bespoke websites, SEO foundations and Google visibility systems for ambitious brands.'
    },
    nav: {
      work: 'Work',
      services: 'Process',
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
      label: "Process",
      title: "Your project, step by step.",
      items: [
        ["Meeting you", "The first conversation takes place at your business with the Mifer team responsible for your project. It is a chance to discuss how the business works, who your customers are and what you need from the website. Your existing site, social accounts and contact channels are part of the conversation.", "AT YOUR BUSINESS", "An understanding of your needs and the purpose of the project.", "Meet"],
        ["Planning", "The priorities from that conversation become a plan for the pages, content and contact journeys. Scope, timing, content responsibilities and approval points are agreed at this stage.", "SCOPE · SCHEDULE", "An agreed plan, schedule and responsibilities.", "Plan"],
        ["Design and build", "Your visual identity and page layouts take shape, then become a working website. Mobile layouts, performance, links and contact journeys are checked throughout development.", "DESIGN · DEVELOPMENT", "A working website ready for you to review.", "Create"],
        ["Your review", "The website is shared with you before launch. Any changes you would like are reviewed together. Once the adjustments within the agreed scope are complete, the final version is submitted for your approval.", "FEEDBACK · APPROVAL", "A finished website that reflects your feedback and approval.", "Review"],
        ["Launch and ongoing support", "The approved site goes live after checks on the domain and search foundations. Maintenance, updates and regular support continue through your chosen plan. The team that worked on your project remains your point of contact.", "LAUNCH · SUPPORT", "Your live website and continued support from the team.", "Launch"]
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
      title: 'The decisions behind the process.',
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
