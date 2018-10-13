import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Input,
  Icon,
  Body,
  Right,
  Content
} from "native-base";
import axios from "axios";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";

export default class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  };

  searchPoke = () => {
    const self = this;
    this.setState({ onCall: true });
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.state.pokeSearch.toLowerCase()}`
      )
      .then(response => {
        console.log(response.data);
        self.setState({ data: response.data, onCall: false });
      })
      .catch(err => console.log(err));
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Left>
            <Button transparent onPress={this.searchPoke}>
              <Icon name="ios-search" />
            </Button>
          </Left>
          <Body>
            <Input
              value={this.state.pokeSearch}
              onChangeText={pokeSearch => this.setState({ pokeSearch })}
              placeholder="Search Pokemon"
            />
          </Body>
          <Right />
        </Header>
        <Content>{this.renderBody()}</Content>
      </Container>
    );
  }
}
