
import { useEffect, useRef } from "react"

function useUpdateEffect(callback, dependencies) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      return callback();
    }
  }, dependencies);
}
export default useUpdateEffect;

