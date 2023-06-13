import { useEffect, useState } from "react";

const useCountdown = (callBack) => {
  const [countDown, setCountDown] = useState(10);
  const resetter = () => {
    setCountDown(10);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown == 0) {
        setCountDown(10);
        if (callBack) callBack();
      } else {
        setCountDown(countDown - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  return [countDown, resetter];
};

export { useCountdown };
