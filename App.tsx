import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      {/* SafeAreaView is used incase there is notch in the mobile */}
      <View>
        <Text> Hello World !</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
