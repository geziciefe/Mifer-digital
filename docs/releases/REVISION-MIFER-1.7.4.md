# Mifer Digital — 1.7.4

1.7.3 üzerine fiyatlar/paket tasarımı, menü düzeni ve mobil çalışmalar menüsü için hazırlanmıştır. SSS görünümü ve dalga arka planı korunmuştur. Yeni bağımlılık eklenmemiş, canlıya yayın yapılmamıştır.

## Değişiklikler

- Kurulum teklifi sitenin mavi/yeşil renkleriyle yeniden düzenlendi. Üç paket birbirinden ayrılan açık mavi, yeşil ve Mifer mavisi yüzeylere taşındı. Ayrı siyah “yayın sonrası” başlık bloğu kaldırıldı.
- Kartlarda sırayla giriş, imlece tepki veren ışık, yükselme ve ikon hareketleri eklendi. Ödeme seçicisinde kayan gösterge, fiyatlarda sayısal geçiş kullanılır. Hareket azaltma tercihi desteklenir; JavaScript olmadan içerikler ve yıllık fiyatlar görünür.
- Yıllık ödeme ilk seçimdir. Aylık fiyatlar Web 400, Takip 1.600, Mifer 15.200 TL; yıllık ödemede aylık karşılıklar 350, 1.200, 9.900 TL'dir. Toplam peşin tutar, tasarruf ve %12,5 / %25 / yaklaşık %34,9 indirim gösterilir.
- Mifer'de sınırsız içerik güncellemesi belirginleştirildi, yıldız kaldırıldı. Cloudflare Pro ve gelişmiş premium güvenlik ayrı maddelerdir. Günlük ziyaretçi/sayfa/buton etkileşimi ve Google görünürlüğü tek rapor maddesinde birleştirildi. Sosyal medya paylaşım önerileri ve gönderiler için AI üretimi açıklandı.
- WhatsApp mesajları seçilen paket ve ödeme tutarını taşır. Yıllık planda bir aylık yükseltme farkları SSS'de güncellendi: Web → Takip 850, Web → Mifer 9.550, Takip → Mifer 8.700 TL.
- Menü sırası Hizmetler → Çalışmalar → Fiyatlar → Yaklaşım → Biz → Blog oldu. Masaüstü bağlantıları ve sağ kontroller dikey olarak hizalandı; masaüstü/mobil bağlantılar ortak veriden gelir.
- Mobil çalışmalar sayfasında ana menü kaydırmada gizlenmez. Stil/Güven/Ölçek dizini menünün hemen altında kalır. Diğer sayfaların kaydırma davranışı korunur.

## Kontrol

- `npm run build`: Astro/TypeScript kontrolü, 65 statik sayfa.
- `npm test`: mevcut 10 kontrol başarılı.
- Yerel Chromium'da TR/EN ve 390, 768, 1024, 1440 px: yıllık başlangıç, iki ödeme yönünde fiyatlar, yüzdeler, toplamlar, tasarruf ve WhatsApp mesajları; sabit seçici, taşma ve menü/logo çakışması kontrol edildi.
- Karşılaştırmanın 13 satırı ve klavye kullanımı, dalga SVG yollarının korunması, SSS tam metin genişliği ve yeni yükseltme tutarları doğrulandı.
- TR/EN mobil çalışma bölümlerinde menü ve dizin arasında boşluk olmadığı, mobil menüden fiyatlara geçiş ve fiyat etkileşiminin yeniden başlatılması doğrulandı. Hareket azaltma modu ve tarayıcı hataları kontrol edildi.
- Paket, kurulum ve mobil çalışmalar ekran görüntüleri incelendi. Dalga bileşeninin 1.7.3 ile birebir aynı olduğu doğrulandı.

Tam kaynak proje; bağımlılıklar `npm install` ile kurulur. `node_modules`, derleme çıktısı ve önbellekler arşive dahil değildir.
