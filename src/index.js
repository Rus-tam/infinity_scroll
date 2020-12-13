const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
const idForRemove = document.getElementById('id-for-remove')

const winterButton = document.getElementById('winter')
const summerButton = document.getElementById('summer')
const christmasButton = document.getElementById('christmas')
const natureButton = document.getElementById('nature')
const cityButton = document.getElementById('city')
const catsButton = document.getElementById('cats')
const dogsButton = document.getElementById('dogs')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []
let initialLoad = true

//getting queryParameter meaning
const getQueryParameter = () => {
    const parameterJSON = localStorage.getItem('queryParameter')
    try {
        return parameterJSON ? JSON.parse(parameterJSON) : []
    } catch (e) {
        return []
    }
}

let queryParameter = getQueryParameter()
// Unsplash API
let count = 5
const apiKey = 'FKqHOTgeujR0boBSA4NHJTez2AlbMP8d36AF2-71rCw'
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`

//Check if all images were loaded
const imageLoaded = () => {
    queryParameter = getQueryParameter()
    ready = false
    imagesLoaded++
    if (imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
        count = 15
        apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    }
}

//Helper Function to Set Attributes on DOM Elements
const setAttributes = (element, attributes) =>{
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create Elements for links & photos, Add to DOM
const displayPhotos = () => {
    imagesLoaded = 0
    totalImages = photosArray.length
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
        //Event Listner, check when each is finished loading
        img.addEventListener('load', imageLoaded)

        //Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

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

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
    }
})

//Buttons
winterButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'winter'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

summerButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'summer'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

christmasButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'christmas'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

natureButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'nature'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

cityButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'city'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

catsButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'cats'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})

dogsButton.addEventListener('click', () => {
    location.reload()
    queryParameter = 'dogs'
    localStorage.setItem('queryParameter', JSON.stringify(queryParameter))
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${queryParameter}`
    getPhotos()
})