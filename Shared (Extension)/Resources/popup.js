document.addEventListener('DOMContentLoaded', function() {
    var redirectToggle = document.getElementById('redirectToggle');

    // Load the current state
    browser.storage.local.get('enabled', function(data) {
        redirectToggle.checked = data.enabled !== false;
    });

    // Save the state when the toggle is clicked
    redirectToggle.addEventListener('change', function() {
        browser.storage.local.set({enabled: redirectToggle.checked});
    });
});
