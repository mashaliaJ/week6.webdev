// Button click event to change color
const colorChangeBtn = document.getElementById('colorChangeBtn');
colorChangeBtn.addEventListener('click', () => {
    colorChangeBtn.style.backgroundColor = colorChangeBtn.style.backgroundColor === 'blue' ? 'green' : 'blue' ;
});

// Image gallery functionality
const images = document.querySelectorAll('.gallery-image');
let currentImageIndex = 0;

document.getElementById('nextImageBtn').addEventListener('click', () => {
    images[currentImageIndex].classList.add('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.remove('hidden');
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const contentId = tab.getAttribute('data-content');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(contentId).classList.remove('hidden');
    });
});

// Form validation
const form = document.getElementById('registrationForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
