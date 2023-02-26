//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom" 

function Index (props) {
    //define list of artworks from loader data
    const artworks = useLoaderData();

    // for setting state on Form so that when onsubmit is executed
    //   the form can be cleared out
    
    const [subject, setSubject] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [image_url, setImage_url] = React.useState('');


    //Sytling
    const artworkContainer = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(14rem, max-content))",
      gridGap: "16px",
      justifyContent: "center"
    }
    
    const artworkCard = {
      border: "5px solid black",
      borderRadius: "20px",
      padding: "5px",
      textAlign: "center"
    }

    const centerTitle = {
      textAlign: "center"
    }
  
    const imageSize = {
      maxWidth: "200px"
    }

    const createForm = {
        fontSize: "1.5rem", 
        width: "20rem",
        margin: ".5rem",
      }
      
    const formCenter = {
      textAlign: "center"
    }   

    const createFormButton = {
      fontSize: "1.40rem",
      color: "white",
      width: "23rem",
      background: "rgb(25, 25, 25)",
      borderRadius: "10px"
    }
    
    return (
        <div>
            <h2 style={centerTitle}>Add Artwork</h2>
            <Form style={formCenter}
              onSubmit={(event) => { 
                setSubject('')
                setCategory('')
                setComments('')
                setImage_url('')
              }}
              action="/create" method="post">

                <input type="input" name="subject" placeholder="subject" 
                  value={subject} required style={createForm}
                  onChange={e => {
                    setSubject(e.target.value)
                  }}
                />     

                <input type="input" name="category" placeholder="category" 
                  value={category} required style={createForm}
                  onChange={e => {
                    setCategory(e.target.value)
                  }}
                />

                <input type="input" name="comments" placeholder="comments" 
                  value={comments} required style={createForm}
                  onChange={e => {
                    setComments(e.target.value)
                  }}
                />

                <input type="input" name="image_url" placeholder="image" 
                  value={image_url} required style={createForm}
                  onChange={e => {
                    setImage_url(e.target.value)
                  }}
                />
                <input type="submit" value="Add Artwork"
                  style={createFormButton} />
            </Form>
            <br></br>
            <br></br>
                <div style={artworkContainer}>
                  {artworks.map(artwork => (
                    <div key={artwork.id} style={artworkCard}>
                        <Link to={`/${artwork.id}`}>
                            <h2>{artwork.subject}</h2>
                        </Link>
                        <h3>Category: {artwork.category}</h3>
                        <img src={artwork.image_url} alt={artwork.subject} style={imageSize}/>
                        <br></br>
                    </div>
                  ))}
                </div>
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Index; 