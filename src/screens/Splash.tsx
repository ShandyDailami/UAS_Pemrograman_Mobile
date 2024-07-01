import { StackActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const Splash = () => {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'))
    }, 3000)
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/icon1.png')}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    borderRadius: 5,
    width: 100,
    height: 100
  }
})

export default Splash