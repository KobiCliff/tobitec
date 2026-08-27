document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    if(!toggle || !menu) return;

    const icon = toggle.querySelector('.material-symbols-outlined');

    function closeMenu() {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        toggle.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'menu';
    }

    function openMenu() {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        toggle.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = 'clear';
    }

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('flex');
        isOpen ? closeMenu() : openMenu();
    });

    // Close the menu after tapping any link inside it
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close the menu if the viewport grows past the mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) closeMenu();
    });
});