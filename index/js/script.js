(function($) {
    $(function() {

        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });
        

        // Parallax
        $('.content-23.first').parallax('50%', 0.3, true);
        $('.content-23.second').parallax('50%', 0.3, true);
        $('.content-23.third').parallax('50%', 0.3, true);

        // Faded elements
        $('.features [class*="box-"], .content-9 .col-sm-5 img').each(function() {
            fadedEls($(this), 'h');
        });
      

        $(window).resize().scroll();

    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);

