import { Col, Container, Row } from "reactstrap";

function About() {
    return(
        <section id="about">
            <Container>
                <span id="about-title" className="font-primary">О нас в цифрах</span>
                <br/>
                <br/>
                <br/>

                <Row xs={1} md={3} className="px-4">
                    <Col>
                        <div className="d-flex flex-column py-4">
                            <span className="about-item-title font-primary">4 страны</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column py-4">
                            <span className="about-item-title font-primary">57 проектов</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column py-4">
                            <span className="about-item-title font-primary">10 лет опыта</span>
                            <span className="about-item-text font-secondary">Наша компания - эксперт в цифровой сфере, предлагающая полный спектр услуг для развития вашего бизнеса.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
        </section>
        
    )
}

export default About;