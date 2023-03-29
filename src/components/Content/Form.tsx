import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { db } from 'api/firebase/init';

import * as color from 'constants/colors';
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from 'constants/index';
import { validateEmail } from 'method';

const StyledForm = styled.form`
  margin: 20px 0px;
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin: 10px 0px;
  color: ${color.DEFAULT_BACKGROUND};
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const StyledRedLabel = styled(StyledLabel)`
  color: red;
`;

const StyledInput = styled.input`
  width: 422px;
  height: 30px;
  padding: 0 10px 0 10px;
  border: 1px solid ${color.DEFAULT_BACKGROUND};
  background-color: ${color.LIGHT_GREY_COLOR};
  color: ${color.DEFAULT_BACKGROUND};
  &:hover {
    background-color: ${color.FONT_INPUT_HOVER_COLOR};
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const StyledTextarea = styled.textarea`
  width: 422px;
  height: 130px;
  padding: 10px;
  border: 1px solid ${color.DEFAULT_BACKGROUND};
  background-color: ${color.LIGHT_GREY_COLOR};
  color: ${color.DEFAULT_BACKGROUND};
  &:hover {
    background-color: ${color.FONT_INPUT_HOVER_COLOR};
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const StyledWrapButton = styled.div`
  width: 422px;
  margin: 20px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const StyledSubmitButton = styled.button`
  margin: 0px 10px;
  width: 150px;
  height: 40px;
  background-color: ${color.FONT_DESCRIPTION_COLOR};
  color: ${color.DEFAULT_YELLOW};
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${color.DEFAULT_YELLOW};
    color: ${color.FONT_DESCRIPTION_COLOR};
  }
`;

const StyledClearButton = styled.button`
  margin: 0px 0px 0px 10px;
  width: 150px;
  height: 40px;
  background-color: ${color.LIGHT_GREY_COLOR};
  color: ${color.FONT_BLUE_COLOR};
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${color.FONT_BLUE_COLOR};
    color: ${color.LIGHT_GREY_COLOR};
  }
`;

const StyledSpan = styled.span`
  color: red;
  margin: 3px 0px;
  font-size: 13px;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

/* eslint jsx-a11y/label-has-associated-control: 0 */
function SharedForm(): JSX.Element {
  const [isSending, setSending] = useState(false);

  const onSubmit = (values) => {
    setSending(true);
    const { firstName, lastName, email, subject, message } = values;
    const templateParams = {
      subject,
      message,
      from_name: '大月岩國際有限公司 LunaLeca International Ltd.',
      to_name: `${firstName} ${lastName}`,
      to_email: email,
    };

    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_USER_ID).then(
      () => {
        toast.success('📢 信件成功寄出!');
        setSending(false);
        // console.log('SUCCESS!', response.status, response.text);
      },
      () => {
        toast.error('❕ 信件寄出失敗!');
        setSending(false);
        // console.log('FAILED...', err);
      },
    );
  };

  const handleFetch = () => {
    // TODO
    const docRef = db.collection('luna-leca').doc('cn');

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const { firstName, lastName, email, subject, message } = values;
        const errors: {
          firstName?: string;
          lastName?: string;
          email?: string;
          subject?: string;
          message?: string;
        } = {
          ...(!firstName && { firstName: 'Required' }),
          ...(!lastName && { lastName: 'Required' }),
          ...((!email || !validateEmail(email)) && { email: 'Required or Need email formated' }),
          ...(!subject && { subject: 'Required' }),
          ...(!message && { message: 'Required' }),
        };
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }) => (
              <StyledWrap>
                <StyledLabel>
                  <StyledRedLabel>*</StyledRedLabel>
                  First Name
                </StyledLabel>
                <StyledInput
                  {...input}
                  type="text"
                  placeholder="FirstName"
                  maxLength="20"
                  isShowError={meta.error && meta.touched}
                />
                {meta.error && meta.touched && <StyledSpan>{meta.error}</StyledSpan>}
              </StyledWrap>
            )}
          </Field>

          <Field name="lastName">
            {({ input, meta }) => (
              <StyledWrap>
                <StyledLabel>
                  <StyledRedLabel>*</StyledRedLabel>
                  Last Name
                </StyledLabel>
                <StyledInput {...input} type="text" placeholder="LastName" maxLength="20" />
                {meta.error && meta.touched && <StyledSpan>{meta.error}</StyledSpan>}
              </StyledWrap>
            )}
          </Field>

          <Field name="email">
            {({ input, meta }) => (
              <StyledWrap>
                <StyledLabel>
                  <StyledRedLabel>*</StyledRedLabel>
                  Email
                </StyledLabel>
                <StyledInput {...input} type="text" placeholder="Email" maxLength="50" />
                {meta.error && meta.touched && <StyledSpan>{meta.error}</StyledSpan>}
              </StyledWrap>
            )}
          </Field>

          <Field name="subject">
            {({ input, meta }) => (
              <StyledWrap>
                <StyledLabel>
                  <StyledRedLabel>*</StyledRedLabel>
                  Subject
                </StyledLabel>
                <StyledInput {...input} type="text" placeholder="Subject" maxLength="20" />
                {meta.error && meta.touched && <StyledSpan>{meta.error}</StyledSpan>}
              </StyledWrap>
            )}
          </Field>

          <Field name="message">
            {({ input, meta }) => (
              <StyledWrap>
                <StyledLabel>
                  <StyledRedLabel>*</StyledRedLabel>
                  Message
                </StyledLabel>
                <StyledTextarea {...input} type="text" placeholder="Message" maxLength="300" />
                {meta.error && meta.touched && <StyledSpan>{meta.error}</StyledSpan>}
              </StyledWrap>
            )}
          </Field>

          <StyledWrapButton>
            <StyledClearButton type="button" onClick={handleFetch}>
              Test
            </StyledClearButton>

            <StyledSubmitButton type="submit" disabled={submitting}>
              {isSending ? <ReactLoading height="30px" width="30px" type="spokes" /> : 'Submit'}
            </StyledSubmitButton>
            <StyledClearButton type="button" onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </StyledClearButton>
          </StyledWrapButton>
        </StyledForm>
      )}
    />
  );
}

export default SharedForm;
