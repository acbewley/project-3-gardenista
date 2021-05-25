import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../Grid";

function EntryList(props) {

    console.log("Props", props)

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