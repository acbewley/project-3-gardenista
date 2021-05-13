import React from "react"
// import Button from "react-bootstrap/Button";

function Journal () {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-4 list-container">
            <div className="card">
              <h2 style="color: #fff; align: center;">Journal Entries</h2>
              <ul className="list-group">
              </ul>
            </div>
          </div>
          <div className="col-8">
            <input className="note-title" placeholder="Note Title" maxlength="28" type="text"/>
            <textarea 
            className="note-textarea" placeholder="Type here..."
            style={{ background: rgba(163, 197, 134, .16)}}
            >
            </textarea>
          </div>
        </div>
      </div>
    );

export default Journal;