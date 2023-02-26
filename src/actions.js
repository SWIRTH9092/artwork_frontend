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
// Delete Action
//---------------------------

export const actionsDelete = async ({params}) => {

    await fetch(URL + "/artworks/" + params.id, {
        method: "delete"
    })
    return redirect("/")
}