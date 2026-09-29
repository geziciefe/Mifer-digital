# Mifer Digital v1.8.5

## Hedef

v1.8.5, mevcut görsel dili yeniden tasarlamadan mobil taşma sorununu düzeltir, çalışmalar sunumunu sadeleştirir ve blog keşfini güçlendirir.

## Değişiklikler

- Mobil iletişim panelinde yatay kaydırmaya yol açabilen genişlik/overflow davranışı sınırlandı.
- Anasayfa ve Çalışmalar sayfasındaki görünür “Yeni sekme / New tab” metinleri kaldırıldı; demo bağlantıları yeni sekmede açılmaya devam ediyor.
- Anasayfadaki “Farklı sektörler / Özel tasarımlar” alanı üç görsel odaklı, daha sade proje kartına dönüştürüldü. Proje metinleri ve demo adresleri değiştirilmedi.
- Blog ana sayfası görselli, okunabilir ve mobilde tek sütuna düşen editoryal kartlarla yenilendi.
- Mifer Hakkında ile iletişim alanı arasına kaydırılabilir kısa blog seçkisi eklendi. Masaüstünde oklarla, mobilde kaydırarak kullanılabilir.
- Blog görselleri telifsiz stok yerine proje içinde üretilen hafif SVG editoryal görsellerdir; üçüncü taraf görsel lisansı gerektirmez.
- Üç yeni TR/EN rehber eklendi: Core Web Vitals, mobil uyumluluk ve SEO sonuç süresi. Teknik iddialar Google Search Central ve web.dev resmi dokümantasyonuna bağlanır; sıralama veya ticari sonuç garantisi verilmez.
- Blog/sitemap sistemi yeni yazıları otomatik üretmeye devam eder.

## Kontrol notu

`node_modules` ve `dist` arşive dahil edilmez. Yayın öncesi yerelde `npm.cmd install`, `npm.cmd run build` ve `npm.cmd test` çalıştırılmalıdır.
