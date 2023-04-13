import { setupSliders } from './sliders.js'
import { setupTogglers } from "./toggler.js"
import { setupScroll } from "./scroll.js"
import { setupZoomer } from "./zoom.js"
import { setupFilter } from "./filter.js";
import { services } from "./data.js"
import { autoRerender, render, rerender } from "./render.js"


(function () {
    setupSliders()
    setupTogglers()
    setupScroll()
    setupZoomer()
    autoRerender('[data-role="filter-list"]', services.electric)
    setupFilter()
})()
