import { FunctionComponent } from 'react';
import { StyledError } from './Error.style';

interface ErrorProps {
  message: String;
}

const Error: FunctionComponent<ErrorProps> = ({ message }) => {
  return <StyledError>{message.includes('404') ? 'There is nothing here...' : message}</StyledError>;
};

export default Error;
