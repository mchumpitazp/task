import { Button } from "reactstrap";

function Hero () {
    return (
        <section id="hero">    
            <div id="hero-container" className="text-left text-lg-center px-4">
                <span id="hero-title" className="font-primary mb-3">
                    Разработка сайтов, приложений и веб-сервисов
                </span>
                <span id="hero-text" className="font-secondary px-0 px-lg-5 mb-4">
                    Мы международное агентство и готовы помочь развить свой бизнес в цифровой сфере. Наша команда занимается всем: от создания брифа до выпуска готового продукта на рынок.
                </span>
                <Button id="hero-btn" className="font-secondary me-auto mx-lg-auto mt-4">
                    Обсудить проект
                </Button>
            </div>
        </section>
    )
}

export default Hero;