import { ScrollView, View } from "react-native"
import CatList from "../components/CatList"
import Note from "../screens/Note"

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <CatList />
      </ScrollView>
    </View>
  )
}

export default HomeScreen