import type { Locale } from './i18n';

export const constructionPaths = { tr: '/tr/insaat-demo', en: '/en/construction-demo' };
export const constructionBrand = 'Kavren';
export type ProjectStatus = 'completed' | 'ongoing';
export type Project = {
  slug: Record<Locale, string>;
  name: Record<Locale, string>;
  location: Record<Locale, string>;
  category: Record<Locale, string>;
  year: string;
  area: number;
  image: string;
  status: ProjectStatus;
  alt: Record<Locale, string>;
  introduction: Record<Locale, string>;
  brief: Record<Locale, string>;
  scope: Record<Locale, string[]>;
  facts: Record<Locale, [string, string][]>;
  engineering: Record<Locale, string>;
};

// Fictional portfolio content. No figures, identities or properties represent a real company.
export const constructionProjects: Project[] = [
  {
    slug: { tr: 'kavakli-yerleskesi', en: 'kavakli-residences' },
    name: { tr: 'Kavaklı Yerleşkesi', en: 'Kavaklı Residences' },
    location: { tr: 'Beylikdüzü, İstanbul', en: 'Beylikdüzü, Istanbul' },
    category: { tr: 'Konut', en: 'Residential' },
    year: '2024', area: 48600, image: 'kavakli', status: 'completed',
    alt: { tr: 'Ortak avlu etrafında yerleşen konut blokları; Kavaklı Yerleşkesi konseptinin havadan görünümü', en: 'Aerial view of residential blocks around a shared courtyard in the fictional Kavaklı development' },
    introduction: {
      tr: 'Beş blok, ortak bir peyzaj omurgası ve 200 konut. Kavaklı Yerleşkesi, yapı adasının bütününü ele alan bir geliştirme ve uygulama projesi.',
      en: 'Five buildings, a shared landscape and 200 homes. Kavaklı is a residential development planned and delivered as one connected site.'
    },
    brief: {
      tr: 'Blokların eş zamanlı ilerlemesi için ortak bodrum, üstyapı ve çevre düzenleme işleri ayrı teslim paketleriyle planlandı. Araç ve yaya dolaşımı birbirinden ayrılarak ortak alanların sürekliliği korundu.',
      en: 'The shared basement, superstructures and landscape were organised into coordinated work packages. Separating vehicle and pedestrian routes keeps the shared outdoor spaces connected.'
    },
    scope: { tr: ['Proje geliştirme', 'Betonarme üstyapı', 'Mekanik ve elektrik uygulamaları', 'Cephe, ince işler ve peyzaj'], en: ['Project development', 'Reinforced-concrete superstructure', 'Mechanical and electrical works', 'Façades, fit-out and landscape'] },
    facts: { tr: [['Konut sayısı', '200'], ['Blok sayısı', '5'], ['İşveren', 'Kavren Proje Geliştirme'], ['Üstlenilen rol', 'Geliştirici / Ana yüklenici']], en: [['Homes', '200'], ['Buildings', '5'], ['Developer', 'Kavren Development'], ['Our role', 'Developer / Main contractor']] },
    engineering: {
      tr: 'Tekrarlanan yapı elemanları için kalıp döngüleri, ekip dağılımı ve tedarik takvimi birlikte yönetildi. Cephe birleşimleri ve ıslak hacim detayları örnek uygulama üzerinden değerlendirilerek saha ekiplerine aktarıldı.',
      en: 'Formwork cycles, team allocation and procurement were coordinated around the repeating structural elements. Façade junctions and wet-area details were reviewed through sample installations before wider execution.'
    }
  },
  {
    slug: { tr: 'maslak-is-merkezi', en: 'maslak-business-centre' },
    name: { tr: 'Maslak İş Merkezi', en: 'Maslak Business Centre' },
    location: { tr: 'Sarıyer, İstanbul', en: 'Sarıyer, Istanbul' },
    category: { tr: 'Ticari', en: 'Commercial' },
    year: '2025', area: 31200, image: 'maslak', status: 'completed',
    alt: { tr: 'Beton ve cam cepheli ticari yapı; Maslak İş Merkezi konsepti', en: 'Concrete and glass façades of the fictional Maslak Business Centre' },
    introduction: {
      tr: '31.200 m² kapalı alanda ofis, toplantı ve ortak kullanım işlevleri. Kullanıcı ihtiyaçlarına uyarlanabilen kat planları, koordineli bir yapı ve tesisat sistemiyle bir araya geliyor.',
      en: '31,200 m² of offices, meeting facilities and shared spaces. Adaptable floor plates are supported by a carefully coordinated structure and building-services strategy.'
    },
    brief: {
      tr: 'Yoğun kent dokusu içindeki şantiyede teslimat saatleri ve malzeme hareketi kontrollü bir lojistik planla yürütüldü. Kabuk ve çekirdek işleri, kiracı alanlarına ait uygulama takvimiyle birlikte ele alındı.',
      en: 'Working in a dense urban setting called for controlled deliveries and a carefully sequenced logistics plan. Shell-and-core work was coordinated with the programme for tenant fit-out.'
    },
    scope: { tr: ['Ana yüklenicilik', 'Betonarme ve çelik imalatlar', 'Cephe koordinasyonu', 'Tesisat ve devreye alma'], en: ['Main contracting', 'Concrete and steel works', 'Façade coordination', 'Building services and commissioning'] },
    facts: { tr: [['Yapı sistemi', 'Betonarme'], ['Kullanım', 'Ofis / Ticari'], ['İşveren', 'Kavren Ticari Yatırımlar'], ['Üstlenilen rol', 'Ana yüklenici']], en: [['Structure', 'Concrete frame'], ['Use', 'Office / Commercial'], ['Client', 'Kavren Commercial Investments'], ['Our role', 'Main contractor']] },
    engineering: {
      tr: 'Mekanik, elektrik ve taşıyıcı sistem geçişleri imalat öncesi üç boyutlu koordinasyonla kontrol edildi. Kat bazlı kontrol listeleri ve kademeli devreye alma planı, teslim hazırlığının temelini oluşturdu.',
      en: 'Mechanical, electrical and structural interfaces were reviewed through three-dimensional coordination before installation. Floor-by-floor inspections and staged commissioning formed the basis of handover planning.'
    }
  },
  {
    slug: { tr: 'dilovasi-lojistik', en: 'dilovasi-logistics' },
    name: { tr: 'Dilovası Lojistik', en: 'Dilovası Logistics' },
    location: { tr: 'Dilovası, Kocaeli', en: 'Dilovası, Kocaeli' },
    category: { tr: 'Endüstriyel', en: 'Industrial' },
    year: '2026–2027', area: 62400, image: 'dilovasi', status: 'ongoing',
    alt: { tr: 'Yükleme alanları ve geniş çatı açıklıklarıyla Dilovası Lojistik konsept tesisinin havadan görünümü', en: 'Aerial view of loading bays and large roof spans at the fictional Dilovası logistics facility' },
    introduction: {
      tr: 'Depolama, sevkiyat ve destek birimlerini tek tesiste birleştiren 62.400 m² lojistik yatırımı. Geniş açıklıklı sistem, operasyonun gerektirdiği esnek yerleşimi destekliyor.',
      en: 'A 62,400 m² logistics facility bringing storage, dispatch and support functions together. A wide-span structural system allows the layout to respond to operational requirements.'
    },
    brief: {
      tr: 'Yükleme sahaları, ağır araç dolaşımı ve tesis içi akışlar birlikte planlandı. Üstyapı ve bina kabuğu tamamlanan projede, teknik sistemlerin devreye alınması ve saha kabul süreçleri devam ediyor.',
      en: 'Loading areas, heavy-vehicle circulation and internal flows were planned together. The structure and envelope are complete; commissioning and site acceptance activities are now in progress.'
    },
    scope: { tr: ['Anahtar teslim taahhüt', 'Çelik taşıyıcı sistem', 'Endüstriyel zemin ve altyapı', 'Teknik sistemler / Devreye alma'], en: ['Turnkey contracting', 'Steel structure', 'Industrial floors and infrastructure', 'Technical systems / Commissioning'] },
    facts: { tr: [['Yükleme noktası', '24'], ['Güncel aşama', 'Devreye alma'], ['İşveren', 'Kavren Endüstriyel Yatırımlar'], ['Planlanan teslim', '2027 / İlk çeyrek']], en: [['Loading bays', '24'], ['Current stage', 'Commissioning'], ['Client', 'Kavren Industrial Investments'], ['Planned handover', 'Q1 / 2027']] },
    engineering: {
      tr: 'Çelik montaj sırası, çatı ve cephe kaplama işleriyle eş güdümlü yürütüldü. Zemin uygulamaları, yükleme bölgeleri ve teknik sistem testleri için ayrı kabul noktaları tanımlandı.',
      en: 'Steel erection was sequenced with roof and façade installation. Separate acceptance checkpoints were established for the floors, loading areas and technical-system tests.'
    }
  }
];

export const projectPath = (project: Project, lang: Locale) => `${constructionPaths[lang]}/${lang === 'tr' ? 'projeler' : 'projects'}/${project.slug[lang]}`;
export const projectArea = (project: Project, lang: Locale) => `${new Intl.NumberFormat(lang === 'tr' ? 'tr-TR' : 'en-GB').format(project.area)} m²`;
export const projectImage = (project: Project, width = 1536) => `/demos/kavren/${project.image}-${width}.webp`;

export const constructionCopy = {
  tr: {
    title: 'Kavren — İnşaat, Taahhüt ve Proje Geliştirme',
    description: 'Kavren yapı geliştirme ve taahhüt konsepti. Konut, ticari ve endüstriyel projeler; mühendislikten saha uygulamasına.',
    descriptor: 'İNŞAAT & TAAHHÜT', nav: ['Projeler', 'Uzmanlık', 'Kurumsal', 'İletişim'], menu: 'Menüyü aç', close: 'Kapat',
    eyebrow: 'İstanbul merkezli. 1998’den beri.', heroA: 'Mühendislikten', heroB: 'sahaya.',
    heroText: 'Konut, ticari ve endüstriyel yapılarda proje geliştirme ve anahtar teslim taahhüt.',
    explore: 'Projeleri inceleyin', heroProject: 'Tamamlanan proje', heroYear: 'Beylikdüzü, İstanbul / 2024',
    stats: [['28', 'yıl', 'Mühendislik deneyimi'], ['46', 'proje', 'Tamamlanan iş'], ['780.000', 'm²', 'Toplam inşaat alanı'], ['4', 'proje', 'Devam eden uygulama']],
    portfolio: 'Proje portföyü', projectTitle: 'Ölçek değişir.\nDisiplin değişmez.', projectIntro: 'Farklı ihtiyaçlar, farklı yapılar. Geliştirmeden teslim aşamasına kadar üstlendiğimiz işlerden bir seçki.',
    filters: ['Tüm projeler', 'Tamamlanan', 'Devam eden'], filterLabel: 'Projeleri durumuna göre filtrele', results: 'proje gösteriliyor',
    completed: 'Tamamlandı', ongoing: 'Devam ediyor', viewProject: 'Proje detayları', project: 'Proje',
    expertiseLabel: 'Faaliyet alanları', expertiseTitle: 'Her yapının\ngereğini biliyoruz.',
    expertiseIntro: 'Yatırımın amacı, teknik ihtiyaçları ve uygulama koşulları aynı masada değerlendirilir.',
    expertise: [
      ['Konut & karma kullanım', 'Yerleşim planı, ortak alanlar ve yapı sistemlerini birlikte ele alır; geliştirme, üstyapı ve çevre düzenleme süreçlerini koordine ederiz.'],
      ['Ticari yapılar', 'Ofis ve ticari alanlarda esnek kullanım, teknik altyapı ve işletme ihtiyaçlarını uygulama programına taşırız.'],
      ['Endüstriyel tesisler', 'Üretim ve lojistik akışlarına uygun taşıyıcı sistemler, altyapı, endüstriyel zeminler ve teknik hacimler uygularız.'],
      ['Anahtar teslim taahhüt', 'İş programı, maliyet, tedarik ve saha ekiplerini tek uygulama organizasyonu içinde yönetiriz.'],
      ['Proje geliştirme', 'Arsa, fizibilite ve kullanım kararlarından başlayarak tasarım ve yapım süreçlerini yatırımın hedefleriyle birlikte planlarız.']
    ],
    approachLabel: 'Uygulama disiplini', approachTitle: 'İyi planlanır.\nSahada karşılık bulur.',
    approachText: 'Bir yapının niteliği, görünmeyen kararlarla başlar. Tasarım koordinasyonunu, imalat sırasını ve kontrol süreçlerini birlikte yönetiriz.',
    approach: [['Planlama', 'İş paketleri, kritik tedarikler ve saha lojistiği uygulamadan önce netleşir.'], ['Koordinasyon', 'Mimari, statik ve tesisat ekipleri aynı iş programı üzerinde çalışır.'], ['Kontrol & teslim', 'Malzeme onayları, saha kontrolleri ve devreye alma kayıtları teslim dosyasında bir araya gelir.']],
    siteCaption: 'Taşıyıcı sistem / Saha koordinasyonu', siteAlt: 'Betonarme taşıyıcı sistem imalatı sırasında korumalı çalışma alanı ve saha ekibi; temsili şantiye',
    companyLabel: 'Kavren hakkında', companyTitle: '28 yılda büyüyen\nbir uygulama kültürü.',
    companyText: '1998’de İstanbul’da başlayan Kavren, ilk konut taahhütlerinden ticari ve endüstriyel yapılara uzanan bir uygulama birikimine sahip. Proje geliştirme ile saha yönetimini aynı organizasyonda buluşturuyoruz.',
    companyNote: 'İşin başında kurulan planın, teslim edilen yapıda karşılığını bulmasına odaklanıyoruz.',
    milestones: [['1998', 'İstanbul’da kuruluş'], ['2011', 'Ticari yapılara açılım'], ['2020', 'Endüstriyel uygulamalar'], ['2026', 'Marmara’da 4 aktif proje']],
    responsibility: 'Sorumluluk, uygulamanın içinde.', responsibilityText: 'İş güvenliği planlaması, atıkların ayrıştırılması, malzeme takibi ve kaynak kullanımı saha organizasyonunun parçasıdır. Projeye özgü hedefleri, uygulanabilir iş paketlerine dönüştürürüz.',
    contactLabel: 'İletişim', contactTitle: 'Projenizi\nkonuşalım.', contactText: 'Yatırım, taahhüt veya iş ortaklığı talepleriniz için ilgili ekibe ulaşın.',
    hq: 'Genel merkez', address: 'Kozyatağı, Kadıköy\nİstanbul, Türkiye', addressNote: 'Konsept için örnek merkez konumu.', phone: 'Telefon ile iletişim', email: 'E-posta ile iletişim',
    inquiry: ['Proje & yatırım', 'Tedarikçi & alt yüklenici', 'Kariyer'], inquiryText: ['Yeni bir projenin kapsamını görüşmek için.', 'Uzmanlığınızı ve iş birliği teklifinizi paylaşmak için.', 'Ekibimize katılmak ve başvurunuzu iletmek için.'],
    inquiryAction: 'İletişim formu', formTitle: 'İlk temas', formIntro: 'Kısaca kendinizden ve talebinizden söz edin.',
    name: 'Ad soyad', company: 'Şirket (isteğe bağlı)', emailLabel: 'E-posta', subject: 'Görüşme konusu', message: 'Kısa mesajınız', send: 'Talebi önizle',
    notice: 'Demo bilgilendirmesini okudum.', noticeLink: 'Demo ve gizlilik bilgileri',
    formNote: 'Bu bir konsept formudur. Bilgileriniz gönderilmez veya kaydedilmez.', success: 'Demo tamamlandı. Bilgileriniz gönderilmedi ve kaydedilmedi; gerçek bir talep oluşturulmadı.',
    phoneDemo: 'Kavren kurgusal bir şirket konseptidir. Telefon ve e-posta bağlantıları, gerçek şirket bilgileriyle yayına hazırlanırken etkinleştirilir.',
    footer: 'İnşaat. Taahhüt. Proje geliştirme.', demo: 'Mifer Digital tarafından hazırlanmış konsept çalışma. Kavren, projeleri, geçmişi ve sayısal verileri kurgusaldır; görseller temsilidir.',
    legal: 'Demo & gizlilik', backProjects: 'Projelere dön', overview: 'Proje özeti', scope: 'Üstlendiğimiz kapsam', engineering: 'Uygulama notları', location: 'Konum', area: 'İnşaat alanı', date: 'Uygulama dönemi', category: 'Proje türü', status: 'Durum', nextProject: 'Sıradaki proje',
    policyTitle: 'Demo ve gizlilik bilgileri', policyText: 'Kavren, Mifer Digital’in tasarım ve geliştirme yaklaşımını göstermek için oluşturulmuş kurgusal bir inşaat şirketidir. Bu sitedeki şirket, proje, tarih, konum ve sayısal bilgiler gerçek ticari faaliyetleri temsil etmez. Fotoğraflar bu konsept için üretilmiştir.',
    policyForm: 'İletişim formu yalnızca arayüzü denemek içindir. Form verileri sunucuya gönderilmez, tarayıcıda kalıcı olarak saklanmaz ve üçüncü kişilerle paylaşılmaz. Gönderim yerine yerel bir örnek sonuç gösterilir; alanlar temizlenir.',
    policyData: 'Bu demo kodu analiz, reklam veya takip çerezi kurmaz. Gerçek şirket yayını için ticari bilgiler, veri sorumlusu aydınlatma metni, iletişim uç noktaları ve gerekli sözleşmeler ayrıca hazırlanmalıdır.',
    updated: 'Son güncelleme: 7 Eylül 2026'
  },
  en: {
    title: 'Kavren — Construction, Contracting & Development',
    description: 'A construction and development concept for Kavren. Residential, commercial and industrial projects, from engineering to delivery.',
    descriptor: 'CONSTRUCTION & CONTRACTING', nav: ['Projects', 'Expertise', 'Company', 'Contact'], menu: 'Open menu', close: 'Close',
    eyebrow: 'Based in Istanbul. Since 1998.', heroA: 'Engineering.', heroB: 'Delivered.',
    heroText: 'Project development and turnkey contracting for residential, commercial and industrial buildings.',
    explore: 'Explore our projects', heroProject: 'Completed project', heroYear: 'Beylikdüzü, Istanbul / 2024',
    stats: [['28', 'years', 'Engineering experience'], ['46', 'projects', 'Completed commissions'], ['780,000', 'm²', 'Total construction area'], ['4', 'projects', 'Currently on site']],
    portfolio: 'Project portfolio', projectTitle: 'Different scales.\nOne discipline.', projectIntro: 'Different buildings, different demands. A selection of projects we have taken from development through to delivery.',
    filters: ['All projects', 'Completed', 'In progress'], filterLabel: 'Filter projects by status', results: 'projects shown',
    completed: 'Completed', ongoing: 'In progress', viewProject: 'View project', project: 'Project',
    expertiseLabel: 'Our expertise', expertiseTitle: 'Built around\nthe brief.',
    expertiseIntro: 'Investment goals, technical requirements and site conditions are considered together.',
    expertise: [
      ['Residential & mixed-use', 'We coordinate development, structures and landscape, considering site planning, shared spaces and building systems as a whole.'],
      ['Commercial buildings', 'We translate flexible occupancy, technical infrastructure and operational needs into a coordinated construction programme.'],
      ['Industrial facilities', 'We deliver structures, infrastructure, industrial floors and technical spaces around manufacturing and logistics requirements.'],
      ['Turnkey contracting', 'Programme, cost, procurement and site teams are managed through one delivery organisation.'],
      ['Project development', 'From land and feasibility to design and construction, each stage is planned around the investment brief.']
    ],
    approachLabel: 'How we deliver', approachTitle: 'Planned carefully.\nBuilt precisely.',
    approachText: 'A building’s quality starts with decisions you cannot see. We bring design coordination, construction sequencing and inspection together.',
    approach: [['Planning', 'Work packages, critical procurement and site logistics are established before construction.'], ['Coordination', 'Architectural, structural and building-services teams work to one programme.'], ['Control & handover', 'Material approvals, inspections and commissioning records come together in the handover documentation.']],
    siteCaption: 'Structural works / Site coordination', siteAlt: 'Protected working area and site team inside a reinforced-concrete structure; concept construction photograph',
    companyLabel: 'About Kavren', companyTitle: '28 years of\npractical experience.',
    companyText: 'Established in Istanbul in 1998, Kavren grew from residential contracting into commercial and industrial construction. Today, project development and site delivery sit within the same organisation.',
    companyNote: 'Our focus is on making the plan agreed at the start visible in the building we hand over.',
    milestones: [['1998', 'Established in Istanbul'], ['2011', 'Commercial construction'], ['2020', 'Industrial delivery'], ['2026', '4 active Marmara projects']],
    responsibility: 'Responsibility on site.', responsibilityText: 'Safety planning, waste separation, material traceability and resource use are part of site management. Project-specific goals are translated into practical work packages.',
    contactLabel: 'Contact', contactTitle: 'Let’s discuss\nyour project.', contactText: 'Speak with the right team about an investment, construction brief or potential partnership.',
    hq: 'Head office', address: 'Kozyatağı, Kadıköy\nIstanbul, Türkiye', addressNote: 'Illustrative location for this concept.', phone: 'Contact by phone', email: 'Contact by email',
    inquiry: ['Projects & investment', 'Suppliers & subcontractors', 'Careers'], inquiryText: ['Discuss the scope of a new project.', 'Introduce your expertise and partnership proposal.', 'Express your interest in joining our team.'],
    inquiryAction: 'Contact form', formTitle: 'Start a conversation', formIntro: 'Tell us a little about yourself and your enquiry.',
    name: 'Full name', company: 'Company (optional)', emailLabel: 'Email', subject: 'Enquiry type', message: 'Your message', send: 'Preview enquiry',
    notice: 'I have read the demo information.', noticeLink: 'Demo and privacy information',
    formNote: 'This is a concept form. Your details are not sent or stored.', success: 'Demo complete. Your details were not sent or stored, and no actual enquiry was created.',
    phoneDemo: 'Kavren is a fictional company concept. Phone and email connections are enabled when verified company details are added for a real launch.',
    footer: 'Construction. Contracting. Development.', demo: 'A concept by Mifer Digital. Kavren, its projects, history and figures are fictional. Images are illustrative.',
    legal: 'Demo & privacy', backProjects: 'Back to projects', overview: 'Project overview', scope: 'Scope of work', engineering: 'Delivery notes', location: 'Location', area: 'Construction area', date: 'Project period', category: 'Sector', status: 'Status', nextProject: 'Next project',
    policyTitle: 'Demo and privacy information', policyText: 'Kavren is a fictional construction company created to demonstrate Mifer Digital’s design and development approach. Company details, projects, dates, locations and figures do not represent real commercial activity. Images were generated for this concept.',
    policyForm: 'The contact form demonstrates the interface only. Form values are not sent to a server, stored persistently in the browser or shared with third parties. A local example result is displayed and the fields are cleared.',
    policyData: 'This demo code does not add analytics, advertising or tracking cookies. A real company launch requires verified business details, a controller-specific privacy notice, configured contact services and any necessary agreements.',
    updated: 'Last updated: 7 September 2026'
  }
} as const;
