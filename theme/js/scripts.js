function decode_email(coded, key) {
    shift = coded.length;
    email = "";
    for (i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i);
            email += (ltr);
        } else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
            email += (key.charAt(ltr));
        }
    }
    return email;
}

$(function() {
    $('.s-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    $('#email-contact').attr(
        'href', 
        'mailto:' + decode_email(
            'o3t3rI.8IPG3ti@dpI61.2ip', 
            'SvXNz6MaJs9hG5b1pPWocBTZQ8jgFUHIDrkYenfyw0Li2KE7CVudOlmqRtAx34'
        )
    );

    $('#developer-contact').attr(
        'href', 
        'mailto:' + decode_email(
            'd3md72x.aiUd@cI2yV.UGI', 
            'Km50jhGnYWH2DfVkNRUqCwLIST4QbxMzFeBigrJsvtZ6XAopPE7a8uldOyc913'
        )
    );
});