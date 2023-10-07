import { Col, Row } from "reactstrap";

function About() {
    return(
        <section id="about">
            <div className="px-3 px-md-4">
                <span id="about-title" className="font-primary">О нас в цифрах</span>
                <br/>
                <br/>
                <br/>

                <Row xs={1} md={1} xl={3} className="px-3">
                    <Col className="py-3 px-xl-3">
                        <div className="about-cards d-flex flex-column">
                            <span className="about-item-title font-primary pb-3">4 страны</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                    <Col className="py-3 px-xl-3">
                        <div className="about-cards d-flex flex-column">
                            <span className="about-item-title font-primary pb-3">57 проектов</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                    <Col className="py-3 px-xl-3"> 
                        <div className="about-cards d-flex flex-column">
                            <span className="about-item-title font-primary pb-3">10 лет опыта</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                </Row>
            </div>
            <br/>
            <br/>
        </section>
        
    )
}

export default About;