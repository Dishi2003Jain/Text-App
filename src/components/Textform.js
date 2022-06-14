import React , {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
          console.log("Uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to uppercase" , "success");
    }
     
    const handleloClick = ()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase" , "success");
}

    const handleClearClick = ()=>{
      console.log("Uppercase was clicked" + text);
      let newText = "";
      setText(newText)
      props.showAlert("Text cleared" , "success");
    }
    const handleremoveextraspacesClick = ()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.split(/[ ]+/).join(" ");
      setText(newText)
      props.showAlert("Extra spaces removed" , "success");
    }

    const handleCopy = ()=>{
      console.log("Uppercase was clicked" + text);
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" , "success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    return (
      <>
            <div className="container" style = {{color: props.mode ==='dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'grey':'white' , color: props.mode ==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleremoveextraspacesClick}>Remove extra spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
   <div/>
   <div className="container my-4">
     <h2>Your text summary</h2>
     <p> <b> {text.split(" ").length-1} </b> words and <b> {text.length} </b> characters</p>
     <p>{0.008*text.split(" ").length-0.008} Minutes read</p>
   </div>
   <div className="container">
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
   </div>
   </div>
   </>
  )
}
