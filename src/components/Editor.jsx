"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    const htmlContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    // You can use the htmlContent here if needed
  }, [editorState]); // Update effect only on editorState change

  return (
    <div className="w-full container grow">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </div>
  );
};

export default EditorConvertToHTML;
