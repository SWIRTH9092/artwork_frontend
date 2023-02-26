import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const artwork = useLoaderData()
  
    //Styling  
    const artworkImage = {
      maxWidth: "300px"
    }

    const showPage = {
      textAlign: "center"
    }
    return (
      <div style={showPage}>
        <br></br>
        <img src={artwork.image_url} alt={artwork.subject} style={artworkImage} />
        <h1>{artwork.subject}</h1>
        <h2>{artwork.category}</h2>
        <h2>{artwork.comments}</h2>

        <h2>Update {artwork.Subject}</h2>
        <Form action={`/update/${artwork.id}`} method="post">
          <input type="input" name="subject" placeholder="subject" defaultValue={artwork.title}/>
          <input type="input" name="category" placeholder="category" defaultValue={artwork.category}/>
          <input type="input" name="comments" placeholder="comments" defaultValue={artwork.comments}/>
          <input type="input" name="url_image" placeholder="url image address" defaultValue={artwork.image_url}/>
          <input type="submit" value={`update ${artwork.subject}`}/>
        </Form>

        <h2>Delete {artwork.subject}</h2>
        <Form action={`/delete/${artwork.id}`} method="post">
          <input type="submit" value={`delete ${artwork.subject}`} />
        </Form>
      </div>
    )
  }
  
  export default Show
  