---
theme: default
title: Code Under Fire
info: |
  Code Under Fire
  
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

<div class="bg-black/60 rounded-xl px-12 py-10">

# 03:00 Uhr nachts

Das Telefon klingelt.

</div>

</div>

---
layout: image
image: /split.jpeg
---

<div class="h-full w-full flex items-center justify-between">

<div class="bg-black/60 rounded-lg p-6 max-w-xs">

### <span class="text-red-300">Philipp Jardas</span>

**Lead Software Engineer**  

<img src="./assets/codecentric-white.svg" class="w-35"/>

Cloud-native full-stack enthusiast

TypeScript + React + AWS = ❤️

Startup Culture, Lean Product Development, Speedboat Unit Captain

Trainer Gewaltfreie Kommunikation, Meetup Host, Speaker

</div>

<div class="bg-red-100/70 text-black rounded-lg p-6 max-w-xs">

### <span class="text-red-700">Philipp Jardas</span>

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
layout: image
image: /riegelstellung.jpeg
---

<div class="bg-black/70 rounded-xl p-10">

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 4
</div>

# Brandabschnitte

**Proaktiv Domino-Effekte vermeiden**

<div class="grid cols-2 items-center gap-8">

<div>

Vorbeugender Brandschutz unterteilt große Gebäude in Brandabschnitte zur passiven Verzögerung der Brand- und Rauchausbreitung.

Aktive Variante: Riegelstellung schützt Nachbargebäude, wo die Architektur es nicht tut. Brandschneisen verhindern die Ausbreitung von Vegetationsbränden.

</div>

<div class="p-6 rounded border-l-4 border-red-500 bg-red-500/10">

### Software

Passiv: Bulkheads, Circuit Breakers.

Aktiv: Kill-Switch, Traffic umleiten, Pod/Node abschießen.

</div>

</div>

</div>

---
layout: image-right
image: /danach.jpeg
---

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 5
</div>

# Nach dem Einsatz ist vor dem Einsatz

**Einsatzbereitschaft ist keine Kür**

Schläuche rollen, Flaschen tauschen, Material auffüllen. Sofort, nicht irgendwann. Der nächste Einsatz kommt, bevor du fertig bist.

Software: Feature-Flags zurücksetzen, Hotfixes nachziehen, Monitoring wiederherstellen, Debug-Code aufräumen. Provisorien aus dem Incident sind keine Backlog-Tickets für später.

---
layout: image
image: /grossuebung.jpeg
class: grid items-center
---

<div class="bg-black/70 rounded-xl p-10">

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 6
</div>

# Erfahrung sammeln

**Drills unter möglichst echten Bedingungen**

<div class="grid cols-2 gap-20 items-end">

<div>

Prozesse aus der Theorie in die Praxis holen. Muskelgedächtnis trainieren. Schwachstellen aufdecken. Kommunikation verbessern. Team-Zusammenhalt stärken.

Gewöhnung führt zu Ruhe und Gelassenheit.

</div>

<div>

### In der Software

Chaos Engineering, GameDays, Incident-Simulationen.

Regelmäßig, nicht erst nach dem ersten echten Ausfall.

> **Wenn eine Übung gut lief, war sie zu einfach.**

</div>

</div>

</div>

---
layout: image-right
image: /nachbesprechung.jpeg
---

<div class="inline-block bg-red/80 text-black px-2 rounded text-sm mb-1">
Prinzip 7
</div>

# Einsatz-Nachbesprechung

**Aus Fehlern lernen statt Schuldige suchen**

Was ist passiert? Was lief gut? Wo versagen Technik, Prozesse oder menschliche Fähigkeiten? Wo brauchen wir mehr Ausbildung? Wie verbessern wir unsere Prozesse? Wo liegen unsere Stärken, wo unsere Schwächen?

Blameless Post-Mortems erfordern psychologische Sicherheit und konstruktive Fehlerkultur.

Resilienz wächst aus Ehrlichkeit, nicht aus Angst.

---
layout: center
class: text-center
---

# Zusammenfassung

<div class="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto">

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 1. Innehalten statt Hektik

Durchatmen. Ruhe ausstrahlen. Erst erkunden, dann handeln. 10-for-10.

</div>

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 2. Autonomie stärken

Auftragstaktik: Ziel vorgeben, Ausführung freigeben. Selbstständige Meldungen.

</div>

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 3. Notfall-Tools vereinfachen

KISD: der Big Red Button für 3 Uhr nachts.

</div>

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 4. Proaktive Resilienz

Passive Maßnahmen einbauen. Schadenbegrenzung durch Eindämmen.

</div>

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 5. Nach dem Einsatz…

Sofort aufräumen statt aufschieben.

</div>

<div v-click class="p-4 pb-0 rounded border-l-4 border-red-500 bg-red-500/10">

#### 6. Der ewige Kreis

Unter echten Bedingungen üben. Blameless Post-Mortems.

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

<div class="absolute top-10 left-10 grid gap-4">

<div v-click class="bg-black/80 rounded-lg w-xs overflow-hidden shadow-md hover:shadow-xl relative">
  <img src="./assets/diso.jpeg" class="w-full" />
  <div class="p-4 grid gap-2 absolute bottom-0 w-full bg-gradient-to-b from-black/0 to-black/80 pt-8">
    <div class="font-bold text-sm">Digitale Souveränität</div>
    <div class="text-xs">Architektur für eine ungewisse Zukunft</div>
  </div>
</div>

<div v-click class="bg-black/80 rounded-lg w-xs overflow-hidden shadow-md hover:shadow-xl relative">
  <img src="./assets/10x-exhausted.jpeg" class="w-full" />
  <div class="p-4 grid gap-2 absolute bottom-0 w-full bg-gradient-to-b from-black/0 to-black/80 pt-8">
    <div class="font-bold text-sm">10x produktiver, 10x erschöpfter</div>
    <div class="text-xs">Wie wir die Ära des agentischen Codens überleben</div>
  </div>
</div>

</div>
