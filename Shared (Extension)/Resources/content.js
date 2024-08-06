 (function() {
     browser.storage.local.get('enabled', function(data) {
         if (data.enabled !== false) {
             const currentURL = window.location.href;
             if (!currentURL.includes('old.reddit.com')) {
                 const newURL = currentURL.replace('://www.reddit.com', '://old.reddit.com')
                                          .replace('://reddit.com', '://old.reddit.com');
                 window.location.replace(newURL);
             }
         }
     });
 })();
