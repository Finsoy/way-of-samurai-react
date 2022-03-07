import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profilePage.posts} text="My posts" addPost={addPost} newPostText={profilePage.newPostText} updateNewPostText={updateNewPostText} />
    </div>
  );
};

export default Profile;
