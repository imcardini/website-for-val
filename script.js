let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
    let firstItem = slider.querySelector('.item');
    let clonedItem = firstItem.cloneNode(true); // Clone the first item
    slider.appendChild(clonedItem); // Add the cloned item to the end
    slider.removeChild(firstItem); // Remove the original first item
});

prev.addEventListener('click', function () {
    let lastItem = slider.querySelector('.item:last-child');
    let clonedItem = lastItem.cloneNode(true); // Clone the last item
    slider.insertBefore(clonedItem, slider.firstChild); // Add the cloned item to the beginning
    slider.removeChild(lastItem); // Remove the original last item
});
