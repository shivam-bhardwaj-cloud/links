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
        url: "https://shivam-bhardwaj-cloud.github.io/portfolio/assets/docs/resume/Shivam_Bhardwaj_DevOps_Engineer.pdf", 
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
        gtag('event', 'select_content', {
            'content_type': 'link',
            'item_id': link.text.toLowerCase().replace(/\s+/g, '_'), // Example: "linkedin_profile"
            'method': 'linkhub_click'
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

// Profile Sharing

if (navigator.share) {
    const shareBtn = document.createElement('a');
    shareBtn.className = 'link-card share-btn';
    shareBtn.style.cursor = 'pointer'; // Taaki pata chale ye click hoga
    shareBtn.innerHTML = `
        <i class="fa-solid fa-share-nodes"></i> 
        <span class="link-text">Share My Profile</span>
    `;
    
    shareBtn.onclick = (e) => {
        e.preventDefault(); // Page refresh hone se rokne ke liye
        navigator.share({
            title: 'Shivam Bhardwaj | Cloud & DevOps Engineer',
            url: window.location.href
        }).catch(console.error); // Agar koi error aaye toh console mein dikhe
    };
    
    container.appendChild(shareBtn);
}
