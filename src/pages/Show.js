import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const artwork = useLoaderData()
  
    //Styling  
    const artworkImage = {
      maxWidth: "300px"
    }
    const showContainer = {
      display: "flexbox",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#F6F1D1",
      color: "#0B2027"
    }

    const updateContainer = {
      textAlign: "center",
      backgroundColor: "#70A9A1",
      color: "#0B2027"
    }

    const createForm = {
      fontSize: "1.25rem", 
      width: "20rem",
      margin: ".5rem"
    }
    const formLabel = {
      fontSize: "1.25rem", 
      width: "20rem",
      margin: ".5rem",
      fontWeight:  "bold"    
    }
    const artworkResize = {
      resize: "both"
    }  

    const updateFormButton = {
      fontSize: "1.40rem",
      width: "23rem",
      background: "#40798C",
      color: "#F6F1D1",
      borderRadius: "10px",
      border: "5px solid #0B2027",

    }

    const deleteFormButton = {
      fontSize: "1.40rem",
      width: "23rem",
      background: "#0B2027",
      color: "#F6F1D1",
      border: "5px solid red",
      borderRadius: "10px"
    }
    return (
      <div>
        <div style={showContainer}>
          <br></br>
          <h1>{artwork.subject}</h1>
          <img src={artwork.image_url} alt={artwork.subject} style={artworkImage} />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div style={updateContainer}>
          <br></br>
          <h2>Update {artwork.subject}</h2>
          <div>
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
              <br></br>          
              <input type="submit" style={updateFormButton} value={`Update ${artwork.subject}`} />
            </Form>
            <br></br>
            <br></br>
          </div>
          <Form action={`/delete/${artwork.id}`} method="post">
            <input type="submit" style={deleteFormButton} value={`Delete ${artwork.subject}`} />
          </Form>
          <br></br>
          <br></br> 
          <br></br>
        </div> 
      </div>
    )
  }
  
  export default Show
  