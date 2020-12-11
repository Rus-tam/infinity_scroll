const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

//Helper Function to Set Attributes on DOM Elements
const setAttributes = (element, attributes) =>{
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create Elements for links & photos, Add to DOM
const displayPhotos = () => {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        //Create <img> for photo
        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        //Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img)
        imageContainer.appendChild(item)

    })
}

// Unsplash API
const count = 100
const apiKey = 'FKqHOTgeujR0boBSA4NHJTez2AlbMP8d36AF2-71rCw'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()

    } catch (error) {
        //catch error here
    }
}

//On Load
getPhotos()