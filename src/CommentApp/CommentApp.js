import React, { Component } from 'react';
import { COMMENTS } from './data';
import {CommentList} from './CommentList';
import {CommentInput} from './CommentInput';
import CommentFilter from './CommentFilter';



const CommentApp = () => {
  const [_comments, _setComments] = useState(COMMENTS);
  const [activeType, setactiveType] = useState('ALL');
  const [filterConditionUp, setFilterConditionUp] = useState('1');
  const [filterConditionDown, setFilterConditionDown] = useState('0');
  const [user, setUser] = useState('');
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState('');

  function handleUserChange(e) {
    setUser(e.target.value);
  }
  function handleRatingChange(e) {
    setRating(Number(e.target.value));
  }
  function handleCommentsChange(e) {
    setComments(e.target.value);
  }

  function submit() {
    const newComments = _comments.concat({
      user,
      comments,
      rating,
    });
    _setComments(newComments);
    setUser('');
    setComments('');
    setRating('');
  }
  function handleFiterConditionChangeToAll() {
    setactiveType('ALL');
  }

  function handleFiterConditionChangeToGood() {
    setactiveType('NotAll');
    setFilterConditionUp('5');
    setFilterConditionDown('3');
  }

  function handleFiterConditionChangeToMedium() {
    setactiveType('NotAll');
    setFilterConditionUp('3');
    setFilterConditionDown('1');
  }

  function handleFiterConditionChangeToBad() {
    setactiveType('NotAll');
    setFilterConditionUp('1');
    setFilterConditionDown('-1');
  }

  const commentsWithFilter = _comments.filter(
    (item) =>
      Number(item.rating) > Number(filterConditionDown) &&
      Number(item.rating) <= Number(filterConditionUp)
  );
  return (
    <div data-testid="app" className="app">
      <CommentInput title='用户' value={user} changeHandler={handleUserChange} />
      <CommentInput title='评分' value={rating} changeHandler={handleRatingChange} />
      <CommentInput title='评论' value={comments} changeHandler={handleCommentsChange} />
        
      <div>
        <button onClick={submit}>提交</button>
      </div>
      <div>
        <CommentFilter onClick={handleFiterConditionChangeToAll} text='全部'/>
        <CommentFilter onClick={handleFiterConditionChangeToGood} text='好评'/>
        <CommentFilter onClick={handleFiterConditionChangeToMedium} text='中评'/>
        <CommentFilter onClick={handleFiterConditionChangeToBad} text='差评'/>
      </div>

      <CommentList comments={activeType === 'ALL' ? _comments : commentsWithFilter} />

    </div>
  );
}

export default CommentApp;
