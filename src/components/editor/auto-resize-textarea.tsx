"use client";

import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    type TextareaHTMLAttributes,
} from "react";

type AutoResizeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const AutoResizeTextarea = forwardRef<HTMLTextAreaElement, AutoResizeTextareaProps>(
    function AutoResizeTextarea({ className, rows = 1, ...props }, forwardedRef) {
        const innerRef = useRef<HTMLTextAreaElement | null>(null);

        useImperativeHandle(forwardedRef, () => innerRef.current as HTMLTextAreaElement, []);

        useEffect(() => {
            const element = innerRef.current;
            if (!element) return;

            element.style.height = "0px";
            element.style.height = `${element.scrollHeight}px`;
        }, [props.value]);

        return (
            <textarea
                {...props}
                ref={innerRef}
                rows={rows}
                className={className}
            />
        );
    },
);
