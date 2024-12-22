let cart = [];

$(document).on('click', '.add-to-cart', function () {
    let perfumeName = $(this).siblings('h3').text();
    cart.push(perfumeName);
    alert(perfumeName + ' has been added to your cart.');
});