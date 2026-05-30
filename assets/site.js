// ============================================================
// Golpo — site behavior. Plain vanilla JS, no framework.
// Loads header/footer partials, hooks up nav, dropdowns,
// mobile menu, FAQ, code tabs, and IntersectionObserver fade.
// ============================================================
(function () {
  'use strict';

  // ----- Inject shared partials, then init everything that
  // depends on them (lucide icons, mobile menu, etc.).
  function injectPartial(slotId, url) {
    var slot = document.getElementById(slotId);
    if (!slot) return Promise.resolve();
    return fetch(url, { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (html) { slot.innerHTML = html; })
      .catch(function () { /* offline / file:// — no partial */ });
  }

  function initLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function initMobileMenu() {
    var btn = document.getElementById('menu-toggle');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    var iconOpen = btn.querySelector('.menu-icon-open');
    var iconClose = btn.querySelector('.menu-icon-close');
    btn.addEventListener('click', function () {
      var isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      document.body.classList.toggle('menu-open', !isOpen);
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', !isOpen);
        iconClose.classList.toggle('hidden', isOpen);
      }
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden');
        document.body.classList.remove('menu-open');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  }

  function initFooterYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  // ----- Reveal-on-scroll
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // ----- Code tabs (used on the home + docs pages)
  function initCodeTabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (root) {
      var btns = root.querySelectorAll('[data-tab-btn]');
      var panels = root.querySelectorAll('[data-tab-panel]');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.getAttribute('data-tab-btn');
          btns.forEach(function (b) {
            var active = b.getAttribute('data-tab-btn') === key;
            b.classList.toggle('text-white', active);
            b.classList.toggle('text-zinc-500', !active);
            b.classList.toggle('border-purple-500', active);
            b.classList.toggle('border-transparent', !active);
          });
          panels.forEach(function (p) {
            var match = p.getAttribute('data-tab-panel') === key;
            p.classList.toggle('hidden', !match);
          });
        });
      });
    });
  }

  // ----- Personality sliders (chat page)
  function initSliders() {
    document.querySelectorAll('[data-slider]').forEach(function (slider) {
      var output = slider.parentElement.querySelector('[data-slider-out]');
      function update() {
        if (output) output.textContent = (Number(slider.value) / 100).toFixed(2);
      }
      slider.addEventListener('input', update);
      update();
    });
  }

  // ----- Chat composer (chat page)
  function initChat() {
    var form = document.getElementById('chat-form');
    if (!form) return;
    var input = form.querySelector('textarea');
    var thread = document.getElementById('chat-thread');
    var sendBtn = form.querySelector('[data-send]');

    function timeNow() {
      var d = new Date();
      return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
    }
    function append(role, text) {
      var time = timeNow();
      var wrap = document.createElement('div');
      wrap.className = 'flex ' + (role === 'user' ? 'justify-end' : 'justify-start') + ' fade-in';
      if (role === 'user') {
        wrap.innerHTML =
          '<div class="max-w-[78%] flex flex-col items-end gap-1">' +
            '<div class="bg-purple-600 text-white p-3 text-sm leading-relaxed">' + escapeHtml(text) + '</div>' +
            '<div class="text-[10px] font-mono text-zinc-600">you &middot; ' + time + '</div>' +
          '</div>';
      } else {
        wrap.innerHTML =
          '<div class="max-w-[78%] flex flex-col items-start gap-1">' +
            '<div class="border border-white/[0.08] bg-white/[0.02] p-3 text-sm text-zinc-200 leading-relaxed">' + escapeHtml(text) + '</div>' +
            '<div class="text-[10px] font-mono text-zinc-600">Maya &middot; ' + time + '</div>' +
          '</div>';
      }
      thread.appendChild(wrap);
      thread.scrollTop = thread.scrollHeight;
    }
    function send() {
      var v = (input.value || '').trim();
      if (!v) return;
      append('user', v);
      input.value = '';
      sendBtn.disabled = true;
      setTimeout(function () {
        append('maya', "I hear you. Let me sit with that for a moment — tell me what felt heaviest about it.");
        sendBtn.disabled = false;
      }, 600);
    }
    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, function (c) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
      });
    }
    input.addEventListener('input', function () {
      sendBtn.disabled = !input.value.trim();
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    });
    sendBtn.addEventListener('click', function (e) { e.preventDefault(); send(); });
  }

  // ----- Boot
  function boot() {
    Promise.all([
      injectPartial('header-slot', '/assets/header.html'),
      injectPartial('footer-slot', '/assets/footer.html'),
    ]).then(function () {
      initLucide();
      initMobileMenu();
      initFooterYear();
    });

    // These don't depend on partials
    initReveal();
    initCodeTabs();
    initSliders();
    initChat();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
