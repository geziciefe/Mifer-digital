# Mifer Digital v1.8.9

Kaynak: v1.8.8. Fiyat bağlantısı, süreç sunumu ve çalışmaların demo notu güncellendi.

## Fiyatları paylaşma

Bu sürüm yayına alındıktan sonra müşterilere gönderilebilecek adresler:

- Türkçe: `https://miferdigital.com/#paketler` veya `https://miferdigital.com/tr#paketler`
- İngilizce: `https://miferdigital.com/en#paketler`

Fiyatlar menüsü ve ilgili bölüm bağlantıları adres çubuğunda `#paketler` bırakır. Doğrudan açılış, yenileme, sayfalar arası geçiş ve geri/ileri gezinmede fiyatlar bölümü görünür. Diğer bölüm bağlantılarının önceki davranışı korunur. Mobilde sabit menü yüksekliği ilk yüklemede de hesaba katılır.

## Süreç ve çalışmalar

- Süreç: Tanışma, Planlama, Tasarım ve yapım, Sizin kontrolünüz, Yayın ve aktif destek.
- Tanışma, işletmeye projeyi yürütecek ekibin ziyareti olarak anlatılır. Metinler kapsamı, müşteri kontrolünü ve onayı açıklar; satış sloganları yerine işin nasıl ilerlediğine odaklanır.
- Sol başlık “Projeniz nasıl ilerler?” oldu. Süreç etiketinin çizgisi ve yeşil noktası kaldırıldı. Adımlarda, gezinmede ve büyük göstergede I–V Roma rakamları kullanılır.
- Aktif adımda halka hareketi, geçiş yapan gösterge ve ilerleyen ayırıcı çizgiler eklendi. Hareket azaltma tercihi desteklenir; bölüm ekran dışında olduğunda halka animasyonu çalışmaz.
- Ana sayfadaki seçili çalışmaların ve çalışmalar sayfasının sağ altına, ortak bileşenle küçük demo açıklaması eklendi. Türkçe ve İngilizce karşılıkları bulunur.

Paket fiyatları, kapsamları, arka planları ve v1.8.8'deki açılış başlığı düzeltmesi korundu.

## Kontroller

- `npm run build`: 0 hata / 0 uyarı, 72 statik sayfa.
- `npm test`: 10 test geçti.
- Chromium'da TR/EN, 390 / 768 / 1440 px: taşma, süreç başlıkları, Roma rakamları, küçük notlar, menü ve fiyat bağlantısı kontrolleri geçti.
- Çalışmalar ve blogdan fiyatlara geçiş, doğrudan kök adresi, yenileme, geri/ileri, animasyonlu kaydırma ve azaltılmış hareket kontrol edildi. JavaScript hatası kaydedilmedi.

Canlıya yayın yapılmadı. Arşiv tam kaynak projedir; bağımlılık klasörleri, derleme çıktıları ve önbellekler dahil değildir.
