import background from './interference.json';
import { useLottie } from 'lottie-react';

const Background = () => {
  const options = {
    animationData: background,
    loop: true,
    autoplay: true,
  };

  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const { View } = useLottie(options, style);
  return View;
};

export default Background;
