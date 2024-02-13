document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector('.slider');
    let isDragging = false;
    let startPosition = 0;
    let endPosition = 0;

    slider.addEventListener('mousedown', function(event) {
        isDragging = true;
        startPosition = event.clientX;
    });

    slider.addEventListener('mousemove', function(event) {
        if (isDragging) {
            endPosition = event.clientX;
        }
    });

    slider.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            let distance = endPosition - startPosition;
            if (Math.abs(distance) > 50) {
                if (distance > 0) {
                    moveToPrevSlide();
                } else {
                    moveToNextSlide();
                }
            }
        }
    });

    // Function to move to the next slide
    function moveToNextSlide() {
        let items = document.querySelectorAll('.item');
        slider.appendChild(items[0]);
    }

    // Function to move to the previous slide
    function moveToPrevSlide() {
        let items = document.querySelectorAll('.item');
        slider.prepend(items[items.length - 1]);
    }
});
