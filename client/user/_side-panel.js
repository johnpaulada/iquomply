Template.userDashboardAside.onRendered(function() {
    $('.side-panel').scotchPanel({
        containerSelector: 'body', // As a jQuery Selector
        direction: 'left', // Make it toggle in from the left
        duration: 600, // Speed in ms how fast you want it to be
        transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
        clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
        distanceX: '300px', // Size fo the toggle
        enableEscapeKey: true // Clicking Esc will close the panel
    });
});
