/*
    Javascript is Awesome
*/
//////
///


// Keeps App Body Just Below the HEader..  
var position_AppBody = function() {
    ///  Get Header Height 
    var headerHeight = $('#myIMG1').height();
    ///  Get Header Top Offset Margin
    // get current value of css attribute top
    var topMarginOffset = $('#myIMG1').css('top');
    ///  topMarginOffset == '32px'  
    // parse string value
    var parsed = topMarginOffset.split('p');
    ////// parsed === ['32','x']   
    // redefine post parsed
    topMarginOffset = parsed[0];
    ///// topMarginOffset === '32'
    // Turn from string to number 
    topMarginOffset = parseFloat(topMarginOffset);
    /////  topMarginOffset  === 32.0 
    /// Do Addition to find appBody Desired height
    var newAppBodyPosition = headerHeight + topMarginOffset + (65);

    /// Position appBody
    $('#appBody').css({
        top: newAppBodyPosition,
    });
};

//// HANDLE NAVIGATION BUTTON CLICKS  
var handle_RevoNavigation_Clicking = function() {

    $('.ruvo_navi_button').click(function(event) {
        var buttonText = $(this).text();
        alert('Clicked Button: ' + buttonText);
    });
};

/// Handle Resizing the WIndow
var resizeCount = 0;
var resize_Debouncer = null; /// empty variable for timer
$(window).resize(function(event) {
    console.log('just resized:' + resizeCount);

    clearTimeout(resize_Debouncer);
    resize_Debouncer = setTimeout(function() {
        console.log('RUNNING FUNCTION');
    }, 1000);

    resizeCount = resizeCount + 1;

    // position_AppBody();
});

//// At Start of the progam call this start up function 
$(document).ready(function(event) {
    // Make Sure app Body is Positioned right, at start of the app...  
    // alert('Hello World');
    // position_AppBody();  
    // Bind Button Clicking Events
    // handle_RevoNavigation_Clicking();
});
