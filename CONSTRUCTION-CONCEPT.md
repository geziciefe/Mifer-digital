# Kavren / Mifer Digital 1.5

## Tasarım

Önceki inşaat demosunun bileşeni, ortak endüstri şablonu, stilleri ve üç görseli kaldırıldı. Kavren sıfırdan; proje geliştirme, ana yüklenicilik ve saha uygulamasını merkeze alan bir inşaat şirketi konsepti olarak kuruldu.

- Sıcak kırık beyaz, grafit ve oksit vurgusu; yerel Inter değişken fontu.
- Tam genişlikte proje fotoğrafı, kısa konumlandırma ve proje bağlantısı.
- Kartlara bölünmeyen ölçek verileri; asimetrik proje seçkisi ve durum filtreleri.
- Üç proje için altı TR/EN detay sayfası, karşılıklı dil bağlantıları ve sıradaki proje gezinmesi.
- Uygulama alanları, şantiye fotoğrafı, teslim yaklaşımı, şirket geçmişi ve üç ayrı iletişim konusu.
- Yerel olarak çalışan, klavyeyle erişilebilir doğal dialog öğeleri; kısa demo formu.
- Hareket azaltma tercihi, kademeli içerik görünümü, ölçülü görsel yakınlaşması.
- Tüm 36 demo ana/alt sayfasında ortak, sabit sol-alt dönüş kontrolü.

Konut, ticari ve lojistik fotoğrafları aynı kontrollü gün ışığı ve malzeme yönüyle bu konsept için üretildi. Şantiye fotoğrafı uygulama disiplinini anlatır. Görseller gerçek bina veya gerçek şirket portföyü iddiası taşımaz.

## Görseller

`public/demos/kavren/` içinde dört görselin her biri 640, 960 ve 1536 piksel genişlikte WebP olarak bulunur. Ana görsel yaklaşık 315 KiB; 640 piksel sürümü yaklaşık 72 KiB’dir. İlk görsel öncelikli, sayfa altındaki görseller tembel yüklenir. Boyut bilgileri HTML’de belirtilmiştir. Üçüncü taraf animasyon kütüphanesi eklenmedi.

## Doğrulama — 7 Eylül 2026

- Astro / TypeScript kontrolü ve statik üretim derlemesi.
- 45 HTML sayfasında yerel bağlantı, bölüm çapası, görsel, video, font, CSS ve script dosyası kontrolleri.
- 36 demo sayfasında tek ortak dönüş kontrolü ve doğru dilde Mifer çalışmalarına hedefleme.
- 10 Kavren sayfasının başlık, meta, benzersiz ID ve karşılıklı TR/EN eşleşmesi.
- Altı proje detayının kapsam, metaveri ve farklı bir sıradaki projeye bağlantısı.
- Formların JS yüklenmeden etkisiz olması, gerekli alanlar ve uzak gönderim adresi bulunmaması.
- Türkçe Ç/Ğ/İ/ı/Ö/Ş/Ü karakterlerinin yerel fontta bulunduğu doğrulandı. Hero başlığının font ölçüleri 375, 390, 430, 768, 1280, 1440 ve 1920 piksel genişliklerde sütun sınırlarıyla karşılaştırıldı.
- Ana Mifer, Avelis ve Veyra içerik bileşenleri korunmuştur. Mobil klinik iletişim çubuğunda dönüş kontrolüne alan ayrıldı; demo altbilgilerine yeterli alt boşluk eklendi.

Tarayıcı önizlemesi bu oturumda erişim engeli verdi. Bu nedenle gerçek tarayıcı ekran görüntüleri, gerçek cihazlarda yerleşim/taşma, klavye ve dokunma etkileşimleri, konsol çıktısı ve Core Web Vitals ölçümleri doğrulanmış kabul edilmemelidir. Kod incelemesi, font ölçümü ve statik testler bu kontrollerin yerine geçmez. LCP/INP/CLS için ölçülmüş bir skor iddia edilmiyor.

## Kaynak yapısı

Aktif kaynak Astro’dur; eski inşaat deneyimi yeni üretim çıktısında bulunmaz. Ana Mifer ve diğer demolarda yalnızca istenen dönüş katmanı ve onun için gerekli yerleşim değişiklikleri yapılmıştır. Portföyde inşaat demosu Kavren adı, yeni görsel ve oksit vurgu rengiyle sunulur.
