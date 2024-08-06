// Initialize the extension's enabled state
browser.storage.local.get('enabled', function(data) {
    if (data.enabled === undefined) {
        browser.storage.local.set({enabled: true});
    }
});
