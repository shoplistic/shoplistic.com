const email = 'contact@shopper.ink';


window.addEventListener('load', () => {

    // Contact
    // @ts-ignore
    document.getElementById('contact').addEventListener('click', function () {
        const c = this as HTMLLinkElement;
        console.log(c);
        c.href = `mailto:${email}`;
        c.innerText = email;
    });

    // Try it button action
    document.getElementById('try-it').addEventListener('click', function () {
        window.open('https://app.shopper.ink');
    });

    // Update year
    document.getElementById('year').innerText = String((new Date()).getFullYear());

});
