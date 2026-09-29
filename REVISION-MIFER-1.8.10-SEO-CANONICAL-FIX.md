# Mifer Digital v1.8.10 — SEO canonical + demo indexing fix

- Astro `trailingSlash` standardı `always` olarak ayarlandı.
- İndekslenebilir Mifer sayfalarının canonical/hreflang URL'leri `/` ile biten tek formata eşitlendi.
- `x-default` ana adresi `https://miferdigital.com/tr/` olarak sabitlendi.
- Sitemap yalnızca gerçek Mifer sayfaları ve blog içeriklerini içeriyor; Kavren, Veyra ve Avelis demo sayfaları sitemap'ten çıkarıldı.
- Tüm demo site sayfalarına `noindex, nofollow` eklendi; demolar ziyaret edilebilir kalıyor.
- Eski demo yönlendirmeleri slash'lı hedeflere güncellendi ve demo yönlendirmelerine de `noindex, nofollow` eklendi.
- Mifer / Mifer Dijital / MiferDigital / miferdigital.com marka alias structured-data sinyalleri korundu.
- robots.txt içindeki sitemap adresi korunmuştur.
- Yeni testler canonical, x-default, demo noindex ve sitemap filtrelemesini koruma altına alır.
