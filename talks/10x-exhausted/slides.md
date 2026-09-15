---
theme: default
title: 10x More Productive, 10x More Exhausted
info: |
  ## 10x More Productive, 10x More Exhausted
  Surviving the Era of Agentic Coding

  Philipp Jardas, codecentric
transition: fade
aspectRatio: "16/9"
mdc: true
colorSchema: light
addons:
  - slidev-addon-qrcode
layout: cover
background: /assets/title.jpeg
class: text-center
---

# 10x More Productive<br/>10x More Exhausted

<div class="text-2xl mt-4">
Surviving the Era of Agentic Coding
</div>

<div class="mt-16 text-lg">
Philipp Jardas · Lead Software Engineer · codecentric
</div>

---

# The Shock of the Agent Era

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

## The Promise

- **Prompts Replace Craft**  
  features and refactors built in seconds.
- **Skyrocketing Throughput**  
  deployment velocity hits record highs.
- **Boilerplate Eradicated**  
  autonomous loops handle setup overhead.

</div>

<div>

## The Hidden Tax

- **Contextual Overload**  
  managing hyperfast generative output.
- **Cognitive Alienation**  
  disconnected from the core craft.
- **End of Day Exhaustion**  
  shipping more value, feeling depleted.

</div>

</div>

<div class="mt-10 border-2 border-red-500 bg-red-50 rounded-lg px-6 py-4 text-center">
<span class="text-red-700 font-bold text-xl">Throughput: 10x ↑ &nbsp;·&nbsp; Daily Satisfaction: 10x ↓</span>
</div>

---

# The Productivity-Experience Paradox

<div class="mt-6 grid cols-2 gap-4">

<div class="p-4 rounded-lg border border-gray-200 bg-gray-50">
<div class="font-bold">Empirical Data</div>
<div class="text-gray-600">
  Velocity metrics soar while developer flow collapses.
  <div class="text-xs text-black/50 mt-2">
    <a href="https://reclaim.ai/customers/vella">Vella, 2026</a>;
    <a href="https://www.researchgate.net/publication/368473822_The_Impact_of_AI_on_Developer_Productivity_Evidence_from_GitHub_Copilot">Peng et al., 2023</a>;
    <a href="https://economics.mit.edu/sites/default/files/inline-files/draft_copilot_experiments.pdf">MIT Economics, 2025</a>
  </div>
</div>
</div>

<div class="p-4 rounded-lg border border-gray-200 bg-gray-50">
<div class="font-bold">Disrupted Feedback Loops</div>
<div class="text-gray-600">Deterministic compiler behavior gives way to stochastic, probabilistic LLM output, raising interpretive cognitive load.</div>
</div>

<div class="p-4 rounded-lg border border-gray-200 bg-gray-50">
<div class="font-bold">The Neurodivergent Tax</div>
<ul class="text-gray-600 mt-2 ml-4 list-disc">
<li><span class="font-semibold">ADHD:</span> loss of incremental dopamine loops (red, green, refactor).</li>
<li><span class="font-semibold">Autism spectrum:</span> loss of an ordered, predictable environment.</li>
</ul>
</div>

<div class="p-4 rounded-lg border border-gray-200 bg-gray-50">
<div class="font-bold">Executive Fatigue</div>
<div class="text-gray-600">Auditing non-native syntax drains working memory faster than writing code.</div>
</div>

</div>

---
layout: image-right
image: /assets/radar.jpeg
---

# Human Factors in Automation

- **Automation-Induced Complacency**: visual vigilance degrades when watching systems that work correctly 95% of the time. <span class="text-xs text-black/50">[Causse et al., 2025](https://www.tandfonline.com/doi/abs/10.1080/1463922X.2025.2475431)</span>
- **The Audit Trap**: humans are poorly equipped to scan hundreds of lines of syntactically perfect text for a silent 5% logical anomaly.
- **Role Demotion**: from focused puzzle builder to high-vigilance air traffic controller.

---
layout: image-right
image: /assets/airspace.jpeg
---

# Defending Working Memory via Spatial Boundaries

**Tactic 1: Sectorization**

Air traffic controllers manage airspace volume by dividing territory into sectors, protecting cognitive limits.

<div class="mt-6 border-l-4 border-red-500 bg-red-50 px-6 py-4">
<strong>Action:</strong> lock down critical business logic. Keep agents restricted strictly to ephemeral, sandboxed branches.
</div>

---

# Enforcing the Sterile Cockpit Rule

**Tactic 2: Asynchronous Batching**

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="border-2 border-red-500 rounded-lg p-6 bg-red-50">
<div class="text-red-700 font-bold text-lg mb-2">Synchronous Stream Watching</div>
<div class="text-gray-700">Watching code render live in a chat UI keeps the brain in hypervigilance mode, triggering rapid cognitive fatigue.</div>
</div>

<div class="border-2 border-green-500 rounded-lg p-6 bg-green-50">
<div class="text-green-700 font-bold text-lg mb-2">Asynchronous Batch Review</div>
<div class="text-gray-700">Issue a declarative prompt specification, step away physically, and run code review in dedicated 90-minute blocks.</div>
</div>

</div>

---

# Offloading Audit Rigor to Automated Monitors

**Tactic 3: Dual-Channel Architecture**

Adopt safety-critical avionics standards (DO-178C Level A): a command channel and a monitor channel.

<div class="font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4 text-center">

```
 AI Coding Agent  ──▶  Feature Branch
                            │
                            ▼
              Automated Monitor (CodeRabbit)
                    (async audit)
                            │
                            ▼
                Human Engineer (Judge)
              reviews only the discrepancies
```

</div>

<div class="mt-6 border-l-4 border-gray-900 bg-gray-50 px-6 py-4">
<span class="font-bold">Key takeaway:</span> let an automated review engine critique the AI coder asynchronously. Act as the final judge, not the line-by-line auditor.
</div>

---

# Human Cognitive Ergonomics

```ts
interface DeveloperOperatingSystem {
  workingMemory: "Finite";
  contextSwitchCost: "High Latency";
  dopamineSource: "Incremental Craftsmanship";
  automationStrategy: "Intentional Orchestration";
}
```

<div class="mt-8 border-l-4 border-gray-900 pl-6 text-xl text-gray-800">
True engineering maturity means designing pipelines that protect the cognitive ergonomics of the human mind.
</div>

---
layout: image
image: /assets/zen.webp
---

# Reclaim Your Developer Zen

<div class="grid gap-4 justify-start">

<div class="border border-gray-500 rounded-lg p-5">
<div class="text-xl font-bold text-gray-500">01</div>
<div class="font-bold text-gray-800">Sectorize Boundaries</div>
</div>

<div class="border border-gray-500 rounded-lg p-5">
<div class="text-xl font-bold text-gray-500">02</div>
<div class="font-bold text-gray-800">Batch Interactions</div>
</div>

<div class="border border-gray-500 rounded-lg p-5">
<div class="text-xl font-bold text-gray-500">03</div>
<div class="font-bold text-gray-800">Automate Auditing</div>
</div>

</div>

---
layout: two-cols-header
class: items-center
---

# Thank you!

::left::

<div>

<img src="/assets/phjardas-cc.jpg" alt="Portrait of Philipp Jardas" class="w-50 rounded-full mb-4">

## Philipp Jardas

Lead Software Engineer

<img src="./assets/codecentric-black.svg" alt="codecentric" class="w-50" />

</div>

::right::

<div class="w-50">

## Slides

<QRCode type="svg" data="https://talks.jardas.de/10x-exhausted/" class="svg:w-full svg:h-auto mt-2" />

<div class="text-xs text-black/75 mt-2">talks.jardas.de/10x-exhausted/</div>

</div>
