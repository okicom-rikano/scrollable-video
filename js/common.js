const box = document.querySelector('#box');
const items = document.querySelector('#items');

box.style.paddingBottom = '100px';

window.addEventListener('DOMContentLoaded', function(){
    console.log("hello");

    window.addEventListener('scroll', function(){
        // console.log("横スクロール：" + window.scrollX);
        console.log("縦スクロール：" + window.scrollY);
        box.style.paddingBottom += window.scrollY;
        console.log(box.style.paddingBottom);
    });

});