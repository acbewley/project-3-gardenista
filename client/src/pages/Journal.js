import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "../components/Grid";
import Entry from "../components/Entry";
import { useUserContext } from "../utils/globalState";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

function Journal() {
  const [state] = useUserContext();
  let isLoggin = localStorage.getItem("isLoggin") === "true";
  let userId = localStorage.getItem("user");
  const [JournalSet, setJournalSet] = useState([]);
  const [JournalSelect, setJournalSelect] = useState({
    title: "title",
    note: "note",
  });
  const updateTitleRef = useRef();
  const updateNoteRef = useRef();

  useEffect(() => {
    authenticate();
    loadJournal();
  }, [state]);

  function authenticate() {
    if (!isLoggin) {
      window.location.pathname = "/";
    }
  }

  function loadJournal() {
    API.getUser(userId)
      .then((res) => {
        setJournalSet(res.data.journals);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  const selectJournal = (e) => {
    e.preventDefault();
    let value = e.target.value;

    setJournalSelect(JournalSet.find((element) => element.title === value));
  };

  function saveJournal() {
    API.updateUserJournal(userId, {
      title: updateTitleRef.current.value,
      note: updateNoteRef.current.value,
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err.response));
  }

  return (
    <Container>
      <div className="row mt-5">
        <div className="col-lg-4" style={{ backgroundColor: "orange" }}>
          {JournalSet.map((e) => {
            return (
              <Button
                className="mt-3 mb-3 d-flex"
                style={{ width: "100%" }}
                value={e.title}
                onClick={selectJournal}
              >
                {e.title}
              </Button>
            );
          })}
        </div>
        <div className="col-lg-8">
          <h3 className="justify-content-center d-flex">Journal Entries</h3>
          <div className="list-container">
            <div>
              <input
                className="note-title"
                placeholder={JournalSelect.title}
                maxLength="28"
                type="text"
                ref={updateTitleRef}
              />
              <textarea
                className="note-textarea"
                placeholder={JournalSelect.note}
                ref={updateNoteRef}
              ></textarea>
            </div>
          </div>

          <Button className="mr-4" onClick={saveJournal}>
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Journal;
