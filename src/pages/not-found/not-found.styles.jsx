import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;
`;

export const ErrorCode = styled.div`
  background-color: #fff;
  position: relative;
  font-size: 30vmin;
  font-weight: 900;
  letter-spacing: 5vmin;
  text-shadow: 2px -1px#000, 4px -2px #0a0a0a, 6px -3px 0 #0f0f0f, 8px -4px 0 #141414,
    10px -5px 0 #1a1a1a, 12px -6px 0 #1f1f1f, 14px -7px 0 #242424, 16px -8px 0 #292929;

  &::before {
    content: '';
    background-color: #675ab7;
    background-image: radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)),
      radial-gradient(closest-side at 50% 50%, #e91e6e 100%, rgba(0, 0, 0, 0));
    background-repeat: repeat-x;
    background-size: 40vmin 40vmin;
    background-position: -100vmin 20vmin, 100vmin -25vmin;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    animation: moving 10s linear infinite both;
    display: block;
    position: absolute;

    @keyframes moving {
      to {
        background-position: 100vmin 200vmin, -100vmin -25vmin;
      }
    }
  }
`;

export const ErrorText = styled.div`
  font-weight: 400;
  font-size: 5vmin;
  margin-bottom: 4vmin;
`;

export const OptionSpan = styled.span`
  font-size: 10vmin;
`;
