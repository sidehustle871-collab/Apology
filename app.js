/**
 * A THOUSAND APOLOGIES — APPLICATION LOGIC
 * High-performance, vanilla JS with ambient particle canvas, Web Audio synth chimes,
 * custom confetti physics, and reactive state management.
 */

// ==========================================
// 1. DATASET: 60+ CURATED HEARTFELT APOLOGIES
// ==========================================
const BASE_APOLOGIES = [
  // Sincere & Deep
  {
    id: 1,
    lead: "I failed to listen when you needed me most.",
    text: "I was too busy defending myself instead of holding space for your feelings. You deserved empathy, not argument.",
    category: "sincere",
    author: "With deep regret"
  },
  {
    id: 2,
    lead: "My thoughtless words hurt you.",
    text: "Careless words leave real wounds. I wish I could take them back, but since I cannot, I promise to guard my tongue with utmost care.",
    category: "sincere",
    author: "Humbly sorry"
  },
  {
    id: 3,
    lead: "I took your patience for granted.",
    text: "Your kindness is not an endless cushion for my shortcomings. I see your grace now clearer than ever, and I treasure it.",
    category: "sincere",
    author: "Forever grateful"
  },
  {
    id: 4,
    lead: "I broke a promise I should have fought for.",
    text: "Trust takes months to build and seconds to break. I am ready to put in the time and care needed to earn back your confidence.",
    category: "sincere",
    author: "From my soul"
  },
  {
    id: 5,
    lead: "I let my stress spill onto you.",
    text: "You are my safe harbor, not the target for my frustrations. You deserved gentleness, and I gave you friction. I am so sorry.",
    category: "sincere",
    author: "Always learning"
  },
  {
    id: 6,
    lead: "I was emotionally distant.",
    text: "Shutting down when things got tough was unfair to you. You deserve someone who shows up, communicates, and stays present.",
    category: "sincere",
    author: "With an open heart"
  },
  {
    id: 7,
    lead: "I minimized your valid feelings.",
    text: "Nothing you feel is trivial. When you share your heart, it should be honored. I am sorry for ever making you feel unheard.",
    category: "sincere",
    author: "Genuinely apologetic"
  },
  {
    id: 8,
    lead: "I allowed pride to stand between us.",
    text: "Being 'right' is utterly meaningless if it comes at the cost of your peace and our bond. Pride was foolish; you are everything.",
    category: "sincere",
    author: "Bowing my head"
  },
  {
    id: 9,
    lead: "I didn't notice you were hurting.",
    text: "I was so wrapped in my own bubble that I missed your quiet sighs. I promise to pay closer attention to your quietest moments.",
    category: "sincere",
    author: "Watching over you"
  },
  {
    id: 10,
    lead: "I forgot what truly matters.",
    text: "In the chaos of daily rush, I neglected the care and tenderness you deserve every single sunrise. I am deeply sorry.",
    category: "sincere",
    author: "With love"
  },
  {
    id: 11,
    lead: "I didn't give you the respect you deserve.",
    text: "Every conversation with you should reflect the immense value you bring into my life. I am deeply remorseful for falling short.",
    category: "sincere",
    author: "From the bottom of my heart"
  },
  {
    id: 12,
    lead: "I reacted out of fear instead of love.",
    text: "When insecurity gripped me, I lashed out instead of leaning into you. You have never been the adversary; you are my greatest blessing.",
    category: "sincere",
    author: "Forever mindful"
  },
  {
    id: 13,
    lead: "I broke the rhythm of our joy.",
    text: "We had so many smiles, and my blunder brought clouds into your sky. I will do whatever it takes to bring the sunlight back.",
    category: "sincere",
    author: "Wishing for your smile"
  },
  {
    id: 14,
    lead: "I didn't thank you enough.",
    text: "I am sorry for all the times I received your warmth without speaking out loud how blessed I am to have you in my corner.",
    category: "sincere",
    author: "With profound appreciation"
  },
  {
    id: 15,
    lead: "I made an assumption instead of asking.",
    text: "Curiosity and communication heal; assumptions divide. I am sorry for assuming instead of simply talking with you.",
    category: "sincere",
    author: "Reflecting deeply"
  },

  // Tender & Cute
  {
    id: 16,
    lead: "I was being a stubborn little mule.",
    text: "Even donkeys would have agreed I was being obstinate. I surrender completely, white flag raised, hoping for a tiny smile.",
    category: "cute",
    author: "Your stubborn human"
  },
  {
    id: 17,
    lead: "I promise I left my brain in sleep mode.",
    text: "If I could send my brain back for a factory reset, I would. In the meantime, accept my sincere, slightly goofy apology?",
    category: "cute",
    author: "Needs 100% more brain cells"
  },
  {
    id: 18,
    lead: "I am officially revoking my own talking privileges.",
    text: "Until further notice, I shall only speak in compliments, apologies, and queries about what snacks you want.",
    category: "cute",
    author: "On probation"
  },
  {
    id: 19,
    lead: "Sorry for making a mountain out of a pebble.",
    text: "I brought dramatic movie-score energy to a five-second moment. I promise to keep the drama strictly for bad TV shows.",
    category: "cute",
    author: "Dramatic offender"
  },
  {
    id: 20,
    lead: "Will negotiate peace terms for chocolate.",
    text: "I come bearing baked goods, unconditional cuddles, and an endless supply of 'you were 100% right'.",
    category: "cute",
    author: "Peacemaker in training"
  },
  {
    id: 21,
    lead: "Sending 1,000 emergency comfort hugs.",
    text: "Warning: These hugs have zero expiration dates and come with complimentary hot cocoa or your favorite drink.",
    category: "cute",
    author: "Warm hugs dispatch"
  },
  {
    id: 22,
    lead: "I'm sorry for being hangry.",
    text: "Low blood sugar is never an excuse to be snappy, but my stomach made a fool of my character. Forgive my growling tummy?",
    category: "cute",
    author: "Fed and deeply remorseful"
  },
  {
    id: 23,
    lead: "My heart is currently in time-out.",
    text: "It is sitting in the corner wearing a party hat made of regret, waiting patiently until you give the green light.",
    category: "cute",
    author: "In the remorse corner"
  },
  {
    id: 24,
    lead: "You look too gorgeous when you're mad, but please stop.",
    text: "It's an unfair superpower! But seriously, I hate being the reason your brows furrow. Please accept my heartfelt apologies.",
    category: "cute",
    author: "Adoringly sorry"
  },
  {
    id: 25,
    lead: "I'm sorry for eating the last bite.",
    text: "It was a crime of impulse and sweet temptation. I vow to buy you a whole cake to repay the stolen crumb.",
    category: "cute",
    author: "Guilty foodie"
  },
  {
    id: 26,
    lead: "If apologies were puppy eyes, mine would be giant.",
    text: "Picture the fluffiest, saddest golden retriever puppy tilting its head. That is me right now, begging for your kindness.",
    category: "cute",
    author: "Sad puppy mode"
  },
  {
    id: 27,
    lead: "I am ready to binge whatever show you want.",
    text: "Even that reality TV show I pretend to despise. I will watch 14 episodes straight without looking at my phone once.",
    category: "cute",
    author: "Ready with the remote"
  },
  {
    id: 28,
    lead: "My apology comes with lifetime foot massages.",
    text: "Subject to redemption at any hour of the day or night. Terms: non-transferable, only for you.",
    category: "cute",
    author: "Masseur on standby"
  },

  // Promises & Actions
  {
    id: 29,
    lead: "I commit to active listening.",
    text: "I will not interrupt. I will not formulate my rebuttal while you speak. I will simply absorb, understand, and validate.",
    category: "promises",
    author: "Action > Words"
  },
  {
    id: 30,
    lead: "I promise to pause before reacting.",
    text: "When emotions flare, I will take five deep breaths and remind myself that protecting our peace is always the priority.",
    category: "promises",
    author: "Dedicated to calm"
  },
  {
    id: 31,
    lead: "I will communicate my feelings cleanly.",
    text: "No more passive silence, no more expecting you to mind-read. I will speak with honesty, kindness, and vulnerability.",
    category: "promises",
    author: "Open book pledge"
  },
  {
    id: 32,
    lead: "I will own my mistakes immediately.",
    text: "The moment I see that I've caused discomfort or friction, I will apologize right away rather than letting hours drift by.",
    category: "promises",
    author: "Swift accountability"
  },
  {
    id: 33,
    lead: "I will respect your personal space and boundaries.",
    text: "When you need a moment to breathe and decompress, I will grant it gladly without pressuring you or feeling slighted.",
    category: "promises",
    author: "Patient ally"
  },
  {
    id: 34,
    lead: "I will show up consistently, not just in crises.",
    text: "True dedication is found in the everyday small gestures: checking in, helping out, and cherishing the ordinary moments.",
    category: "promises",
    author: "Everyday commitment"
  },
  {
    id: 35,
    lead: "I will check in before making unilateral decisions.",
    text: "Partnership means shared footsteps. I will always make sure we are on the same page before taking leaps.",
    category: "promises",
    author: "Side-by-side"
  },
  {
    id: 36,
    lead: "I promise to learn your love language even deeper.",
    text: "I won't just love you how it's easiest for me; I will love you in the exact ways that make your heart feel safe and cherished.",
    category: "promises",
    author: "Attentive student"
  },
  {
    id: 37,
    lead: "I will never dismiss what hurts you.",
    text: "If it matters to your peace of mind, it automatically matters to mine. Period.",
    category: "promises",
    author: "Unconditional ally"
  },
  {
    id: 38,
    lead: "I will practice genuine patience.",
    text: "Even on long days, even through misunderstandings, I promise to meet you with gentleness rather than hasty irritation.",
    category: "promises",
    author: "Steadfast patience"
  },
  {
    id: 39,
    lead: "I will keep our secrets and vulnerabilities sacred.",
    text: "The fragile parts of you that you trust me with will always remain safe in my care.",
    category: "promises",
    author: "Sacred trust"
  },
  {
    id: 40,
    lead: "I will remind you how precious you are daily.",
    text: "Never again will a week go by where you have to wonder if you are appreciated, celebrated, and deeply loved.",
    category: "promises",
    author: "Daily devotion"
  },

  // Olive Branches
  {
    id: 41,
    lead: "A fresh cup of your favorite drink is waiting.",
    text: "Made just the way you like it, with extra sweetness, delivered alongside no expectations other than your peace.",
    category: "olive",
    author: "Peace offering"
  },
  {
    id: 42,
    lead: "I made a playlist to comfort your heart.",
    text: "Full of gentle acoustic melodies and ambient warmth. Listen whenever the quiet feels too heavy.",
    category: "olive",
    author: "Soothing notes"
  },
  {
    id: 43,
    lead: "Let me take care of all chores today.",
    text: "Dishes, errands, laundry, dinner — consider them handled. You kick your feet up and rest.",
    category: "olive",
    author: "At your service"
  },
  {
    id: 44,
    lead: "An unconditional, no-talk-needed stroll.",
    text: "If you want to walk in silence under the evening stars, I'll be one step beside you, just keeping you company.",
    category: "olive",
    author: "Silent companion"
  },
  {
    id: 45,
    lead: "Your comfort food delivery is on standby.",
    text: "Name the craving, and it shall appear on our doorstep within forty minutes. No debates, my treat.",
    category: "olive",
    author: "Doorbell herald"
  },
  {
    id: 46,
    lead: "A handwritten card filled with gratitude.",
    text: "Listing 50 specific moments where your presence turned a terrible day into something magical.",
    category: "olive",
    author: "Ink and paper"
  },
  {
    id: 47,
    lead: "Clean slate, zero grudges, pure understanding.",
    text: "I hold nothing against you, only love for you. Whenever you are ready, our slate is completely clean.",
    category: "olive",
    author: "Fresh start"
  },
  {
    id: 48,
    lead: "No explanations required from you.",
    text: "You don't need to justify why you were sad or upset. I'm here to support, listen, and make things better.",
    category: "olive",
    author: "Gentle harbor"
  },
  {
    id: 49,
    lead: "A coupon for one full day of zero arguments.",
    text: "Everything you want to eat, watch, or do is the rule of the land.",
    category: "olive",
    author: "Peace treaty #1"
  },
  {
    id: 50,
    lead: "Warm blankets and your favorite cozy spot.",
    text: "Pre-warmed, fluffed pillows, and a peaceful ambiance. You deserve sanctuary.",
    category: "olive",
    author: "Comfort curator"
  },
  {
    id: 51,
    lead: "A quiet promise that things will be lighter.",
    text: "I will carry the heavy lifting so you don't feel weighed down. Let's breathe together.",
    category: "olive",
    author: "Soft exhale"
  },
  {
    id: 52,
    lead: "A warm slice of freshly baked goodness.",
    text: "The aroma of cinnamon and sugar to sweeten up whatever bitterness I caused.",
    category: "olive",
    author: "Sweet peace"
  },
  {
    id: 53,
    lead: "I'll do the uncomfortable thing so you don't have to.",
    text: "Any phone call you've been dreading or task you've put off, hand it over to me.",
    category: "olive",
    author: "Your shield"
  },
  {
    id: 54,
    lead: "A gentle forehead kiss whenever you're ready.",
    text: "No demands, no rush. Just the tenderest gesture to say: you are safe with me.",
    category: "olive",
    author: "Always gentle"
  },
  {
    id: 55,
    lead: "One million apologies wouldn't be enough, so I'll start with this one.",
    text: "I love you, I respect you, and I am unconditionally committed to making you smile again.",
    category: "olive",
    author: "Yours truly"
  }
];

// 10 Commitments
const COMMITMENTS = [
  { icon: "👂", title: "Listen First", desc: "Hear your thoughts completely without formulating counter-arguments or cutting you off." },
  { icon: "🛑", title: "Pause Before Reacting", desc: "Count to 5 when emotions run hot to respond with kindness rather than impulse." },
  { icon: "🛡️", title: "Zero Defensiveness", desc: "Acknowledge mistakes without shifting blame, making excuses, or minimizing impact." },
  { icon: "💬", title: "Transparent Feelings", desc: "Share concerns openly instead of bottling them up into quiet resentment." },
  { icon: "🕊️", title: "Respect Space", desc: "Honor your need for quiet time without taking it personally or demanding instant closure." },
  { icon: "🌟", title: "Celebrate You", desc: "Compliment your hard work, humor, and brilliance on ordinary days, not just special ones." },
  { icon: "🤝", title: "Team Mindset", desc: "Remember it's never me against you — it's always the two of us against the problem." },
  { icon: "☕", title: "Quiet Gestures", desc: "Show love in small, tangible ways: making coffee, carrying bags, checking in unexpectedly." },
  { icon: "🌱", title: "Continuous Growth", desc: "Actively work on my personal shortcomings so past mistakes don't recur." },
  { icon: "❤️", title: "Unconditional Care", desc: "Stand by you through thick and thin, prioritizing your emotional peace." }
];

// Reaction stages for the Forgiveness Slider
const METER_REACTIONS = [
  {
    range: [0, 15],
    emoji: "🔥",
    heading: "You have every right to be furious.",
    desc: "I messed up, and your anger is 100% valid. Take all the space you need; I will not pressure you for a second."
  },
  {
    range: [16, 35],
    emoji: "🌧️",
    heading: "I know the hurt is still fresh.",
    desc: "Disappointment stings. I'm sitting with what happened, reflecting on my mistakes, and ready when you are."
  },
  {
    range: [36, 60],
    emoji: "💭",
    heading: "I understand you are processing this.",
    desc: "Take all the space and time you need. I'm here, I'm patient, and I'm listening whenever you want to talk."
  },
  {
    range: [61, 85],
    emoji: "🌤️",
    heading: "The storm is slowly clearing.",
    desc: "I can feel the warmth peeking through. I don't take your softening for granted; I'll cherish every millimeter of peace."
  },
  {
    range: [86, 100],
    emoji: "💖",
    heading: "You are the most generous soul.",
    desc: "Your forgiveness is a gift I will honor with genuine care, laughter, and consistent action every day."
  }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let apologiesList = [];
let savedApologyIds = new Set();
let currentFilter = 'all';
let searchQuery = '';
let currentOracleIndex = 0;
let recipientName = "Someone Truly Invaluable";
let activeTheme = 'theme-midnight';
let isSoundOn = false;

function loadStoredState() {
  try {
    const savedIds = localStorage.getItem('forgive_saved_ids');
    if (savedIds) {
      savedApologyIds = new Set(JSON.parse(savedIds));
    }
    const customApologies = localStorage.getItem('forgive_custom_items');
    if (customApologies) {
      const parsed = JSON.parse(customApologies);
      apologiesList = [...parsed, ...BASE_APOLOGIES];
    } else {
      apologiesList = [...BASE_APOLOGIES];
    }
    const storedName = localStorage.getItem('forgive_recipient_name');
    if (storedName) {
      recipientName = storedName;
    }
    const storedTheme = localStorage.getItem('forgive_theme');
    if (storedTheme) {
      activeTheme = storedTheme;
    }
  } catch (e) {
    console.error("Storage error:", e);
    apologiesList = [...BASE_APOLOGIES];
  }
}

function persistSavedIds() {
  try {
    localStorage.setItem('forgive_saved_ids', JSON.stringify([...savedApologyIds]));
  } catch (e) {
    console.error(e);
  }
}

function persistCustomApologies(newItem) {
  try {
    const existing = localStorage.getItem('forgive_custom_items');
    const arr = existing ? JSON.parse(existing) : [];
    arr.unshift(newItem);
    localStorage.setItem('forgive_custom_items', JSON.stringify(arr));
  } catch (e) {
    console.error(e);
  }
}

// ==========================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, icon = "💌") {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3200);
}

// ==========================================
// 4. WEB AUDIO AMBIENT SOUND GENERATOR
// ==========================================
let audioCtx = null;
let ambientTimer = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Play a tranquil kalimba/harp pentatonic chime
function playChime(freq = 528, duration = 2.5, gainVal = 0.08) {
  if (!isSoundOn) return;
  try {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Exponential gentle decay
    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio chime prevented:", e);
  }
}

// Harmonious ambient chords (Pentatonic healing frequencies)
const PENTATONIC_FREQS = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

function startAmbientSound() {
  if (ambientTimer) clearInterval(ambientTimer);
  ambientTimer = setInterval(() => {
    if (isSoundOn) {
      const f1 = PENTATONIC_FREQS[Math.floor(Math.random() * PENTATONIC_FREQS.length)];
      const f2 = PENTATONIC_FREQS[Math.floor(Math.random() * PENTATONIC_FREQS.length)];
      playChime(f1, 3.5, 0.04);
      setTimeout(() => playChime(f2, 3.2, 0.03), 600);
    }
  }, 4200);
}

function stopAmbientSound() {
  if (ambientTimer) {
    clearInterval(ambientTimer);
    ambientTimer = null;
  }
}

function toggleSound() {
  isSoundOn = !isSoundOn;
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');

  if (isSoundOn) {
    initAudioContext();
    startAmbientSound();
    playChime(528, 2.5, 0.1);
    if (soundIcon) soundIcon.textContent = "🔔";
    if (soundLabel) soundLabel.textContent = "Chimes On";
    showToast("Ambient relaxing chimes turned on 🕊️", "🎶");
  } else {
    stopAmbientSound();
    if (soundIcon) soundIcon.textContent = "🔇";
    if (soundLabel) soundLabel.textContent = "Sound Off";
    showToast("Sound muted", "🔇");
  }
}

// ==========================================
// 5. AMBIENT PARTICLE CANVAS
// ==========================================
const canvas = document.getElementById('ambient-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let mousePos = { x: -100, y: -100 };

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
    this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
    this.size = Math.random() * 2.5 + 1;
    this.speedX = (Math.random() - 0.5) * 0.45;
    this.speedY = -Math.random() * 0.5 - 0.2;
    this.opacity = Math.random() * 0.55 + 0.15;
    this.isHeart = Math.random() > 0.82;
    this.pulse = Math.random() * Math.PI;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.pulse += 0.03;

    // React slightly to mouse
    const dx = mousePos.x - this.x;
    const dy = mousePos.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      this.x -= (dx / dist) * 0.8;
      this.y -= (dy / dist) * 0.8;
    }

    if (this.y < -20 || this.x < -20 || (canvas && this.x > canvas.width + 20)) {
      this.reset();
      this.y = (canvas ? canvas.height : window.innerHeight) + 10;
    }
  }

  draw() {
    if (!ctx) return;
    const currentOpacity = this.opacity * (0.8 + 0.2 * Math.sin(this.pulse));
    ctx.save();
    ctx.globalAlpha = currentOpacity;

    if (this.isHeart) {
      ctx.fillStyle = "#f43f5e";
      ctx.font = `${Math.floor(this.size * 5 + 6)}px serif`;
      ctx.fillText("♥", this.x, this.y);
    } else {
      ctx.fillStyle = "#c084fc";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 18), 70);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
  }
  requestAnimationFrame(animateParticles);
}

// ==========================================
// 6. CUSTOM CONFETTI CANNON
// ==========================================
function launchConfetti() {
  playChime(659.25, 2.0, 0.12);
  const confettiCanvas = document.createElement('canvas');
  confettiCanvas.style.position = 'fixed';
  confettiCanvas.style.top = '0';
  confettiCanvas.style.left = '0';
  confettiCanvas.style.width = '100vw';
  confettiCanvas.style.height = '100vh';
  confettiCanvas.style.pointerEvents = 'none';
  confettiCanvas.style.zIndex = '3000';
  document.body.appendChild(confettiCanvas);

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const cCtx = confettiCanvas.getContext('2d');

  const confettiPieces = [];
  const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#38bdf8', '#fbbf24', '#10b981', '#fff'];

  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.6,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 18 - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'heart'
    });
  }

  let startTime = performance.now();
  function renderConfetti(time) {
    cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let allDead = true;

    for (let p of confettiPieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.985; // friction
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      if (p.opacity > 0) {
        allDead = false;
        cCtx.save();
        cCtx.globalAlpha = Math.max(0, p.opacity);
        cCtx.translate(p.x, p.y);
        cCtx.rotate((p.rotation * Math.PI) / 180);
        cCtx.fillStyle = p.color;

        if (p.shape === 'heart') {
          cCtx.font = `${p.size * 1.5}px serif`;
          cCtx.fillText("♥", -p.size / 2, p.size / 2);
        } else {
          cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }
        cCtx.restore();
      }
    }

    if (!allDead && performance.now() - startTime < 4000) {
      requestAnimationFrame(renderConfetti);
    } else {
      if (confettiCanvas.parentNode) {
        confettiCanvas.parentNode.removeChild(confettiCanvas);
      }
    }
  }

  requestAnimationFrame(renderConfetti);
}

// ==========================================
// 7. APOLOGY ORACLE (RANDOM DRAW)
// ==========================================
function updateOracleDisplay(apology, index, total) {
  const card = document.getElementById('oracle-card');
  const textEl = document.getElementById('oracle-text');
  const catEl = document.getElementById('oracle-category');
  const indexEl = document.getElementById('oracle-index');
  const heartIcon = document.getElementById('oracle-heart-icon');
  const heartText = document.getElementById('oracle-heart-text');

  if (!card || !textEl) return;

  // Subtle bounce animation
  card.style.transform = 'scale(0.97)';
  textEl.style.opacity = '0';

  setTimeout(() => {
    textEl.textContent = `“${apology.lead} ${apology.text}”`;
    if (catEl) {
      const catMap = {
        sincere: "💔 Deep & Sincere",
        cute: "🥺 Tender & Cute",
        promises: "🤞 Promises & Actions",
        olive: "🕊️ Olive Branches"
      };
      catEl.textContent = catMap[apology.category] || apology.category;
    }
    if (indexEl) {
      indexEl.textContent = `Apology #${index + 1} of ${total}`;
    }

    const isFav = savedApologyIds.has(apology.id);
    if (heartIcon) heartIcon.textContent = isFav ? "❤️" : "🤍";
    if (heartText) heartText.textContent = isFav ? "Favorited" : "Favorite";

    card.style.transform = 'scale(1)';
    textEl.style.opacity = '1';
  }, 180);
}

function drawRandomApology() {
  if (apologiesList.length === 0) return;
  currentOracleIndex = Math.floor(Math.random() * apologiesList.length);
  updateOracleDisplay(apologiesList[currentOracleIndex], currentOracleIndex, apologiesList.length);
  playChime(440, 1.2, 0.05);
}

// ==========================================
// 8. APOLOGY WALL & FILTERING
// ==========================================
function updateCategoryCounts() {
  const counts = { all: apologiesList.length, sincere: 0, cute: 0, promises: 0, olive: 0, saved: savedApologyIds.size };
  for (let item of apologiesList) {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  }

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setVal('cat-count-all', counts.all);
  setVal('cat-count-sincere', counts.sincere);
  setVal('cat-count-cute', counts.cute);
  setVal('cat-count-promises', counts.promises);
  setVal('cat-count-olive', counts.olive);
  setVal('cat-count-saved', counts.saved);

  const totalEl = document.getElementById('total-apologies-count');
  if (totalEl) totalEl.textContent = `${counts.all}+`;
}

function renderApologyGrid() {
  const grid = document.getElementById('apology-grid');
  const emptyState = document.getElementById('grid-empty-state');
  if (!grid) return;

  grid.innerHTML = '';

  const q = searchQuery.toLowerCase().trim();
  const filtered = apologiesList.filter(item => {
    // Category match
    if (currentFilter === 'saved') {
      if (!savedApologyIds.has(item.id)) return false;
    } else if (currentFilter !== 'all') {
      if (item.category !== currentFilter) return false;
    }

    // Search query match
    if (q) {
      const matchLead = item.lead.toLowerCase().includes(q);
      const matchText = item.text.toLowerCase().includes(q);
      const matchAuthor = (item.author || '').toLowerCase().includes(q);
      if (!matchLead && !matchText && !matchAuthor) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'apology-card';

      const isFav = savedApologyIds.has(item.id);
      const catClass = `tag-${item.category}`;
      const catTitles = {
        sincere: 'Deep & Sincere',
        cute: 'Tender & Cute',
        promises: 'Promise',
        olive: 'Olive Branch'
      };

      card.innerHTML = `
        <div class="card-top">
          <span class="card-tag ${catClass}">${catTitles[item.category] || item.category}</span>
          <span class="card-num">#${item.id}</span>
        </div>
        <div class="card-body">
          <span class="apology-lead">“${item.lead}”</span>
          <p>${item.text}</p>
        </div>
        <div class="card-footer">
          <span class="card-author">${item.author || 'Sincerely'}</span>
          <div class="card-actions">
            <button class="card-btn copy-btn" data-id="${item.id}" title="Copy Apology">
              <span>📋</span> Copy
            </button>
            <button class="card-btn fav-btn ${isFav ? 'favorited' : ''}" data-id="${item.id}" title="Save Apology">
              <span>${isFav ? '❤️' : '🤍'}</span>
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  updateCategoryCounts();
}

function handleCardAction(e) {
  const favBtn = e.target.closest('.fav-btn');
  if (favBtn) {
    const id = parseInt(favBtn.dataset.id, 10);
    if (savedApologyIds.has(id)) {
      savedApologyIds.delete(id);
      showToast("Removed from saved apologies", "🤍");
    } else {
      savedApologyIds.add(id);
      showToast("Saved to your heart collection", "❤️");
      playChime(587.33, 1.2, 0.08);
    }
    persistSavedIds();
    renderApologyGrid();
    return;
  }

  const copyBtn = e.target.closest('.copy-btn');
  if (copyBtn) {
    const id = parseInt(copyBtn.dataset.id, 10);
    const item = apologiesList.find(x => x.id === id);
    if (item) {
      const fullText = `"${item.lead} ${item.text}" — ${item.author || 'Sincerely'}`;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast("Apology copied to clipboard!", "📋");
        playChime(659.25, 0.8, 0.06);
      }).catch(() => {
        showToast("Copied!", "📋");
      });
    }
  }
}

// ==========================================
// 9. FORGIVENESS SLIDER
// ==========================================
function updateForgivenessMeter(val) {
  const percentEl = document.getElementById('meter-percent-val');
  const emojiEl = document.getElementById('reaction-emoji');
  const headingEl = document.getElementById('reaction-heading');
  const descEl = document.getElementById('reaction-desc');

  if (percentEl) percentEl.textContent = `${val}%`;

  const reaction = METER_REACTIONS.find(r => val >= r.range[0] && val <= r.range[1]) || METER_REACTIONS[2];

  if (emojiEl) emojiEl.textContent = reaction.emoji;
  if (headingEl) headingEl.textContent = reaction.heading;
  if (descEl) descEl.textContent = reaction.desc;

  if (val >= 100) {
    launchConfetti();
  }
}

// ==========================================
// 10. COMMITMENTS GRID
// ==========================================
function renderCommitments() {
  const grid = document.getElementById('commitments-grid');
  if (!grid) return;

  grid.innerHTML = COMMITMENTS.map((c, i) => `
    <div class="commitment-card">
      <div class="commitment-icon">${c.icon}</div>
      <div class="commitment-body">
        <h4>${i + 1}. ${c.title}</h4>
        <p>${c.desc}</p>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 11. RECIPIENT NAME PERSONALIZATION
// ==========================================
function applyRecipientName(name) {
  recipientName = name.trim() || "Someone Truly Invaluable";
  try {
    localStorage.setItem('forgive_recipient_name', recipientName);
  } catch (e) {}

  const displayEl = document.getElementById('recipient-name-display');
  if (displayEl) displayEl.textContent = recipientName;

  const letterInline = document.querySelectorAll('.recipient-inline-name');
  letterInline.forEach(el => el.textContent = recipientName);
}

// ==========================================
// 12. THEME SWITCHER
// ==========================================
function setTheme(themeClass) {
  document.body.classList.remove('theme-midnight', 'theme-sunset', 'theme-rose', 'theme-ocean');
  document.body.classList.add(themeClass);
  activeTheme = themeClass;

  try {
    localStorage.setItem('forgive_theme', themeClass);
  } catch (e) {}

  const themeLabelMap = {
    'theme-midnight': 'Midnight',
    'theme-sunset': 'Sunset',
    'theme-rose': 'Soft Rose',
    'theme-ocean': 'Ocean'
  };

  const labelEl = document.getElementById('active-theme-label');
  if (labelEl) labelEl.textContent = themeLabelMap[themeClass] || 'Theme';

  const opts = document.querySelectorAll('.theme-opt');
  opts.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === themeClass);
  });
}

// ==========================================
// 13. PLAYFUL "STILL MAD" DODGE / SWEET NOTES
// ==========================================
const PLAYFUL_RESPONSES = [
  "Are you sure? What if I bake cookies? 🍪",
  "Fair enough. Would a 10-minute foot massage help? 💆",
  "I understand! Let me grab your favorite drink first 🧋",
  "What if I agree you were right all along? (Which you were!) 😇",
  "Sending an emergency tactical puppy right now 🐶",
  "I'll sit quietly in the corner until you smile! 🥺"
];
let playfulClickCount = 0;

function handlePlayfulMadBtn(e) {
  playfulClickCount++;
  const note = PLAYFUL_RESPONSES[playfulClickCount % PLAYFUL_RESPONSES.length];
  showToast(note, "🥺");
  playChime(329.63, 1.2, 0.05);

  const btn = e.currentTarget;
  btn.style.transform = `translateX(${(Math.random() - 0.5) * 30}px) translateY(${(Math.random() - 0.5) * 20}px)`;
  setTimeout(() => {
    btn.style.transform = 'none';
  }, 400);
}

// ==========================================
// 14. EVENT LISTENERS & INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Load State
  loadStoredState();
  setTheme(activeTheme);
  applyRecipientName(recipientName);

  // Initialize Canvas
  resizeCanvas();
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
  window.addEventListener('mousemove', e => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });
  initParticles();
  animateParticles();

  // Populate UI
  drawRandomApology();
  renderApologyGrid();
  renderCommitments();

  // Nav Sound Toggle
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleSound);
  }

  // Theme Dropdown
  const themeBtn = document.getElementById('theme-btn');
  const themeDropdown = document.getElementById('theme-dropdown');
  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('open');
    });

    document.querySelectorAll('.theme-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        setTheme(opt.dataset.theme);
        themeDropdown.classList.remove('open');
        showToast(`Theme switched to ${opt.textContent}`, "🎨");
      });
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('open');
    });
  }

  // Forgiveness Celebration Modals
  const forgiveModal = document.getElementById('forgive-modal');
  const openForgiveModal = () => {
    if (forgiveModal) forgiveModal.style.display = 'flex';
    launchConfetti();
  };
  const closeForgiveModal = document.getElementById('close-forgive-modal');
  if (closeForgiveModal) {
    closeForgiveModal.addEventListener('click', () => {
      if (forgiveModal) forgiveModal.style.display = 'none';
    });
  }

  const navForgiveBtn = document.getElementById('nav-forgive-btn');
  if (navForgiveBtn) navForgiveBtn.addEventListener('click', openForgiveModal);

  const heroForgiveBtn = document.getElementById('hero-forgive-btn');
  if (heroForgiveBtn) heroForgiveBtn.addEventListener('click', openForgiveModal);

  // Playful Button
  const playfulBtn = document.getElementById('hero-playful-btn');
  if (playfulBtn) playfulBtn.addEventListener('click', handlePlayfulMadBtn);

  // Oracle Controls
  const drawBtn = document.getElementById('draw-apology-btn');
  if (drawBtn) drawBtn.addEventListener('click', drawRandomApology);

  const copyOracleBtn = document.getElementById('copy-oracle-btn');
  if (copyOracleBtn) {
    copyOracleBtn.addEventListener('click', () => {
      const textEl = document.getElementById('oracle-text');
      if (textEl) {
        navigator.clipboard.writeText(textEl.textContent).then(() => {
          showToast("Apology copied to clipboard!", "📋");
        });
      }
    });
  }

  const heartOracleBtn = document.getElementById('heart-oracle-btn');
  if (heartOracleBtn) {
    heartOracleBtn.addEventListener('click', () => {
      const item = apologiesList[currentOracleIndex];
      if (!item) return;

      if (savedApologyIds.has(item.id)) {
        savedApologyIds.delete(item.id);
        showToast("Removed from saved", "🤍");
      } else {
        savedApologyIds.add(item.id);
        showToast("Saved to favorites!", "❤️");
        playChime(659.25, 1.2, 0.08);
      }
      persistSavedIds();
      updateOracleDisplay(item, currentOracleIndex, apologiesList.length);
      renderApologyGrid();
    });
  }

  // Forgiveness Slider
  const slider = document.getElementById('forgiveness-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      updateForgivenessMeter(parseInt(e.target.value, 10));
    });
  }

  // Wall Search & Filter Tabs
  const searchInput = document.getElementById('apology-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderApologyGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      renderApologyGrid();
    });
  }

  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentFilter = tab.dataset.category;
      renderApologyGrid();
    });
  });

  const resetFilterBtn = document.getElementById('reset-filter-btn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      currentFilter = 'all';
      catTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
      renderApologyGrid();
    });
  }

  const shuffleBtn = document.getElementById('shuffle-grid-btn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      apologiesList.sort(() => Math.random() - 0.5);
      renderApologyGrid();
      showToast("Apologies shuffled!", "🔀");
      playChime(523.25, 0.8, 0.05);
    });
  }

  // Card Clicks (delegated)
  const apologyGrid = document.getElementById('apology-grid');
  if (apologyGrid) {
    apologyGrid.addEventListener('click', handleCardAction);
  }

  // Custom Apology Modal
  const customModal = document.getElementById('custom-modal');
  const addCustomBtn = document.getElementById('add-custom-apology-btn');
  const closeCustomBtn = document.getElementById('close-custom-modal');
  const customForm = document.getElementById('custom-apology-form');

  if (addCustomBtn && customModal) {
    addCustomBtn.addEventListener('click', () => {
      customModal.style.display = 'flex';
    });
  }

  if (closeCustomBtn && customModal) {
    closeCustomBtn.addEventListener('click', () => {
      customModal.style.display = 'none';
    });
  }

  if (customForm) {
    customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const textVal = document.getElementById('custom-text').value.trim();
      const catVal = document.getElementById('custom-category').value;
      const authorVal = document.getElementById('custom-author').value.trim() || 'Me';

      if (!textVal) return;

      const newItem = {
        id: Date.now(),
        lead: textVal.length > 40 ? textVal.substring(0, 40) + '...' : textVal,
        text: textVal,
        category: catVal,
        author: authorVal
      };

      apologiesList.unshift(newItem);
      persistCustomApologies(newItem);
      renderApologyGrid();

      customForm.reset();
      if (customModal) customModal.style.display = 'none';

      showToast("Your apology has been placed on the wall! 💌", "✨");
      launchConfetti();
    });
  }

  // Personalize Recipient Modal
  const recipientModal = document.getElementById('recipient-modal');
  const editRecipientBtn = document.getElementById('edit-recipient-btn');
  const closeRecipientBtn = document.getElementById('close-recipient-modal');
  const recipientForm = document.getElementById('recipient-form');
  const recipientInput = document.getElementById('recipient-input-field');

  if (editRecipientBtn && recipientModal) {
    editRecipientBtn.addEventListener('click', () => {
      if (recipientInput) recipientInput.value = recipientName;
      recipientModal.style.display = 'flex';
    });
  }

  if (closeRecipientBtn && recipientModal) {
    closeRecipientBtn.addEventListener('click', () => {
      recipientModal.style.display = 'none';
    });
  }

  if (recipientForm) {
    recipientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (recipientInput && recipientInput.value) {
        applyRecipientName(recipientInput.value);
        if (recipientModal) recipientModal.style.display = 'none';
        showToast(`Personalized for ${recipientName} ✨`, "💌");
      }
    });
  }

  // Close modals on background click or Esc
  window.addEventListener('click', (e) => {
    if (forgiveModal && e.target === forgiveModal) forgiveModal.style.display = 'none';
    if (customModal && e.target === customModal) customModal.style.display = 'none';
    if (recipientModal && e.target === recipientModal) recipientModal.style.display = 'none';
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (forgiveModal) forgiveModal.style.display = 'none';
      if (customModal) customModal.style.display = 'none';
      if (recipientModal) recipientModal.style.display = 'none';
    }
  });
});
