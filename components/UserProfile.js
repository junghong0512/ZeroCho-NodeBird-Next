import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';
import { Avatar, Button, Card } from 'antd';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key='twin'>
          트윗
          <br />0
        </div>,
        <div key='following'>
          팔로잉
          <br />0
        </div>,
        <div key='follower'>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JH</Avatar>} title='Jung Hong' />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
