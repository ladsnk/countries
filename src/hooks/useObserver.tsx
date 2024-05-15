import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseObserverProps {
  callback: () => void;
}

const useObserver = ({ callback }: UseObserverProps) => {
  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoading(true);
      callback();
      setLoading(false);
    }
  }, [inView, callback]);

  return { ref, loading };
};

export default useObserver;
