import styled, {keyframes} from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.variant === 'outline' ? "#fff" : "#BF4F74"};
  color: ${(props) => props.variant === 'outline' ? "#BF4F74" : "#fff"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74; 
  border-radius: 3px;
  display: block;

  &:hover {
    background-color: ${(props) => props.variant !== 'outline' ? "#fff" : "#BF4F74"};
  color: ${(props) => props.variant !== 'outline' ? "#BF4F74" : "#fff"};
  }
`;

export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #F6D365 0%, #FDA085 100%);
  border: none;
  color: #ddddff;
`;

export const SubmitButton = styled(Button).attrs({
  type: 'submit'
})`
  box-shadow: 0 9x #999;
  &:active{
    background-color: ${(props) => props.variant === 'outline' ? "#fff" : "#BF4F74"};
    box-shadow: 0 5x #666;
    transform: translateY(4px);
  } 
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimetedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  z-index: 10;
  animation: ${rotate} infinite 20s linear;
`; 

//props kullanımı : ${(props) => props.variant === 'outline' ? "#fff" : "#BF4F74"};
//.attrs ile bir bileşene vasayılan yani başlangıç değeri verebiliriz.