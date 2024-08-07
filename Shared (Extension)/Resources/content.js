(function() {
    browser.storage.local.get('enabled', function(data) {
        if (data.enabled !== false) {
            const currentURL = window.location.href;
            const pattern = /^https?:\/\/www\.reddit\.com(?!\/(?:(?:media|gallery|settings)\b|r\/\w+\/s\/))([/#?].*)?$/;
            
            if (pattern.test(currentURL)) {
                const newURL = currentURL.replace(pattern, 'https://old.reddit.com$1');
                window.location.replace(newURL);
            }
        }
    });
})();
