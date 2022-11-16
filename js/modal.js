'use strict'

import { postPhoto } from "./photos.js"
import {renderPhotos} from "./gallery.js"
import { uploadImage } from "./firebase.js"
import{preview} from "./preview.js"

const openModal = () => document.getElementById('modal').showModal()

const clearModal = () => {
    document.getElementById('preview').src = '../img/add.png'
}

const closeModal = () => {
    document.getElementById('modal').close()
    clearModal()
}
const salveImage = async () => {

    const spiner = document.querySelector('.spinner-container')
    spiner.showModal()

    const image = document.getElementById('upload').files[0]
    const nameImage = document.getElementById('name').value
    const nameFile = nameImage.replace(' ','-').toLowerCase()

    const urlImage =  await uploadImage(image, nameFile)

    const photo = {
        name: nameImage,
        foto: urlImage,
    };
    
    closeModal();
    await postPhoto(photo)
    renderPhotos()

    spiner.close()
}

const imagePreview = () => {
    const spiner = document.querySelector('.spinner-container')
    spiner.showModal()
    preview('upload', 'preview')
    spiner.close()
}

document.getElementById('close')
        .addEventListener('click', closeModal)

document.getElementById('cancelar')
        .addEventListener('click', closeModal)

document.getElementById('salve')
        .addEventListener('click', salveImage)

document.getElementById('upload')
        .addEventListener('change', imagePreview)

export {
    openModal
}