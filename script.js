document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        document.getElementById(targetId).style.display = 'block';
        
        if (targetId === 'home') {
            document.getElementById('home').style.display = 'block';
        }
        
        window.scrollTo(0, 0);
    });
});

document.getElementById('home').style.display = 'block';