import React from "react";
// import "../Entry/style.css"
import Button from "react-bootstrap/Button"

class EntryForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Note Title ",
            body: "Type here...",
            errorMessage: " ",
        };
    }

    handleChange = (e) => {
        const { name,value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    clearInputs = () => {
        this.setState({
            title: " ",
            body: " ",
            errorMessage: " ",
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            'Title: ' + this.state.title,
            'Body: ' + this.state.body
            );
        this.clearInputs();
    }
    
    render() {
        
        return (
            <div className="list-container">
            <div>
                <input className="note-title" name="title"  placeholder={this.state.title} maxLength="28" type="text" onChange={this.handleChange}/>
                <textarea className="note-textarea"  name="body" placeholder="Type here..." value={this.state.body} onChange={this.handleChange}/>
            
            </div>
            <div className="text-right mt-3 mb-5">
                        <Button
                            style={{
                                backgroundColor: "#5B7444",
                                border: "none",
                                marginRight: "5px"
                            }}
                            className="new-note"
                            >Add</Button>
                        <Button
                            style={{
                                backgroundColor: "#5B7444",
                                border: "none",
                            }}
                            className="save-note"
                            onClick={this.handleSubmit}
                            >Save</Button>
                    </div>
        </div>
    );
}
}

export default EntryForm;