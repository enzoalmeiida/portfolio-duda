document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -80px 0px',
        });

        document.querySelectorAll('.reveal-on-scroll').forEach(function (section) {
            observer.observe(section);
        });
    }
});

console.log('Portfólio de Duda carregado com sucesso');
