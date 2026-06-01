(function () {
  'use strict';

  var data = window.PORTAFOLIO_DATA;
  if (!data) {
    document.getElementById('tab-content').innerHTML =
      '<p style="text-align:center;padding:3rem;color:#7C6A94;">Error: No se encontro PORTAFOLIO_DATA en actividades.js</p>';
    return;
  }

  var currentLightboxImages = [];
  var currentLightboxIndex = 0;

  function encodePath(path) {
    return path.split('/').map(function (seg) {
      return encodeURIComponent(seg);
    }).join('/');
  }

  function buildHero() {
    var hero = document.getElementById('hero');
    var p = data.portada;
    hero.innerHTML =
      '<div class="hero-floral-top"></div>' +
      '<div class="hero-floral-bottom"></div>' +
      '<div class="hero-content">' +
        '<div class="hero-badge">' + escapeHtml(p.materia) + '</div>' +
        '<h1 class="hero-title">' + escapeHtml(p.titulo) + '</h1>' +
        '<p class="hero-subtitle">' + escapeHtml(p.subtitulo) + '</p>' +
        '<p class="hero-name">' + escapeHtml(p.nombre) + '</p>' +
        '<p class="hero-group">Grupo ' + escapeHtml(p.grupo) + '</p>' +
        '<div class="hero-divider"></div>' +
        '<p class="hero-quote">' + escapeHtml(p.frase) + '</p>' +
      '</div>' +
      '<div class="hero-scroll">' +
        '<span>EXPLORAR</span>' +
        '<div class="hero-scroll-line"></div>' +
      '</div>';
  }

  function buildTabs() {
    var nav = document.getElementById('tabs-nav');
    var tabs = [];

    tabs.push({ id: 'presentacion', label: 'Presentacion', count: null });
    tabs.push({ id: 'introduccion', label: 'Introduccion', count: null });

    data.actividades.forEach(function (act) {
      tabs.push({
        id: act.id,
        label: act.titulo,
        count: act.imagenes ? act.imagenes.length : 0
      });
    });

    var html = '';
    tabs.forEach(function (tab) {
      html += '<button class="tab-btn" data-tab="' + escapeAttr(tab.id) + '" role="tab" aria-selected="false">' +
        escapeHtml(tab.label) +
        (tab.count !== null ? '<span class="tab-badge">' + tab.count + '</span>' : '') +
      '</button>';
    });

    nav.innerHTML = html;

    nav.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab-btn');
      if (!btn) return;
      activateTab(btn.getAttribute('data-tab'));
    });
  }

  function activateTab(tabId) {
    var buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    var content = document.getElementById('tab-content');

    if (tabId === 'presentacion') {
      content.innerHTML = buildPresentacion();
    } else if (tabId === 'introduccion') {
      content.innerHTML = buildIntroduccion();
    } else {
      var act = data.actividades.find(function (a) { return a.id === tabId; });
      if (act) {
        content.innerHTML = buildActividad(act);
        setupGalleryErrors();
      }
    }

    try { localStorage.setItem('portafolio_tab', tabId); } catch (e) {}

    var activeBtn = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    window.scrollTo({ top: document.getElementById('main-content').offsetTop - 60, behavior: 'smooth' });
  }

  function buildPresentacion() {
    var p = data.presentacion;
    return '<div class="tab-panel">' +
      '<div class="profile-card">' +
        '<div class="profile-header">' +
          '<div class="profile-photo-wrapper">' +
            '<img src="' + encodePath(p.foto) + '" alt="Foto de perfil de ' + escapeAttr(p.nombre) + '" loading="lazy">' +
          '</div>' +
          '<h2 class="profile-name">' + escapeHtml(p.nombre) + '</h2>' +
          '<p class="profile-role">' + escapeHtml(p.rol) + '</p>' +
        '</div>' +
        '<div class="profile-body">' +
          '<h3 class="profile-section-title">Semblanza</h3>' +
          '<p class="profile-text">' + escapeHtml(p.semblanza) + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function buildIntroduccion() {
    var intro = data.introduccion;
    var paragraphs = intro.texto.split('\n\n').map(function (p) {
      return '<p>' + escapeHtml(p.trim()) + '</p>';
    }).join('');

    return '<div class="tab-panel">' +
      '<div class="intro-card">' +
        '<h2 class="intro-title">' + escapeHtml(intro.titulo) + '</h2>' +
        '<div class="intro-text">' + paragraphs + '</div>' +
      '</div>' +
    '</div>';
  }

  function buildActividad(act) {
    var imgCount = act.imagenes ? act.imagenes.length : 0;
    var html = '<div class="tab-panel">' +
      '<div class="activity-header">' +
        '<h2 class="activity-title">' + escapeHtml(act.titulo) + '</h2>' +
        '<div class="activity-count">' +
          '<svg class="activity-count-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
            '<path d="M21 15l-5-5L5 21"/>' +
          '</svg>' +
          imgCount + ' evidencia' + (imgCount !== 1 ? 's' : '') +
        '</div>' +
        '<div class="activity-description">' + escapeHtml(act.descripcion) + '</div>' +
      '</div>';

    if (imgCount === 0) {
      html += '<div class="no-images">No hay evidencias fotograficas disponibles</div>';
    } else {
      html += '<div class="gallery">';
      act.imagenes.forEach(function (img, idx) {
        html += '<div class="gallery-item" data-activity="' + escapeAttr(act.id) + '" data-index="' + idx + '">' +
          '<img src="' + encodePath(img.ruta) + '" alt="' + escapeAttr(img.alt) + '" loading="lazy">' +
          '<div class="gallery-item-overlay">' +
            '<span class="gallery-item-caption">' + escapeHtml(img.alt) + '</span>' +
          '</div>' +
          '<div class="gallery-zoom-icon">' +
            '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function setupGalleryErrors() {
    var images = document.querySelectorAll('.gallery-item img');
    images.forEach(function (img) {
      img.addEventListener('error', function () {
        var parent = this.parentElement;
        parent.innerHTML =
          '<div class="gallery-error">' +
            '<span class="gallery-error-icon">&#128247;</span>' +
            '<span>Imagen no disponible</span>' +
          '</div>';
        parent.style.cursor = 'default';
        parent.removeEventListener('click', handleGalleryClick);
      });
    });

    var items = document.querySelectorAll('.gallery-item');
    items.forEach(function (item) {
      item.addEventListener('click', handleGalleryClick);
    });
  }

  function handleGalleryClick(e) {
    var item = e.currentTarget;
    var actId = item.getAttribute('data-activity');
    var idx = parseInt(item.getAttribute('data-index'), 10);
    var act = data.actividades.find(function (a) { return a.id === actId; });
    if (!act || !act.imagenes) return;

    currentLightboxImages = act.imagenes;
    currentLightboxIndex = idx;
    openLightbox();
  }

  function openLightbox() {
    var lb = document.getElementById('lightbox');
    var img = currentLightboxImages[currentLightboxIndex];
    document.getElementById('lightbox-img').src = encodePath(img.ruta);
    document.getElementById('lightbox-img').alt = img.alt;
    document.getElementById('lightbox-caption').textContent = img.alt;
    document.getElementById('lightbox-counter').textContent =
      (currentLightboxIndex + 1) + ' / ' + currentLightboxImages.length;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  function lightboxPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightbox();
  }

  function lightboxNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateLightbox();
  }

  function updateLightbox() {
    var img = currentLightboxImages[currentLightboxIndex];
    var imgEl = document.getElementById('lightbox-img');
    imgEl.src = encodePath(img.ruta);
    imgEl.alt = img.alt;
    document.getElementById('lightbox-caption').textContent = img.alt;
    document.getElementById('lightbox-counter').textContent =
      (currentLightboxIndex + 1) + ' / ' + currentLightboxImages.length;
  }

  function buildFooter() {
    var footer = document.getElementById('footer');
    var p = data.portada;
    var year = new Date().getFullYear();
    footer.innerHTML =
      '<p class="footer-name">' + escapeHtml(p.nombre) + '</p>' +
      '<p class="footer-info">Grupo ' + escapeHtml(p.grupo) + ' &middot; ' + escapeHtml(p.materia) + '</p>' +
      '<p class="footer-info">' + escapeHtml(p.titulo) + '</p>' +
      '<div class="footer-divider"></div>' +
      '<p class="footer-copy">&copy; ' + year + ' &mdash; Todos los derechos reservados</p>';
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function init() {
    buildHero();
    buildTabs();
    buildFooter();

    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', lightboxPrev);
    document.querySelector('.lightbox-next').addEventListener('click', lightboxNext);

    document.addEventListener('keydown', function (e) {
      var lb = document.getElementById('lightbox');
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    });

    var savedTab = null;
    try { savedTab = localStorage.getItem('portafolio_tab'); } catch (e) {}

    if (savedTab) {
      var exists = document.querySelector('.tab-btn[data-tab="' + savedTab + '"]');
      if (exists) {
        activateTab(savedTab);
        return;
      }
    }
    activateTab('presentacion');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
