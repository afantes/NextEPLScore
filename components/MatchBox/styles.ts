import styled from 'styled-components';

export const MatchContainer = styled.div`
    background-color: #f7f7f7;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`;