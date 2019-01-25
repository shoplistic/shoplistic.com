const email = 'hello@shoplistic.com';

window.addEventListener('load', () => {

    // Try it button action
    document.getElementById('try-it').addEventListener('click', () => {
        window.open('https://app.shoplistic.com');
    });

    // Arrow action
    document.getElementById('arrow').addEventListener('click', () => {
        document.getElementsByTagName('section')[0].scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Contact
    document.getElementById('contact').addEventListener('click', function () {
        const c = this as HTMLLinkElement;
        c.href = `mailto:${email}`;
        c.innerText = email;
    });

    // Update year
    document.getElementById('year').innerText = String((new Date()).getFullYear());

});
