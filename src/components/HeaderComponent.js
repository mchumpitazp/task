import React from "react";
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="lg" className="font-secondary px-2 py-4">
            <NavbarBrand href="/" className="font-primary">
                <small><small>APPNWEB.DEV</small></small>
            </NavbarBrand>

            <Button color="outline-secondary btn-sm px-3 py-1 ms-auto d-block d-lg-none">
                <small>RU</small>
            </Button>
            
            <NavbarToggler onClick={toggle} className="ms-3"/>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="mx-auto">
                    <NavItem className="m-2">
                        <small>О нас</small>
                    </NavItem>
                    <NavItem className="m-2">
                        <small>Услуги</small>
                    </NavItem>
                    <NavItem className="m-2">
                        <small>Работы</small>
                    </NavItem>
                    <NavItem className="m-2">
                        <small>Отзывы</small>
                    </NavItem>
                    <NavItem className="m-2">
                        <small>Контакты</small>
                    </NavItem>
                </Nav>
            </Collapse>

            <Button color="outline-secondary btn-sm px-3 py-1 me-3 d-none d-lg-block">
                <small>RU</small>
            </Button>

            <Button color="outline-dark px-4 py-2" className="d-none d-lg-block">
                <small>Заказать звонок</small>
            </Button>
        </Navbar>
    )
}

export default Header;