---
title: "Medhā Sūktam"
date: 2025-07-31
description: The Medhā Sūkta with Devanāgarī / IAST toggle for study and chanting practice.
---

<!--more-->

## 🕉️ Chant Text

<div id="script-toggle" style="margin-bottom:1em">
  <button id="btn-deva" onclick="showDeva()">Devanagari</button>
  <button id="btn-iast" onclick="showIAST()">IAST</button>
</div>

<!-- Devanagari --------------------------------------------------------->
<div id="devanagari" style="display:block">

<p id="line1">ॐ मेधादेवी जुषमाणा न आगाद्विश्वाची भद्रा सुमनस्यमाना।</p>

<p id="line2">त्वया जुष्टा नुदमाना दुरुक्तान् बृहत् वदेम विदथे सुवीराः।</p>

<p id="line3">त्वया जुष्टः ऋषिर्भवति देवि त्वया ब्रह्मा अगतश्रीरुत त्वया।</p>

<p id="line4">त्वया जुष्टश्चित्रं विन्दते वसु सानो जुषस्व द्रविणो न मेधे।</p>

<p id="line5">मेधां म इन्द्रो ददातु मेधां देवी सरस्वती।</p>

<p id="line6">मेधां मे अश्विनावुभावाधत्तां पुष्करस्रजा।</p>

<p id="line7">अप्सरासु च या मेधा गन्धर्वेषु च यन्मनः।</p>

<p id="line8">दैवी मेधा सरस्वती सा मां मेधा सुरभिर्जुषतागस् स्वाहा।</p>

<p id="line9">आ मां मेधा सुरभिर्विश्वरूपा हिरण्यवर्णा जगती जगम्या।</p>

<p id="line10">ऊर्जस्वती पयसा पिन्वमाना सा मां मेधा सुप्रतीका जुषन्ताम्।</p>

<p id="line11">मयि मेधां मयि प्रजां मय्यग्निस्तेजो दधातु।<br>
मयि मेधां मयि प्रजां मयीन्द्र इन्द्रियं दधातु।<br>
मयि मेधां मयि प्रजां मयि सूर्यः भ्राजो दधातु।</p>

</div>

<!-- IAST --------------------------------------------------------------->
<div id="iast" style="display:none">

<p id="line1-roman">om medhādevī juṣamāṇā na āgādviśvācī bhadrā sumanasyamānā |</p>

<p id="line2-roman">tvayā juṣṭā nudamānā duruktān bṛhad vadema vidathe suvirāḥ ||</p>

<p id="line3-roman">tvayā juṣṭa ṛṣir bhavati devi tvayā brahmā agataśrīr uta tvayā |</p>

<p id="line4-roman">tvayā juṣṭaś citraṃ vindate vasu sā no juṣasva draviṇo na medhe ||</p>

<p id="line5-roman">medhāṃ ma indro dadātu medhāṃ devī sarasvatī |</p>

<p id="line6-roman">medhāṃ me aśvināv ubhāv ādhattāṃ puṣkarasrajā ||</p>

<p id="line7-roman">apsarāsu ca yā medhā gandharveṣu ca yan manaḥ |</p>

<p id="line8-roman">daivī medhā sarasvatī sā māṃ medhā surabhir juṣatāgas svāhā ||</p>

<p id="line9-roman">ā māṃ medhā surabhir viśvarūpā hiraṇyavarṇā jagatī jagamyā |</p>

<p id="line10-roman">ūrjasvatī payasā pinvāmānā sā māṃ medhā supratīkā juṣantām|| </p>

<p id="line11-roman">mayi medhāṃ mayi prajāṃ mayy agnis tejo dadhātu |<br>
mayi medhāṃ mayi prajāṃ mayīndra indriyaṃ dadhātu |<br>
mayi medhāṃ mayi prajāṃ mayi sūryaḥ bhrājo dadhātu ||</p>

</div>

---

## 🔊 Listen to the Chant

<audio controls>
  <source src="/learn-hindu-chanting/assets/audio/medha-suktam.mp3" type="audio/mpeg">
</audio>

---

## 🪔 Significance  

**Medhā Sūktam** is a sacred hymn from the *Taittirīya Āraṇyaka* of the *Kṛṣṇa Yajur Veda*, invoking **Goddess Medhā**, the personification of divine intellect, clarity, and learning.  
It prays for the growth of understanding, memory, eloquence, and inner brilliance that sustains knowledge and insight.

### Key ideas distilled from the traditional commentary  

| Verse(s) | Core theme | Essence |
|-----------|-------------|---------|
| 1 | **Invocation of Medhā** | The goddess of wisdom arrives, bringing auspicious thought and noble speech. |
| 2 | **Blessings of insight** | Through her grace, one gains knowledge, inspiration, and abundant virtues. |
| 3 | **Grant of divine wisdom** | Invocations to Indra, Sarasvatī, and the Aśvins to bestow Medhā upon the devotee. |
| 4 | **Union of divine mind** | The celestial Medhā and Sarasvatī enter the mind, making it radiant and fragrant. |
| 5 | **Golden, nourishing Medhā** | She is described as resplendent and life-giving, nourishing intellect and vigor. |
| 6 | **Integration of divine energies** | Agni, Indra, and Sūrya establish intelligence, strength, and brilliance within. |
| 7 | **Peace invocation** | The hymn closes with a threefold “Śāntiḥ,” invoking calm in body, mind, and cosmos. |

**In one line:**  
> *Medhā Sūktam awakens divine intelligence — the serene, shining awareness that nourishes wisdom and insight.*

---

<script>
function showDeva(){
  document.getElementById('devanagari').style.display='block';
  document.getElementById('iast').style.display='none';
  document.getElementById('btn-deva').style.fontWeight='bold';
  document.getElementById('btn-iast').style.fontWeight='normal';
}
function showIAST(){
  document.getElementById('devanagari').style.display='none';
  document.getElementById('iast').style.display='block';
  document.getElementById('btn-deva').style.fontWeight='normal';
  document.getElementById('btn-iast').style.fontWeight='bold';
}
</script>

<script>
const audio = document.querySelector('audio');
const devanagariVisible = () => document.getElementById('devanagari').style.display !== 'none';

audio.ontimeupdate = () => {
  const t = audio.currentTime;

  const lines = [
    { id: 'line1', roman: 'line1-roman', start: 0, end: 23 },
    { id: 'line2', roman: 'line2-roman', start: 23, end: 46 },
    { id: 'line3', roman: 'line3-roman', start: 46, end: 67 },
    { id: 'line4', roman: 'line4-roman', start: 67, end: 86 },
    { id: 'line5', roman: 'line5-roman', start: 86, end: 103 },
    { id: 'line6', roman: 'line6-roman', start: 103, end: 121 },
    { id: 'line7', roman: 'line7-roman', start: 121, end: 137 },
    { id: 'line8', roman: 'line8-roman', start: 137, end: 161 },
    { id: 'line9', roman: 'line9-roman', start: 161, end: 183 },
    { id: 'line10', roman: 'line10-roman', start: 183, end: 206 },
    { id: 'line11', roman: 'line11-roman', start: 206, end: 251 }
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
