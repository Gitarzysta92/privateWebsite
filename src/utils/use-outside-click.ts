import { useEffect } from "react";

export function useOutsideClick(refs: any[], cb: Function) {
  useEffect(() => {

    function handleClickOutside(event: any) {
      if (!refs.some(ref => ref.current && ref.current.contains(event.target))) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);
}