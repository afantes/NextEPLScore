import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #87ceeb;
    color: #333;
    border-radius: 8px;
    width: 70px;
    height: 30px;

    @media (max-width: 820px) {
        width: 60px;
        height: 30px;
        margin-bottom: 5px;
    }
`;