import Account from '@components/HOC/Layout/Account/Account';
import MyAccount from '@pageComponents/MyAccount/MyAccount';

const MyAccountPage = (props) => {
  return (
    <Account>
      <MyAccount />
    </Account>
  );
};

export default MyAccountPage;
