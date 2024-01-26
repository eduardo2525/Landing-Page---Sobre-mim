AOS.init();

const dataDoAniversario = new Date("jan 31, 2024");
const timeStampDoAnivessario = dataDoAniversario.getTime();

const time = setInterval(function() {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaAteOEvento = timeStampDoAnivessario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(time);
        document.getElementById("expirado").innerHTML = `Evento expirado`;
    }
}, 1000);
