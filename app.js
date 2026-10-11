(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  const photoScenes = [...document.querySelectorAll('.photograph')];
  const animatedScenes = new Set();

  /* =========================================================================
     READING SCROLL PROGRESS TRACKER
     ========================================================================= */
  const progressBar = document.querySelector('#scroll-progress');
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const progress = Math.min(1, Math.max(0, window.pageYOffset / scrollHeight));
    progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
  }

  /* =========================================================================
     ANIME.JS SCENE SCROLL CHOREOGRAPHY
     ========================================================================= */
  function animateScene(scene) {
    if (!scene || animatedScenes.has(scene.id)) return;
    animatedScenes.add(scene.id);
    scene.classList.add('is-settled');

    if (typeof anime === 'undefined') return;

    const id = scene.id;

    if (id === 'scene-1') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelectorAll('.sacred-header .ganesha-emblem, .sacred-header .kannada-invocation, .sacred-header .invocation'),
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 800,
          delay: anime.stagger(120)
        })
        .add({
          targets: scene.querySelectorAll('.golden-flourish'),
          scaleX: [0.15, 1],
          opacity: [0, 0.88],
          duration: 750
        }, '-=400')
        .add({
          targets: scene.querySelectorAll('.wedding-eyebrow, .partner-name, .weds, .invitation-motto, .invitation-meta'),
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 850,
          delay: anime.stagger(90)
        }, '-=400');
    } else if (id === 'scene-2') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelector('.temple-caption'),
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 900
        })
        .add({
          targets: scene.querySelectorAll('.temple-caption .eyebrow, .temple-caption h2, .temple-caption p'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 700,
          delay: anime.stagger(120)
        }, '-=500');
    } else if (id === 'scene-3') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelector('.bride-caption'),
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 850
        })
        .add({
          targets: scene.querySelectorAll('.bride-caption .eyebrow, .bride-caption h2'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 700,
          delay: anime.stagger(100)
        }, '-=600')
        .add({
          targets: scene.querySelector('.bride-family'),
          opacity: [0, 1],
          translateX: [-18, 0],
          duration: 750
        }, '-=400')
        .add({
          targets: scene.querySelectorAll('.bride-caption .fun-facts li'),
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 500,
          delay: anime.stagger(80),
          easing: 'easeOutBack'
        }, '-=300');
    } else if (id === 'scene-4') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelector('.groom-caption'),
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 850
        })
        .add({
          targets: scene.querySelectorAll('.groom-caption .eyebrow, .groom-caption h2'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 700,
          delay: anime.stagger(100)
        }, '-=600')
        .add({
          targets: scene.querySelector('.groom-parents'),
          opacity: [0, 1],
          translateX: [-18, 0],
          duration: 750
        }, '-=400')
        .add({
          targets: scene.querySelectorAll('.groom-caption .fun-facts li'),
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 500,
          delay: anime.stagger(80),
          easing: 'easeOutBack'
        }, '-=300');
    } else if (id === 'scene-5') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelector('.couple-caption'),
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 850
        })
        .add({
          targets: scene.querySelectorAll('.couple-caption .eyebrow, .couple-caption h2, .couple-caption p'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 700,
          delay: anime.stagger(110)
        }, '-=600')
        .add({
          targets: scene.querySelector('.schedule-link'),
          opacity: [0, 1],
          scale: [0.9, 1],
          duration: 650,
          easing: 'easeOutBack'
        }, '-=300');
    } else if (id === 'scene-6') {
      anime.timeline({ easing: 'easeOutCubic' })
        .add({
          targets: scene.querySelector('.schedule-panel'),
          opacity: [0, 1],
          translateY: [32, 0],
          duration: 900
        })
        .add({
          targets: scene.querySelectorAll('.panel-header .ganesha-small, .panel-header .eyebrow, .schedule-panel h2, .panel-header .golden-flourish'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 700,
          delay: anime.stagger(90)
        }, '-=500')
        .add({
          targets: scene.querySelectorAll('.schedule-card'),
          opacity: [0, 1],
          translateY: [24, 0],
          scale: [0.96, 1],
          duration: 750,
          delay: anime.stagger(130),
          easing: 'easeOutBack'
        }, '-=400')
        .add({
          targets: scene.querySelector('.venue-container'),
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 750
        }, '-=300')
        .add({
          targets: scene.querySelectorAll('.compliments-block, .rsvp-block'),
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 650,
          delay: anime.stagger(120)
        }, '-=300')
        .add({
          targets: scene.querySelector('.blessing-footer'),
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 600
        }, '-=200');
    }
  }

  /* =========================================================================
     SCENE INTERSECTION OBSERVER
     ========================================================================= */
  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateScene(entry.target);
      }
    });
  }, { threshold: 0.28 });

  scenes.forEach(scene => sceneObserver.observe(scene));

  /* =========================================================================
     PHOTOGRAPH PLACEHOLDER & LOAD HANDLING
     ========================================================================= */
  photoScenes.forEach(s => {
    const img = s.querySelector('.scene-image');
    const placeholder = s.querySelector('.image-placeholder');
    if (!img) return;

    if (img.complete && img.naturalWidth) {
      if (placeholder) placeholder.classList.add('is-hidden');
    } else {
      img.addEventListener('load', () => {
        if (placeholder) placeholder.classList.add('is-hidden');
      }, { once: true });
      img.addEventListener('error', () => {
        img.style.display = 'none';
      }, { once: true });
    }
  });

  /* =========================================================================
     PARALLAX ON SCROLL
     ========================================================================= */
  function updatePhotoParallax() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    photoScenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      let scale = 1.06 - progress * 0.06;
      let y = (1 - progress) * 1.5;

      if (scene.id === 'scene-2' || scene.id === 'scene-3' || scene.id === 'scene-4') {
        scale = 1.0;
        y = 0;
      }
      scene.style.setProperty('--image-scale', scale.toFixed(4));
      scene.style.setProperty('--image-y', `${y.toFixed(2)}%`);
    });
  }

  /* =========================================================================
     BACKDROP VISIBILITY ACROSS SCENE 1 & 2
     ========================================================================= */
  const backdrop = document.querySelector('.invitation-backdrop');
  const templeScene = document.querySelector('#scene-2');

  function updateBackdrop() {
    if (!backdrop || !templeScene) return;
    const rect = templeScene.getBoundingClientRect();
    if (rect.bottom <= 0) {
      backdrop.style.opacity = '0';
      backdrop.style.visibility = 'hidden';
    } else {
      backdrop.style.opacity = '1';
      backdrop.style.visibility = 'visible';
    }
  }

  window.addEventListener('scroll', () => {
    updatePhotoParallax();
    updateBackdrop();
    updateScrollProgress();
  }, { passive: true });

  /* =========================================================================
     ANIME.JS BUTTER-SMOOTH ANCHOR SCROLLING
     ========================================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const startY = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = target.getBoundingClientRect().top + startY;
        const scrollObj = { y: startY };

        if (typeof anime !== 'undefined') {
          anime({
            targets: scrollObj,
            y: targetY,
            duration: 1100,
            easing: 'easeInOutCubic',
            update: () => {
              window.scrollTo(0, scrollObj.y);
            }
          });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* =========================================================================
     ANIME.JS CALLIGRAPHY HANDWRITING ANIMATION CONTROLLER
     ========================================================================= */
  const loader = document.querySelector('#intro-loader');
  let autoDismissTimer = null;

  function dismissLoader() {
    if (!loader || loader.classList.contains('loader-out')) return;
    if (autoDismissTimer) clearTimeout(autoDismissTimer);
    loader.classList.add('loader-out');
    document.body.classList.add('invitation-ready');
    // Ensure smooth dissolve then hide from assistive tech and trigger Scene 1
    setTimeout(() => {
      loader.setAttribute('aria-hidden', 'true');
      loader.style.display = 'none';
      const scene1 = document.querySelector('#scene-1');
      if (scene1) animateScene(scene1);
    }, 1150);
  }

  function prepareHandwritingText(selector) {
    const el = document.querySelector(selector);
    if (!el) return null;
    const rawText = el.getAttribute('data-writing') || el.textContent.trim();
    // Split into words, then each word into characters to preserve word-wrapping on mobile
    const words = rawText.split(/\s+/);
    el.innerHTML = words.map(word => {
      const charsHtml = [...word].map(char => {
        return `<span class="char-ink-wrap"><span class="char-ink">${char}</span><span class="char-glow" aria-hidden="true">${char}</span></span>`;
      }).join('');
      return `<span class="writing-word">${charsHtml}</span>`;
    }).join(' ');
    return el;
  }

  function startIntroAnimation() {
    prepareHandwritingText('.loader-name.bride');
    prepareHandwritingText('.loader-name.groom');

    if (typeof anime === 'undefined') {
      document.body.classList.add('no-anime');
      autoDismissTimer = setTimeout(dismissLoader, 7000);
      return;
    }

    const tl = anime.timeline({
      easing: 'easeOutCubic'
    });

    // 1. Lord Ganesha emblem & sacred invocation
    tl.add({
      targets: '.loader-ganesha-wrap',
      opacity: [0, 1],
      scale: [0.82, 1],
      duration: 900,
      easing: 'easeOutBack'
    })
    .add({
      targets: ['.loader-kannada', '.loader-invocation'],
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 750,
      delay: anime.stagger(140),
      easing: 'easeOutQuad'
    }, '-=350')
    .add({
      targets: '.loader-flourish-wrap.top-flourish',
      opacity: [0, 1],
      scaleX: [0.15, 1],
      duration: 850,
      easing: 'easeOutCubic'
    }, '-=250')
    .add({
      targets: '.loader-eyebrow',
      opacity: [0, 1],
      letterSpacing: ['0.4em', '0.3em'],
      duration: 650,
      easing: 'easeOutQuad'
    }, '-=150')

    // 2. Handwriting: Sanjana Paddambail (Letter-by-letter pen stroke reveal)
    .add({
      targets: '.loader-name.bride .char-ink',
      opacity: [0, 1],
      clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      translateY: [7, 0],
      translateX: [-3, 0],
      rotateZ: [-3, 0],
      duration: 380,
      delay: anime.stagger(55),
      easing: 'cubicBezier(0.25, 1, 0.5, 1)'
    })
    .add({
      targets: '.loader-name.bride .char-glow',
      opacity: [{ value: 0.85, duration: 130 }, { value: 0, duration: 320 }],
      scale: [1.25, 1],
      delay: anime.stagger(55),
      easing: 'easeOutQuad'
    }, '-=' + (55 * 19 + 180))
    .add({
      targets: '.loader-signature-flourish.bride-flourish',
      scaleX: [0, 1],
      opacity: [0, 0.85],
      duration: 600,
      easing: 'easeOutCubic'
    }, '-=150')

    // 3. "And" connector
    .add({
      targets: '.loader-weds',
      opacity: [0, 1],
      scale: [0.88, 1],
      duration: 550,
      easing: 'easeOutBack'
    }, '-=100')

    // 4. Handwriting: Kalyan Suresh (Letter-by-letter pen stroke reveal)
    .add({
      targets: '.loader-name.groom .char-ink',
      opacity: [0, 1],
      clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      translateY: [7, 0],
      translateX: [-3, 0],
      rotateZ: [-3, 0],
      duration: 380,
      delay: anime.stagger(58),
      easing: 'cubicBezier(0.25, 1, 0.5, 1)'
    })
    .add({
      targets: '.loader-name.groom .char-glow',
      opacity: [{ value: 0.85, duration: 130 }, { value: 0, duration: 320 }],
      scale: [1.25, 1],
      delay: anime.stagger(58),
      easing: 'easeOutQuad'
    }, '-=' + (58 * 13 + 180))
    .add({
      targets: '.loader-signature-flourish.groom-flourish',
      scaleX: [0, 1],
      opacity: [0, 0.85],
      duration: 600,
      easing: 'easeOutCubic'
    }, '-=150')

    // 5. Bottom Flourish & Motto
    .add({
      targets: '.loader-flourish-wrap.bottom-flourish',
      opacity: [0, 1],
      scaleX: [0.15, 1],
      duration: 750,
      easing: 'easeOutCubic'
    }, '-=150')
    .add({
      targets: '.loader-motto',
      opacity: [0, 1],
      translateY: [6, 0],
      duration: 650,
      easing: 'easeOutQuad'
    }, '-=200');

    // Auto-dismiss smoothly after handwriting presentation finishes
    tl.finished.then(() => {
      autoDismissTimer = setTimeout(dismissLoader, 1800);
    });
  }

  if (loader) {
    startIntroAnimation();

    loader.addEventListener('click', () => {
      dismissLoader();
    });
  } else {
    document.body.classList.add('invitation-ready');
    const scene1 = document.querySelector('#scene-1');
    if (scene1) animateScene(scene1);
  }

  /* =========================================================================
     MOBILE MORE INFO TOGGLES (Groom & Bride details)
     ========================================================================= */
  document.querySelectorAll('.more-info-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const drawer = document.getElementById(targetId);
      if (!drawer) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      btn.classList.toggle('is-active', !isExpanded);
      drawer.classList.toggle('is-open', !isExpanded);

      const textSpan = btn.querySelector('.toggle-text');
      if (textSpan) {
        textSpan.textContent = !isExpanded ? 'Less Info' : 'More Info';
      }
    });
  });

  updatePhotoParallax();
  updateBackdrop();
  updateScrollProgress();
})();
