# Mifer Digital v1.7

Teknik sürüm: 1.7.0. Önceki v1.6.9 kaynakları ve aktif Astro/TR/EN yapısı korunmuştur.

## Değişiklikler

- Beş işletme rehberi TR/EN olarak eklendi; dört süreç yazısı ve Yaklaşım bağlantıları korundu. Dekoratif numaralar kaldırıldı. Ortak şablonda içerik başlıkları, kaynaklar, hizmet/iletişim bağlantıları, Article/Breadcrumb verisi ve karşılıklı dil bağlantıları bulunur. Sitemap bütün blog rotalarını içerir.
- Araştırma yazısı OECD 2025, Deloitte 2020 ve QJE 2025 birincil kaynaklarına dayanır. Örneklem, ölçülen sonuç ve genelleme sınırları ayrı belirtilir; başarı garantisi verilmez.
- Özel history müdahaleleri ve zorunlu beklemeli yükleyici kaldırıldı. Gezinme Astro tarafından yönetilir; hafif ilerleme işareti hata durumunda temizlenir. Genel smooth-scroll kaldırılarak geri dönüş konumu düzeltildi. Kök rota doğrudan tasarlanmış ana sayfayı sunar.
- SEO hizmeti sona alındı ve başlığı netleştirildi. Demo bağlantıları yeni sekmede açılır; görünür işaret ve güvenli rel değerleri eklendi.
- Tercih paneli eşdeğer kabul/ret/tercih eylemleri sunar. Harita varsayılan kapalıdır. Sürüm/zaman damgalı 180 günlük kayıt, süre sonu ve izin geri çekme uygulanır. Depolama hatasında harita kapalı kalır. Ayrıntılı envanter README içindedir.
- Hakkımızda metni yenilendi; geniş ekranda başlık tek satır, dar ekranda doğal kırılımlıdır.
- Çalışmalar ile Yaklaşım arasına kurulum ve isteğe bağlı destek paketleri eklendi. Aylık/yıllık ücret ve aylık toplam süreler açıkça ayrılır. Seçim iletişim formuna aktarılır. Ticari olarak netleştirilecek konular README içinde kayıtlıdır.
- Dalga animasyonu bağımlılıksız SVG ile oluşturuldu; imleç tepkisi yereldir. Görünüm dışı/sekme gizli durumlarda durur, mobil ve azaltılmış hareket tercihinde statiktir.
- Aktif olmayan TSX/JSX prototipleri Vite bağımlılık taramasından çıkarıldı; React bağımlılığı eklenmedi.

## Kontroller

- `npm run build`: Astro kontrolü 0 hata/uyarı; 65 sayfa üretildi.
- `npm test`: 10 test başarılı.
- Yerel Chromium: TR/EN 390, 768 ve 1440 piksel ana sayfa/paket/blog düzenleri; içerik taşması, menü, başlıklar, fiyat değiştirme ve seçimin iletişime aktarılması kontrol edildi.
- Yeni yazıların 10 dil rotası, metadata, dil karşılıkları, süreç bağlantıları, sitemap, demo yeni sekme davranışı kontrol edildi.
- Tekrarlanan geri/ileri gezinme ve kaydırma geri yüklemesi hem preview hem dev üzerinde çalıştı; son koşuda tarayıcı JavaScript hatası yoktu.
- Preview gezinme hazırlığı → sayfa hazır süresi son koşuda 14–55 ms idi. Bu yerel tarayıcı ölçümüdür; gerçek internet/LCP ölçümü veya hız garantisi değildir.
- Dev modunda aynı ölçüm 6,2–10,2 saniyeydi; sunucu rotaları yaklaşık 3,1–3,8 saniyede yanıtladı. Eksik React bağımlılığı tarama hataları giderildi; buna rağmen bu ortamda dev için 1 saniye hedefi sağlanmadı. Statik üretim çıktısında bu gecikme görülmedi. Zorunlu istemci beklemesi bulunmaz.
- Ret/yeniden yükleme, 180 günlük kayıt, depolama hatasında kapalı kalma, izin öncesi sıfır harita isteği, izin sonrası yükleme ve geri çekmede iframe src kaldırma doğrulandı. Testte üçüncü taraf harita yanıtı taklit edildi; Google hizmet kalitesi/çerezleri canlı ölçülmedi.
- Dalganın hareketi, ekran dışında durması ve reduced-motion durumunda statik kalması doğrulandı. Gizli sekme davranışı kaynak üzerinden incelendi.

Safari/Firefox ve gerçek mobil cihaz testi yapılmadı. Canlı yayın yapılmadı. Arşiv bağımlılıkları, üretim çıktısını ve önbellekleri içermez; `npm ci` ardından yukarıdaki komutlarla kurulabilir.
