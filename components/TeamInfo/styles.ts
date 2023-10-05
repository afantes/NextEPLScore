import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    @media (max-width: 820px) {
        font-size: 16px;
    }
`;