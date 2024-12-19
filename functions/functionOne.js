async function demoFunctionOne(param01) {
    let result = {};
    try {
        result = {
            message: 'Сообщение о выполнении задания lab.',
            firstParameter: `${param01} первый параметр`,
            secondParameter: 'lab второй параметр',
        };
    } catch (err) {
        result = { error: err.message };
    } finally {
        //
    }
    return result;
}

module.exports = demoFunctionOne;
