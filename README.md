# Mifer Digital 1.5

Mifer Digital’in Türkçe ve İngilizce web sitesi; Veyra Atelier kuaför, Avelis Dental Care diş kliniği ve Kavren inşaat demolarıyla birlikte.

## Windows / PowerShell ile açma

RAR arşivini çıkarın. `package.json` dosyasının bulunduğu `mifer-digital-1.5` klasöründe PowerShell açın. Node.js 22 LTS veya uyumlu daha yeni bir sürüm kurulu olmalıdır.

İlk açılışta komutları sırayla çalıştırın:

```powershell
npm.cmd install
npm.cmd run dev
```

Tarayıcıda **http://localhost:4321/tr** adresini açın. İlk komutun bitmesini bekleyin; site açıkken PowerShell penceresi de açık kalmalıdır. Sonraki açılışlarda yalnızca `npm.cmd run dev` yeterlidir.

Alternatif: `BASLAT.cmd` dosyasına çift tıklayın. PowerShell güvenlik ayarlarını değiştirmeniz gerekmez; `npm.cmd` kullanımı `npm.ps1` yürütme ilkesi hatasını önler.

## Sayfalar

| Sayfa | Türkçe | English |
| --- | --- | --- |
| Mifer | `/tr` | `/en` |
| Çalışmalar | `/tr/demo-calismalar` | `/en/demo-work` |
| Veyra Atelier | `/tr/kuafor-demo` | `/en/hair-salon-demo` |
| Avelis Dental Care | `/tr/dis-klinigi-demo` | `/en/dental-clinic-demo` |
| Kavren | `/tr/insaat-demo` | `/en/construction-demo` |

Kavren’deki üç proje ayrı detay sayfalarına açılır. Dil değiştirme bağlantısı, proje detayının diğer dildeki karşılığını açar. Tüm demo sayfalarında sol alttaki “Mifer’e dön / Back to Mifer” bağlantısı Mifer’in çalışmalar bölümüne döner.

## Derleme ve kontroller

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

`build` TypeScript/Astro kontrolünü çalıştırır ve statik siteyi `dist` klasörüne üretir. `test`, üretilen tüm sayfaların iç bağlantılarını, dil eşleşmelerini, görsellerini ve demo gezinmesini kontrol eder. İkisini birlikte çalıştırmak için `npm.cmd run test:all` kullanılabilir. Üretim önizlemesinin adresi terminalde gösterilir.

## Geliştirme

- Aktif uygulama: Astro + TypeScript, `src/` ve `public/`.
- Genel içerik: `src/data/i18n.ts`, `src/data/siteConfig.ts`.
- Demo portföyü: `src/data/demos.ts`.
- Kavren içeriği ve projeleri: `src/data/construction.ts`.
- Kavren tasarımı: `src/styles/construction-demo.css`.
- Kavren etkileşimleri: `src/scripts/construction-demo.ts`.
- Ortak dönüş kontrolü: `src/components/DemoReturn.astro`.
- Avelis: `src/data/dental.ts`, `src/styles/dental-demo.css`.
- Veyra: `src/components/SalonDemo.astro`, `src/styles/salon-demo.css`.

Kök dizindeki önceki altyapıya ait `app`, `worker`, `db` ve Vinext yapılandırmaları aktif Astro derlemesinin parçası değildir; önceki proje dosyaları korunmuştur. Vite bu dosyalardan bazılarını geliştirme başlangıcında keşfettiği için gereken eski uyumluluk dışa aktarımı korunmuştur. Çalıştırmak için yukarıdaki npm komutlarını kullanın.

## Demo kapsamı

Kavren markası, proje adları, sayılar ve geçmiş kurgusaldır. Fotoğraflar bu konsept için üretilmiştir. İletişim formu sunucuya veri göndermez; örnek sonucu gösterir ve alanları temizler. Üretime geçişte gerçek firma bilgileri ve iletişim servisi bağlanabilir. Bu davranış sitede de açıklanır.

Mifer’in gerçek WhatsApp numarası ve Instagram bağlantısı `src/data/siteConfig.ts` üzerinden düzenlenir. Salon ve klinik tasarımları bu sürümde korunmuştur; ortak dönüş kontrolü için gereken küçük yerleşim düzenlemeleri yapılmıştır.

Bu arşiv bütün kaynakları, görselleri, fontları, paket ve kilit dosyalarını içerir. `node_modules`, `dist` ve geçici önbellekler dahil değildir; yerel kurulumda yeniden oluşturulur. Tasarım ve doğrulama notları için `CONSTRUCTION-CONCEPT.md` dosyasına bakın.


## Yayına alma (Plesk / statik hosting)

Bu sürüm **Astro statik site** olarak yayına alınmak üzere paketlenmiştir. Kaynak proje doğrudan `httpdocs` içine yüklenmez.

Windows'ta `YAYINA-HAZIRLA.cmd` dosyasına çift tıklayın. Script:

1. Gerekirse bağımlılıkları kurar.
2. Üretim derlemesini ve testleri çalıştırır.
3. `dist` klasörünü üretir.
4. Plesk'e yüklemek için `mifer-digital-1.5-yayin.zip` dosyasını hazırlar.

Plesk'te mevcut siteyi silmeden önce dosya ve veritabanı yedeği alın. Ardından `httpdocs` içindeki eski yayın dosyalarını kaldırıp **`mifer-digital-1.5-yayin.zip` içeriğini doğrudan `httpdocs` köküne** çıkarın. Son durumda `httpdocs/index.html` bulunmalıdır; `httpdocs/dist/index.html` olmamalıdır.

### Yayın öncesi kontrol

`src/data/siteConfig.ts`, `astro.config.mjs`, `public/robots.txt` ve `public/sitemap.xml` şu anda `miferdigital.com` alan adına göre hazırlanmıştır. Gerçek yayın alan adı farklıysa, build almadan önce bu dört yerde aynı alan adını kullanın. Bu sürümde mevcut site davranışını değiştirmemek için alan adı otomatik olarak değiştirilmemiştir.

Yayın sonrası `/tr`, `/en`, demo sayfaları, mobil görünüm, WhatsApp/Instagram bağlantıları ve `https://` yönlendirmesi kontrol edilmelidir.
