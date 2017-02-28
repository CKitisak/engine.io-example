module.exports = function(req, res) {
    res.send({
        error: 0,
        result: [
            { id: 1, name: 'Kitisak' },
            { id: 2, name: 'Chayathorn' },
            { id: 3, name: 'Kreangsuk' },
            { id: 4, name: 'Thanaphum' }
        ]
    });
};
