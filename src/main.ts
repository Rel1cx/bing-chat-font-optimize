import '@total-typescript/ts-reset'

import { waitDOMContentLoaded } from './helper'

const fontFamily = `'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`

const style = document.createElement('style')

style.id = 'bing-chat-font-optimize'
style.innerHTML = `
    body {
        font-family: ${fontFamily} !important;
    }
    .cib-serp-main, .cib-serp-main *, .cib-serp-main *:before, .cib-serp-main *:after {
        --cib-font-text: ${fontFamily} !important;
    }
`

waitDOMContentLoaded().then(() => {
    document.head.append(style)
})
