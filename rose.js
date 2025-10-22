/*--------------------
Overlay（ページ読み込み版）
--------------------*/
const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');
const overlayFrame = document.getElementById('overlay-frame');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    const pageUrl = card.dataset.page;
    if (!pageUrl) return;
    overlayFrame.src = pageUrl;
    overlay.classList.remove('hidden');
  });
});

// 背景クリックで閉じる
overlay.addEventListener('click', (e) => {
  // iframeやその内部クリックは無視
  const isInsideFrame =
    e.target === overlayFrame ||
    overlayFrame.contains(e.target);
    
  if (!isInsideFrame) {
    overlay.classList.add('hidden');
    overlayFrame.src = '';
  }
});

// iframeからのメッセージで閉じる
window.addEventListener('message', (event) => {
  if (event.data === 'closeOverlay') {
    overlay.classList.add('hidden');
    overlayFrame.src = '';
  }
});



/*--------------------
名前の帯のサイズを動画に合わせる
--------------------*/
function adjustNameWidth() {
  const iframe = document.querySelector('.member-youtube iframe');
  const name = document.querySelector('.member-name');
  if (iframe && name) {
    const videoWidth = iframe.getBoundingClientRect().width;
    name.style.width = videoWidth + 'px';
  }
}

// 読み込み時
window.addEventListener('load', adjustNameWidth);
// リサイズ時
window.addEventListener('resize', adjustNameWidth);


const closeBtn = document.querySelector('.close-overlay');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlayFrame.src = '';
  });
}