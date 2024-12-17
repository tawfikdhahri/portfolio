import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false // Prevent FontAwesome from adding its own CSS

library.add(fab, fas)
