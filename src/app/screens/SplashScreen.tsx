import React from 'react';

import {navigate} from '@utils';
import {ScreenList} from '@app/navigations';
import {Button, Container, SafeAreaView, Text} from '@app/components';

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>This is splash screen</Text>
        <Button
          label={'Go to TestScreen'}
          onPress={() => navigate(ScreenList.test)}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SplashScreen;
