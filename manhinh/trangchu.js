import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import {
  Item,
  Input,
  Icon,
  Container,
  Header,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";
import _ from "lodash";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fulldata: [],
      page: 1,
      allowLoadMore: false,
      isLoading: false,
      error: null,
      query: "",
      refreshing: false
    };
  }

  getData = () => {
    this.setState({ isLoading: true });
    const { page } = this.state;
    const api = "https://reqres.in/api/users?page=" + page;
    fetch(api)
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          data: this.state.data.concat(resJson.data),
          fulldata: this.state.data.concat(resJson.data),
          refreshing: false
        });
        if (resJson.data.length == 6){
          this.setState({ allowLoadMore: true })
        }else{
          this.setState({ allowLoadMore: false })
        }
      })
  };

  componentDidMount() {
    this.getData();
  }

  SuDungLoadMore = () => {
    if (this.state.allowLoadMore == true) {
      this.setState(
        {
          page: this.state.page + 1
        },
        () => this.getData()
      );
    }
  };


  HienThiToolbar = () => {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="Tìm kiếm" onChangeText={this.timKiem} />
        </Item>
      </Header>
    );
  };
  TaiLaiTrang = () => {
    this.setState(
      {
        data: [],
        fulldata: [],
        page: 1,
        refreshing: true
      },
      () => {
        this.getData();
      }
    );
  };

  timKiem = text => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fulldata, data => {
      if (data.email.includes(formatQuery)) {
        return true;
      } else false;
    });
    this.setState({ data, query: text });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <List>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TrangThongTin", item)}
              >
                <ListItem avatar>
                  <Left>
                    <Thumbnail style={{width: 50, height: 50}} source={{ uri: item.avatar }} />
                  </Left>
                  <Body>
                    <Text style={{fontSize: 22}}>
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.email}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.email}
            ListHeaderComponent={this.HienThiToolbar}
            refreshing={this.state.refreshing}
            onRefresh={this.TaiLaiTrang}
            onEndReachedThreshold={0.5}
            onEndReached={this.SuDungLoadMore}
          />
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});
