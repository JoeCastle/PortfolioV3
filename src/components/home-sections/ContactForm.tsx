﻿import utils from '../../utils/utils';
import globals from '../../utils/globals';
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useOnScreen, { PageSectionIdTypes } from "../../hooks/useOnScreen";

interface IEmailModel {
    fullName: string,
    subject: string,
    message: string
}

interface Props {
}

export const ContactForm: React.FC<Props> = (props) => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [fullName, setFullName] = React.useState<string>("");
    const [subject, setSubject] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [formError, setFormError] = React.useState<string>("");

    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnScreen(ref, "-300px");

    const handleSubmit = (e: any): void => {
        e.preventDefault();

        const emailDto: IEmailModel = {
            fullName: fullName,
            subject: subject,
            message: message
        }

        //https://stackoverflow.com/questions/54071421/preserve-line-break-in-textarea-when-using-mailto
        const lineBreakMessage = message.replace(/\r\n|\r|\n/g, "%0D%0A");

        //https://stackoverflow.com/questions/10219781/javascript-adding-linebreak-in-mailto-body
        const body = `Hi Joe, %0D%0A%0D%0A${lineBreakMessage} %0D%0A%0D%0ARegards,%0D%0A${fullName}`;

        if (validateForm(emailDto)) {
            setIsLoading(true);

            if (typeof window !== 'undefined') {
                const address = utils.decodeHTML(globals.ObsfucatedEmailAddress)
                window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;

                setInitialValues();
            } else {
                setFormError("Unable to open email client");
            }

            setIsLoading(false);
        } else {

        }
    };

    const validateForm = (model: IEmailModel): boolean => {
        if (model.fullName === "") {
            setFormError("Full name is missing.");

            return false;
        }

        if (model.subject === "") {
            setFormError("Subject is missing.");

            return false;
        }

        if (model.message === "") {

            setFormError("Message is missing.");

            return false;
        }

        setFormError("");

        return true;
    }

    const setInitialValues = (): void => {
        setFullName("");
        setSubject("");
        setMessage("");
        setFormError("");
    }

    return <div className='contact-form-info-container section' id='Contact'>
        <div className='content-container'
            id={`${PageSectionIdTypes.Contact}`}
            ref={ref}>
            <div className='section-title-wrapper'>
                <h2>Contact</h2>
            </div>

            <div className='contact-form-info'>

                <div className='contact-info'>
                    <a target='_blank' rel='noopener noreferrer' href={globals.LinkedInData.URL} aria-label='LinkedIn link.'><i className='fab fa-linkedin-in'></i> <div>LinkedIn</div></a>
                    <a href='&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk' aria-label='Email address.'><i className='fas fa-at'></i> <div>Email</div></a>
                    <a target='_blank' rel='noopener noreferrer' href={globals.GitHubData.URL} aria-label='GitHub link.'><i className='fab fa-github'></i> <div>GitHub</div></a>
                </div>

                <div className='contact-form'>
                    <Form>
                        <div className='form-input-wrapper'>
                            <FormGroup>
                                <Label for='fullName'>Full name: </Label>
                                <Input
                                    type='text'
                                    name='fullName'
                                    id='fullName'
                                    placeholder='Full name...'
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='subject'>Subject: </Label>
                                <Input
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    placeholder='Subject...'
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)} />
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Label for='message'>Message: </Label>
                            <Input
                                type='textarea'
                                name='message'
                                id='message'
                                placeholder='Message...'
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </FormGroup>
                        <Button className='submit-email-btn' disabled={isLoading} onClick={handleSubmit}>Submit</Button>
                        <p className={`form-error-message ${formError !== "" ? "opacity-show" : ""}`}>{formError}</p>
                    </Form>
                </div>
            </div>
        </div>
    </div>;
}

export default ContactForm;