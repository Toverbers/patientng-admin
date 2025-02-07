/* import React from 'react'
import { useQuill } from 'react-quilljs';


import 'quill/dist/quill.snow.css'; 



const TextEditor = () => {
    const { quill, quillRef } = useQuill();

    console.log(quill);  
    console.log(quillRef); 
  return (
    <div className='w-full min-h-[300px] mb-20 bg-white'>
    <div ref={quillRef} />
  </div>
  )
}

export default TextEditor */

import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
//import 'quill/dist/quill.snow.css'; 

const TextEditor = ({value, onChange}) => {
    //const [value, setValue] = useState('');

    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: [] }],
          [{ font: [] }],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ color: ["red", "#785412"] }],
          [{ background: ["red", "#785412"] }]
        ]
      };
    
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
      ];

  return (
    <ReactQuill theme="snow"
        modules={modules}
        formats={formats}
        value={value} onChange={onChange}  className='min-h-[300px] bg-white mb-20 overflow-auto'/>
  )
}

export default TextEditor