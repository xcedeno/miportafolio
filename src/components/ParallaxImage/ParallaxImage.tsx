import React, { useEffect, useRef } from 'react';
import SimpleParallax from 'simple-parallax-js/vanilla';

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    scale?: number;
    orientation?: 'up' | 'down' | 'left' | 'right' | 'up left' | 'up right' | 'down left' | 'down right';
    delay?: number;
    transition?: string;
    overflow?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
    scale = 1.2,
    orientation = 'up',
    delay = 0.6,
    transition = 'cubic-bezier(0,0,0,1)',
    overflow = false,
    className,
    ...props
}) => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let instance: any = null;

        const initSimpleParallax = () => {
            if (imgRef.current && imgRef.current.parentElement) {
                try {
                    // The vanilla import should be the constructor class
                    const SP = SimpleParallax as any;
                    instance = new SP(imgRef.current, {
                        scale,
                        orientation,
                        delay,
                        transition,
                        overflow,
                    });
                } catch (e) {
                    console.error("Error initializing SimpleParallax:", e);
                }
            }
        };

        if (imgRef.current) {
            if (imgRef.current.complete) {
                initSimpleParallax();
            } else {
                imgRef.current.onload = initSimpleParallax;
            }
        }

        return () => {
            // Cleanup onload to avoid memory leaks
            if (imgRef.current) {
                imgRef.current.onload = null;
            }
            if (instance) {
                instance.destroy();
            }
        };
    }, [scale, orientation, delay, transition, overflow]);

    return <img ref={imgRef} className={className} {...props} />;
};

export default ParallaxImage;
