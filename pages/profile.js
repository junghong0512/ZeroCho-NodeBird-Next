import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [
    { nickname: 'test1' },
    { nickname: 'test2' },
    { nickname: 'test3' },
  ];
  const followingList = [
    { nickname: 'test4' },
    { nickname: 'test5' },
    { nickname: 'test6' },
    { nickname: 'test7' },
    { nickname: 'test8' },
  ];

  return (
    <>
      <Head>
        <title>Nodebird | 내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
