# Mifer Digital — 1.7.3

Bu sürüm 1.7.2 üzerine yalnızca fiyatlar, paketler ve ilgili etkileşimler için hazırlanmıştır. Diğer sayfalar ve mevcut siyah/beyaz dalga arka planının renkleri, çizgi aralıkları ve hareket parametreleri korunmuştur. Canlı yayın yapılmamıştır.

## Değişiklikler

- Paket alanı ortak açık yüzey, ince ayırıcılar ve koyu Mifer sütunuyla yeniden düzenlendi. Turkuaz/mavi paket renkleri kaldırıldı.
- Aylık/yıllık seçici, paketler ve karşılaştırma boyunca site menüsünün altında görünür kalır. Fiyatlar, yıllık peşin toplam, eski fiyat ve yıllık tasarruf birlikte değişir.
- Paket adları Web, Takip ve Mifer oldu. Takip üzerinde “Popüler” etiketi bulunur.
- Web paketinde site güncelleme hakkı yoktur. Adres ve iletişim bilgisi değişiklikleri tüm paketlere dahildir ve aylık haklardan düşülmez. Takip ayda 3 güncelleme, Mifer mevcut sayfalarda sınırsız içerik güncellemesi içerir.
- Fiyatlar korunmuştur: aylık 390 / 1.600 / 8.490 TL; yıllık ödemede aylık karşılık 350 / 1.200 / 6.490 TL. Yıllık toplamlar 4.200 / 14.400 / 77.880 TL'dir.
- Kurulum ve paket bağlantıları mevcut yapılandırmadaki WhatsApp numarasını açar. Paket mesajı seçilen ödeme dönemini ve gerçek ödeme tutarını içerir; otomatik mesaj gönderimi yoktur.
- Karşılaştırma tablosu yeniden tasarlandı. Dar ekranlarda tablo yatay kaydırılabilir, hizmet sütunu sabit kalır; sayfanın kendisi yatay taşmaz.
- Sıkça sorulan sorular başlığı ve içerikleri düzeltildi; yanıtların dar metin genişliği sınırı kaldırıldı. Bir aylık üst pakete geçiş farkları güncel isimlerle açıklanır.
- Dalga bileşeni alan yüksekliği değiştiğinde mevcut SVG yollarını ve nokta durumlarını kullanır. Aynı çizim aşamasında yeniden çizerek karşılaştırma/SSS açılışındaki silinip görünme sorununu önler.
- TR/EN metinleri ve ortak fiyat/WhatsApp verisi birlikte güncellendi. Yeni bağımlılık eklenmedi.

## Kontrol

- `npm run build`: Astro/TypeScript kontrolünde 0 hata, 0 uyarı; 65 statik sayfa üretildi.
- `npm test`: mevcut 10 kontrol geçti.
- Yerel Chromium: TR ve EN için 390, 768, 1024 ve 1440 px genişliklerde sayfa taşması, sabit seçici, aylık/yıllık fiyatlar, yıllık toplamlar, eski fiyatlar, tasarruf, WhatsApp hedefi ve mesaj kapsamı kontrol edildi.
- Karşılaştırma açma/kapatma ve klavyeyle kapatma, 12 karşılaştırma satırı, Web güncelleme hakkının olmaması, SSS yanıtının tam genişliği kontrol edildi. Yükseklik değişimlerinde mevcut SVG yollarının silinmediği ve çizili kaldığı doğrulandı.
- TR → EN → TR istemci geçişinde fiyat etkileşimi çalıştı. WhatsApp bağlantısına gerçek tıklama yeni sekme açtı; testte dış istek yerel yanıtla karşılandı, mesaj gönderilmedi. Tarayıcı JavaScript hatası görülmedi.
- 390 / 768 / 1440 px paket görünümleri ile masaüstü yıllık fiyat, karşılaştırma ve SSS ekran görüntüleri incelendi.

Arşiv tam kaynak projedir. Kurulum komutları README'dedir. `node_modules`, `dist` ve önbellekler teslim arşivine dahil değildir.
