import utils from '../../utils/utils';
import globals from '../../utils/globals';
import React, { useRef, useState, useCallback, memo } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import { InputType } from 'reactstrap/types/lib/Input';

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

interface FormInputProps {
    label: string;
    type: InputType | undefined;
    name: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    valid: boolean;
    invalid: boolean;
}

const FormInput: React.FC<FormInputProps> = memo(({ label, type, name, id, placeholder, value, onChange, valid, invalid }) => {
    return (
        <FormGroup className="form-group">
            <Label for={id}>{label}</Label>
            <Input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} valid={valid} invalid={invalid} />
        </FormGroup>
    );
});

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
    useOnScreen(ref);

    /**
     * Handles submitting the contact form.
     * @param e
     * @returns
     */
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
                utils.navigateToEmail(subject, body);
                setInitialValues();
            } else {
                setFormError('Unable to open email client');
            }

            setIsLoading(false);
        }
    };

    /**
     * Handles validating form field and setting the status message.
     */
    const validateField = useCallback((val: string, setStatus: (status: FieldStatusEnum) => void): boolean => {
        if (utils.isFormInputValid(val)) {
            setStatus(FieldStatusEnum.SUCCESS);
            return true;
        } else {
            setStatus(FieldStatusEnum.ERROR);
            return false;
        }
    }, []);

    const validateFullName = useCallback(
        (val: string): boolean => {
            return validateField(val, setFullNameStatus);
        },
        [validateField],
    );

    const validateSubject = useCallback(
        (val: string): boolean => {
            return validateField(val, setSubjectStatus);
        },
        [validateField],
    );

    const validateMessage = useCallback(
        (val: string): boolean => {
            return validateField(val, setMessageStatus);
        },
        [validateField],
    );

    /**
     * Handles validating the contact form.
     * @param model
     * @returns True if valid, false if not.
     */
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

    const handleFullNameChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFullName(e.target.value);
            validateFullName(e.target.value);
        },
        [validateFullName],
    );

    const handleSubjectChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSubject(e.target.value);
            validateSubject(e.target.value);
        },
        [validateSubject],
    );

    const handleMessageChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value);
            validateMessage(e.target.value);
        },
        [validateMessage],
    );

    return (
        <div className="contact-form-info-container section" id="Contact">
            <div className="content-container" id={`${PageSectionIdType.Contact}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Contact</h2>
                </div>

                <div className="contact-form-info">
                    <div className="socials">
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
                                <FormInput
                                    label="Full name:"
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Full name..."
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    valid={fullNameStatus === FieldStatusEnum.SUCCESS}
                                    invalid={fullNameStatus === FieldStatusEnum.ERROR}
                                />
                                <FormInput
                                    label="Subject:"
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject..."
                                    value={subject}
                                    onChange={handleSubjectChange}
                                    valid={subjectStatus === FieldStatusEnum.SUCCESS}
                                    invalid={subjectStatus === FieldStatusEnum.ERROR}
                                />
                            </div>
                            <FormInput
                                label="Message:"
                                type="textarea"
                                name="message"
                                id="message"
                                placeholder="Message..."
                                value={message}
                                onChange={handleMessageChange}
                                valid={messageStatus === FieldStatusEnum.SUCCESS}
                                invalid={messageStatus === FieldStatusEnum.ERROR}
                            />
                            <div className="contact-form-button-container">
                                <Button className="portfolio-btn portfolio-btn-primary contact-button submit-button" disabled={isLoading} onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <Button className="portfolio-btn portfolio-btn-secondary contact-button clear-button" disabled={isLoading} onClick={setInitialValues}>
                                    Clear
                                </Button>
                            </div>
                            <p className={`form-error-message ${formError !== '' ? 'opacity-show' : ''}`}>{formError}</p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
