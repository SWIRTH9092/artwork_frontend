import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const artwork = useLoaderData()
  
    //Styling  
    const artworkImage = {
      maxWidth: "300px"
    }
    const ShowContainer = {
      display: "flexbox",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#F6F1D1",
      color: "#0B2027"
    }
    const createForm = {
      fontSize: "1.25rem", 
      width: "20rem",
      margin: ".5rem",
      resize: "hortizontal"
    }
    const formLabel = {
      fontSize: "1.25rem", 
      width: "20rem",
      margin: ".5rem",
      resize: "hortizontal",
      fontWeight:  "bold"    
    }
    const artworkResize = {
      resize: "both"
    }  

    const createFormButton = {
      fontSize: "1.40rem",
      color: "#F6F1D1",
      width: "23rem",
      background: "#0B2027",
      borderRadius: "10px"
    }
    return (
      <div>
        <div style={ShowContainer}>
          <br></br>
          <h1>{artwork.subject}</h1>
          <img src={artwork.image_url} alt={artwork.subject} style={artworkImage} />

          <h2>Update {artwork.subject}</h2>
          <div style={artworkResize}>
            <Form action={`/update/${artwork.id}`} method="post"> 
              <label style={formLabel}>  Subject:</label>
              <input 
                type="text" 
                name="subject" 
                placeholder="subject" 
                style={createForm}
                defaultValue={artwork.subject} 
                required />
              <br></br>  
              <label style={formLabel}> Category:</label>
              <input 
                type="text" 
                name="category" 
                placeholder="category" 
                style={createForm} 
                defaultValue={artwork.category} 
                required />
              <br></br>
              <label style={formLabel}>Comments:</label>
              <input 
                type="textarea" 
                name="comments" 
                placeholder="comments" 
                style={createForm}defaultValue={artwork.comments} 
                required />
              <br></br>
              <label style={formLabel}>Image URL:</label>
              <input 
                type="text" 
                name="image_url" 
                placeholder="url image address" 
                style={createForm} 
                defaultValue={artwork.image_url} 
                required />
              <br></br>
              <br></br>            
              <input type="submit" style={createFormButton} value={`Update ${artwork.subject}`} />
            </Form>
          </div>
          <h2>Delete {artwork.subject}</h2>
          <Form action={`/delete/${artwork.id}`} method="post">
            <input type="submit" style={createFormButton} value={`delete ${artwork.subject}`} />
          </Form>
          <br></br>
          <br></br> 
          <br></br>
        </div> 
      </div>
    )
  }
  
  export default Show
  