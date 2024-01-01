import utils from '../../utils/utils';
import globals from '../../utils/globals';
import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';

interface IEmailModel {
    fullName: string;
    subject: string;
    message: string;
}

interface Props {}

enum FieldStatusEnum {
    DEFAULT = 'default',
    ERROR = 'error',
    SUCCESS = 'success',
}

/**
 * The contact form section on the homepage.
 * @param props
 * @returns
 */
export const ContactForm: React.FC<Props> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>('');
    const [fullNameStatus, setFullNameStatus] = useState<FieldStatusEnum>(FieldStatusEnum.DEFAULT);
    const [subject, setSubject] = useState<string>('');
    const [subjectStatus, setSubjectStatus] = useState<FieldStatusEnum>(FieldStatusEnum.DEFAULT);
    const [message, setMessage] = useState<string>('');
    const [messageStatus, setMessageStatus] = useState<FieldStatusEnum>(FieldStatusEnum.DEFAULT);
    const [formError, setFormError] = useState<string>('');

    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref, '-300px');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | undefined): void => {
        if (!e) {
            return;
        }

        e.preventDefault();

        const emailDto: IEmailModel = {
            fullName: fullName,
            subject: subject,
            message: message,
        };

        //https://stackoverflow.com/questions/54071421/preserve-line-break-in-textarea-when-using-mailto
        const lineBreakMessage: string = message.replace(/\r\n|\r|\n/g, '%0D%0A');

        //https://stackoverflow.com/questions/10219781/javascript-adding-linebreak-in-mailto-body
        const body: string = `Hi Joe, %0D%0A%0D%0A${lineBreakMessage} %0D%0A%0D%0ARegards,%0D%0A${fullName}`;

        if (validateForm(emailDto)) {
            setIsLoading(true);

            if (typeof window !== 'undefined') {
                // Use the utility function for navigation
                utils.navigateToEmail(subject, body);
                setInitialValues();
            } else {
                setFormError('Unable to open email client');
            }

            setIsLoading(false);
        }
    };

    const validateFullName = (val: string): boolean => {
        if (val.replace(' ', '') === '') {
            setFullNameStatus(FieldStatusEnum.ERROR);
            return false;
        } else {
            setFullNameStatus(FieldStatusEnum.SUCCESS);
            return true;
        }
    };

    const validateSubject = (val: string): boolean => {
        if (val.replace(' ', '') === '') {
            setSubjectStatus(FieldStatusEnum.ERROR);
            return false;
        } else {
            setSubjectStatus(FieldStatusEnum.SUCCESS);
            return true;
        }
    };

    const validateMessage = (val: string): boolean => {
        if (val.replace(' ', '') === '') {
            setMessageStatus(FieldStatusEnum.ERROR);
            return false;
        } else {
            setMessageStatus(FieldStatusEnum.SUCCESS);
            return true;
        }
    };

    const validateForm = (model: IEmailModel): boolean => {
        let fieldErrors: string[] = [];

        const isFullNameValid: boolean = validateFullName(model.fullName);
        const isSubjectValid: boolean = validateSubject(model.subject);
        const isMessageValid: boolean = validateMessage(model.message);

        if (!isFullNameValid) {
            fieldErrors.push('Full name');
        }

        if (!isSubjectValid) {
            fieldErrors.push('Subject');
        }

        if (!isMessageValid) {
            fieldErrors.push('Message');
        }

        if (fieldErrors.length > 0) {
            const formatter: Intl.ListFormat = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
            const fieldsErrorString: string = formatter.format(fieldErrors);

            const pluralConnector: string = fieldErrors.length > 1 ? 'are' : 'is';

            setFormError(fieldsErrorString + ' ' + pluralConnector + ' missing or invalid.');

            return false;
        }

        setFormError('');

        return true;
    };

    const setInitialValues = (): void => {
        setFullName('');
        setSubject('');
        setMessage('');
        setFormError('');
        setFullNameStatus(FieldStatusEnum.DEFAULT);
        setSubjectStatus(FieldStatusEnum.DEFAULT);
        setMessageStatus(FieldStatusEnum.DEFAULT);
    };

    return (
        <div className="contact-form-info-container section" id="Contact">
            <div className="content-container" id={`${PageSectionIdType.Contact}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Contact</h2>
                </div>

                <div className="contact-form-info">
                    <div className="contact-info">
                        <a target="_blank" rel="noopener noreferrer" href={globals.linkedInData.url} aria-label="LinkedIn link.">
                            <i className="fab fa-linkedin-in"></i> <div>LinkedIn</div>
                        </a>
                        <a href="&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk" aria-label="Email address.">
                            <i className="fas fa-at"></i> <div>Email</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={globals.gitHubData.url} aria-label="GitHub link.">
                            <i className="fab fa-github"></i> <div>GitHub</div>
                        </a>
                    </div>

                    <div className="contact-form">
                        <Form>
                            <div className="form-input-wrapper">
                                <FormGroup className="form-group">
                                    <Label for="fullName">Full name: </Label>
                                    <Input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        placeholder="Full name..."
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        valid={fullNameStatus === FieldStatusEnum.SUCCESS}
                                        invalid={fullNameStatus === FieldStatusEnum.ERROR}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="subject">Subject: </Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject..."
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        valid={subjectStatus === FieldStatusEnum.SUCCESS}
                                        invalid={subjectStatus === FieldStatusEnum.ERROR}
                                    />
                                </FormGroup>
                            </div>
                            <FormGroup className="form-group">
                                <Label for="message">Message: </Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Message..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    valid={messageStatus === FieldStatusEnum.SUCCESS}
                                    invalid={messageStatus === FieldStatusEnum.ERROR}
                                />
                            </FormGroup>
                            <Button className="portfolio-btn" disabled={isLoading} onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Button className="portfolio-btn clear-button" disabled={isLoading} onClick={setInitialValues}>
                                Clear
                            </Button>
                            <p className={`form-error-message ${formError !== '' ? 'opacity-show' : ''}`}>{formError}</p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
