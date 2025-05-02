$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

    $.fn.mauGallery.methods.prevImage = function(lightboxId) {
        const images = $(".gallery-item:visible");
        let currentSrc = $("#" + lightboxId + " .lightboxImage").attr("src");
        let currentIndex = images.toArray().findIndex(img => $(img).attr("src") === currentSrc);
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        $("#" + lightboxId + " .lightboxImage").attr("src", $(images[prevIndex]).attr("src"));
    }

    $.fn.mauGallery.methods.nextImage = function(lightboxId) {
        const images = $(".gallery-item:visible");
        let currentSrc = $("#" + lightboxId + " .lightboxImage").attr("src");
        let currentIndex = images.toArray().findIndex(img => $(img).attr("src") === currentSrc);
        let nextIndex = (currentIndex + 1) % images.length;
        $("#" + lightboxId + " .lightboxImage").attr("src", $(images[nextIndex]).attr("src"));
    }
});
