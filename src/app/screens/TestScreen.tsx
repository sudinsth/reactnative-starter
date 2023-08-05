import React from 'react';
import {Text} from 'react-native';

import {Container, FlatList} from '@app/components';

const TestScreen = () => {
  return (
    <Container>
      <FlatList
        keyExtractor={(item, index) => item.toString()}
        data={[0, 1, 2, 3, 4]}
        renderItem={({item, index}: any) => {
          return (
            <Container key={index} bgColor={'red'}>
              <Text>{item}</Text>
            </Container>
          );
        }}
      />
      <Text>TestScreen</Text>
    </Container>
  );
};

export default TestScreen;
