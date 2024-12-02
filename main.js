var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Física| Cientifica de Datos Jr.| Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cuando sientas que vas a rendirte')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong> Piensa en por qué empezaste. </strong>')
    .pauseFor(2500)
    .start();