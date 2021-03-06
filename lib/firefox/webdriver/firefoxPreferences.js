'use strict';

module.exports = {
  // Use hidden time_to_non_blank_paint
  'dom.performance.time_to_non_blank_paint.enabled': true,
  // Use hidden time to DOM Content flush
  'dom.performance.time_to_dom_content_flushed.enabled': true,
  // Use hidden TTFI
  'dom.performance.time_to_first_interactive.enabled': true,
  // Use hidden TTCP
  'dom.performance.time_to_contentful_paint.enabled': true,
  // IPV6 sometimes makes DNS slow on Linux
  'network.dns.disableIPv6': true,
  'browser.startup.homepage': 'about:blank',
  /* Extra tracking protection https://wiki.mozilla.org/Security/Tracking_protection */
  'privacy.trackingprotection.enabled': false,
  'privacy.trackingprotection.pbmode.enabled': false,
  'privacy.trackingprotection.annotate_channels': false,
  'services.sync.prefs.sync.privacy.trackingprotection.enabled': false,
  'services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled': false,
  'browser.safebrowsing.provider.mozilla.updateURL': '',
  'browser.safebrowsing.provider.mozilla.gethashURL': '',

  /* Disable heartbeat https://wiki.mozilla.org/Firefox/Shield/Heartbeat */
  'browser.selfsupport.url': '',
  'browser.selfsupport.enabled': false,

  'devtools.devedition.promo.enabled': false,

  /* Disable detectportal.firefox.com */
  'network.captive-portal-service.enabled': false,
  'browser.search.geoip.url': '',
  /* Disable telemetry  https://wiki.mozilla.org/Telemetry/Testing */
  'toolkit.telemetry.prompted': 2,
  'toolkit.telemetry.rejected': true,
  'toolkit.telemetry.enabled': false,
  'toolkit.telemetry.reportingpolicy.firstRun': false,

  /* https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections */
  'browser.safebrowsing.downloads.remote.enabled': false,
  'browser.startup.homepage_override.mstone': 'ignore',
  'extensions.getAddons.cache.enabled': false,

  // Preferences from
  // https://searchfox.org/mozilla-central/source/testing/talos/talos/config.py
  // slightly modified - all URLs are set to blank
  'app.update.enabled': false,
  'browser.aboutHomeSnippets.updateUrl': '',
  'browser.bookmarks.restore_default_bookmarks': false,
  'browser.bookmarks.added_static_root': true,
  'browser.places.importBookmarksHTML': false,
  'browser.cache.disk.capacity': 1048576,
  'browser.cache.disk.smart_size.first_run': false,
  'browser.cache.disk.smart_size_cached_value': 1048576,
  'browser.newtabpage.directory.ping': '',
  'browser.newtabpage.directory.source': 'data:application/json,{}',
  'browser.newtabpage.enabled': false,
  'browser.newtabpage.enhanced': false,
  'browser.newtabpage.introShown': true,
  'browser.newtab.preload': false,
  'browser.pagethumbnails.capturing_disabled': true,
  'browser.rights.3.shown': true,
  'browser.safebrowsing.downloads.enabled': false,
  'browser.safebrowsing.enabled': false,
  'browser.safebrowsing.phishing.enabled': false,
  'browser.safebrowsing.malware.enabled': false,
  'browser.safebrowsing.remotelookups': false,
  'browser.safebrowsing.provider.mozilla.updateURL ': '',
  'browser.search.update': false,
  'browser.sessionstore.resume_from_crash': false,
  'browser.shell.checkDefaultBrowser': false,
  'browser.startup.page': 0,
  'browser.uitour.enabled': false,
  'browser.tabs.warnOnClose': false,
  'datareporting.healthreport.service.enabled': false,
  'datareporting.healthreport.uploadEnabled': false,
  'datareporting.healthreport.service.firstRun': false,
  'datareporting.healthreport.logging.consoleEnabled': false,
  'datareporting.policy.dataSubmissionEnabled': false,
  'datareporting.policy.dataSubmissionPolicyResponseType':
    'accepted-info-bar-dismissed',
  'datareporting.policy.dataSubmissionPolicyAccepted': false,
  'dom.ipc.plugins.flash.disable-protected-mode': true,
  'dom.max_chrome_script_run_time': 0,
  'dom.max_script_run_time': 0,
  'dom.webnotifications.enabled': false,
  'extensions.checkCompatibility': false,
  'extensions.update.enabled': false,
  'extensions.update.notifyUser': false,
  'extensions.shownSelectionUI': true,
  'extensions.autoDisableScopes': 14,
  'extensions.shield-recipe-client.enabled': false,
  'intl.charsetmenu.browser.cache': 'UTF-8',
  'media.gmp-gmpopenh264.autoupdate': false,
  'network.cookie.prefsMigrated': true,
  'network.proxy.type': 0,
  'pageThumbs.enabled': false,
  'pref.browser.homepage.disable_button.current_page': false,
  'privacy.cpd.siteSettings': true,
  'privacy.sanitize.migrateFx3Prefs': true,
  'privacy.sanitize.timeSpan': 0,
  'reader.parse-on-load.enabled': false,
  'security.enable_java': false,
  'security.warn_entering_weak': false,
  'security.warn_viewing_mixed': false,
  'security.warn_entering_secure': false,
  'security.warn_leaving_secure': false,
  'security.warn_submit_insecure': false,
  'services.sync.migrated': true,
  'services.sync.engine.bookmarks': false,
  'layers.acceleration.disabled': true,
  'gfx.direct2d.disabled': true,
  'xpinstall.whitelist.add': '',
  'xpinstall.whitelist.add.36': '',
  'xpinstall.signatures.required': false,
  'signon.rememberSignons': false,
  'javascript.options.asyncstack': false,
  'javascript.options.showInConsole': true,
  'devtools.chrome.enabled': true,
  'devtools.debugger.remote-enabled': true,
  'devtools.sourcemap.locations.enabled': false
};
