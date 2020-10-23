import React from "react"
import "./Sidebar.css"
import imgAnuncio from "../../img/anuncie-300-600.png"

export default function Sidebar() {
    <>
        <div id="sidebar">
            <h3 id="sidebarTitle">Últimas postagens</h3>
            <div class="itemSidebar">
                {/* {Card} */}
            </div>
            <div id="anuncio">
                <img src={imgAnuncio} alt="Anuncie aqui"/>
            </div>
        </div>
    </>
}