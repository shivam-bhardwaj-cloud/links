// --- CONFIGURATION ZONE ---

// 1. Profile Picture Path (Matches your folder structure)
const profilePhotoURL = "./assets/images/profile.webp"; 

// 2. Set the image
const imgElement = document.getElementById('userPhoto');
if(imgElement) imgElement.src = profilePhotoURL;

// 3. Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 4. Link Data List
const myLinks = [
    { 
        text: "Portfolio Website", 
        url: "https://shivam-bhardwaj-cloud.github.io/portfolio/", // Links to your main site home
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
        download: true // Forces the PDF to download
    },
    { 
        text: "GitHub", 
        url: "https://github.com/shivam-bhardwaj-cloud/", // Update with your actual username
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

// --- RENDER LOGIC (Do Not Edit Below) ---

const container = document.getElementById('links-container');

myLinks.forEach((link, index) => {
    // Create the anchor tag
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link-card';
    
    // Add staggered animation delay (makes them pop in one by one)
    a.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.1}s`;
    a.style.opacity = '0'; // Start hidden for animation to work

    // Handle "Download" vs "Open in New Tab"
    if (link.download) {
        a.setAttribute('download', '');
    } else if (link.url.startsWith('mailto:')) {
        // Mailto links should just open normally
    } else {
        a.target = '_blank';
        a.rel = 'noopener noreferrer'; // Security best practice
    }

    // Add the Icon and Text
  // Email hover support
if (link.email) {
    a.classList.add('email-hover');
    a.setAttribute('data-email', link.email);
}

a.innerHTML = `
    <i class="${link.icon}"></i>
    <span class="link-text">${link.text}</span>
`;


    // Append to the page
    container.appendChild(a);
});