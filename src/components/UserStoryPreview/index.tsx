import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfilePicture from '../ProfilePicture';

interface IStory {
  story: {
    user: {
      id: string;
      imageUri: number;
      name: string;
    };
  };
}

const Story = (props: IStory) => {
  const {
    story: {
      user: { id, imageUri, name },
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story' as never, { userId: id } as never);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} size={80} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
