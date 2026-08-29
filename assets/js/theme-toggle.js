(function () {
  'use strict';

  var storageKey = 'site-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var themeColor = document.getElementById('theme-color');
  var mediaQuery = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  function readSavedTheme() {
    try {
      var saved = localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    var nextLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    if (toggle) {
      toggle.setAttribute('aria-label', nextLabel);
      toggle.setAttribute('title', nextLabel);
    }

    if (themeColor) {
      themeColor.setAttribute('content', isDark ? '#0f172a' : '#ffffff');
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // The selected theme still applies for the current page if storage is unavailable.
    }
  }

  function toggleTheme() {
    var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  }

  applyTheme(readSavedTheme() || systemTheme());

  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleTheme();
      }
    });
  }

  if (mediaQuery) {
    var updateFromSystem = function (event) {
      if (!readSavedTheme()) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateFromSystem);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateFromSystem);
    }
  }
}());
