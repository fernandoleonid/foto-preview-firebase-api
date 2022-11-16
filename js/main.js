'use strict'

import{openModal} from "./modal.js"
import {renderPhotos} from "./gallery.js"



renderPhotos()

document.getElementById('add-photo')
        .addEventListener('click', openModal)




