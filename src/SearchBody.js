import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions
} from "react-native";
import { ListItem, List } from "native-base";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class SearchBody extends React.Component {
  render() {
    const pokemon = this.props.data;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "http://pokemongolive.com/img/posts/raids_loading.png"
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>
                Weight - {pokemon.weight}
                kg
              </Text>
            </ListItem>
            <ListItem>
              <Text>Height - {pokemon.height / 10}m</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            <List
              dataArray={pokemon.abilities}
              renderRow={item => (
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    height: height,
    width: width
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center"
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  img: {
    height: 200,
    width: 200
  },
  info: {
    flex: 1,
    backgroundColor: "white"
  }
};
