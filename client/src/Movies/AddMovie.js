import React, {useState,useEffect} from "react";
import { useHistory,useParams } from "react-router";
import axios from 'axios';

const AddMovie = () => {
     
    
     const history = useHistory();
     const { id } = useParams();
    
    
     const [form,setForm] = useState({
         id:Date.now(),
         title:"",
         director:"",
         metascore:"",
         stars:[]
     });
    
     const handleChanges = e => {
        const newFormData = {
            ...form, [e.target.name] : e.target.value
        }
        setForm(newFormData);
    }

  
    
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(`http://localhost:5000/api/movies`, form )
        .then((res) => {
            console.log(res, "handlesubmit at addmovie.js")
            history.push("/");
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div className="updateForm">
  
            <h2>Add Movie!</h2>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "title">
                title:
            <input
            type = "text" 
            name = "title"
            placeholder = "title"
            value = {form.title}
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "director">
                director:
            <input
            type = "text" 
            name = "director"
            placeholder = "director"
            value = {form.director}
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "metascore">
                metascore:
            <input
            type = "text" 
            name = "metascore"
            placeholder = "metascore"
            value = {form.metascore}
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "stars">
                stars:
            <input
            type = "text" 
            name = "stars"
            placeholder = "stars"
            value = {form.starz}
            onChange = {handleChanges}
             />
            </label>
            <button type = "submit">Add</button>
        </form>
      
        </div>
    )
}

export default AddMovie;