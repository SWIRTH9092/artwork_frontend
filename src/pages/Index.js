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

    const addContainer = {
      display: "flexbox",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#F6F1D1",
      color: "#0B2027"
    }

    const transistionContainer = {
      textAlign: "center",
      backgroundColor: "#70A9A1", 
      color: "#0B2027"   
    }
    const artworkContainer = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(14rem, max-content))",
      gridGap: "16px",
      justifyContent: "center",
      backgroundColor: "#70A9A1"
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
      width: "200px"
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
      width: "23rem",
      background: "#0B2027",
      color: "#F6F1D1",
      borderRadius: "10px"
    }
    
    return (
        <div>
            <div style={addContainer}>
              <br></br>
              <h2 style={centerTitle}>Add to the Collection</h2>
              <Form style={formCenter}
                onSubmit={(event) => { 
                  setSubject('')
                  setCategory('')
                  setComments('')
                  setImage_url('')
                }}
                action="/create" method="post">

                  <input type="text" name="subject" placeholder="subject" 
                    value={subject} required style={createForm}
                    onChange={e => {
                      setSubject(e.target.value)
                    }}
                  />     

                  <input type="text" name="category" placeholder="category" 
                    value={category} required style={createForm}
                    onChange={e => {
                      setCategory(e.target.value)
                    }}
                  />
                  <br></br>
                  <input type="text" name="comments" placeholder="comments" 
                    value={comments} required style={createForm}
                    onChange={e => {
                      setComments(e.target.value)
                    }}
                  />

                  <input type="text" name="image_url" placeholder="image" 
                    value={image_url} required style={createForm}
                    onChange={e => {
                      setImage_url(e.target.value)
                    }}
                  />
                  <br></br>
                  <br></br>
                  <input type="submit" value="Add Artwork"
                    style={createFormButton} />
              </Form>
              <br></br>
              <br></br>
            </div>
            <div style={transistionContainer}>
                <br></br>
                <br></br>
                <h1>The Collection</h1>
                <br></br>
                <br></br>
            </div>
            <div>
                <div style={artworkContainer}>
                  {artworks.map(artwork => (
                    <div key={artwork.id} style={artworkCard}>
                        <img src={artwork.image_url} alt={artwork.subject} style={imageSize}/>
                        <Link to={`/${artwork.id}`}>
                            <h2>{artwork.subject}</h2>
                        </Link>
                        <h3>Category: {artwork.category}</h3>
                        <br></br>
                    </div>
                  ))}
                </div>
              </div>
              <div style={transistionContainer}>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Index; 