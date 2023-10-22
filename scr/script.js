'use strict';

var $container = document.getElementById('js-container');

function getHour(){
    var $data = new Date();
    var $horas = $data.getHours();
    var $minutos = $data.getMinutes();
    var $segundos = $data.getSeconds();
    var $classe = "AM";
    
    if($horas == 12){
        $horas = 0;
    }

    if($horas > 12){
        $horas = $horas - 12;
        $classe = "PM";
    }

    $horas = formatarTempo($horas);
    $minutos = formatarTempo($minutos);
    $segundos = formatarTempo($segundos);
    
    return $horas + " : " + $minutos + " : " + $segundos + "  " + $classe;
}

function formatarTempo(tempo){
    return tempo < 10 ? "0" + tempo : tempo;
}

function mostrarRelogio(x){
    $container.textContent = x;
}

mostrarRelogio(getHour());

setInterval(function(){
    mostrarRelogio(getHour());
}, 1000)


///dark mode///
const $body = document.querySelector('body');
const $btn = document.getElementById('checkbox');

$btn.addEventListener('change', function(){
    $body.classList.toggle('modo_noturno');
});

