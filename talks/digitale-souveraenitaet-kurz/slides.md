---
theme: default
title: Digitale Souveränität (Kurzfassung)
info: |
  Digitale Souveränität

  Architektur für eine ungewisse Zukunft.

  Philipp Jardas, codecentric
transition: slide-left
aspectRatio: "16/9"
mdc: true
fonts:
  sans: "Rubik"
  weights: "400,500,700,800"
addons:
  - slidev-addon-qrcode
layout: cover
background: /title.jpeg
---


<div class="h-full flex items-center">

<div class="bg-[#22f4ae] text-black rounded-sm px-10 py-8 max-w-md">

# Digitale Souveränität

<div class="text-lg font-bold">
Architektur für eine ungewisse Zukunft
</div>

</div>

</div>

---
layout: image-right
image: /portrait.jpeg
backgroundSize: contain
class: bg-[#22f4ae] text-black
---

<img src="./assets/codecentric.png" alt="codecentric" class="w-48 mb-8" />

### Philipp Jardas

**Lead Software Engineer**

Cloud-native Full-Stacker

TypeScript + AWS = ❤️

Startup Culture, Lean Product Development, Gewaltfreie Kommunikation

Feuerwehrmann, 4x Papa, Meetup Host

---
layout: image-right
image: /nebel.jpeg
---

# Entscheidungen im Ungewissen

<div class="subtitle">Instabile Rahmenbedingungen als Ausgangspunkt</div>

- Wir treffen heute Entscheidungen für eine Zukunft, die so **unberechenbar** ist wie selten zuvor
- Unsere Systeme sollen gleichzeitig viele Jahre **stabil** betrieben werden

**Rahmenbedingungen verändern sich:**

- Geopolitische Einflussnahme auf Infrastruktur und Anbieter
- Dynamische regulatorische Anforderungen und Compliance-Vorgaben
- Strategische und wirtschaftliche Entscheidungen von Plattformanbietern
- Preis-, Lizenz- und Nutzungsmodelle im Wandel
- Technologische Sprünge und verkürzte Innovationszyklen

---
layout: image-right
image: /spielautomat.jpeg
---

# Entscheidungen als Wetten

<div class="subtitle">Architektur basiert auf Arbeitshypothesen über die Zukunft</div>

**Jede Architekturentscheidung impliziert Annahmen:**

- Anbieter bleibt verfügbar
- APIs bleiben stabil
- Preise bleiben kalkulierbar
- regulatorische Rahmen ändern sich nicht kritisch

**Diese Annahmen sind oft:**

- implizit
- nicht dokumentiert
- selten hinterfragt

---

# Unser Modell

<div class="subtitle">Vier Hebel zur Analyse kritischer Abhängigkeiten</div>

Die Bereiche, die Handlungsfähigkeit sichern, lassen sich auch zur Bewertung von Abhängigkeiten nutzen:

<div class="grid grid-cols-4 gap-4 mt-8">

<div v-click class="card" style="background: var(--dsv-green)">

#### Betriebs-Hebel

**Wer kontrolliert die Laufzeit?**

- Kontrolle über Laufzeit und Deployment
- Einfluss auf Verhalten und Skalierung

</div>

<div v-click class="card" style="background: var(--dsv-cyan)">

#### Datenhoheit-Hebel

**Wer kontrolliert die Daten?**

- Kontrolle über Speicherung und Zugriff
- Migration und Portabilität

</div>

<div v-click class="card" style="background: var(--dsv-yellow)">

#### Zugriffs-Hebel

**Wer kann den Zugriff entziehen?**

- Kontrolle über Identitäten und Berechtigungen
- Integration in Business-Logik

</div>

<div v-click class="card" style="background: var(--dsv-teal)">

#### Update & Lizenz-Hebel

**Wer kontrolliert die Zukunft?**

- Kontrolle über APIs und Updates
- Abhängigkeit von Release-Zyklen

</div>

</div>

---

# Souveränität ist ein Trade-off

<div class="subtitle">Kontrolle entsteht durch bewusste Entscheidungen</div>

<div class="grid grid-cols-[1fr_16rem] gap-10 items-center">

<div>

**Bequeme, stark abstrahierte Systeme nehmen Entscheidungen ab.**

Souveränität entsteht dort, wo Organisationen diese Entscheidungen **bewusst zurückholen** – mit entsprechenden Konsequenzen für Betrieb und Verantwortung.

Mehr Kontrolle bedeutet: **mehr eigene Architekturentscheidungen** und **mehr Betriebsverantwortung.**

</div>

<img src="/illustration.jpeg" class="w-full" />

</div>

<div class="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mt-10">

<div class="card text-center font-bold" style="background: var(--dsv-cyan)">BEQUEMLICHKEIT</div>

<div class="text-3xl">⚖</div>

<div class="card text-center font-bold" style="background: var(--dsv-green)">KONTROLLE</div>

</div>

---
layout: image-right
image: /boot.jpeg
---

# Es gibt gute Gründe dagegen!

<div class="subtitle">Legitimation des Trade-Offs</div>

Ein Startup braucht hohe Entwicklungsgeschwindigkeit und Time-to-Market. Eine enge Kopplung z.B. an Firebase ist akzeptabel.

Wenn die Team-Kapazität ein Engpass ist, können Managed Services die Teams von Betriebsaufgaben entlasten.

<div class="mt-10 font-bold">

Der Fehler ist nicht, sich <span class="mark-yellow">gegen Souveränität</span> zu entscheiden.

Der Fehler ist, sich <span class="mark-green">unbewusst</span> dagegen zu entscheiden.

</div>

---
layout: image-right
image: /matrix.jpeg
backgroundSize: contain
---

# Reversible Abhängigkeiten

<div class="subtitle">Nicht alle Lock-Ins sind gleich</div>

<div class="grid gap-4 mt-8">

<div>Die Geschäftsdaten in Firebase speichern?<br /><span class="mark-yellow">existenziell.</span></div>

<div>Managed Kafka nach in-premises holen?<br /><span class="mark-green">manageable.</span></div>

<div>CI-Workflow in GitHub Actions? <span class="mark-yellow">monitor.</span></div>

<div>Externer Dienst mit Anti-Corruption-Layer? <span class="mark-green">safe.</span></div>

</div>

---

# Architektur-Pattern

<div class="grid grid-cols-2 gap-12 mt-10">

<div>

<span class="mark-yellow">Hexagonale Architektur</span>

Verschiebe externe Abhängigkeiten an den Rand der Code-Basis. Der Kern bleibt stabil. Stichwort: Ports und Adapter.

</div>

<div>

<span class="mark-yellow">Anti-Corruption-Layer</span>

Übersetze zwischen Domain-Layer und externen Systemen in Adaptern. Das macht den Austausch einfacher und sicherer.

</div>

</div>

<div class="mt-16 font-bold">Software-Architektur ist Voraussetzung, keine Garantie.</div>

---
layout: image-right
image: /turning-point.jpeg
---

# Der Sovereignty Pivot

<div class="subtitle">Übung für eure nächste Architektur-Runde</div>

Sucht euch eine <span class="mark-green">kritische Abhängigkeit</span> in eurem System aus, z.B. Cloud-Provider, Managed Database, Zahlungssystem, Log Aggregator etc.

Fragt euch: Wenn dieser Dienst morgen seinen Dienst einstellte oder den Preis verdoppelte, <span class="mark-green">was würdet ihr tun?</span>

**Könnt ihr diese Frage überhaupt beantworten?**

Wie lange würde eine Migration dauern?

Wer wäre dafür verantwortlich?

---
layout: image
image: /lupe.jpeg
backgroundSize: cover
---

<div class="h-full flex items-center">

<div class="bg-[#22f4ae] text-black rounded-sm px-10 py-8 max-w-2xl">

# Fazit

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 1 Abhängigkeiten bewusst gestalten

nicht vermeiden, sondern kontrollieren

</div>

<div>

### 2 Wechselkosten mitdenken

Entscheidungen sind langfristige Festlegungen

</div>

<div>

### 3 Kritische Bereiche absichern

nicht alle Abhängigkeiten sind gleich relevant

</div>

<div>

### 4 Entkopplung von innen nach außen denken

Handlungsfähigkeit entsteht schrittweise im System

</div>

</div>

</div>

</div>

---
class: bg-[#22f4ae] text-black
---

<div class="grid grid-cols-[1fr_20rem] gap-12 h-full items-center">

<div>

<img src="./assets/codecentric.png" alt="codecentric" class="w-48 mb-10" />

# Danke für eure Aufmerksamkeit!

</div>

<div class="grid gap-3">

<img src="/portrait.jpeg" class="w-24" />

**Philipp Jardas**  
Lead Software Engineer  
philipp.jardas@codecentric.de

<div class="bg-white p-3 inline-block w-fit">

<QRCode :width="160" :height="160" :margin="0" type="svg" data="https://talks.jardas.de/digitale-souveraenitaet-kurz/" />

</div>

<div class="text-sm">talks.jardas.de/digitale-souveraenitaet-kurz/</div>

</div>

</div>
