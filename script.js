import {header, footer, page_details as pages} from './script/page_details.js'

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
    let pageFooter = document.getElementById(`${page.name}_footer`)

    if (pageHeader) {
        pageHeader.innerHTML = header
    };
    if (pageMain && page.content) {
        pageMain.innerHTML = page.content
    };
    if (pageFooter && page.footer) {
        pageFooter.innerHTML = page.footer
    } else if (pageFooter) {
        pageFooter.innerHTML = footer
    } else {
    }

    return;
})