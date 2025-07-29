---
Title: "Gananam Tva Ganapatim – Yajurveda Chant"
Date: 2025-07-28
Description: Learn the sacred Ganapati mantra from the Yajurveda with audio and guidance.
---

<div id="chant-start"></div>
## 🕉️ Chant Text

<div id="script-toggle" style="margin-bottom: 1em;">
  <button id="btn-deva" onclick="showDeva()">Devanagari</button>
  <button id="btn-iast" onclick="showIAST()">IAST</button>
</div>

<div id="devanagari" style="display: block;">
<p id="line1">ओम् श्री गुरुभ्यो नमः हरिः ओम्</p>
<p>  </p>
<p id="line2">गणानां त्वा गणपतिग्ं हवामहे कविं कवीनामुपमश्रवस्तमम् ।</p>
<p id="line3">ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् ॥</p>
<p id="line4">महागणपतये नमः ।</p>
<p>  </p>
<p id="line5">प्रणो देवी सरस्वती वाजेभिर्वाजिनीवती ।</p>
<p id="line6">धीनाम वित्रियवतु ।</p>
<p id="line7">आ नो दिवो बृहतः पर्वतादा सरस्वती यजता गन्तु यज्ञम् ।</p>
<p id="line8">हवं देवि जुजुषाणा घॄताची शग्मां नो वाचमुशती श्रुणोतु।</p>
<p id="line9">वाग्देव्यै नमः ॥</p>
</div>


<div id="iast" style="display: none;">
<p id="line1-roman">om śrī gurubhyo namaḥ hariḥ om</p>
<p>  </p>
<p id="line2-roman">gaṇānāṃ tvā gaṇapatigṃ havāmahe kaviM kavīnāmupamaśravastamam |</p>
<p id="line3-roman">jyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ā naḥ śṛṇvannūtibhiḥ sīda sādanam ||</p>
<p id="line4-roman">mahāgaṇapataye namaḥ |</p>
<p>  </p>
<p id="line5-roman">praṇo devī sarasvatī vājebhirvājinīvatī |</p>
<p id="line6-roman">dhīnāma vitriyavatu |</p>
<p id="line7-roman">ā no divo bṛhataḥ parvatādā sarasvatī yajatā gantu yajñam |</p>
<p id="line8-roman">havaṃ devi jujuṣāṇā ghṝtācī śagmāṃ no vācamuśatī śruṇotu|</p>
<p id="line9-roman">vāgdevyai namaḥ ||</p>
</div>
---

## 🔊 Listen to the Chant

<audio controls>
  <source src="/learn-hindu-chanting/assets/audio/gananam-tva.mp3" type="audio/mpeg">
</audio>
Skip to 2:26 for the entire shloka once without repeats.
<div style="margin-bottom: 1em;">
  <label>
    <input type="checkbox" id="autoscroll-toggle" checked>
    Auto-scroll with chant
  </label>
</div>

🙏 Feel free to repeat along, slow the chant, and refer to the transliteration above to master pronunciation.

---

## 🪔 Significance

This is one of the most revered mantras to **Lord Ganesha** from the **Yajurveda (Taittiriya Aranyaka 10.11.1)**. It is traditionally chanted at the beginning of Vedic rituals to invoke Ganesha, the remover of obstacles and the lord of beginnings.

- **Gaṇapati** is hailed as the chief of the ganas (divine beings).
- He is addressed as a **wise sage among sages**, **the most famous**, and **the eldest ruler of prayers**.
- The mantra invites him to **dwell in the sacred seat of worship** and bless the chanter with guidance and protection.

This chant is particularly suited for **initiating study, rituals, or spiritual learning**.

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
const shouldScroll = () => document.getElementById('autoscroll-toggle')?.checked;

// Scroll to chant on play — but only if toggle is on
audio.addEventListener('play', () => {
  if (shouldScroll()) {
    document.getElementById('chant-start')?.scrollIntoView({ behavior: 'smooth' });
  }
});

audio.ontimeupdate = () => {
  const t = audio.currentTime;

  const lines = [
    { id: 'line1', roman: 'line1-roman', start: 0, end: 12 },
    { id: 'line2', roman: 'line2-roman', start: 12, end: 36 },
    { id: 'line3', roman: 'line3-roman', start: 36, end: 61 },
    { id: 'line4', roman: 'line4-roman', start: 61, end: 72 },
    { id: 'line5', roman: 'line5-roman', start: 72, end: 89 },
    { id: 'line6', roman: 'line6-roman', start: 89, end: 98 },
    { id: 'line7', roman: 'line7-roman', start: 98, end: 118 },
    { id: 'line8', roman: 'line8-roman', start: 118, end: 138 },
    { id: 'line9', roman: 'line9-roman', start: 138, end: 146 }
  ];

  lines.forEach(({ id, roman, start, end }) => {
    const visibleId = devanagariVisible() ? id : roman;
    const el = document.getElementById(visibleId);
    if (!el) return;

    if (t >= start && t < end) {
      el.style.backgroundColor = 'yellow';
      if (shouldScroll()) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      el.style.backgroundColor = '';
    }
  });
};
</script>


