class ActionExtractor {
    static extract(form) {
        return _.filter(form, function(chapter) { return chapter.selected; }).map((item) => {
            const name = item.name;
            const actions = _.filter(item.data, function(question) { return question.selected; }).map((question) => {question.actions});

            return {'name': name, 'actions': actions};
        });
    }
}

export default ActionExtractor;
