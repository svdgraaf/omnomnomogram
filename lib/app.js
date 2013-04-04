exports.views = {
    usernames: {
        map: function (doc) {
            emit(doc.user.username, null);
        }
    },
    images: {
        map: function (doc) {
            emit(doc.created_time, doc);
        }
    }
};