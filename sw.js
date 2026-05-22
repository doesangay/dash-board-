// Inside your <script> tag in index.html
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // This line connects your sw.js file
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered!'))
            .catch(err => console.error('Service Worker Failed:', err));
    });
}