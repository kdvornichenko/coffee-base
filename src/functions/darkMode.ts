import { useDark, useToggle } from "@vueuse/core";
const darkMode = useDark({
    selector: "html",
    attribute: "data-theme",
    valueDark: "dark",
    valueLight: "light",
    disableTransition: false,
});

const toggleDark = useToggle(darkMode);

const isDark = () => darkMode.value;

export { toggleDark, isDark, darkMode }