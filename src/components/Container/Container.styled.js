import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 30px 10px 10px 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 640px;
  }
  @media screen and (min-width: 1440px) {
    width: 1180px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;
