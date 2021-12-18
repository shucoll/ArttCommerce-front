import Account from '@components/HOC/AccountLayout/AccountLayout';
import MyOrders from '@pageComponents/MyOrders/MyOrders';

const MyOrdersPage = (props) => {
  return (
    <Account>
      <MyOrders />
    </Account>
  );
};

export default MyOrdersPage;
