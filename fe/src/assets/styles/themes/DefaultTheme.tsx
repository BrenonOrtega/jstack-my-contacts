import { Theme } from ".";

const DefaultTheme: Theme = {
    colors: {
        background: "#F6F5FC",
        white: "#FFF",
        primary: {
            lightest: "#F6F5FC",
            light: "#E0E3FF",
            dark: "#5061FC",
            darkest: "3346F0",
            main: "#6674F4",
        },
        success: "#51CA73",
        danger: {
            weak: "#F97171",
            default: "#FC5050",
            strong: "#F63131",
        },
        gray: {
            light: "#FFF",
            default: "#E6E6E6",
            dark: "#BCBCBC",
            darkest: "#7A7A7A",
            black: "#222222",
        },
    },
    fonts: {
        primary: "'Sora', sans-serif"
    }
};

export default DefaultTheme;