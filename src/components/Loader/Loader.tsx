import React, { useRef, useEffect } from 'react';
import { Wrapper, Container, Circle } from './Loader.style';
import gsap from 'gsap';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const tl = useRef<GSAPTimeline | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1 });

    if (wrapper.current)
      tl.current
        .to([wrapper.current.children], { opacity: 1, duration: 0.6, stagger: 0.5 }, '+=0.2')
        .to([wrapper.current.children], { opacity: 0, duration: 0.5 });
  }, []);
  return (
    <Wrapper>
      <h1>Loading</h1>
      <Container ref={wrapper}>
        <Circle />
        <Circle />
        <Circle />
      </Container>
    </Wrapper>
  );
};

export default Loader;
