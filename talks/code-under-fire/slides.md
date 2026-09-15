---
theme: default
title: Code Under Fire
info: |
  ## Code Under Fire
  Was Software-Teams von der Feuerwehr über Führung, Resilienz und Incident Management lernen können.

  Philipp Jardas, codecentric
transition: slide-left
aspectRatio: "16/9"
mdc: true
colorSchema: dark
fonts:
  sans: "Space Grotesk"
  weights: "400,600,800"
addons:
  - slidev-addon-qrcode
layout: cover
background: /title.jpeg
---

<div class="grid h-100 items-end justify-center text-center">

<div class="bg-black/60 rounded-xl px-12 py-10">

# Code Under Fire

<div class="text-xl text-white">
Was Software-Teams von der Feuerwehr über<br/>Führung, Resilienz und Incident Management lernen können
</div>

<div class="mt-6 opacity-80">
Philipp Jardas
</div>

<div class="grid justify-center mt-4">
<img src="./assets/codecentric-white.svg" alt="codecentric" class="w-40" />
</div>

</div>

</div>

---
layout: image
image: /0300.jpeg
class: text-center
---

<div class="h-full flex flex-col justify-end pb-12">

<div class="bg-black/60 rounded-xl px-12 py-10 inline-block">

# 03:00 Uhr nachts

Der Pager reißt dich aus dem Schlaf.

Ein Blick auf die Logfiles – die Buchstaben verschwimmen.

Schnell ein Kommando eingetippt.

<v-click>

<div class="text-red">

## BAAAM!

</div>

**Aus einem Ausfall werden fünf.**

</v-click>

</div>

</div>

---
layout: image
image: /split.jpeg
---

<div class="h-full w-full flex items-center justify-between">

<div class="bg-black/60 rounded-lg p-6 max-w-xs">

### <span class="text-red-400">Philipp Jardas</span>

**Lead Software Engineer**  
**codecentric**

Cloud-native full-stack enthusiast
TypeScript + AWS = ❤️

Startup Culture, Lean Product Development, Speedboat Unit Captain, Trainer Gewaltfreie Kommunikation

</div>

<div class="bg-white/60 text-black rounded-lg p-6 max-w-xs">

### <span class="text-red-600">Philipp Jardas</span>

**Hauptfeuerwehrmann**  
**Freiw. Feuerwehr Gelnhausen**

Atemschutzgeräteträger, Drohnenpilot, TEL, ELW2-Besatzung

knapp 200 Einsätze im Jahr

</div>

</div>

<div v-click.hide class="absolute w-1/2 h-full top-0 right-0 bg-black">
</div>

---
layout: image-right
image: /durchatmen.jpeg
---

# Kognitiver Tunnelfokus

- Stress + Adrenalin = Logik kaputt
- Kein Fehler. Das ist das Tier in uns.
- In diesem Zustand triffst du keine guten Entscheidungen.
- Aber: Das Nervensystem lässt sich beeinflussen durch bewusste Atmung. Runterkommen. Achtsamkeit.

<div class="mt-10">

> ### Feuerwehrleute rennen nicht
>
> Slow is smooth, smooth is fast.

</div>

---
layout: image
image: /huddle.jpeg
---

<div class="h-full flex flex-col justify-end pb-12">

<div class="bg-black/75 rounded-xl px-12 py-10 inline-block">

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 1
</div>

# Die 10-for-10 Regel

**Taktik aus Feuerwehr und Rettungsdienst**

10 Sekunden Huddle für die nächsten 10 Minuten Fokus.

Erst die Lage erkunden, dann handeln.

</div>

</div>

---
layout: image
image: /auftrag.jpeg
---

<div class="grid w-full h-full justify-end items-center">

<div class="bg-black/70 rounded-xl p-10">

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 2
</div>

# Auftragstaktik

**Führung über Ziele und Ressourcen**

Der Einsatzleiter sagt nicht **WIE**, sondern **WAS**.

> **"Angriffstrupp zur Brandbekämpfung mit dem 1. Rohr ins 2. OG vor!"**

Nicht: "Halte den Schlauch 30 Grad nach links."

Wichtig: Selbstständige Meldungen nach oben.

</div>

</div>

---

<div class="w-full h-full grid cols-2 items-center">

<div>

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 3
</div>

# Idiotensicheres Tooling

Poka-Yoke: Geräte funktionieren bei Nullsicht und mit dicken Handschuhen.

**Keep It Simple for Disaster.**

Notfall-Tools und Failovers als "Big Red Button" bauen.

Für dein übermüdetes 3-Uhr-nachts-Ich.

</div>

<img src="./assets/poka-yoke.svg" class="w-full rotate-270" />

</div>

---

# Kurz und knackig

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### Riegelstellung

Den Brand eindämmen, bevor er überspringt.
Isolation via Circuit Breaker & Bulkheads.

</div>

<div v-click class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### Nach dem Einsatz ist vor dem Einsatz

Sofort Einsatzbereitschaft wiederherstellen.
Provisorien direkt aufräumen, nicht "irgendwann".

</div>

<div v-click class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### Erfahrung sammeln

Drills unter echten Bedingungen. Immer wieder.
Wenn eine Übung gut lief, war sie zu einfach.

</div>

<div v-click class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### Blameless Post-Mortem

Aus Fehlern lernen statt Schuldige suchen.
Resilienz wächst aus Ehrlichkeit und Vertrauen.

</div>

</div>

---
layout: center
class: text-center
---

# Fazit

<div class="grid grid-cols-1 gap-4 pt-8 text-left max-w-2xl mx-auto">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### 1. Innehalten statt Hektik

Durchatmen. Erst erkunden, dann handeln. 10-for-10.

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### 2. Autonomie stärken

Auftragstaktik: Ziel vorgeben, Ausführung freigeben.

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-500/10">

### 3. Notfall-Tools vereinfachen

KISD: der Big Red Button für 3 Uhr nachts.

</div>

</div>

---
layout: image
image: /sunset.jpeg
---

<div class="w-auto grid justify-end items-start gap-4">

# Vielen Dank!

<div class="bg-white/70 text-black px-4 pb-4 rounded">

**Slides**

<QRCode :width="250" :height="250" :margin="0" type="svg" data="https://talks.jardas.de/code-under-fire/" />

<div class="text-sm text-black/75 mt-2">talks.jardas.de/code-under-fire/</div>

</div>

<img src="./assets/codecentric-white.svg" alt="codecentric" class="w-80% mt-2" />

</div>
