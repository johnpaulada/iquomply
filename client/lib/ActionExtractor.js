class ActionExtractor {
    static extract(form) {
        return _.filter(form, function(chapter) { return chapter.selected; }).map((item) => {
            const name = item.name;
            const actions = _.filter(item.data, (question) => question.selected && question.accomplished !== 'Yes' ).map((question) => question.actions);

            return {'name': name, 'actions': actions};
        });
    }
}

export default ActionExtractor;
