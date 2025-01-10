document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function unscrambleEmail(element) {
    const encodedParts = {
        u: 'b2xyb2du',
        d: 'dWRlLnRpbQ==',
    };
    
    if (element.getAttribute('data-animating') === 'true') return;
    element.setAttribute('data-animating', 'true');
    
    const user = atob(encodedParts.u).split('').reverse().join('');
    const domain = atob(encodedParts.d).split('').reverse().join('');
    const email = user + '@' + domain;
    
    let scrambled = 'click to reveal email...';
    let current = scrambled;
    let counter = 0;
    const finalText = email;
    
    const interval = setInterval(() => {
        counter++;
        current = finalText.substring(0, counter) + 
                 Array(finalText.length - counter + 1)
                 .join('*').substring(0, finalText.length - counter);
        
        element.textContent = current;
        
        if (counter >= finalText.length) {
            clearInterval(interval);
            element.onclick = null;
            element.style.cursor = 'text';
            element.classList.remove('scrambled');
        }
    }, 50);
}
