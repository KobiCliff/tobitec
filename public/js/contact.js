document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const success = document.getElementById('successState');

    // Simple animation sequence
    form.style.opacity = '0';
    setTimeout(() => {
        form.style.display = 'none';
        success.classList.remove('opacity-0', 'pointer-events-none');
    }, 300);
});

document.getElementById('resetForm').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('successState');

    success.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        form.reset();
        form.style.display = '';
        form.style.opacity = '1'
    }, 500);
});