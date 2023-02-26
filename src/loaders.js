


//----------------------
//  loader for Index Page
//----------------------
const URL = "https://sw-artworks-bkend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/artworks")
    const places = await response.json()
    return places
}

//----------------------
//  loader for Show Page
//----------------------

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/artworks/" + params.id)
    const places = await response.json()
    return places
}