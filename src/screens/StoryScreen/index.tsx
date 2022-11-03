import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './styles';
import storiesData from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState<any>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<any>(null);

  const route: any = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const userId = route.params.userId;

  useEffect(() => {
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story' as never, {
      userId: (parseInt(userId) + 1).toString(),
    });
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    // setTimeout(() => navigation.push('HomeScreen', {}), 1000);
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={activeStory.imageUri} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
