'use strict'

const url = 'https://api-senai.herokuapp.com/fotos'

const getPhotos = async() => {
    const response = await fetch(url)
    return await response.json()
}

const postPhoto = async (aluno) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(aluno),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);
};

export { getPhotos, postPhoto}