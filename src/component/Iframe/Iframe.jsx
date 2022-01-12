import React from 'react'

function Iframe() {
    return (
        <div>
            <iframe name="contenedorPlayer"
            class="cuadroBordeado"
             allow={"autoplay"} 
             width={"100%"} 
             height={"110px"}
            scrolling={"no"}
             src="https://cp.usastreams.com/html5-player-barra-responsive.aspx?stream=https://server7.hostradios.com/8066/stream&fondo=10&formato=mpeg&color=3&titulo=2&autoStart=1&vol=5&nombre=Radio+MOON&botonPlay=4&server=https://server7.hostradios.com/status.xslCHUMILLASmount=/8066/status.xslCHUMILLASmount=/stream">
                  </iframe>
        </div>
    )
}

export default Iframe
