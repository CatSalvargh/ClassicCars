import {header, pages_details as pages} from './page_details.js'

$(document).ready(function() {

    //hamburger menu toggle
    $('.nav-toggle').click(function() {
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');
    })

})

pages.forEach( (page) => {
    let pageHeader = document.getElementById(`${page.name}_header`)
    let pageMain = document.getElementById(`${page.name}_main`)

    console.log(pageMain, pageHeader)
    if (pageHeader) {
        pageHeader.innerHTML = header
    };
    if (pageMain && page.content) {
        pageMain.innerHTML = page.content
    }; 
    return;
})