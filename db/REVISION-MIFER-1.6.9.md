# Mifer Digital 1.6.9

- Ne yapıyoruz: bağlantılı dijital sistem kompozisyonu ve üç somut müşteri faydası.
- Yaklaşım: blog yazılarına bağlı dört aşama; tutarlı hizalama ve Türkçe karakterler için rahat tipografi.
- Hizmetler: basamaksız başlık ve ortak hizada hizmet açıklamaları.
- Mifer hakkında: doğrudan iletişimi anlatan metin ve dört disiplinin ortak kompozisyonu.
- Blog: TR/EN listeleme sayfaları, dört yazının iki dilde tamamlanmış içerikleri ve ortak şablon. Menü, dil değişimi ve iletişim bağlantıları.
- Sürüm: package.json, package-lock.json ve README güncellendi. Yeni bağımlılık eklenmedi.

## Doğrulama

- `npm ci --no-audit --no-fund`: başarılı.
- `npm run build` (Astro check + build): 0 hata, 0 uyarı; 55 sayfa oluşturuldu.
- `npm test`: mevcut 10 kontrol başarılı. Süreç sayısı beklentisi yeni dört aşamaya uyarlandı.
- Chromium ile TR/EN ana sayfanın değişen bölümleri ve bloglar 390, 768 ve 1440 px genişliklerde kontrol edildi. Yatay taşma ve menü/logo çakışması görülmedi.
- Sekiz yazının her biri üç genişlikte açıldı; TR/EN gidiş-dönüş bağlantıları çalıştı. Mobil/masaüstü Blog menüsü, süreç bağlantısının klavyeyle açılması ve blogdan ana sayfa iletişim bölümüne dönüş denendi. Tarayıcı JavaScript hatası görülmedi.
- Yazılar başlıklar dahil yaklaşık 220–248 kelime. Örnekler varsayımsal olarak belirtildi.
- Bu ortamda `astro preview --host 0.0.0.0` ağ arayüzü hatası verdi; görsel kontrol, aynı build çıktısını sunan yerel statik sunucuyla yapıldı.

Canlıya yayın yapılmadı. Arşiv tam kaynak projeyi içerir; bağımlılıklar, derleme çıktısı ve önbellekler dahil değildir. `build/sites-vite-plugin.ts` kaynak dosyasıdır ve korunmuştur.
