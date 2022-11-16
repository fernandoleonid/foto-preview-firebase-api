'use strict';

const preview = (idFile, idImg) => {
    const file = document.getElementById(idFile).files[0];
    const imagePreview = document.getElementById(idImg);
    const fileReader = new FileReader();

    fileReader.onloadend = () => (imagePreview.src = fileReader.result);

    if (file) {
        fileReader.readAsDataURL(file);
    } else {
        imagePreview.src = './img/foto.png';
    }
};

export {preview};
