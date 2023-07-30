const phone = "576px"
const tablet = "768px"
const desktop = "992px"
const largeDesktop = "1200px"
const largerDesktop = "1400px"

export const theme = {
    breakpoints: {
        sm: `@media (min-width: ${phone})`,
        md: `@media (min-width: ${tablet})`,
        lg: `@media (min-width: ${desktop})`,
        xl: `@media (min-width: ${largeDesktop})`,
        xxl: `@media (min-width: ${largerDesktop})`
    },
    fonts: {
        body: "Roboto, sans-serif",
    },
    colors: {
        text: "#333",
        background: "#fff",
        primary: "#F02A3F",
        secondary: "#272829",
        muted: "#a2a5b5",
    },
    light: {
        body: "white",
        color: "#000",
        linkColor: "#000",
        logoBg: "#FFF3F3",
        footerLinkBgHover: "#eff1f7",
        footerColor: "#7a7f8f",
        circleBg: "#FFF6FB",
        sectionBg: "#FAFAFA",
        muted: "#a2a5b5",
        cardBg: "#ffffff",
        buttons: {
            primary: {
                color: "#F02A3F",
                backgroundColor: "transparent",
                borderColor: "#F02A3F",
            },
            secondary: {
                color: "white",
                backgroundColor: "#272829",
                borderColor: "#272829",
            },
        },
    },
    dark: {
        body: "#101116",
        color: "#e3e5ed",
        linkColor: "#f2f3f7",
        logoBg: "#08090c",
        footerLinkBgHover: "#292c36",
        footerColor: "#989cab",
        circleBg: "#FFF6FB",
        sectionBg: "#15161c",
        muted: "#a2a5b5",
        cardBg: "#22232c",
        buttons: {
            primary: {
                color: "#F02A3F",
                backgroundColor: "transparent",
                borderColor: "#F02A3F",
            },
            secondary: {
                color: "white",
                backgroundColor: "#282a34",
                borderColor: "#282a34",
            },
        },
    }
};

//export const sm = theme.breakpoints.sm
//export const md = theme.breakpoints.md
//export const lg = theme.breakpoints.lg
//export const xl = theme.breakpoints.xl
//export const xxl = theme.breakpoints.xxl


