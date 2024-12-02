(function() {
    if (theme.google_analytics) {
        // Load the Google Analytics script asynchronously
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${theme.google_analytics}`;
        document.head.appendChild(script);

        // Initialize Google Analytics
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', theme.google_analytics);
        }
    }
})();