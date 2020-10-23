import React from "react"
import "./Banner.css"
import imgBanner from "../../img/img_banner.png"

const Banner = () => {
    return (
        <div className="Banner">
            <img id="img-banner" src={imgBanner} alt="Banner blog" />
            <h1 className="title-banner">Blog Tecnológico</h1>
            <p className="paragraph-banner">O melhor blog sobre tecnologia!</p>
        </div>
        

    )

}

export default Banner
