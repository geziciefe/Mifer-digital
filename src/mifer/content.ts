export type Locale = "tr" | "en";

export type ProjectAccent = "green" | "navy" | "blue";

export interface Project {
  slug: string;
  accent: ProjectAccent;
  artWord: string;
  sector: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  tags: Record<Locale, string[]>;
}

export const routes: Record<Locale, { home: string; work: string; alternateHome: string; alternateWork: string }> = {
  tr: {
    home: "/",
    work: "/demo-calismalar",
    alternateHome: "/en",
    alternateWork: "/en/demo-work",
  },
  en: {
    home: "/en",
    work: "/en/demo-work",
    alternateHome: "/",
    alternateWork: "/demo-calismalar",
  },
};

export const projects: Project[] = [
  {
    slug: "beauty",
    accent: "green",
    artWord: "BEAUTY",
    sector: { tr: "Güzellik & bakım", en: "Beauty & care" },
    title: {
      tr: "Güzellik Salonu Dijital Deneyimi",
      en: "Beauty Studio Digital Experience",
    },
    summary: {
      tr: "Hizmetleri, görsel vitrini ve randevuya geçişi mobil öncelikli tek akışta birleştiren konsept.",
      en: "A mobile-first concept connecting services, visual proof and the path to booking in one clear flow.",
    },
    tags: {
      tr: ["Web tasarım", "Randevu akışı", "Yerel görünürlük"],
      en: ["Web design", "Booking flow", "Local visibility"],
    },
  },
  {
    slug: "construction",
    accent: "navy",
    artWord: "BUILD",
    sector: { tr: "İnşaat & gayrimenkul", en: "Construction & property" },
    title: {
      tr: "İnşaat Firması Kurumsal Platformu",
      en: "Corporate Platform for Construction",
    },
    summary: {
      tr: "Projeleri öne çıkaran, kurumsal bilgiyi sadeleştiren ve teklif talebini kolaylaştıran güçlü bir vitrin.",
      en: "A confident showcase that prioritises projects, simplifies company information and makes enquiries easier.",
    },
    tags: {
      tr: ["Kurumsal site", "Proje vitrini", "SEO altyapısı"],
      en: ["Corporate site", "Project showcase", "SEO foundation"],
    },
  },
  {
    slug: "automotive",
    accent: "blue",
    artWord: "LOCAL",
    sector: { tr: "Otomotiv", en: "Automotive" },
    title: {
      tr: "Otomotiv Yerel Görünürlük Sistemi",
      en: "Automotive Local Visibility System",
    },
    summary: {
      tr: "Hizmetleri, konumu, güven unsurlarını ve iletişim yollarını tek müşteri yolculuğunda birleştiren konsept.",
      en: "A concept unifying services, location, trust signals and contact options into one customer journey.",
    },
    tags: {
      tr: ["Yerel SEO", "Google Maps", "WhatsApp"],
      en: ["Local SEO", "Google Maps", "WhatsApp"],
    },
  },
];

export const content = {
  tr: {
    nav: {
      services: "Hizmetler",
      work: "Çalışmalar",
      approach: "Yaklaşım",
      about: "Biz",
      contact: "İletişim",
      menu: "Menü",
      close: "Kapat",
    },
    hero: {
      line1: "İŞİNİZ İYİYSE,",
      line2: "DİJİTALDE DE",
      line3: "ÖYLE GÖRÜNMELİ.",
      summary: "Markanızın web sitesi, Google görünürlüğü ve müşteri temas noktalarını tek bir güçlü dijital sistemde topluyoruz.",
      work: "Çalışmaları gör",
      project: "Projeyi konuşalım",
    },
    intro: {
      label: "Ne yapıyoruz",
      title: "İnsanların sizi fark ettiği, anladığı ve seçtiği anları tasarlıyoruz.",
      lead: "Güçlü bir dijital izlenim tek bir ekranda oluşmaz. Arama sonucundan ilk bakışa, içerikten iletişime uzanan karar yolculuğunu aynı fikir etrafında kurgularız.",
      principles: [
        ["01", "İlk bakışta net", "Ne yaptığınız ve neden tercih edilmeniz gerektiği birkaç saniyede anlaşılır."],
        ["02", "Her temasta tutarlı", "Web, Google ve iletişim kanalları aynı marka hissini taşır."],
        ["03", "Harekete geçmek kolay", "Doğru bilgi doğru anda görünür; ziyaretçi yolun ortasında kaybolmaz."],
      ],
    },
    services: {
      label: "Hizmetler",
      title: "Dijital görünümünüzün birbirinden kopuk parçalarını tek sisteme çeviriyoruz.",
      items: [
        ["01", "Web Tasarım & Geliştirme", "Markanıza özel, hızlı ve mobil öncelikli web siteleri. Hazır şablon hissinden özellikle uzak duruyoruz."],
        ["02", "SEO & Google Görünürlüğü", "Teknik SEO, içerik yapısı ve arama görünürlüğünü sonradan eklenen bir süs değil, sistemin temeli olarak kuruyoruz."],
        ["03", "Google Maps & Yerel Vitrin", "Google İşletme Profili, konum, yorumlar ve iletişim kanallarını aynı güven veren görünümde birleştiriyoruz."],
        ["04", "Bakım & Sürekli Geliştirme", "Yayın sonrasında içerik, görsel, performans ve yeni özellik ihtiyaçlarında sistemi güncel tutuyoruz."],
      ],
    },
    work: {
      label: "Seçili konseptler",
      titleA: "FARKLI SEKTÖRLER.",
      titleB: "NET DİJİTAL DENEYİMLER.",
      summary: "Farklı sektörler için hazırladığımız seçili konseptler; strateji, içerik mimarisi ve arayüz kararlarımızın nasıl bir araya geldiğini gösteriyor.",
      all: "Tüm konseptleri incele",
      concept: "Mifer / Konsept",
      status: "Konsept geliştirme aşamasında",
    },
    approach: {
      label: "Yaklaşım",
      title: "Karmaşık ajans süreci yok. Dört açık adım var.",
      items: [
        ["01", "Anlarız", "İşletmenizi, müşterinizi ve mevcut dijital görünümünüzü inceleriz."],
        ["02", "Kurgularız", "İçerik mimarisini, görsel sistemi ve kullanıcı yolculuğunu netleştiririz."],
        ["03", "Üretiriz", "Tasarladığımız sistemi hızlı, erişilebilir ve performanslı biçimde geliştiririz."],
        ["04", "Büyütürüz", "Yayın sonrasında ölçer, günceller ve ihtiyaç oldukça sistemi geliştiririz."],
      ],
    },
    about: {
      label: "Mifer hakkında",
      title: "Her projeye doğrudan dahil oluyor, fikri yayına kadar aynı standartla taşıyoruz.",
      body: "Mifer Digital, İstanbul merkezli bağımsız bir dijital stüdyo. İşletmelerin web sitesinden Google görünürlüğüne uzanan temas noktalarını daha güçlü, daha tutarlı ve daha kolay yönetilir hâle getiriyoruz.",
      chips: ["İstanbul merkezli", "Dünya genelinde projeler", "TR / EN üretim", "Tasarım + geliştirme"],
    },
    contact: {
      label: "Yeni proje",
      titleA: "BİR ŞEYLERİ",
      titleB: "DAHA İYİ YAPALIM.",
      intro: "Size en kolay gelen kanaldan ulaşın. İlk görüşmede ihtiyacı netleştirir, sonraki adımı açıkça paylaşırız.",
      emailLabel: "E-posta",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      whatsappAction: "Mesaj gönder",
      instagramAction: "@miferdigital",
      location: "Maltepe, İstanbul · Dünya genelinde projeler",
    },
    form: {
      eyebrow: "Yeni proje",
      title: "Bir proje konuşalım.",
      summary: "Ne yapmak istediğinizi birkaç cümleyle anlatın. Yalnızca projeyi anlayabilmek için gereken bilgileri soruyoruz.",
      name: "Ad Soyad *",
      email: "E-posta *",
      brand: "İşletme / Marka",
      phone: "Telefon",
      service: "Neye ihtiyacınız var? *",
      choose: "Bir hizmet seçin",
      options: ["Web sitesi", "SEO & Google görünürlüğü", "Google Maps / yerel görünürlük", "Bakım & geliştirme", "Birden fazla hizmet", "Henüz emin değilim"],
      link: "Mevcut site / Instagram",
      message: "Projeyi kısaca anlatın *",
      consent: "Bu bilgilerin proje talebime dönüş yapılması amacıyla kullanılmasını kabul ediyorum.",
      submit: "Talebi e-postayla gönder",
    },
    workPage: {
      label: "Demo çalışmalar",
      title: "FİKRİ NASIL DİJİTAL DENEYİME DÖNÜŞTÜRDÜĞÜMÜZÜ GÖSTERİYORUZ.",
      summary: "Her çalışma; sektörün gerçek ihtiyaçları üzerinden araştırma, içerik mimarisi ve arayüz yaklaşımımızı görünür kılan bir Mifer konseptidir.",
      back: "Ana sayfaya dön",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      approach: "Approach",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      line1: "IF YOUR WORK IS GOOD,",
      line2: "YOUR DIGITAL PRESENCE",
      line3: "SHOULD SHOW IT.",
      summary: "We bring your website, Google visibility and customer touchpoints together into one strong digital system.",
      work: "View our work",
      project: "Start a project",
    },
    intro: {
      label: "What we do",
      title: "We design the digital system people use to find, understand and confidently contact your business.",
      lead: "A strong digital impression is built across the whole decision journey — from search result and first glance to content and contact. We shape every step around one clear idea.",
      principles: [
        ["01", "Clear at first glance", "What you do and why it matters becomes obvious within seconds."],
        ["02", "Consistent at every touchpoint", "Your website, Google presence and contact channels feel like one brand."],
        ["03", "Easy to act on", "The right information appears at the right moment, without friction."],
      ],
    },
    services: {
      label: "Services",
      title: "We turn disconnected parts of your digital presence into one coherent system.",
      items: [
        ["01", "Web Design & Development", "Distinctive, fast and mobile-first websites shaped around your brand — without the off-the-shelf template feeling."],
        ["02", "SEO & Search Visibility", "Technical SEO, content structure and discoverability are built into the foundation rather than added at the end."],
        ["03", "Google Maps & Local Presence", "We connect your business profile, location, reviews and contact channels into one credible presence."],
        ["04", "Maintenance & Continuous Growth", "After launch, we keep the system current across content, visuals, performance and new features."],
      ],
    },
    work: {
      label: "Selected concepts",
      titleA: "DIFFERENT INDUSTRIES.",
      titleB: "CLEAR DIGITAL EXPERIENCES.",
      summary: "Our selected concepts show how strategy, content architecture and interface decisions come together across different industries.",
      all: "View all concepts",
      concept: "Mifer / Concept",
      status: "Concept in development",
    },
    approach: {
      label: "Approach",
      title: "No complicated agency process. Four clear steps.",
      items: [
        ["01", "Understand", "We study your business, your customers and the current digital presence."],
        ["02", "Shape", "We define the content architecture, visual system and customer journey."],
        ["03", "Build", "We develop the system to be fast, accessible and performance-focused."],
        ["04", "Grow", "After launch, we measure, update and evolve the system as needs change."],
      ],
    },
    about: {
      label: "About Mifer",
      title: "We stay directly involved and carry every idea to launch with the same standard.",
      body: "Mifer Digital is an independent digital studio based in Istanbul. We make every touchpoint — from a business website to its Google presence — stronger, more coherent and easier to manage.",
      chips: ["Based in Istanbul", "Projects worldwide", "TR / EN production", "Design + development"],
    },
    contact: {
      label: "New project",
      titleA: "LET’S MAKE",
      titleB: "SOMETHING BETTER.",
      intro: "Reach us through whichever channel feels easiest. We will clarify the need in the first conversation and make the next step clear.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      whatsappAction: "Send a message",
      instagramAction: "@miferdigital",
      location: "Maltepe, Istanbul · Projects worldwide",
    },
    form: {
      eyebrow: "New project",
      title: "Let’s talk projects.",
      summary: "Tell us what you want to build in a few lines. We only ask for what helps us understand the project.",
      name: "Name *",
      email: "Email *",
      brand: "Business / Brand",
      phone: "Phone",
      service: "What do you need? *",
      choose: "Select a service",
      options: ["Website", "SEO & Google visibility", "Google Maps / local presence", "Maintenance & development", "Multiple services", "Not sure yet"],
      link: "Current website / Instagram",
      message: "Tell us about the project *",
      consent: "I agree that this information may be used to respond to my project enquiry.",
      submit: "Send enquiry by email",
    },
    workPage: {
      label: "Demo work",
      title: "HOW WE TURN AN IDEA INTO A DIGITAL EXPERIENCE.",
      summary: "Each study is a Mifer concept that makes our research, content architecture and interface approach visible through a real industry need.",
      back: "Back to home",
    },
  },
} as const;

export const contact = {
  email: "iletisim@miferdigital.com",
  whatsappDisplay: "+90 216 235 09 30",
  whatsappHref: "https://wa.me/902162350930?text=Merhaba%20Mifer%20Digital%2C%20bir%20proje%20hakk%C4%B1nda%20konu%C5%9Fmak%20istiyorum.",
  instagramHandle: "@miferdigital",
  instagramHref: "https://www.instagram.com/miferdigital/",
};
