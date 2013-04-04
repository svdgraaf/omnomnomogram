exports.views = {
    usernames: {
        map: function (doc) {
            emit(doc.user.username, null);
        }
    }
};