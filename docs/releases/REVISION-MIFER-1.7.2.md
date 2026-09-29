# Mifer Digital v1.7.2

Bu yama, v1.7.1 üzerindeki fiyatlandırma alanını ve ilgili ana sayfa bağlantılarını günceller. Canlıya yayın yapılmadı.

## Değişiklikler

- Masaüstü sol menüye ve mobil menüye TR `Fiyatlar` / EN `Pricing` bağlantısı eklendi; ana sayfadaki `#packages` bölümüne gider.
- Kurulum başlığı `Özel tasarım web sitesi.` olarak değiştirildi. Açıklama markanın kalitesini dijitalde yansıtma, güven ve konumlandırma odağıyla yenilendi. `15.000 TL` ve `’den başlayan fiyatlarla` aynı fiyat satırında gruplanır.
- Yayın sonrası en az bir destek paketinin zorunlu olduğu TR/EN açıklandı.
- Ortak fiyat verisi: Bakım 390/350 TL, Güncel 1.600/1.200 TL, Mifer 8.490/6.490 TL. İkinci değer yıllık peşin ödemenin aylık karşılığıdır. Yıllık toplam ve tasarruflar koddan hesaplanır.
- Yıllık seçimde eski aylık fiyat üstü çizili, yeni aylık karşılık, peşin yıllık toplam ve gerçek yıllık avantaj birlikte gösterilir. Hizmet ve site güncelleme haklarının aylık sunulduğu belirtilir.
- Bakım 2 güncelleme ve temel bakım; Güncel 3 güncelleme ve içerik/kampanya yerleştirme; Mifer mevcut sayfalarda sınırsız içerik, Cloudflare Pro, analiz/SEO/hız iyileştirmesi, raporlama, kampanya desteği, aylık 1 AI destekli kısa video + 3 AI destekli görsel ve öncelikli destek olarak düzenlendi.
- Güncel kartına kanıt gerektirmeyen `Önerilen`, Mifer kartına `En kapsamlı` etiketi verildi. Farklı yüzey ve sınır renkleriyle seçim hiyerarşisi kuruldu.
- Erişilebilir `Paketleri karşılaştır` tablosu eklendi. Mobilde tablo kendi alanında yatay kayar; sayfayı taşırmaz.
- SSS alanına yıllık pakette tek aylık yükseltme, site güncellemesinin tanımı, sınırsız kapsamın sınırları ve zorunlu paket açıklaması eklendi. Tek aylık yükseltmede yalnızca yıllık aylık karşılıklar arasındaki fark alınır.
- Paket bölümünün masaüstü ölçüsü küçültüldü. `İşinizi tanıyan bir dijital ekip.` başlığı geniş masaüstünde tek satır, dar ekranlarda doğal kırılım kullanır.

## Doğrulama

- `npm run build`: Astro kontrolü ve 65 sayfalık statik üretim.
- `npm test`: mevcut 10 test.
- Chromium TR/EN, 390/768/1440 px: aylık ve yıllık fiyatlar, üstü çizili fiyatlar, yıllık toplamlar, tasarruflar, karşılaştırma tablosu, SSS, menü bağlantıları, iletişim formuna Mifer yıllık seçiminin aktarılması ve yatay taşma kontrolü.
- 1440 px genişlikte Mifer hakkında başlığının tek satır olduğu ölçüldü.
- Son tarayıcı kontrolünde JavaScript sayfa hatası oluşmadı.

Gerçek cihaz/Safari/Firefox testi ve canlı yayın yapılmadı. Analiz/raporlama hizmeti, müşteri projesinde izinli ölçüm altyapısı ve gerçek veri bulunmasına bağlıdır. KDV, alan adı kapsamı, hosting, ücretli üçüncü taraflar, Cloudflare hesabı ve yıllık sözleşme koşulları yayından önce ticari sözleşmede netleştirilmelidir.
