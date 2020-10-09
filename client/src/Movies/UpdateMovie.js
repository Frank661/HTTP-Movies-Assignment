import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import e from "express";

const initialItem = {
    id: "",
    title: "",
    director: "",
    metasore: "",
    stars: [],
}

const UpdateMovie = (props) => {
    const [updateMovie, setUpdateMovie] = useState(initialItem)
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then((res) => {
           
            setUpdateMovie(res.data)

        })
        .catch((err) => console.log(err, "error at useEffect in updateMovie"))
    }, [id])

    const changeHandler = (event) => {
        event.persist()
        setUpdateMovie({
            ...updateMovie,
            [event.target.name] : event.target.value
        })
 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${id}`, updateMovie)
        .then((res) => {
            setUpdateMovie(res.data)
            push(`/movies/${id}`)
        })
        .catch((err) => console.log(err))
    }

    return (
            <div className="updateForm">
              <h2>Update Movie</h2>
              <form onSubmit={handleSubmit}>
              Title:
                <input
                  type="text"
                  name="title"
                  onChange={changeHandler}
                  placeholder="Title"
                  value={updateMovie.title}
                />
                Director:
                <input
                  type="text"
                  name="director"
                  onChange={changeHandler}
                  placeholder="Director"
                  value={updateMovie.director}
                />
                Metascore:
                <input
                  type="number"
                  name="metascore"
                  onChange={changeHandler}
                  placeholder="Metascore"
                  value={updateMovie.metascore}
                />
                Stars:
                <input
                  type="text"
                  name="stars"
                  onChange={changeHandler}
                  placeholder="Stars"
                  value={updateMovie.stars}
                />
         
                <button>Update Movie</button>
              </form>
            </div>
          );
        };
        
        export default UpdateMovie;