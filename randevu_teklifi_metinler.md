# Bir Teklifim Var, Diana. — İçerik & Akış

Bu doküman, hazırlanan interaktif sayfadaki tüm yazıları ve ekranlar arası akışı özetler (kod yok, sadece içerik).

---

## Ekran 1 — Soru

**Üst etiket:** Antalya · Yaz 2026

**Başlık:**
> Bir teklifim var, *Diana*.

**Alt metin:**
> Seninle çok ama çok tanışmak istiyorum. DM'den öyle "antin kuntin" laflar benim tarzım değil, o yüzden aklıma bunu yapmak geldi.

**Görsel:** Gün batımı, deniz ve küçük bir yelkenli illüstrasyonu (animasyonlu: güneş parlıyor, dalgalar dalgalanıyor, tekne sallanıyor).

**Butonlar:**
- `Evet, çıkarım 🌅` → Ekran 2'ye geçer
- `Hayır` → kaçar, aşağıdaki mantığa göre değişir

### "Hayır" butonunun aşamaları (her denemede sırayla)

| Deneme | Buton yazısı | Alttaki mizahi not |
|---|---|---|
| 1 | Hayır | Hmm, tam basacaktın... |
| 2 | Emin misin? | Bir kere daha dener misin? |
| 3 | Gerçekten emin misin? | Hayır'ın özgüveni her denemede azalıyor. |
| 4 | Son kez soruyorum, emin misin?? | İstatistiksel olarak bu iş artık Evet'te. |
| 5 | Bak pişman olacaksın... | Hayır moralini toplamaya çalışıyor. |
| 6 | Tamam iyi düşün... | Hayır pes etti. Son bir kez daha basarsan gerçekten kabul ediyorum 👇 |
| 7 (final) | Gerçekten Hayır | *(tıklanabilir, artık kaçmıyor — basılırsa Ekran 4'e gider)* |

> Not: İlk 6 denemede buton hem fare/parmak yaklaşınca hem tıklanınca kaçar. 7. aşamada sabitlenir ve gerçek bir seçim haline gelir.

---

## Ekran 2 — Randevu Tipi Seçimi

**Üst etiket:** Harika seçim

**Başlık:**
> Peki nerede *buluşalım?*

**Alt metin:**
> Sana en çok yakışanı seç, gerisini ben ayarlarım.

**Seçenek kartları:**

1. 🍷 **Akşam Yemeği** — Mumlu masa, uzun sohbet.
2. ☕ **Kahve** — Kısa ve samimi, ilk adım.
3. 🌊 **Sahilde Yürüyüş** — Gün batımı eşliğinde.
4. 🗺️ **Sürpriz Rota** — Nereye gideceğiz, sır.

Her seçenek → Ekran 3'e (Bilet) geçer ve seçilen başlık/açıklama bilete işlenir.

---

## Ekran 3 — Bilet

**Üst etiket:** Onaylandı

**Başlık:**
> Bilet *hazır.*

**Bilet üstü etiket:** Randevu Bileti · No Refunds, Only Good Vibes
**Bilet başlığı:** *(seçilen randevu tipi, örn. "Akşam Yemeği")*

**Bilet alanları:**
- Yolcu: Diana
- Eşlik Eden: Ben :)
- Şehir: Antalya
- Bilet No: *(rastgele 4 haneli numara)*
- Not: *(seçilen randevu tipinin açıklaması)*
- Onay: *(barkod görseli)*

**Alt not:**
> Tarih ve saat için DM'den konuşuruz, bilet şimdiden kesildi 😄

**Buton:** `Baştan başla` → Ekran 1'e döner

---

## Ekran 4 — Gerçekten Hayır (final ekran)

**Üst etiket:** Anlaşıldı

**Başlık:**
> Tamam, *saygı duyarım.*

**Görsel:** Kalp önce hafif titreyip ikiye ayrılıyor, üzgün küçük bir figür (göz yaşı damlıyor), etrafında 🤍 💔 ✨ küçük ikonlar yukarı doğru süzülüyor.

**Alt metin:**
> Bugün olmadı, sorun değil — bunu denemek bile güzeldi. İnşallah bir gün gerçekten tanışmak istersin 🤍

**Buton:** `Fikrini değiştirirsen buraya tıkla` → Ekran 1'e döner

---

## Genel Akış Şeması

```
Ekran 1 (Soru)
 ├─ Evet → Ekran 2 (Randevu Tipi)
 │           └─ Seçim → Ekran 3 (Bilet) → [Baştan başla] → Ekran 1
 └─ Hayır (1-6. deneme) → kaçar, buton yazısı değişir → Ekran 1'de kalır
      └─ Hayır (7. "Gerçekten Hayır") → Ekran 4 (Kalp Kırıklığı) → [Fikrini değiştir] → Ekran 1
```
