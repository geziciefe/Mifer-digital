import type { Locale } from './i18n';

export type DemoStatus = 'live' | 'coming-soon';
export type DemoAccent = 'blue' | 'green' | 'navy' | 'gold' | 'oxide';

export type Demo = {
  title: Record<Locale, string>;
  sector: Record<Locale, string>;
  summary: Record<Locale, string>;
  tags: Record<Locale, string[]>;
  thumbnail?: string;
  liveUrl?: Record<Locale, string>;
  status: DemoStatus;
  accent: DemoAccent;
  action: Record<Locale, string>;
};

export const demos: Demo[] = [
  {
    title: { tr: 'Veyra Atelier', en: 'Veyra Atelier' },
    action: { tr: 'Salonu keşfet', en: 'Explore the salon' },
    sector: { tr: 'Kuaför & saç bakımı', en: 'Hair salon & care' },
    summary: {
      tr: 'Salonun karakterini ilk ekranda hissettiren, fiyatları netleştiren ve müşteriyi tek dokunuşla randevuya taşıyan özel tasarım.',
      en: 'A bespoke salon presence that sets the mood immediately, makes pricing clear and turns interest into a booking in one tap.'
    },
    tags: {
      tr: ['Net fiyat menüsü', 'Tek dokunuşla randevu', 'Yüzen WhatsApp', 'Instagram bağlantısı', 'Markanıza özel renkler', 'Kaliteyi gösteren düzen'],
      en: ['Clear price menu', 'One-tap booking', 'Floating WhatsApp', 'Instagram connection', 'Brand-specific colour', 'A quality-led layout']
    },
    thumbnail: '/demos/mifer-kuafor/hero-poster.webp',
    liveUrl: { tr: '/tr/kuafor-demo', en: '/en/hair-salon-demo' },
    status: 'live',
    accent: 'green'
  },
  {
    title: { tr: 'Avelis Dental Care', en: 'Avelis Dental Care' },
    action: { tr: 'Kliniği keşfet', en: 'Discover the clinic' },
    sector: { tr: 'Diş kliniği & estetik', en: 'Dental clinic & aesthetics' },
    summary: {
      tr: 'Güveni ilk ekranda kuran, uygulamaları anlaşılır kılan ve ziyaretçiyi sakin bir konsültasyon akışına taşıyan premium klinik deneyimi.',
      en: 'A premium clinic experience that builds trust immediately, explains care clearly and leads visitors into a calm consultation flow.'
    },
    tags: {
      tr: ['Tedavi rehberi', 'Randevu akışı', 'Hekim özgeçmişi', 'Klinik ortamı', 'KVKK bilgilendirmesi', 'Mobil iletişim'],
      en: ['Treatment guide', 'Appointment flow', 'Dentist profile', 'Clinic environment', 'Privacy information', 'Mobile contact']
    },
    thumbnail: '/demos/mifer-smile/clinic-hero.webp',
    liveUrl: { tr: '/tr/dis-klinigi-demo', en: '/en/dental-clinic-demo' },
    status: 'live',
    accent: 'blue'
  },
  {
    title: { tr: 'Kavren', en: 'Kavren' },
    action: { tr: 'Projeleri keşfet', en: 'Explore the projects' },
    sector: { tr: 'İnşaat & taahhüt', en: 'Construction & contracting' },
    summary: {
      tr: 'Ölçeği güçlü biçimde hissettiren; projeleri, mühendislik yaklaşımını ve kurumsal güveni tek anlatıda buluşturan dijital vitrin.',
      en: 'A bold corporate showcase bringing scale, landmark projects, engineering culture and trust into one connected story.'
    },
    tags: {
      tr: ['Büyük ölçekli proje sunumu', 'Proje detay sayfaları', 'Duruma göre filtreleme', 'Mühendislik yaklaşımı', 'Kurumsal tarihçe', 'İletişim akışı'],
      en: ['Large-scale project showcase', 'Project case studies', 'Status filters', 'Engineering approach', 'Company history', 'Enquiry flow']
    },
    thumbnail: '/demos/kavren/kavakli-1536.webp',
    liveUrl: { tr: '/tr/insaat-demo', en: '/en/construction-demo' },
    status: 'live',
    accent: 'oxide'
  }
];
