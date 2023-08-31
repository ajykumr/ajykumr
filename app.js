const profiles = {
    linkedin: 'https://www.linkedin.com/in/ajykumr',
    whatsapp: 'https://wa.me/919980317405',
    github: 'https://github.com/ajykumr',
    email: 'ajaykumar966503@gmail.com'
}

const linkedinButton = document.getElementById('btn-linkedin');
const whatsappButton = document.getElementById('btn-wa');
const githubButton = document.getElementById('btn-github');
const emailButton = document.getElementById('btn-email');


// Add click event listeners to the buttons
linkedinButton.addEventListener('click', () => {
    window.open(profiles.linkedin, '_blank');
});

whatsappButton.addEventListener('click', () => {
    window.open(profiles.whatsapp, '_blank');
});

githubButton.addEventListener('click', () => {
    window.open(profiles.github, '_blank');
});

emailButton.addEventListener('click', () => {
    window.location.href = `mailto:${profiles.email}`;
});