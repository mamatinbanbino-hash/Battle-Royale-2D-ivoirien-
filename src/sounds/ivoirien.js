const IVOIRIEN_SOUNDS = {
  gbich: new Audio('/sounds/gbich.mp3'), // "Gbich !"
  naPete: new Audio('/sounds/na-pete.mp3'), // "Na pété !"
  victoire: new Audio('/sounds/coupe-decale.mp3'), // Coupé-décalé
  attieke: new Audio('/sounds/attieke.mp3')
};

export const playSound = (type) => {
  IVOIRIEN_SOUNDS[type]?.play();
};

// Particules explosion alloco
export function explosionAlloco(x, y) {
  // 50 particules beignets volants 🍟
  for (let i = 0; i < 50; i++) {
    particles.push({
      x, y,
      vx: (Math.random()-0.5)*20,
      vy: (Math.random()-0.5)*20,
      life: 60,
      emoji: '🍟'
    });
  }
  playSound('naPete');
}
