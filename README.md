# Mifer Digital 1.8.9

Mifer Digital’in Türkçe ve İngilizce web sitesi; Veyra Atelier kuaför, Avelis Dental Care diş kliniği ve Kavren Yapı inşaat demolarıyla birlikte.

## Windows / PowerShell ile açma

RAR arşivini çıkarın. `package.json` dosyasının bulunduğu `mifer-digital-v1.8.9` klasöründe PowerShell açın. Node.js 22 LTS veya uyumlu daha yeni bir sürüm kurulu olmalıdır.

İlk açılışta komutları sırayla çalıştırın:

```powershell
npm.cmd install
npm.cmd run dev
```

Tarayıcıda **http://localhost:4321/tr** adresini açın. İlk komutun bitmesini bekleyin; site açıkken PowerShell penceresi de açık kalmalıdır. Sonraki açılışlarda yalnızca `npm.cmd run dev` yeterlidir.

Alternatif: `BASLAT.cmd` dosyasına çift tıklayın. PowerShell güvenlik ayarlarını değiştirmeniz gerekmez; `npm.cmd` kullanımı `npm.ps1` yürütme ilkesi hatasını önler.

## Sayfalar

| Sayfa | Türkçe | English |
| --- | --- | --- |
| Mifer | `/tr` | `/en` |
| Blog | `/tr/blog` | `/en/blog` |
| Çalışmalar | `/tr/demo-calismalar` | `/en/demo-work` |
| Veyra Atelier | `/tr/kuafor-demo` | `/en/hair-salon-demo` |
| Avelis Dental Care | `/tr/dis-klinigi-demo` | `/en/dental-clinic-demo` |
| Kavren Yapı | `/tr/insaat-demo` | `/en/construction-demo` |

Kavren Yapı’daki üç proje ayrı detay sayfalarına açılır. Dil değiştirme bağlantısı, proje detayının diğer dildeki karşılığını açar. Tüm demo sayfalarında sol alttaki “Mifer’e dön / Back to Mifer” bağlantısı Mifer’in çalışmalar bölümüne döner.

## Derleme ve kontroller

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

`build` TypeScript/Astro kontrolünü çalıştırır ve statik siteyi `dist` klasörüne üretir. `test`, üretilen tüm sayfaların iç bağlantılarını, dil eşleşmelerini, görsellerini ve demo gezinmesini kontrol eder. İkisini birlikte çalıştırmak için `npm.cmd run test:all` kullanılabilir. Üretim önizlemesinin adresi terminalde gösterilir.

## Geliştirme

- Aktif uygulama: Astro + TypeScript, `src/` ve `public/`.
- Genel içerik: `src/data/i18n.ts`, `src/data/siteConfig.ts`.
- Demo portföyü: `src/data/demos.ts`.
- Kavren Yapı içeriği ve projeleri: `src/data/construction.ts`.
- Kavren Yapı tasarımı: `src/styles/construction-demo.css`.
- Kavren Yapı etkileşimleri: `src/scripts/construction-demo.ts`.
- Ortak dönüş kontrolü: `src/components/DemoReturn.astro`.
- Avelis: `src/data/dental.ts`, `src/styles/dental-demo.css`.
- Veyra: `src/components/SalonDemo.astro`, `src/styles/salon-demo.css`.

Kök dizindeki önceki altyapıya ait `app`, `worker`, `db` ve Vinext yapılandırmaları aktif Astro derlemesinin parçası değildir; önceki proje dosyaları korunmuştur. Aktif olmayan React/TSX prototipleri geliştirme sunucusunun bağımlılık taramasından çıkarılmıştır; bunlar için yeni bağımlılık eklenmemiştir. Çalıştırmak için yukarıdaki npm komutlarını kullanın.

## Demo kapsamı

Kavren Yapı markası, proje adları, sayılar ve geçmiş kurgusaldır. Fotoğraflar bu konsept için üretilmiştir. İletişim formu sunucuya veri göndermez; örnek sonucu gösterir ve alanları temizler. Üretime geçişte gerçek firma bilgileri ve iletişim servisi bağlanabilir. Bu davranış sitede de açıklanır.

Mifer’in gerçek WhatsApp numarası ve Instagram bağlantısı `src/data/siteConfig.ts` üzerinden düzenlenir. Salon ve klinik tasarımlarının mevcut kimlikleri korunarak tipografi, görsel, iletişim ve yerleşim revizeleri uygulanmıştır. Çalışmalar sayfası bağımsız bir galeri düzenindedir.

Bu arşiv bütün kaynakları, görselleri, fontları, paket ve kilit dosyalarını içerir. `node_modules`, `dist` ve geçici önbellekler dahil değildir; yerel kurulumda yeniden oluşturulur. Bu sürümün değişiklikleri için `docs/releases/REVISION-MIFER-1.8.9.md` dosyasına bakın. Eski revizyon notları `docs/releases/`, konsept belgeleri `docs/concepts/` altında korunur.


## v1.7 içerikleri ve fiyatlama

Yeni rehberler `src/data/blogGuides.ts` içinde; önceki dört süreç yazısı `src/data/blog.ts` içinde korunur. Toplam on iki yazının TR/EN sayfaları vardır. Blog şablonu Article/Breadcrumb verisini, sitemap uç noktası ise mevcut rotalarla birlikte blog rotalarını üretir. Yayın tarihi ve yazar uydurulmamıştır.

Kurulum 15.000 TL’den başlar; standart tanıtım siteleri için teklif 31 Aralık 2026’ya kadar geçerlidir. İlk tamamlanmış teslimden itibaren 14 gün, anlaşılan kapsamda sınırsız site güncellemesi dahildir. Bu dönem aylık paket haklarını tüketmez. Yeni kapsam ayrıca tekliflenir.

Her yeni site için en az bir destek paketi seçilir. Web 400 TL/ay, Takip 1.600 TL/ay, Mifer 15.200 TL/aydır. Yıllık peşin ödemede aylık karşılıklar sırasıyla 350 / 1.200 / 9.900 TL; yıllık toplamlar 4.200 / 14.400 / 118.800 TL; yıllık avantajlar 600 / 4.800 / 63.600 TL’dir. İndirim oranları %12,5 / %25 / yaklaşık %34,9'dur. Fiyatlar ilk açılışta yıllık ödemeyi gösterir. Ortak fiyat verisi `src/data/pricing.ts` içindedir. Hizmetler ve site güncelleme hakları aylık sunulur.

Web site güncelleme hakkı içermez. Adres ve iletişim bilgisi değişiklikleri tüm paketlere dahildir ve güncelleme hakkından düşülmez. Takip ayda 3 site güncellemesi içerir. Mifer mevcut sayfalarda sınırsız içerik güncellemesi, Cloudflare Pro, gelişmiş premium güvenlik, SEO/hız iyileştirmesi, günlük ziyaretçi/sayfa/buton ve Google görünürlüğü analizi ile aylık rapor, sosyal medya paylaşım önerileri, sosyal medya gönderileri için aylık 1 kısa yapay zekâ videosu ve 3 yapay zekâ görseli ile öncelikli destek içerir. Sınırsız kapsam yeni sayfa, özellik, entegrasyon veya kapsamlı yeniden tasarımı içermez. Raporlama yalnızca ölçüm araçları kurulmuş, gerekli izinler alınmış ve gerçek veri oluşmuş müşteri projelerinde yapılır.

Yıllık müşterinin bir ay daha üst pakete geçmesi halinde, mevcut paket yeniden ücretlendirilmez; iki paketin yıllık aylık karşılıkları arasındaki fark yalnızca ilgili ay için alınır. Bu ticari kural yayından önce sözleşmeye aktarılmalıdır.

Paket bağlantıları WhatsApp’ı yeni sekmede açar; seçilen paket, ödeme dönemi, aylık fiyat veya yıllık peşin toplam hazır mesajda bulunur. Mesaj otomatik gönderilmez. Paket alanı dışındaki mevcut iletişim formu korunmuştur.

**Teklif/sözleşmede netleştirilecek koşullar:** KDV dahil/hariç durumu, pakete dahil alan adının uzantısı ve yenileme bedeli sınırı, hosting giderleri, ücretli lisanslar, Cloudflare Pro hesabının sahipliği, yıllık planın iptal/iade şartları ve kullanılmayan aylık site güncelleme haklarının devri. Fiyatların içerdiği ticari koşullar yayından önce netleştirilmelidir.

## Çerez ve depolama envanteri

- Uygulamada analitik/reklam kodu yoktur; bu kategoriler panelde uydurulmadı.
- `mifer-consent-v2`, tarayıcının localStorage alanında harita iznini, kayıt ve bitiş zamanlarını, politika sürümünü (`2026-09-26`) 180 gün saklar. Form bilgisi saklanmaz. Geçersiz/eski kayıt izin sayılmaz. Eski `mifer-cookie-consent` kaydı yeni seçimde kaldırılır.
- Tek isteğe bağlı üçüncü taraf gömme dişçi demosundaki Google haritasıdır. HTML’de `src` bulunmaz; yalnızca kaydedilmiş geçerli izinle eklenir. İzin geri çekildiğinde `src` kaldırılır. Başlangıçta kapalıdır. Depolama erişimi yoksa izin verilemez ve harita kapalı kalır.
- Uygulamanın oluşturduğu analitik/reklam çerezi olmadığı için silinecek böyle bir birinci taraf çerez yoktur. Google alanındaki üçüncü taraf çerezleri site tarafından silinemez; sağlayıcının politikasına ve tarayıcı denetimine tabidir. Bu sınır tercih panelinde de belirtilir.
- Ana site ve haritalı demo footer’larında tercih paneli erişilebilir. Haritasız bağımsız demolar yeni izleme veya depolama eklemez. Harita sağlayıcısının politikası panelde bağlantılıdır.
- Gerçek hosting/erişim altyapısının ilave depolama veya günlükleri yerel kaynak incelemesiyle doğrulanamaz; canlıya geçmeden kontrol edilmelidir. Sonradan analitik veya reklam eklenirse mevcut harita izni bunları kapsamaz; uygulama, envanter ve politika sürümü güncellenmelidir.

Uygulama referansları: [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) ve [KVKK Çerez Uygulamaları Hakkında Rehber](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/fb193dbb-b159-4221-8a7b-3addc083d33f.pdf). Blog bulgularının birincil kaynakları ilgili paragrafların altında bağlantılıdır.

## v1.7.1 arka plan entegrasyonu

Verilen React `Waves` bileşeni `src/components/ui/wave-background.tsx` içinde yerel Astro React adasıdır. `@astrojs/react`, React/React DOM ve `simplex-noise` eklenmiştir. Başka bölümler React’a taşınmamıştır. Bileşenin utility sınıfları için gerekli az sayıdaki stil mevcut `packages.css` dosyasında tanımlanmıştır; Tailwind/shadcn kurulumu bu bağımsız bileşen için gerekli değildir. `ui` klasörü yeniden kullanılabilir bileşeni içerik şablonundan ayırır.

Siyah/beyaz renkler, 8 px nokta aralıkları, simplex-noise frekansları, genlikler, sönümleme, imleç kuvveti, çizgi kalınlığı ve SVG çizim algoritması korunur. Entegrasyon değişiklikleri: React yaşam döngüsü temizliği, ResizeObserver, görünüm dışı/gizli sekmede duraklama ve kaydırılmış bölüme doğru imleç koordinatı eşlemesi. Arka plana renk filtresi veya opaklık azaltması uygulanmaz. Normal dalga davranışı mobilde de korunur; yeni ön plan animasyonları reduced-motion tercihine uyar.


## Current revision

Mifer Digital v1.8.9 — paylaşılabilir fiyat bağlantısı, güncellenen proje süreci ve çalışmalar için kısa demo notu. Ayrıntılar: [sürüm notları](docs/releases/REVISION-MIFER-1.8.9.md).
