import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
interface IBodyProps {
  imageUri: number;
}

const Body: React.FC<IBodyProps> = ({ imageUri }) => {
  return <Image source={imageUri} style={styles.image} />;
};

export default Body;
