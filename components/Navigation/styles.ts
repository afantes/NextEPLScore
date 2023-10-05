import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    background-color: #ebe2e2;
    padding: 10px;
    border-bottom: 1px solid #e1e1e1;
    border-radius: 8px;
    width: 40%;
    margin: auto;
    margin-top: 15px;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    margin: 0 15px;
    padding: 8px 16px;
    border: 1px solid;
    background-color: #dfcaca;
    border-color: #2b46f4;
    position: relative;

    &.active {
        background-color: #6bbeea86;
        border-color: yellow;
        border-radius: 4px;
    }
`;

export const NavLink = styled.div`
    font-size: 16px;
    padding: 8px 16px;
    font-weight: bold;
    transition: color 0.3s;
    color: #000;
`;