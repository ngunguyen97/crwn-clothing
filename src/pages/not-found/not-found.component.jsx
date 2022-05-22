import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
// import './not-found.styles.scss';

import { NotFoundContainer, ErrorCode, ErrorText, OptionSpan } from './not-found.styles';

function NotFoundPage({ history }) {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorText>
        <OptionSpan>Oops...</OptionSpan>
        Page Not Found
      </ErrorText>
      <CustomButton
        onClick={() => {
          history.push('/');
        }}
      >
        Back to Home
      </CustomButton>
    </NotFoundContainer>
  );
}

export default withRouter(NotFoundPage);
