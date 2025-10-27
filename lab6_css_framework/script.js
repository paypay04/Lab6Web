// JavaScript untuk Single Page Application Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengganti halaman
    function showPage(pageId) {
        // Sembunyikan semua halaman
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        
        // Tampilkan halaman yang dipilih
        document.getElementById(pageId + '-page').classList.add('active');
        
        // Update status aktif di navbar
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Tandai link yang aktif
        const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Scroll ke atas halaman
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Event listener untuk link navigasi
    document.querySelectorAll('.nav-link, .navbar-brand').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Event listener untuk tombol di hero section
    document.querySelectorAll('.btn[data-page]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Event listener untuk link di footer
    document.querySelectorAll('footer .text-light[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Event listener untuk breadcrumb links
    document.querySelectorAll('.breadcrumb-item a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.querySelector('#kontak-page form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan membalasnya secepatnya.');
            this.reset();
        });
    }
    
    // Search form handler
    const searchForm = document.querySelector('.navbar form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input').value;
            if (searchTerm.trim()) {
                alert(`Melakukan pencarian untuk: "${searchTerm}"\n\nFitur pencarian sedang dalam pengembangan.`);
                this.querySelector('input').value = '';
            }
        });
    }
    
    // Inisialisasi halaman home sebagai default
    showPage('home');
    
    // Tambahan: Smooth scroll untuk internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Teddy\'s Corner website loaded successfully! 🧸');
});