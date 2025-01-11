document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * @description Unscrambles the email address with animation
 * @param {HTMLElement} element - The element containing the scrambled email
 */
function unscrambleEmail(element) {
    const ANIMATION_SPEED = 50;
    const encodedParts = {
        u: 'b2xyb2du',
        d: 'dWRlLnRpbQ=='
    };
    
    // Prevent multiple animations
    if (element.getAttribute('data-animating') === 'true') return;
    element.setAttribute('data-animating', 'true');
    
    // Decode email parts
    const email = constructEmail(encodedParts);
    
    // Animate unscrambling
    animateUnscramble(element, email, ANIMATION_SPEED);
}

/**
 * @description Constructs email from encoded parts
 * @param {Object} parts - Object containing encoded email parts
 * @returns {string} Decoded email address
 */
function constructEmail(parts) {
    const user = atob(parts.u).split('').reverse().join('');
    const domain = atob(parts.d).split('').reverse().join('');
    return `${user}@${domain}`;
}

/**
 * @description Animates the unscrambling of text
 * @param {HTMLElement} element - Target element
 * @param {string} finalText - Final text to display
 * @param {number} speed - Animation speed in milliseconds
 */
function animateUnscramble(element, finalText, speed) {
    let counter = 0;
    
    const interval = setInterval(() => {
        counter++;
        const revealed = finalText.substring(0, counter);
        const hidden = '*'.repeat(finalText.length - counter);
        element.textContent = revealed + hidden;
        
        if (counter >= finalText.length) {
            finishAnimation(element, interval);
        }
    }, speed);
}

/**
 * @description Cleans up after animation completes
 * @param {HTMLElement} element - Target element
 * @param {number} interval - Interval ID to clear
 */
function finishAnimation(element, interval) {
    clearInterval(interval);
    element.onclick = null;
    element.style.cursor = 'text';
    element.classList.remove('scrambled');
}
