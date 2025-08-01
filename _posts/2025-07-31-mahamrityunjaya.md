---
title: "Mahamrityunjaya Mantra"
date: 2025-07-29
description: Learn the sacred Mahamrityunjaya mantra with audio, Devanagari and IAST text.
---

<!--more-->

## 🕉️ Chant Text

<div id="script-toggle" style="margin-bottom: 1em;">
  <button id="btn-deva" onclick="showDeva()">Devanagari</button>
  <button id="btn-iast" onclick="showIAST()">IAST</button>
</div>

<div id="devanagari" style="display: block;">
  <p id="line1">ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम् ।</p>
  <p id="line2">उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥</p>
</div>

<div id="iast" style="display: none;">
  <p id="line1-roman">oṃ tryaṃbakaṃ yajāmahe sugaṃdhiṃ puṣṭivardhanam |</p>
  <p id="line2-roman">urvārukamiva bandhanān mṛtyormukṣīya māmṛtāt ||</p>
</div>

---

## 🔊 Listen to the Chant

<audio controls>
  <source src="/learn-hindu-chanting/assets/audio/mahamrityunjaya.mp3" type="audio/mpeg">
</audio>

🙏 Chant slowly, repeat with intention, and feel free to toggle between scripts for clarity.

---

## 🪔 Significance

The **Mahamrityunjaya Mantra**, found in the **Rigveda (7.59.12)** and also in the Yajurveda, is a powerful and ancient invocation to **Lord Shiva**, asking for liberation from death and suffering.

- Tryambakam: Referring to Lord Shiva, the three-eyed one.
- Yajamahe: "We worship".
- Sugandhim Pushtivardhanam: "Sweet fragrance, increasing nourishment".
- Urvarukamiva Bandhanan Mrityormukshiya Mamritat: "Like the cucumber from its stem, may we be released from death, not from immortality".

The mantra is traditionally chanted 108 times, often using a Rudraksha mala (rosary) and is one of the most sacred in Vedic tradition.

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
    { id: 'line1', roman: 'line1-roman', start: 0, end: 6 },
    { id: 'line2', roman: 'line2-roman', start: 6, end: 14 }
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
