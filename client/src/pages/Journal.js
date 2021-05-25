import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Entry from "../components/Entry";
import { useUserContext } from "../utils/globalState";
import "../components/Entry/style.css";
import EntryList from "../components/EntryList";
import API from "../utils/API"
import { captureRejectionSymbol } from "node:events";



function Journal() {
    const [state, dispatch] = useUserContext()
    const [savedNotes, setSavedNotes] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [state] = useUserContext();
    const user = localStorage.getItem('user')
    const isLoggin = localStorage.getItem('isLoggin') === 'true'

    useEffect(() => {
        authenticate();
        getUser();
    }, [state]);

    function authenticate() {
        if (!state.isLoggin) {
            window.location.pathname = '/'
        }
    }
    
    function getUser() {
        API.getUser(user).then((res) => {
          setCurrentUser(res.data);
          setSavedNotes(res.data.journal);
        });
      }
      
    console.log(currentUser)

    return (
        <Container>
            <Row>
                <EntryList></EntryList>
                <Col size="md-9">
                    <Entry/>
                </Col>
            </Row>
        </Container>
    )
}

export default Journal;
