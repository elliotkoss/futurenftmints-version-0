/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function updateTextLengthCounter(event) {
    const textLength = event.target.value.length
    // assume the input and text-length-counter are grouped in the same parentElement
    const counter = event.target.parentElement.getElementsByClassName('text-length-counter')[0]
    counter.textContent = textLength
}
