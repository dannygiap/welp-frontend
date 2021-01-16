$(function () {
    new TypeIt('#types', {
        speed: 50
    })
        .type('The programers')
        .pause(300)
        .options({ speed: 200 })
        .delete(3)
        .options({ speed: 45 })
        .pause(300)
        .type('mer\'s wife sent him to teh sto.')
        .pause(500)
        .options({ speed: 200 })
        .delete(7)
        .type('he store.')
        .pause(500)
        .break()
        .options({ speed: 45 })
        .type('Her instructions were <em>"Buy butter. See if they have 10 eggs. If they do, buy ten.</em>"')
        .pause(1000)
        .break()
        .type('He came back with ten packs of butter. ')
        .pause(1000)
        .type('Because they have eggs.');
});