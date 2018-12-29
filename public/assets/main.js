"use strict";
var email = 'contact@shoplistic.com';
window.addEventListener('load', function () {
    document.getElementById('try-it').addEventListener('click', function () {
        window.open('https://app.shoplistic.com');
    });
    document.getElementById('arrow').addEventListener('click', function () {
        document.getElementsByTagName('section')[0].scrollIntoView({
            behavior: 'smooth'
        });
    });
    document.getElementById('contact').addEventListener('click', function () {
        var c = this;
        console.log(c);
        c.href = "mailto:" + email;
        c.innerText = email;
    });
    document.getElementById('year').innerText = String((new Date()).getFullYear());
});
