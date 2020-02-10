import { setMode } from "@stencil/core";

const themes = [ "bonbon", "bootstrap" ];

const mode = document.documentElement.getAttribute("jn-theme") || "bootstrap"

setMode(() => (themes.includes(mode) ? mode : "bootstrap"))
