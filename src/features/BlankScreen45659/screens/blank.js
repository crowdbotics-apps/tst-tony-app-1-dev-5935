import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <View
      editableName="View1"
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Image
        resizeMethod="cover"
        editableName="Image2"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid"
        }}
      />
      <Textarea
        placeholder="Text input placeholder"
        editable={true}
        value=""
        editableName="Textarea2"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid"
        }}
      />
      <Text
        input
        placeholder="Text input placeholder"
        editable={true}
        value=""
        editableName="Text input3"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid"
        }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
