import styled from 'styled-components';

/*체크 표시 추가하기*/
function Option ({ usage = 'option', color, onClick, cardUrl }) {
    return (
        <selectOption
            $usage={usage}
            color={color}
            onClick={onClick}
            $cardUrl={cardUrl}
        >
        </selectOption>
    );
}

const selectOption = styled.div`
    display: flex;
    width: 168px;
    height: 168px;
    border-radius: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.08);

    background: ${({ color, $cardUrl }) =>
      $cardUrl
        ? `url(${$cardUrl}) center/cover`
        : (() => {
            switch (color) {
                case 'beige':
                    return color.var(--Orange-200);
                case 'purple':
                    return color.var(--Purple-200);
                case 'blue':
                    return color.var(--Blue-200);
                case 'green':
                    return color.var(--Green-200);
                default:
                    return 'none';
            }
        })()};

    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default Option;