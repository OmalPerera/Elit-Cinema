import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

type Props = {};

const DATA = [
  {
    id: '1',
    title: 'Marvel`s Avengers : Infinty war',
    thumbnail: 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/a4/17/e9/a417e9a4-da6a-4818-17c9-83a741ec3fab/pr_source.lsr/268x0w.png',
    year: '2018',
    duration: '120 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },
  {
    id: '2',
    title: 'Ready Player One',
    thumbnail: 'https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/ae/61/06/ae6106ae-9b9d-bbb5-0682-fd645b6ac7c4/pr_source.lsr/268x0w.jpg',
    year: '2018',
    duration: '135 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },
  {
    id: '3',
    title: 'Marvel`s Black Panter',
    thumbnail: 'https://is4-ssl.mzstatic.com/image/thumb/Video114/v4/e6/a2/d6/e6a2d6a6-01e7-705a-3667-75c4a7271f5d/pr_source.lsr/268x0w.png',
    year: '2018',
    duration: '115 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },
  {
    id: '4',
    title: 'Star Wars: The Force Awakens',
    thumbnail: 'https://is3-ssl.mzstatic.com/image/thumb/Video69/v4/f3/6d/00/f36d0071-acde-f835-58bd-6e5370ace9d3/pr_source.lsr/268x0w.png',
    year: '2015',
    duration: '90 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },
  {
    id: '6',
    title: '‎Star Wars: The Last Jedi',
    thumbnail: 'https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/1e/02/35/1e0235d9-c971-17b4-7ff1-a2ada76fae6e/pr_source.lsr/268x0w.png',
    year: '2017',
    duration: '125 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },
  {
    id: '7',
    title: 'Star Wars: The Rise Of Skywalker ',
    thumbnail: 'https://is5-ssl.mzstatic.com/image/thumb/Video114/v4/9a/0e/53/9a0e53e1-54df-1b22-d37c-2a073c5c6d6c/DIS_SWRoS_OCAD_WW_ARTWORK_EN_2000x3000_21BQAP00000444.lsr/268x0w.jpg',
    year: '2019',
    duration: '140 mins',
    youtubeUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
  },

];

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.homePageTitle}>Movies</Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => this.singleListItem(item)}
            keyExtractor={item => item.id}
          />
        </View>

      </View>
    );
  }

  singleListItem(itemData) {
    return (
      <View style={styles.singleListItemContainer}>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.movieImage}
            source={{
              uri: itemData.thumbnail,
            }}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.movieName}>{itemData.title}</Text>
          <Text style={styles.movieInfoText}>{itemData.year + ', ' + itemData.duration}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { Linking.openURL(itemData.youtubeUrl); }}
          >
            <Text style={styles.watchNowSty}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  homePageTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: 'black'
  },
  bodyContainer: {
    flex: 9,
  },
  movieName: {
    fontSize: 16,
    color: '#222'
  },
  singleListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  thumbnailContainer: {
    flex: 50,
  },
  informationContainer: {
    flex: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  movieInfoText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10
  },
  movieImage: {
    width: 120,
    height: 150,
    borderRadius: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e73e42",
    justifyContent: 'center',
    width: 120,
    height: 32,
    borderRadius: 5
  },
  watchNowSty: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
});
