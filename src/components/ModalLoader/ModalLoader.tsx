import { FunctionComponent } from 'react';
import { StyledLoader } from './ModalLoader.style';

interface ModalLoaderProps {}

const ModalLoader: FunctionComponent<ModalLoaderProps> = () => {
  return <StyledLoader />;
};

export default ModalLoader;
