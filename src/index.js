// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix instanceof Array) {
        if (matrix[0] instanceof Array) {
            for (let i = 1; i < matrix.length; i += 2) {
                matrix[i].reverse();
            }
            let response = [];
            matrix.forEach(item => {
                item.forEach(item => {
                    response.push(item);
                });
            });
            return response;
        }
    }

    return [];
};
