import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
import React, { useContext } from 'react';
import { appContext } from 'providers/Providers';
import { AccountInformationWrapper, EmailVerified, SetName, VerifyEmail } from './Account.style';
import { sendingEmailWithVerification } from 'configFirebase/firebase';
import userEvent from '@testing-library/user-event';
function Account() {
  const ctx = useContext(appContext);
  console.log(ctx.currentUser);
  const user = ctx.currentUser;
  return (
    <BasicContainer>
      <AccountInformationWrapper>
        <h3>
          Email: <span>{user.email}</span>
        </h3>
        <h3>
          Username: <span>{user.displayName ? `${user.displayName}` : <SetName>Set Name</SetName>}</span>
        </h3>
        <EmailVerified isVerified={userEvent.emailVerified ? true : false}>
          Email Verification:{' '}
          <span>
            {user.emailVerified ? (
              'Verified'
            ) : (
              <VerifyEmail
                onClick={() => {
                  sendingEmailWithVerification(user);
                }}
              >
                Verify Email
              </VerifyEmail>
            )}
          </span>
        </EmailVerified>
      </AccountInformationWrapper>
    </BasicContainer>
  );
}

export default Account;
