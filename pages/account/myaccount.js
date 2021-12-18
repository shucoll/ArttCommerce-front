import Account from '@components/HOC/AccountLayout/AccountLayout';
import MyAccount from '@pageComponents/MyAccount/MyAccount';

const MyAccountPage = (props) => {
  return (
    <Account>
      <MyAccount />
    </Account>
  );
};

export default MyAccountPage;
