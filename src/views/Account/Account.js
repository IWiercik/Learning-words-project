import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
import React, { useContext } from 'react';
import { appContext } from 'providers/Providers';
import { AccountInformationWrapper, EmailVerified, SetName, VerifyEmail } from './Account.style';
import { sendingEmailWithVerification } from 'configFirebase/firebase';
import { alertForChangingProfileName, notificationForNeedingAccount } from 'helpers/sweetAlert';
import userEvent from '@testing-library/user-event';
function Account() {
  const ctx = useContext(appContext);
  const user = ctx.currentUser;
  return (
    <BasicContainer>
      <AccountInformationWrapper>
        <h3>
          Email: <span>{user.email ? user.email : 'Guest Account'}</span>
        </h3>
        <h3>
          Username:{' '}
          <span>
            {user.displayName ? (
              <SetName
                onClick={() => {
                  alertForChangingProfileName(user);
                }}
              >
                {user.displayName}
              </SetName>
            ) : (
              <SetName
                onClick={() => {
                  alertForChangingProfileName(user);
                }}
              >
                Set Name
              </SetName>
            )}
          </span>
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
