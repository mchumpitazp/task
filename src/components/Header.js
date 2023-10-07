import React from "react";
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="header" expand="xl" className="font-secondary py-4 px-3 px-md-4">
            <NavbarBrand href="/" className="font-primary">
                APPNWEB.DEV
            </NavbarBrand>

            <Button className="header-btn-sm d-block d-xl-none ms-auto me-2">
                RU
            </Button>
            
            <NavbarToggler onClick={toggle} />

            <Nav navbar className="mx-auto d-none d-xl-flex">
                    <NavItem className="mx-3 my-2">
                        О нас
                    </NavItem>
                    <NavItem className="mx-3 my-2">
                        Услуги
                    </NavItem>
                    <NavItem className="mx-3 my-2">
                        Работы
                    </NavItem>
                    <NavItem className="mx-3 my-2">
                        Отзывы
                    </NavItem>
                    <NavItem className="mx-3 my-2">
                        Контакты
                    </NavItem>
                </Nav>

            <Collapse isOpen={isOpen} navbar className="text-center d-xl-none">
                <div id="header-btn-close" className="text-end py-3 px-2">
                    <button onClick={toggle} type="button" className="btn-close btn-close-white navbar-toggler" aria-label="Close"></button>
                </div>
                
                <div id="header-collapsed" className="d-xl-none">
                    <NavbarBrand className="font-primary text-white pb-5 d-block d-md-none">
                        APPNWEB.DEV
                    </NavbarBrand>
                    <Nav navbar className="mx-auto">
                        <NavItem className="mx-3 my-3">
                            О нас
                        </NavItem>
                        <NavItem className="mx-3 my-3">
                            Услуги
                        </NavItem>
                        <NavItem className="mx-3 my-3">
                            Работы
                        </NavItem>
                        <NavItem className="mx-3 my-3">
                            Отзывы
                        </NavItem>
                        <NavItem className="mx-3 my-3">
                            Контакты
                        </NavItem>
                    </Nav>
                </div>    
                <NavbarBrand className="font-primary text-white d-none d-md-block">
                    APPNWEB.DEV
                </NavbarBrand>
            </Collapse>

            <div id="header-btns">
                <Button className="header-btn-sm d-none d-xl-block ms-auto me-4">
                    RU
                </Button>

                <Button id="header-btn" className="d-none d-xl-block">
                    <small>Заказать звонок</small>
                </Button>
            </div>
        </Navbar>
    )
}

export default Header;