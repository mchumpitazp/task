import React from "react";
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="header" expand="xl" className="font-secondary p-4">
            <NavbarBrand href="/" className="font-primary p-4">
                <small><small>APPNWEB.DEV</small></small>
            </NavbarBrand>

            <Button className="header-btn-sm d-block d-xl-none ms-auto me-4">
                RU
            </Button>
            
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="mx-auto">
                    <NavItem className="m-3">
                        <small>О нас</small>
                    </NavItem>
                    <NavItem className="m-3">
                        <small>Услуги</small>
                    </NavItem>
                    <NavItem className="m-3">
                        <small>Работы</small>
                    </NavItem>
                    <NavItem className="m-3">
                        <small>Отзывы</small>
                    </NavItem>
                    <NavItem className="m-3">
                        <small>Контакты</small>
                    </NavItem>
                </Nav>
            </Collapse>

            <div id="header-btns" className="pe-4">
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