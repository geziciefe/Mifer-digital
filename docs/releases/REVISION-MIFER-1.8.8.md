# Mifer Digital v1.8.8

Kaynak: mifer-digital-v1.8.7. Bu sürüm yalnızca açılış başlığı, süreç bölümü, masaüstü sol menü hizası ve paket sunumundaki istenen değişiklikleri kapsar.

## Değişiklikler

- Inter'ın Latin ve Türkçe karakterleri içeren Latin Extended dosyaları önceden yüklenir. Başlık animasyonu bu fontlar hazır olduğunda başlar; font hatasında sabit bir yedek font kullanılır. Sonradan genişleme etkisi yapan dil geçişi animasyonu da kaldırıldı.
- Süreç, beş adımı ve her adımın çıktısını gösteren numaralı bir akışa dönüştürüldü. Masaüstünde sabit kalan özet, adımlara giden bağlantılar ve kaydırmayla ilerleyen çizgi bulunur. Mobilde aynı akış dikey olarak devam eder. Hareket azaltma tercihi desteklenir.
- Sol masaüstü menüsü üst kenara hizalandı. Logo ve mobil menü düzeni korundu.
- Paket kartlarında yıllık peşin toplam tutar gizlendi; aylık karşılık, yıllık ödeme bilgisi ve tasarruf tutarı korundu. Mifer indirimi tam sayıya yuvarlanarak %35 gösterilir. Fiyatlar değişmedi.
- WhatsApp bağlantıları her kartın en altına taşındı ve masaüstünde aynı hizaya getirildi. Ödeme dönemi değişince ilgili paket ve fiyat bilgisi bağlantıya yansır.
- Türkçe ve İngilizce blog içerikleri, karşılık gelen sayfalar ve kaynak bağlantıları kontrol edildi. Araştırma sayıları ve teknik açıklamalarda düzeltme gerektiren bir tutarsızlık saptanmadığı için yazılara gereksiz içerik eklenmedi.

## Doğrulama

- `npm run build`: Astro kontrolü 0 hata, 0 uyarı; 72 statik sayfa üretildi.
- `npm test`: 10 test geçti. Eski hizmet listesine bağlı test, artık istenen beş adımlı süreç yapısını doğrular.
- Chromium'da TR/EN, 390 / 768 / 1440 px: yatay taşma, menü çakışması, süreç hizaları, ödeme dönemi geçişi ve kart altı bağlantıları kontrol edildi.
- Normal yüklemede ve font istekleri 1,8 / 4,2 saniye geciktirilerek yapılan denemelerde görünür başlığın genişliği sabit kaldı.
- 12 yazının Türkçe ve İngilizce karşılıkları, dil değişimi, blogdan ana sayfaya dönüş, süreç adım bağlantıları ve azaltılmış hareket tercihi doğrulandı. Tarayıcı JavaScript hatası kaydedilmedi.

Canlıya yayın yapılmadı. Paket tam kaynak projedir; `node_modules`, `dist` ve önbellekler arşive dahil değildir. `build/sites-vite-plugin.ts` kaynak dosyasıdır, derleme çıktısı değildir.
