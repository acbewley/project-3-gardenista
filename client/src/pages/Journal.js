import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Entry from "../components/Entry";
// import { useUserContext } from "../utils/globalState";
import "../components/Entry/style.css";
import EntryList from "../components/EntryList";

  const [state] = useUserContext();
  let isLoggin = localStorage.getItem('isLoggin') === 'true'

export default class Journal extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.onChangePostText = this.onChangePostText.bind(this);
    //     this.onSavePost = this.onSavePost.bind(this);
    //     this.onStartPostEdit = this.onStartPostEdit.bind(this);
    //     this.onCancelEdit = this.onCancelEdit.bind(this);
    //     this.onDeletePost = this.onDeletePost.bind(this);
    // }

    // state = {
    //     posts: [],
    //     inputText: '',
    //     editPostIx: NEWPOST,
    // }

    // componentWillMount() {
    //     if (localStorage.posts != undefined) {
    //         this.setState({ posts: JSON.parse(localStorage.posts) });
    //     }
    // }

    // onChangePostText(e) {
    //     this.setState({ inputText: e.target.value })
    // }

    // onSavePost() {
    //     // Either save a new post
    //     if (this.state.editPostIx === NEWPOST) {
    //         const newPost = {
    //             text: this.state.inputText,
    //             date: new Date().toLocaleString(),
    //         };
    //         this.state.posts = this.state.posts.concat(newPost);
    //     } else {
    //         // or edit an existing one
    //         this.state.posts[this.state.editPostIx].text = this.state.inputText;
    //     }

    //     this.setState({
    //         posts: this.state.posts,
    //         inputText: '',
    //         editPostIx: NEWPOST,
    //     });

    //     this.persistPosts();
    // }

    // onStartPostEdit(editPostIx) {
    //     this.setState({
    //         editPostIx,
    //         inputText: this.state.posts[editPostIx].text,
    //     });
    // }

    // onCancelEdit() {
    //     this.setState({ editPostIx: NEWPOST, inputText: '' });
    // }

    // onDeletePost(editPostIx) {
    //     this.state.posts.splice(editPostIx, 1);
    //     this.setState({
    //         posts: this.state.posts,
    //         editPostIx: NEWPOST,
    //         inputText: '',
    //     });

    //     this.persistPosts();
    // }

    // persistPosts() {
    //     localStorage.posts = JSON.stringify(this.state.posts);
    // }

       const [state] = useUserContext();
      let isLoggin = localStorage.getItem('isLoggin') === 'true'
  
      useEffect(() => {
        authenticate();
      }, [state])

      function authenticate() {
        if (!state.isLoggin) {
          window.location.pathname = '/'
        }
      }
    render() {

        return (
            <Container>
                <Row>
                    <EntryList
                        // onStartPostEdit={this.onStartPostEdit}
                        // onDeletePost={this.onDeletePost}
                        // posts={this.state.posts}
                    />
                    <Col size="md-9">
                        <Entry
                            // onSavePost={this.onSavePost}
                            // onChangePostText={this.onChangePostText}
                            // onCancelEdit={this.onCancelEdit}
                            // inputText={this.state.inputText}
                            // editing={this.state.editPostIx !== NEWPOST}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

// export default Journal;
