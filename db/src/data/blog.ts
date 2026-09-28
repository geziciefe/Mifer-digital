import { blogGuides } from './blogGuides';
import type { Locale } from './i18n';

type Article = { slug: string; title: string; summary: string; cta?: string; target?: 'packages' | 'services'; sections: { title: string; paragraphs: string[]; source?: { label: string; url: string }; table?: { headers: string[]; rows: string[][] } }[] };
export type BlogPost = { tr: Article; en: Article };
export const blogPath = (lang: Locale, post: BlogPost) => `/${lang}/blog/${post[lang].slug}`;
export const blogPosts: BlogPost[] = [
  {
    tr: {
      slug: 'web-projesinin-amacini-netlestirmek',
      title: 'Bir web projesine başlamadan önce neleri netleştiriyoruz?',
      summary: 'İşletmenin ihtiyacını, ziyaretçinin sorularını ve projenin sınırlarını aynı çerçevede toplamak.',
      sections: [
        { title: 'Önce sitenin görevi', paragraphs: [
          'Bir web projesi, kaç sayfa yapılacağını konuşmadan önce hangi ihtiyacı karşılayacağını anlamakla başlar. İşletmeniz ne sunuyor, müşterileriniz karar vermeden önce ne soruyor ve ziyaretçinin siteden sonra hangi adımı atması gerekiyor? Bu sorular, güzel görünen bir sayfanın ötesinde işe yarayan bir yapı kurmanın başlangıcıdır. İlk görüşmede mevcut siteniz varsa hangi noktalarının zorlandığını, yoksa bugün müşterilerin size nasıl ulaştığını konuşuruz.',
          'Varsayımsal bir örnek düşünelim: Bir kuaför için hizmetleri ve konumu kolayca göstermek, uzun bir şirket tarihçesinden daha öncelikli olabilir. Başka bir işletmede ise ürün özellikleri ve teklif talebi öne çıkabilir. Öncelikler işletmeye göre değişir; bu nedenle bütün projelere aynı sayfa listesini uygulamak doğru olmaz.'
        ] },
        { title: 'Sizden ne gerekir?', paragraphs: [
          'Hizmet veya ürün bilgileriniz, mevcut logo ve görselleriniz, iletişim bilgileriniz ve sık gelen müşteri soruları iyi bir başlangıçtır. Eksik içerikleri de baştan konuşuruz. Her şeyin kusursuz bir dosyada hazır olması gerekmez; hangi bilgiyi kimin sağlayacağı ve ne zaman onaylanacağı belli olmalıdır. Kullanılacak fotoğrafların izinleri ile işletmeye ait iddiaların doğruluğu da bu aşamada değerlendirilir.'
        ] },
        { title: 'Ortaya çıkan kararlar', paragraphs: [
          'Bu çalışmanın sonunda sitenin amacı, hedeflediği ziyaretçi, temel sayfaları ve içerik öncelikleri yazılı hale gelir. Teslim kapsamı, sorumluluklar ve onay noktaları da belirlenir. Böylece tasarım kararları kişisel beğeniler kadar ortak bir amaca dayanır. Proje sırasında yeni bir ihtiyaç çıkarsa mevcut kapsamla ilişkisini ve takvime etkisini birlikte değerlendirmek kolaylaşır. Bu çerçeve, sonraki aşamaların anlaşılır bir dayanağı olur.'
        ] }
      ]
    },
    en: {
      slug: 'clarifying-a-web-project',
      title: 'What do we clarify before starting a web project?',
      summary: 'Bringing business needs, visitor questions and project scope into one clear brief.',
      sections: [
        { title: 'Start with the job of the website', paragraphs: [
          'Before deciding how many pages to build, we need to understand what the website should achieve. What does your business offer? What do customers ask before making a decision? What should a visitor do next? These questions help turn a good-looking website into a useful one. In our first conversation, we discuss where your current site falls short, or how customers find you today if you do not have one.',
          'Consider a hypothetical hair salon. Clear service information and directions might matter more than a long company history. For another business, product specifications and a quotation request could be the priorities. A fixed page list cannot account for these differences.'
        ] },
        { title: 'What we need from you', paragraphs: [
          'Your services, existing brand materials, photographs, contact details and common customer questions give us a starting point. Missing content is discussed early. You do not need a perfect folder of finished material, but we should agree who will provide each item and who will approve it. Permission to use images and the accuracy of business claims also need attention.'
        ] },
        { title: 'What you leave with', paragraphs: [
          'The outcome is a written brief covering the purpose, audience, main pages and content priorities. Scope, responsibilities and approval points are agreed alongside it. Design decisions then have a shared reference beyond personal preference. If a new requirement appears later, we can discuss its effect on the scope and schedule with that original agreement in view.'
        ] }
      ]
    }
  },
  {
    tr: {
      slug: 'web-tasariminda-gorunum-ve-kullanim',
      title: 'Web tasarımında görünüm ve kullanım birlikte nasıl düşünülür?',
      summary: 'Markanın görsel dili ile ziyaretçinin ihtiyaçlarını aynı sayfa düzeninde buluşturmak.',
      sections: [
        { title: 'Görünüm bir amaca hizmet eder', paragraphs: [
          'Bir sitenin ilk izlenimi önemlidir; ancak ziyaretçi aradığı bilgiyi bulamıyorsa güçlü görseller tek başına yeterli olmaz. Tasarım aşamasında markanın nasıl görünmek istediği ile müşterinin ne öğrenmek istediğini birlikte ele alırız. Önce sayfadaki bilgilerin sırasını belirler, ardından tipografi, renk, görsel ve boşluk kararlarını bu sıraya göre geliştiririz. Amaç her alanı doldurmak değil, önemli bilgiyi fark edilir kılmaktır.',
          'Varsayımsal bir teknik hizmet işletmesinde ziyaretçi önce hizmetin kendi ihtiyacına uygun olup olmadığını, sonra çalışma bölgesini ve iletişim yolunu öğrenmek isteyebilir. Bu durumda dikkat çekici bir açılışın yanında açık bir hizmet açıklaması ve kolay bulunan iletişim bağlantısı gerekir. Hareketli öğeler, bu bilgileri okumayı zorlaştırmıyorsa anlamlıdır.'
        ] },
        { title: 'Kararları birlikte değerlendirmek', paragraphs: [
          'Sizden marka dosyalarınızı, kullanılabilecek görselleri ve işletmenizi nasıl anlatmak istediğinizi paylaşmanızı isteriz. Beğendiğiniz bir örnek varsa yalnızca adresini değil, neden beğendiğinizi bilmek de faydalıdır. Taslaklar üzerinden geri bildirim verirken “bu bilgi eksik” veya “müşterimiz önce bunu soruyor” gibi somut gözlemler, kararları daha sağlıklı hale getirir. Onay verecek kişinin baştan belli olması da tekrarları azaltır.'
        ] },
        { title: 'Tasarımın çıktısı', paragraphs: [
          'Sonuç, temel sayfaların düzeni ve tutarlı bir görsel sistemdir. Başlıklar, metinler, butonlar ve bağlantılar aynı mantıkla çalışır. Mobilde içerik sırası, dokunma alanları ve okunabilirlik ayrıca değerlendirilir; masaüstünün küçültülmüş bir kopyası yeterli sayılmaz. Klavye odağı ve renk karşıtlığı gibi kullanım ayrıntıları da tasarımın parçasıdır. Geliştirme aşamasına geçerken hangi bilginin nerede duracağı ve ziyaretçinin nasıl ilerleyeceği anlaşılır hale gelir.'
        ] }
      ]
    },
    en: {
      slug: 'designing-for-looks-and-use',
      title: 'How do we design for appearance and ease of use together?',
      summary: 'Connecting the visual character of your brand with what visitors need to do.',
      sections: [
        { title: 'Give the visual design a purpose', paragraphs: [
          'First impressions matter, but a striking website is of limited use if visitors cannot find an answer. During design, we consider how your brand should look alongside what customers need to understand. We establish the order of information first, then develop typography, colour, imagery and spacing around it. Empty space can help an important message stand out; every part of the screen does not need filling.',
          'For a hypothetical technical service business, visitors might first check whether the service fits their needs, then look for the coverage area and a contact option. A strong opening needs to support those questions. Animation is useful only when it leaves the information easy to read.'
        ] },
        { title: 'Making decisions together', paragraphs: [
          'We ask for your brand materials, usable images and an explanation of how you want the business to come across. If you share a reference, knowing why you like it is especially helpful. Specific feedback on a draft, such as a missing detail or a common customer question, gives us something practical to address. Agreeing who approves the design also helps avoid conflicting revisions.'
        ] },
        { title: 'The design outcome', paragraphs: [
          'The result is a set of page layouts and a consistent visual system for headings, text, buttons and links. Mobile content order, touch targets and readability receive their own attention. Keyboard focus and colour contrast are part of the same work. Development can then start with a clear understanding of where information belongs and how visitors should move through it.'
        ] }
      ]
    }
  },
  {
    tr: {
      slug: 'tasarimdan-calisan-siteye',
      title: 'Tasarımdan çalışan siteye nasıl geçilir?',
      summary: 'Onaylanan sayfaları farklı ekranlarda kullanılabilen, kontrol edilmiş bir siteye dönüştürmek.',
      sections: [
        { title: 'Görselden işleyen sayfaya', paragraphs: [
          'Onaylanan tasarım, geliştirme aşamasında tarayıcıda çalışan gerçek sayfalara dönüşür. Menülerin açılması, bağlantıların doğru yere gitmesi ve içeriğin farklı ekranlara uyum sağlaması bu işin parçasıdır. Tekrarlanan başlık, buton ve sayfa bölümleri ortak bileşenlerle hazırlanır. Böylece aynı öğe farklı sayfalarda tutarlı davranır ve sonraki güncellemelerde her kopyayı ayrı ayrı düzeltmek gerekmez.',
          'Hız için görsellerin boyutları, kullanılan yazı tipleri ve sayfanın yüklediği kod birlikte değerlendirilir. Gereksiz yükleri azaltmak önemlidir; ancak her cihaz ve bağlantıda aynı açılış süresini vaat etmek doğru olmaz. Amaç, içerik ve görsel kaliteyi koruyarak gereksiz beklemeyi azaltmaktır. Hareketler de daha az animasyon tercih eden ziyaretçileri dikkate almalıdır.'
        ] },
        { title: 'Sizden beklenen katkı', paragraphs: [
          'Bu aşamada onaylı metinler, son görseller ve doğru iletişim bilgileri gerekir. Bir form, randevu aracı veya başka bir hizmet bağlanacaksa gerekli erişimler güvenli bir yöntemle paylaşılır ve sorumluluklar belirlenir. Varsayımsal bir randevu akışında, butonun yalnızca görünmesi yeterli değildir; doğru takvime gitmesi ve ziyaretçinin ne yapacağını anlayabilmesi gerekir. Gerçek kullanıcı bilgileriyle deneme yapmak yerine uygun test verileri kullanılır.'
        ] },
        { title: 'Yayın öncesi kontrol', paragraphs: [
          'Siteyi telefonda, tablette ve geniş ekranda kontrol ederiz. Metin taşmaları, kırpılan harfler, menüler, klavye kullanımı ve temel iletişim yolları incelenir. Birden fazla dil varsa karşılık gelen sayfalar arasındaki geçişler de denenir. Siz de son içerikleri kontrol ederek yayın onayı verirsiniz. Çıktı, yalnızca bir ekran görüntüsü değil, çalışır bir sitedir. Yayına alma ve sonraki destek sorumlulukları, üzerinde anlaşılan teslim kapsamına göre yürütülür.'
        ] }
      ]
    },
    en: {
      slug: 'from-design-to-working-website',
      title: 'How does a design become a working website?',
      summary: 'Turning approved layouts into usable pages and checking the details before launch.',
      sections: [
        { title: 'From a layout to a working page', paragraphs: [
          'Development turns an approved design into pages that work in a browser. Menus need to open, links need to reach the right destination and content needs to adapt to different screens. Repeated elements such as buttons, headings and page sections use shared components. This keeps their behaviour consistent and makes future changes easier to manage.',
          'Performance involves looking at image sizes, fonts and the amount of code a page loads. Removing unnecessary weight helps, but an identical loading time cannot be promised across every device and connection. The aim is to reduce avoidable waiting while preserving useful content and visual quality. Motion should also respect visitors who prefer reduced animation.'
        ] },
        { title: 'What we need from you', paragraphs: [
          'We need approved text, final images and accurate contact details. If the site connects to a form service or booking tool, we agree on responsibilities and arrange access securely. In a hypothetical booking journey, a visible button is only the beginning: it must open the correct calendar and make the next step understandable. Suitable test data should be used instead of real customer information.'
        ] },
        { title: 'Checking before launch', paragraphs: [
          'We review mobile, tablet and wider layouts, including text overflow, menus, keyboard use and the main contact journeys. Where there are multiple languages, we check the matching page links too. You review the final content before approving launch. The deliverable is a working website, with publishing and ongoing support handled according to the agreed scope.'
        ] }
      ]
    }
  },
  {
    tr: {
      slug: 'arama-gorunurlugunun-temelleri',
      title: 'Arama görünürlüğü için hangi temeller kurulur?',
      summary: 'Anlaşılır içerik, teknik kontroller ve uygun işletmeler için tutarlı yerel bilgiler.',
      sections: [
        { title: 'İçeriği anlaşılır hale getirmek', paragraphs: [
          'Arama görünürlüğü, bir sayfaya çok sayıda anahtar kelime eklemekten ibaret değildir. Önce her sayfanın hangi soruya yanıt verdiği net olmalıdır. Sayfa başlığı, kısa açıklama, ana başlık ve alt başlıklar aynı konuyu tutarlı biçimde anlatır. Ziyaretçinin ihtiyacına cevap veren özgün içerik, anlamlı bağlantılar ve açıklayıcı görsel metinleri bu yapıyı destekler. Aynı ifadeyi sürekli tekrarlamak yerine bilgi eksiklerini tamamlamak daha yararlıdır.',
          'Teknik tarafta sayfaların taranabilmesi, doğru adreslerin kullanılması, site haritası ve yönlendirmeler kontrol edilir. Yanlışlıkla aramaya kapatılan bir sayfa ya da bozuk bağlantı gibi sorunlar araştırılır. Çok dilli sitelerde dil işaretleri ve karşılık gelen sayfalar da bu kontrolün parçasıdır. Bu düzenlemeler arama motorlarının içeriği anlamasına yardımcı olur; belirli bir sıralamayı garanti etmez.'
        ] },
        { title: 'Yerel bilgiler ve sizin katkınız', paragraphs: [
          'Uygun işletmelerde Google İşletme Profili de değerlendirilir. İşletme adı, kategori, adres veya hizmet bölgesi, çalışma saatleri ve iletişim bilgileri gerçek durumla uyumlu olmalıdır. Sizden bu bilgilerin doğruluğunu teyit etmeniz ve gerekiyorsa profil doğrulamasına katılmanız beklenir. Varsayımsal bir yerel servis işletmesinde, hizmet verilmeyen bölgeleri varmış gibi göstermek yerine gerçek kapsamı açıkça anlatmak gerekir.'
        ] },
        { title: 'Çıktı ve takip', paragraphs: [
          'Sonuç, düzenlenmiş sayfa bilgileri, anlaşılır içerik yapısı ve kontrol edilmiş teknik temellerdir. Kapsama dahilse işletme profili de güncellenir. Yayın sonrası arama verileri zaman içinde incelenebilir ve yeni içerik ihtiyaçları belirlenebilir. Sonuçlar rekabete, içeriğe ve başka etkenlere bağlıdır. Bu nedenle müşteri sayısı veya ilk sıra sözü yerine, yapılan işleri ve sonraki takip ihtiyacını açıkça paylaşırız.'
        ] }
      ]
    },
    en: {
      slug: 'foundations-for-search-visibility',
      title: 'What foundations support search visibility?',
      summary: 'Clear content, technical checks and consistent local information where relevant.',
      sections: [
        { title: 'Make the content understandable', paragraphs: [
          'Search visibility is not simply a matter of adding more keywords. Each page should answer a clear question. Its title, description, main heading and subheadings need to describe the same subject consistently. Original information, useful internal links and meaningful image descriptions support that structure. Filling gaps in the information is more helpful than repeating the same phrase throughout a page.',
          'Technical work includes checking crawl access, page addresses, sitemaps and redirects. We look for issues such as broken links or pages accidentally excluded from search. For multilingual websites, language signals and matching page references are checked too. These foundations help search engines understand the site; they do not guarantee a particular position.'
        ] },
        { title: 'Local information and your role', paragraphs: [
          'For eligible businesses, Google Business Profile can be part of the work. The business name, category, address or service area, opening hours and contact details should reflect reality. We need you to confirm those details and participate in verification where required. A hypothetical local service company should describe the areas it actually serves, rather than listing locations where it does not operate.'
        ] },
        { title: 'The outcome and follow-up', paragraphs: [
          'The result is updated page information, organised content and checked technical foundations. A business profile is updated when included in the scope. After launch, search data can inform further content work over time. Competition, content and other factors influence results, so we explain the completed work and follow-up needs without promising rankings or customer numbers.'
        ] }
      ]
    }
  }
];

export const allBlogPosts = [...blogGuides, ...blogPosts];
