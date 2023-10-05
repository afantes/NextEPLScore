import styled from 'styled-components';

interface IconContainerProps {
    isFavorite: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
    font-size: 24px;
    color: ${(props) => (props.isFavorite ? 'gold' : 'gray')};
    cursor: pointer;

    @media (max-width: 820px) {
        font-size: 20px;
    }
`;