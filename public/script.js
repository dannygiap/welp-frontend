$(function () {
    new TypeIt('#types', {
        speed: 50
    })
        .type('Chinese, Thai, Mexican')
        .pause(300)
        .options({ speed: 200 })
        .delete(22)
        .options({ speed: 45 })
        .pause(300)
        .type('Italian, Korean, Japanese')
        .pause(500)
        .options({ speed: 200 })
        .delete(25)
        .type('Vietnamese, American')
        .pause(500)
});