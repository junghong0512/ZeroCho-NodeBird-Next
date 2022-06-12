import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import { Button, Card, Popover } from 'antd';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);

  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        style={{ marginBottom: 20 }}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          liked ? (
            <HeartTwoTone
              onClick={onToggleLike}
              twoToneColor='#eb2f96'
              key='heart'
            />
          ) : (
            <HeartOutlined onClick={onToggleLike} key='heart' />
          ),
          <MessageOutlined onClick={onToggleComment} key='comment' />,
          <Popover
            key='more'
            content={
              <Button.Group>
                {id === post.User.id ? (
                  <>
                    <Button>수정</Button>
                    <Button type='danger'>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={post.User.nickname[0]}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && <div>Comments Components</div>}
    </div>
  );
};

PostCard.propTypes = {
  // post: PropTypes.object.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
