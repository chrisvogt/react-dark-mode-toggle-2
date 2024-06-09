import * as React from "react";
export declare namespace DarkModeToggle {
    type Props = {
        /** Custom attributes to set on the button element. */
        readonly attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>[];
        /** Whether the toggle is currently in dark-mode */
        readonly isDarkMode: boolean;
        /** Use this to update the state that controls the `isDarkMode` prop */
        readonly onChange: (isDarkMode: boolean) => void;
        /** Size of the component. Numbers = pixels. Strings = "<number><unit>" e.g. "20px" or "1.5%" (default = "85px"); */
        readonly size?: number | string;
        /** Use this to control the speed at which the toggle animation occurs (default = 2.5) */
        readonly speed?: number;
        /** Optional className prop for the <button/> element (default = "") */
        readonly className?: string;
        /** Allow optional id prop */
        readonly id?: string;
    };
}
export declare const DarkModeToggle: React.NamedExoticComponent<DarkModeToggle.Props>;
