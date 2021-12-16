import Account from '@components/HOC/Layout/Account/Account';
import MyOrders from '@pageComponents/MyOrders/MyOrders';

const MyOrdersPage = (props) => {
  return (
    <Account>
      <MyOrders />
    </Account>
  );
};

export default MyOrdersPage;
