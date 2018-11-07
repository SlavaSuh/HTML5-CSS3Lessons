jQuery(document).ready(function() {
    jQuery('.whoWeAre').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jello',
        offset: 300
    });

    jQuery('.servicesWhatIDoInside').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 300
    });

    jQuery('.partLeft-1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });

    jQuery('.partLeft-2, .partLeft-3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 300
    });
    jQuery('.partRight-2, .partRight-3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });

    jQuery('.partRight-1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });

    jQuery('.logoBlock').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rubberBand',
        offset: 300
    });
    jQuery('.blogInside').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jackInTheBox',
        offset: 300
    });
    jQuery('.blog1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownLeft',
        offset: 300
    });
    jQuery('.blog2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownRight',
        offset: 300
    });
    jQuery('.blog3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });
    jQuery('.blog4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });
    jQuery('.blog5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });
    jQuery('.blog6').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });
});
