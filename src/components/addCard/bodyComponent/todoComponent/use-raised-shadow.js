import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export function useRaisedShadow(value) {
    const boxShadow = useMotionValue("0px 0px 0px rgba(0,0,0,0.15)");

    useEffect(() => {
        return value.onChange((latest) => {
            const intensity = Math.min(1, Math.abs(latest) / 100);
            const shadow = `0px ${intensity * 10}px ${intensity * 20}px rgba(0,0,0,0.15)`;
            boxShadow.set(shadow);
        });
    }, [value, boxShadow]);

    return boxShadow;
}
