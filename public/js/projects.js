document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.replace('bg-primary-container', 'bg-transparent');
                b.classList.replace('text-on-primary-fixed','text-on-surface');
            });

            // add active classes to clicked button
            btn.classList.add('active');
            b.classList.replace('bg-primary-container', 'bg-transparent');
            b.classList.replace('text-on-primary-fixed','text-on-surface');
            
            const filterValue = btn.getAttribute('data-filter');

            // filter items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'flex';
                    // 
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});