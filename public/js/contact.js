document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = this;
    const success = document.getElementById('successState');

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com.submit', {
            method: 'POST',
            body: formData
        });
        const result = await.response.json();

        if (result.success) {
            // Simple animation sequence
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('opacity-0', 'pointer-events-none');
            }, 300);
        } else {
            alert('Something went wrong. Please try again oremail me directly.')
        };
    } catch (error) {
        alert('Network error. Please try again oremail me directly.');
    }
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