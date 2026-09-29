# Mifer Digital v1.8.2

Bu sürüm v1.8.1 görünümünü ve içerik yapısını koruyan, yalnızca istenen son arayüz ve yayın öncesi düzenlemeleri içeren bir bakım sürümüdür.

## Değişiklikler

- Mifer markalı sayfa geçiş yükleme ekranı yeniden etkinleştirildi. İlk sayfa yüklemesine yapay gecikme eklenmez; yalnızca gerçek sayfa/dil geçişlerinde görünür.
- Aynı sayfadaki menü ve bölüm bağlantıları URL'ye `#process`, `#packages` gibi hash eklemeden yumuşak kaydırma yapar. Başka sayfaya giden bağlantılar normal rota davranışını korur.
- Web paketindeki görünür “Temel bakım / Essential care” rozeti kaldırıldı ve kart zemini paket seçici paneliyle aynı beyaz tona getirildi.
- Takip kartı Mifer yeşiline, Mifer kartı Mifer mavisine geçirildi. Mifer kartının mevcut efekt ve hareketleri korundu.
- Mobil paket karşılaştırması yatay kaydırmalı tablo yerine her hizmeti üç planla birlikte gösteren kompakt kart satırlarına dönüştürüldü. Masaüstü tablo yapısı korunur.
- Fiyat alanındaki parçacık arka planı, içerik tıklamalarını engellemeden imlece tepki verecek şekilde `window` etkileşimiyle çalışır. Parçacık hızı düşük tutuldu.
- Parçacık arka planı için React hydration kaldırıldı; aynı görsel davranış hafif Astro istemci betiğiyle ve görünüm yakınına gelince yüklenen `particles.js` ile sağlandı. Bu, ilk yükte gereksiz React istemci paketini azaltır.
- Kök dizindeki tarihsel Markdown belgeleri kodu etkilemeden `docs/releases/` ve `docs/concepts/` altında düzenlendi.

## Değişmeyenler

- Ana sayfa, demo sayfaları, blog, tipografi, hero, çalışmalar, süreç, FAQ, fiyat stratejisi ve içerik kapsamı yeniden tasarlanmadı.
- Mifer paketinin mevcut dönen ikon/glow efektleri korunur.
- TR/EN içerik ve rota yapısı korunur.

## Kontrol

Yayın öncesi aşağıdaki komutların çalıştırılması gerekir:

```powershell
npm.cmd install
npm.cmd run build
npm.cmd test
```

`npm run build` Astro/TypeScript kontrolünü ve statik üretimi; `npm test` rota, asset, dil ve demo bağlantı testlerini çalıştırır.
