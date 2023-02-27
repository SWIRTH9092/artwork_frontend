


//----------------------
//  loader for Index Page
//----------------------
const URL = "https://sw-artworks-bkend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/artworks/")
    const artworks = await response.json()
    return artworks
}

//----------------------
//  loader for Show Page
//----------------------

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/artworks/" + params.id)
    const artwork = await response.json()
    return artwork
}