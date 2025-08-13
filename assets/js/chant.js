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

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  if (!audio || typeof lines === 'undefined') return;

  const devanagariVisible = () =>
    document.getElementById('devanagari').style.display !== 'none';

  audio.ontimeupdate = () => {
    const t = audio.currentTime;
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
});
