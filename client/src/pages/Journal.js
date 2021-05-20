import React, { useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import Entry from "../components/Entry";
import { useUserContext } from "../utils/globalState";
import Button from "react-bootstrap/Button";

function Journal() {
  const [state] = useUserContext();

  useEffect(() => {
    authenticate();
  }, [state])

  function authenticate() {
    if (!state.isLoggin) {
      window.location.pathname = '/'
    }
  }
  
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-3">
            <h3>Journal Entries</h3>
            <div>
              <ul className="list-group"></ul>
            </div>
            <div className="text-right mt-3 mb-5">
              <Button
                style={{
                  backgroundColor: "#5B7444",
                  border: "none",
                  marginRight: "5px",
                }}
              >
                <i className="fas fa-plus text-light new-note mt-auto"></i>Add
              </Button>
              <Button
                style={{
                  backgroundColor: "#5B7444",
                  border: "none",
                }}
              >
                <i className="fas fa-save text-light save-note"></i>Save
              </Button>
            </div>
          </Col>
          <Col size="md-9">
            <Entry></Entry>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Journal;
