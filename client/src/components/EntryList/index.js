import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API"

function EntryList(props) {
    // const notes = props.notes.map((note) => {
    //     return (
    //         <li>{note}</li>
    //     )
    // });
    return (

        <Col size="md-3">
            <h3>Journal Entries</h3>
            <div>
                <ul className="list-group">
                </ul>
            </div>

        </Col>
    )
};

export default EntryList