export interface Theme {
    colors: {
        background: string;
        white: string;
        primary: {
            lightest: string;
            light: string;
            main: string;
            dark: string;
            darkest: string;
        };
        success: string;
        danger: {
            weak: string;
            default: string;
            strong: string;
        };
        gray: {
            light: string;
            default: string;
            dark: string;
            darkest: string;
            black: string;
        };
    };
    fonts: {
        primary: string;
    };
}
;
