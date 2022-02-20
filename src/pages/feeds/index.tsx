import { MessageSender } from 'components/message-sender';
import { Post } from 'components/post';
import { StoryReel } from 'components/story-reel';
import React from 'react';
import './styles.css';

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <Post
        profilePic="https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/111021951_2269766039835644_2484974578399129587_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ExbwgQIueewAX_lM5Fj&_nc_ht=scontent.fhan6-1.fna&oh=00_AT8E_XNvYgxTD0gj1cw2j5Vz-PYVM4GYI0cj2XTQVdQJ1Q&oe=623159FF"
        image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        message="I am from the Firestore Database"
        username="Quangg"
      />
      <Post
        profilePic="https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/111021951_2269766039835644_2484974578399129587_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ExbwgQIueewAX_lM5Fj&_nc_ht=scontent.fhan6-1.fna&oh=00_AT8E_XNvYgxTD0gj1cw2j5Vz-PYVM4GYI0cj2XTQVdQJ1Q&oe=623159FF"
        message="I am from the Firestore Database"
        username="Nhat Quang"
      />
    </div>
  );
}

export default Feed;
