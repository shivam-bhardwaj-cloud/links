// --- CONFIGURATION ZONE ---

// 1. Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Link Data List
const myLinks = [
    { 
        text: "Portfolio Website", 
        url: "https://shivam-bhardwaj-cloud.github.io/portfolio/", 
        icon: "fa-solid fa-globe" 
    },
    { 
        text: "LinkedIn", 
        url: "https://www.linkedin.com/in/shivam-bhardwaj-cloud/", 
        icon: "fa-brands fa-linkedin" 
    },
    { 
        text: "Resume", 
        url: "https://shivam-bhardwaj-cloud.github.io/portfolio/assets/docs/resume/Shivam%20Bhardwaj%20Linux%20Admin.pdf", 
        icon: "fa-solid fa-file-arrow-down",
        download: true 
    },
    { 
        text: "GitHub", 
        url: "https://github.com/shivam-bhardwaj-cloud/", 
        icon: "fa-brands fa-github" 
    },
    { 
        text: "Email", 
        url: "mailto:shivam.bhardwaj.cloud@gmail.com", 
        icon: "fa-solid fa-envelope",
        email: "shivam.bhardwaj.cloud@gmail.com"
    },
    { 
        text: "Telegram", 
        url: "https://t.me/Shiv_pandat", 
        icon: "fa-brands fa-telegram" 
    },
];

// --- RENDER LOGIC ---

const container = document.getElementById('links-container');

myLinks.forEach((link, index) => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link-card';
    
    // Added aria-label for accessibility
    a.setAttribute('aria-label', link.text);
    
    a.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.1}s`;
    a.style.opacity = '0'; 

    a.addEventListener('click', () => {
        if (typeof gtag === 'function') {
            gtag('event', 'link_click', {
                'event_category': 'Engagement',
                'event_label': link.text,
                'transport_type': 'beacon'
            });
        }
    });
    
    if (link.download) {
        a.setAttribute('download', '');
    } else if (!link.url.startsWith('mailto:')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer'; 
    }

    if (link.email) {
        a.classList.add('email-hover');
        a.setAttribute('data-email', link.email);
    }

    // Added aria-hidden="true" to icons so screen readers ignore them
    a.innerHTML = `
        <i class="${link.icon}" aria-hidden="true"></i>
        <span class="link-text">${link.text}</span>
    `;

    container.appendChild(a);
});