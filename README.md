# Hey, I'm Kip 👋

Backend engineer focused on architecture decisions, type safety, and immutable domain modeling.

專注於架構決策、型別安全與不可變領域建模的後端工程師。

<img src="https://img.shields.io/endpoint?url=https://reallife-kip.com/api/joined-at-counter&style=flat-square&logo=htmx&label=Dev%20Experience"/>

Currently a Senior Programmer Analyst at [Systex](https://systex.com) in Taiwan, working on AWS architecture and internal tooling.

目前任職於精誠資訊，擔任高級程式分析師，主要負責 AWS 架構規劃與內部工具開發。

---

## 🔧 ImmutableBase

我獨立開發與維護的 PHP 開源套件，用繼承式設計實作不可變的 DTO / Value Object / Sealed Value Object。  
這個專案體現的是我對 DDD 實踐、資料正確性、以及「非法狀態不應存在」的堅持。

An open-source PHP library I built and maintain — inheritance-based immutable DTOs, VOs, and SVOs for PHP 8.4+.  
It reflects how I think about DDD in practice, data correctness, and making illegal states unrepresentable.

[![Packagist](https://img.shields.io/packagist/v/reallifekip/immutable-base?style=flat-square)](https://packagist.org/packages/reallifekip/immutable-base)
[![GitHub](https://img.shields.io/github/stars/ReallifeKip/ImmutableBase?style=flat-square)](https://github.com/ReallifeKip/ImmutableBase)

→ [**Repository**](https://github.com/ReallifeKip/ImmutableBase) ・ [**Packagist**](https://packagist.org/packages/reallifekip/immutable-base) ・ [**r/php discussion**](https://www.reddit.com/r/PHP/comments/1rth368/whats_your_take_on_using_inheritance_for)

---

## Stack / 技術棧

**Day-to-day:** PHP · Laravel · TypeScript · Vue/Nuxt · MySQL · Redis · Docker

**Infrastructure:** AWS · Nginx · Linux

**Practices:** DDD · Clean Architecture · SOLID · Design Patterns

---

## What I value / 我重視的事

- **Trade-off reasoning over best practices** — every design decision has a cost; I'd rather know the cost than follow a rule.  
  每個設計決策都有代價，我寧可清楚知道代價，也不要盲從最佳實踐。

- **Immutability as architecture** — not just `readonly`, but designing systems where illegal states are unrepresentable.  
  不只是 `readonly`，而是在架構層面讓非法狀態無法被表達。

- **IDE-friendly design** — if your IDE can't autocomplete it, the design made a compromise.  
  如果你的 IDE 補不出來，那這個設計就做了妥協。

---

## Currently exploring / 目前在探索的

- **Rust** — building my mental model of ownership and zero-cost abstractions  
  正在建立對 ownership 和 zero-cost abstractions 的心智模型。
- **Architecture** — moving beyond tactical patterns into bounded context design and architectural boundaries  
  從戰術模式往戰略層深入，探索 bounded context 設計與架構邊界的劃分。
- **Design Patterns** — expanding beyond the patterns I use daily into broader structural and behavioral patterns  
  從日常使用的模式往外拓展，探索更多結構型與行為型模式。

---

<p align="center">
  <i>Technology serves the business. Nothing is a silver bullet — not even the things I build.</i><br/>
  <i>技術服務於業務，沒有銀彈——包括我自己做的東西。</i>
</p>

<p align="center">
  <a href="mailto:bill402099@gmail.com">Email</a> ・ <a href="https://www.linkedin.com/in/reallifekip">LinkedIn</a> ・ <a href="https://reallife-kip.com">My Blog</a>
</p>

### 最新文章

<!-- BLOG-POSTS:START -->
<table>
<tr>
<td width="160"><a href="https://reallife-kip.com/posts/laravel-packages-technical-assets"><img src="https://storage.reallife-kip.com/covers/b2201562-1df3-44d5-9ba6-81eb3aa4a283.jpg" width="160" alt="累積技術資產 | Laravel 套件化實錄"></a></td>
<td><a href="https://reallife-kip.com/posts/laravel-packages-technical-assets"><b>累積技術資產 | Laravel 套件化實錄</b></a><br>Laravel 套件化系列第一篇，從金流退款談職責該如何劃分，再從「紅包」改名「點數連結」談命名該多中立。<br><sub>2026-10-01</sub></td>
</tr>
<tr>
<td width="160"><a href="https://reallife-kip.com/posts/authority"><img src="https://storage.reallife-kip.com/covers/b3f5988a-7860-4a00-9c92-bc963730bcb7.png" width="160" alt="權度：長出自己的信任標準"></a></td>
<td><a href="https://reallife-kip.com/posts/authority"><b>權度：長出自己的信任標準</b></a><br>人們普遍信任權威，這很合理；但權威並非永遠可靠，它也會失靈。 這篇想談的不是『該不該相信權威』，而是權威會在哪些地方失靈，及如何判斷該信什麼。<br><sub>2026-09-22</sub></td>
</tr>
<tr>
<td width="160"><a href="https://reallife-kip.com/posts/immutable-object"><img src="https://storage.reallife-kip.com/covers/e13f90de-3ae0-4465-8575-b7e378cab1d2.jpg" width="160" alt="物件為什麼要不可變？"></a></td>
<td><a href="https://reallife-kip.com/posts/immutable-object"><b>物件為什麼要不可變？</b></a><br>你有沒有想過，為什麼正式文件一旦定稿就不能直接塗改？ 要修正的畫得重新編輯後輸出、用印，產出一份全新的文件，而不是在原本那份上修改？<br><sub>2026-03-15</sub></td>
</tr>
<tr>
<td width="160"><a href="https://reallife-kip.com/posts/how-to-integrate-api"><img src="https://storage.reallife-kip.com/covers/d075f027-698c-485b-95e4-a8fa70e3be7e.jpg" width="160" alt="到底該怎麼串接API？"></a></td>
<td><a href="https://reallife-kip.com/posts/how-to-integrate-api"><b>到底該怎麼串接API？</b></a><br>金流💵、物流🚚、天氣🌤️、新聞📰...這麼多方便的 API 到底該怎麼串接？ 這篇將以現實生活中的情境作為範例，幫助你快速、輕鬆的認識並開始串接 API！<br><sub>2025-02-17</sub></td>
</tr>
</table>
<!-- BLOG-POSTS:END -->