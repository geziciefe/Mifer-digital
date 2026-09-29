# Mifer Digital 1.7.1

Bu yama yalnızca paketler bölümünü, arka planını ve ilgili yapılandırmayı günceller. Canlıya yayın yapılmadı.

- Kurulum teklifi iki sütunlu düzene alındı. 15.000 TL fiyatı, küçük başlangıç açıklaması, kapsam ve 31 Aralık 2026 koşulu ayrıştırıldı.
- İlk tamamlanmış teslimden itibaren 14 gün, anlaşılmış kapsamda sınırsız revize eklendi. Destek paketi şartı yoktur; aylık haklardan düşülmez.
- Ortak `pricing.ts` verisi aylık fiyatları, %10/%15/%25 yıllık indirimleri, peşin toplamları, aylık karşılıkları ve tasarrufları hesaplar. Yıllık ödeme taahhüdü görünürdür.
- 2/6/12 aylık revize hakları ve somut bakım/geliştirme kapsamları uygulandı. Gelişim’in detayları erişilebilir açılır alandadır; planlı SEO, analiz ve raporlama revize haklarından ayrıdır. Yıllık planın inceleme/90 günlük plan/görüşme ekleri ayrıca gösterilir.
- Gelişim kartı farklı yüzey, çerçeve ve CTA ile belirginleştirildi. Uydurma popülerlik veya başarı iddiası eklenmedi. Form yalnızca görüşme talebi açar.
- Verilen Waves React bileşeni yerel Astro adası olarak eklendi. Siyah zemin, beyaz çizgiler, 8 px geometri, simplex-noise parametreleri, imleç fiziği ve SVG çizimi korundu. Kaynak karşılaştırmasıyla setLines, movePoints, moved, drawLines ve tick bloklarının değişmediği doğrulandı.
- Sadece entegrasyona yönelik yaşam döngüsü/yeniden boyutlandırma/görünürlük temizliği ve kaydırılmış bölümde koordinat eşlemesi değiştirildi. Arka plana genel renk katmanı eklenmedi. Gerekli React, Astro React ve simplex-noise bağımlılıkları kilit dosyasına işlendi.

## Doğrulama

- `npm run build`: 0 hata, 0 uyarı; 65 sayfa üretildi.
- `npm test`: mevcut 10 test başarılı.
- Chromium’da TR/EN için 390, 768 ve 1440 px: aylık/yıllık fiyat, indirim, toplam, tasarruf, 975 TL karşılaştırması, 2/6/12 hak ve taşma kontrolü başarılı.
- Klavyeyle radyo grubu değişimi ve aylığa dönüş doğrulandı. İletişim formunda yıllık paket, 27.000 TL peşin toplam ve aylık karşılık bilgisi doğrulandı; mesaj gönderilmedi.
- Dalga hareketi, siyah/beyaz renkler, ekran dışında duraklama, sayfadan ayrılınca eski SVG güncellemelerinin durması ve geri dönüşte tek bileşen olarak yeniden kurulması doğrulandı. Gizli sekme duraklaması kaynakta incelendi; işletim sistemi sekme görünürlüğü ayrıca simüle edilmedi.
- Son tarayıcı koşusunda JavaScript hatası yoktu. Yerel preview bloga geçiş/geri dönüş hazırlık → sayfa hazır ölçümü 51 ms ve 15 ms idi; gerçek internet hızına dair garanti değildir.
- Özgün dalga hareketi korunmuştur; reduced-motion yeni ön plan geçişlerini kapatır. Çok uzun bölümde özgün yoğun SVG geometrisi zayıf cihazlarda daha fazla işlem gerektirebilir; gerçek cihaz FPS ölçümü yapılmadı.

Tam kaynak, görseller, yapılandırma, package ve lock dosyaları dahildir. Bağımlılıklar, dist ve önbellekler arşive eklenmez. Kurulum: `npm ci`; geliştirme: `npm run dev`; üretim önizlemesi: `npm run build` ve `npm run preview`.
