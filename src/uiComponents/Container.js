import React from 'react'
import { Dimensions, Keyboard, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'

function Container({ children,style }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.width,style]}>
          {children}
        </View>
    </SafeAreaView>
  )
}

export default Container;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems:'center',
    justifyContent:'center'
  },
  width: {
    flex: 1,
    width: Dimensions.get('screen').width - 40,
  }
})