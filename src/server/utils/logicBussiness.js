import ReactDOM from 'react-dom/server';

var loader = ReactDOM.document.getElementById('loader');
window.addEventListener("load", function (event) {
    loader.classList.remove('loading');
    loader.classList.add('loaded');
    document.body.classList.add('imgloaded');
});
console.log("funciona")