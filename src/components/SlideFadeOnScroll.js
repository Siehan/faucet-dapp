import { useRef } from "react";
import { SlideFade } from "@chakra-ui/transition";
import { useInViewport } from "react-in-viewport";

const SlideFadeOnScroll = ({ children, offsetY = "60px" }) => {
  const myRef = useRef();
  const { enterCount } = useInViewport(myRef, { threshold: 0.1 }, {}, {});
  return (
    <SlideFade
      ref={myRef}
      in={enterCount}
      offsetY={offsetY}
      delay={{ enter: 0.25 }}
      transition={{
        enter: { duration: 0.6 },
      }}
    >
      {children}
    </SlideFade>
  );
};

export default SlideFadeOnScroll;
