---
title: "Nitya Paaraayana Shloka (Concluding Chant)"
date: 2025-08-1
description: Concluding excerpt from the Dasha‑Śānti mantra asking for forgiveness and peace.
---
<!--more-->

## 🕉️ Chant Text

<div id="script-toggle" style="margin-bottom: 1em;">
  <button id="btn-deva" onclick="showDeva()">Devanagari</button>
  <button id="btn-iast" onclick="showIAST()">IAST</button>
</div>

<div id="devanagari" style="display: block;">
  <p id="line1">ॐ आभिर्गीर्भिर्यदतोन ऊनमाप्यायय हरिवो वर्धमानः ।</p>
  <p id="line2">यदास्तोत्रभ्यो मही गोत्रारुजासि भूयिष्ठभाजो अध ते स्याम ।</p>
  <p id="line3">ब्रह्मप्रावादिष्म तन्नो महासीत्‌ ।</p>
  <p id="line4">ॐ शान्तिः शान्तिः शान्तिः ॥</p>
                
</div>

<div id="iast" style="display: none;">
  <p id="line1-roman">oṃ ābhirgīrbhiryadatona ūnamāpyāyaya harivo vardhamānaḥ |</p>
  <p id="line2-roman">yadāstotrabhyo mahī gotrārujāsi bhūyiṣṭhabhājo adha te syāma| </p>
  <p id="line3-roman">brahmaprāvādiṣma tanno mahāsīt‌ |</p>
  <p id="line4-roman">oṃ śāntiḥ śāntiḥ śāntiḥ ||</p>
</div>

---

## 🔊 Listen to the Chant

<audio controls>
  <source src="/learn-hindu-chanting/assets/audio/abhir-girbhir.mp3" type="audio/mpeg">
</audio>

---

## 🪔 Significance

This is a **closing mantra** from the **Dasha‑Śānti sequence**, traditionally recited at the end of Vedic chanting or study. It is an expression of humility, seeking forgiveness for any **imperfections in speech, recitation, or understanding**.

> **Translation:**  
> "By these sacred words, may any shortcomings be fulfilled.  
> May we, strengthened and purified, become worthy of divine grace.  
> Whatever we have recited, let it not become the cause of error or harm.  
> Let it instead bring us peace, peace, peace."

This mantra closes the chanting session with reverence and a sense of inner completion.

---

<script>
function showDeva() {
  document.getElementById('devanagari').style.display = 'block';
  document.getElementById('iast').style.display = 'none';
  document.getElementById('btn-deva').style.fontWeight = 'bold';
  document.getElementById('btn-iast').style.fontWeight = 'normal';
}
function showIAST() {
  document.getElementById('devanagari').style.display = 'none';
  document.getElementById('iast').style.display = 'block';
  document.getElementById('btn-deva').style.fontWeight = 'normal';
  document.getElementById('btn-iast').style.fontWeight = 'bold';
}
</script>

<script>
const audio = document.querySelector('audio');
const devanagariVisible = () => document.getElementById('devanagari').style.display !== 'none';

audio.ontimeupdate = () => {
  const t = audio.currentTime;

  const lines = [
    { id: 'line1', roman: 'line1-roman', start: 0, end: 27 },
    { id: 'line2', roman: 'line2-roman', start: 27, end: 52 },
    { id: 'line3', roman: 'line3-roman', start: 52, end: 66 },
    { id: 'line4', roman: 'line4-roman', start: 66, end: 74 }
  ];

  lines.forEach(({ id, roman, start, end }) => {
    const visibleId = devanagariVisible() ? id : roman;
    const el = document.getElementById(visibleId);
    if (!el) return;

    if (t >= start && t < end) {
      el.style.backgroundColor = 'yellow';
    } else {
      el.style.backgroundColor = '';
    }
  });
};
</script>
