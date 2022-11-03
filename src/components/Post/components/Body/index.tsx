import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
interface IBodyProps {
  imageUri: string;
}

const Body: React.FC<IBodyProps> = ({ imageUri }) => {
  const urlWithPath = '../../../../assets' + imageUri;

  console.log(urlWithPath);

  return <Image source={{ uri: urlWithPath }} style={styles.image} />;
};

export default Body;
