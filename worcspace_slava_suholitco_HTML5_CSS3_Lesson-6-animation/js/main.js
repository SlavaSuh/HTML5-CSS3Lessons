jQuery(document).ready(function() {
    jQuery('.forma').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInRight',
        offset: 300
    });

    jQuery('.read__more__heading ').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse infinite',
        offset: 300
    });

    jQuery('.car1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });

    jQuery('.car2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 300
    });

    jQuery('.car3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });

    jQuery('.how__we__do__block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rubberBand',
        offset: 300
    });
    jQuery('.social__links').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flash',
        offset: 300
    });
    jQuery('.happy__clients__reviews__block1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownLeft',
        offset: 300
    });
    jQuery('.happy__clients__reviews__block2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownRight',
        offset: 300
    });
    jQuery('.inside__footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
    });
});
