import { BasicContainer } from 'components/molecules/BasicContainer/BasicContainer.style';
import React, { useContext } from 'react';
import { appContext } from 'providers/Providers';
import { AccountInformationWrapper, SetName } from './Account.style';
import { alertForChangingProfileName } from 'helpers/sweetAlert';
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
      </AccountInformationWrapper>
    </BasicContainer>
  );
}

export default Account;
