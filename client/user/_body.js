Template.userBody.onRendered(function() {
    $('div.item:first').addClass('active');
});

Template.userBody.helpers({
    questions: function() {
        return [
            {
                question: 'Are you gay?'
            },
            {
                question: 'Are you straight?'
            },
            {
                question: 'Are you curved?'
            }
        ];
    }
});
