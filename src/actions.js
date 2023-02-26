//---------------------------
// actions for routes
//---------------------------
//---------------------------
// import dependencies
//---------------------------
import { redirect } from "react-router-dom";
//---------------------------
// URL for data
//---------------------------

const URL = "https://sw-artworks-bkend.onrender.com"

//---------------------------
// Create Action
//---------------------------

export const actionsCreate = async ({ request }) => {
   //get new place data from Form
   const formData = await request.formData()
   //set up our new artwork to match schema
   const newArtwork = {
       subject: formData.get("subject"),
       category: formData.get("category"),
       comments: formData.get("comments"),
       image_url: formData.get("image_url")
   }
   //send new place to our API
   await fetch(URL + "/artworks/", {
       method: "post",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(newArtwork),
   })
   // redirect to index
   return redirect("/")
}

//---------------------------
// Update Action
//---------------------------

export const actionsUpdate = async ({request, params}) => {
    const formData = await request.formData()

    const updatedArtwork = {
        subject: formData.get("subject"),
        category: formData.get("category"),
        comments: formData.get("comments"),
        image_url: formData.get("image_url")
    }
    console.log("updated artwork", updatedArtwork)
    console.log("fetch url:", URL + "/artworks/" + params.id + "/")
    await fetch(URL + "/artworks/" + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedArtwork)
    })

    return redirect("/")
}


//---------------------------
// Delete Action
//---------------------------

export const actionsDelete = async ({params}) => {

    await fetch(URL + "/artworks/" + params.id, {
        method: "delete"
    })
    return redirect("/")
}