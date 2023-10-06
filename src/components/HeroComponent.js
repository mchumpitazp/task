import { Container, Button } from "reactstrap";

function Hero () {
    return (
        <section id="hero" className="mb-4">    
            <Container id="hero-container" className="text-left text-lg-center">
                <span id="hero-title" className="font-primary">
                    Разработка сайтов, приложений и веб-сервисов
                </span>
                <br/>
                <span id="hero-text" className="font-secondary px-0 px-lg-5">
                    Мы международное агентство и готовы помочь развить свой бизнес в цифровой сфере. Наша команда занимается всем: от создания брифа до выпуска готового продукта на рынок.
                </span>
                <br/>
                <br/>
                <br/>
                <Button id="hero-btn" color="primary" className="font-secondary px-5 py-3 px-md-4 py-md-2  me-auto mx-lg-auto">
                    Обсудить проект
                </Button>
            </Container>
        </section>
    )
}

export default Hero;