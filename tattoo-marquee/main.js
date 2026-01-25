const track = document.querySelector(".marquee-track");
const images = Array.from(track.children);

// 複製一整份，達成無縫跑馬燈
images.forEach(img => {
  track.appendChild(img.cloneNode(true));
});

// 依圖片數量自動調整速度（圖片越多跑越慢）
const speed = images.length * 7; // 秒
track.style.animationDuration = `${speed}s`;
