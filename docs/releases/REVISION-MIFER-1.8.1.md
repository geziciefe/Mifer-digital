# Mifer Digital v1.8.1

## Amaç
v1.8'deki içerik, navigasyon ve yayın öncesi düzeltmeleri korurken, v1.7.4.2'nin daha akıcı ve daha doğal görünen fiyat alanını yeniden temel aldık.

## Akıcılık / particle arka plan
- Particle bileşeni tekrar sayfa yüklenirken hydrate edilir; fiyat bölümüne gelindiği anda React hydration başlatılmaz.
- Canvas yalnızca fiyat alanına yaklaşınca çalışır, alan ekrandan yeterince uzaklaşınca gerçek particles.js instance'ı kapatılır. Böylece sayfanın başka bölümlerinde gereksiz animasyon döngüsü çalışmaz.
- Particle katmanının yüksekliği sınırlandı ve alt tarafta yumuşak biçimde kaybolur. Paket karşılaştırması açık olsa bile canvas bütün uzun fiyat/FAQ bölümünü dev bir yüzey olarak çizmez.
- v1.7.4.2'de sevilen düşük hızlı, düşük kontrastlı particle görünümü korunur.

## Paketler
- Web ve Takip kartlarının v1.7.4.2 renkleri ve genel görsel dengesi geri getirildi.
- Takip kartı yeniden ağır çerçeve/gölge almıyor. Bunun yerine "En çok tercih edilen" rozeti daha görünür, ama kartın tamamı bağırmıyor.
- Mifer kartı efektleri korunarak mavi biraz daha doygunlaştırıldı (`#1d559d`); v1.8'deki soluk algı azaltıldı.
- Sağ üst paket ikonları ve WhatsApp CTA okları Lucide SVG ile optik olarak merkezlenmiş şekilde kaldı.
- "En az bir paket" ifadesi kaldırılmış doğal seçim metni korunur.
- Paket karşılaştırması varsayılan olarak açık gelir.

## v1.8'den korunanlar
- Menü: Biz → Süreç → Çalışmalar → Fiyatlar → Blog.
- Kök Türkçe ana sayfada gereksiz `/tr` rota değişimi engellenir.
- Hizmetler bölümü yerine 5 adımlı Süreç içeriği kullanılır.
- Contact panel ana sayfa rota düzeltmesi korunur.
- OG/Twitter meta alanları, Apple touch icon, markalı 404 ve demo sosyal paylaşım meta iyileştirmeleri korunur.
- Blog içi eski `services` hedefleri `process` hedefiyle uyumludur.

## Sürüm
- Paket sürümü: `1.8.1`
