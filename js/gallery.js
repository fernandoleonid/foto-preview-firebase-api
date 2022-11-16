'use strict'

import {getPhotos} from "./photos.js"

const renderPhotos = async () => {

    const gallery = document.getElementById('gallery')
    const photos =  await getPhotos()
    const createImage = ({foto, name}) => {
        const img = document.createElement('img')
        img.src = foto
        img.title = name
        return img
    }
    
    const images = photos.map(createImage)

    gallery.replaceChildren(...images)
}

export {
    renderPhotos
}