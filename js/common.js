

$(document).on('click', '.infetech-dropdown .infetech-dropdown-toggle', function () {
    if ($(window).width() < 992) {
        if ($(this).parent().children('.infetech-dropdown-menu').hasClass('show')) {
            $('.infetech-dropdown-menu').removeClass('show')
            $(this).parent().children('.infetech-dropdown-menu').removeClass('show')
        } else {
            $('.infetech-dropdown-menu').removeClass('show')
            $(this).parent().children('.infetech-dropdown-menu').addClass('show');
        }
    }
}); 