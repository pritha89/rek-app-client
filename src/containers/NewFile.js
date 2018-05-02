import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import "./NewFile.css";

export default class NewFile extends Component {
    constructor(props) {
        super(props);

        this.file = null;

        this.state = {
            isLoading: null,
            content: ""
        };
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
            alert("Please pick a file smaller than 5MB");
            return;
        }

        this.setState({ isLoading: true });

        try {
            const attachment = this.file
                ? await s3Upload(this.file)
                : null;
            this.props.history.push("/");
        } catch (e) {
            alert(e);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="NewFile">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="file">
                        <ControlLabel>Attachment</ControlLabel>
                        <FormControl onChange={this.handleFileChange} type="file" />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Upload"
                        loadingText="Uploading..."
                    />
                </form>
            </div>
        );
    }
}