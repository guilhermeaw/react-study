import styled from 'styled-components';

interface AccordionContentProps {
  open: boolean;
}

export const Container = styled.div`
  color: black;
  border: 1px solid #eee;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  background: #fff;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  background-color: #eaeaea;
  transition: 0.3s all;
  padding: ${props => props.open ? '8px 16px' : '0'};
  max-height: ${props => props.open ? 'auto' : '0'};
`;
