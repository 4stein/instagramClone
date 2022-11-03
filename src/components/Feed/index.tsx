import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

export interface IPost {
  id: string;
  user: {
    imageUri: number;
    name: string;
  };
  imageUri: string;
  caption: string;
  likesCount: number;
  postedAt: string;
}

const data: IPost[] = [
  {
    id: '1',
    user: {
      imageUri: require('../../assets/images/profiles/profile1.jpg'),
      name: 'User1',
    },
    imageUri: require('../../assets/images/stories/story1.jpg'),
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri: require('../../assets/images/profiles/profile2.jpg'),
      name: 'User2',
    },
    imageUri: require('../../assets/images/stories/story2.jpg'),
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri: require('../../assets/images/profiles/profile3.jpg'),
      name: 'User3',
    },
    imageUri: require('../../assets/images/stories/story3.jpg'),
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <Post post={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={Stories}
  />
);

export default Feed;
