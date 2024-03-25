import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useState} from 'react'

export default function CreatPost(){
    const [title, setTitle] = useState()
    const[summary, setSummary] = useState()
    const[content, setContent] =useState()
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
          ],
    }

    return(
        <form className="create-container" action="">
            <input type="title" placeholder="Title"/>
            <input type="summary" placeholder="Summary"/>
            <input type="file"/>
            <ReactQuill 
            className="blog-content"
            value={content}
            
            />
            <button>Sumbit</button>
        </form>
    )
}