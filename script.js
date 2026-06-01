// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const mobileDrawer = document.getElementById('mobile-drawer');
const accordionItems = document.querySelectorAll('.accordion-item');
const pledgeForm = document.getElementById('pledge-form');

// 1. Mobile Menu Toggle
if (menuToggle && mobileDrawer && menuIcon) {
    menuToggle.addEventListener('click', () => {
        const isHidden = mobileDrawer.classList.contains('hidden');
        
        if (isHidden) {
            mobileDrawer.classList.remove('hidden');
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileDrawer.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        
        // Re-create icons to reflect the change between hamburger menu and close (X)
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });

    // Close mobile drawer when clicking a link
    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    });
}

// 2. Interactive Accordion
if (accordionItems.length > 0) {
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items first
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// 3. Pledge Form Submission Handler
if (pledgeForm) {
    pledgeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const pledgeSelect = document.getElementById('pledge');
        
        if (!nameInput || !emailInput || !pledgeSelect) return;
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const pledgeValue = pledgeSelect.value;
        
        if (!name || !email) {
            alert('Please fill in all fields to make your pledge.');
            return;
        }
        
        // Form submission alert (customized based on selection)
        let pledgeText = '';
        switch(pledgeValue) {
            case 'plastic':
                pledgeText = 'eliminate single-use plastics';
                break;
            case 'water':
                pledgeText = 'reduce your daily water waste';
                break;
            case 'energy':
                pledgeText = 'switch off unused electronics';
                break;
            case 'diet':
                pledgeText = 'eat more plant-based meals';
                break;
            default:
                pledgeText = 'support environmental sustainability';
        }
        
        alert(`Thank you, ${name}! Your pledge to ${pledgeText} has been registered.\nLet's save the planet together!`);
        
        // Reset form
        pledgeForm.reset();
    });
}
