import React from 'react';

import {navigationGoBack} from '@utils';
import {Button, Text, Container, FlatList, SafeAreaView} from '@app/components';

const TestScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>This is test screen</Text>
        <Button label="Go Back" onPress={navigationGoBack} />

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
      </Container>
    </SafeAreaView>
  );
};

export default TestScreen;
