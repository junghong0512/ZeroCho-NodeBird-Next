/* eslint-disable @next/next/no-img-element */
import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';
import { Button, Form, Input } from 'antd';

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) {
      console.log('ADD POST DONE ');
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={148}
        placeholder='Write your comment here.'
      />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button type='primary' style={{ float: 'right' }} htmlType='submit'>
          TWIT
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
