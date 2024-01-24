import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { styles, newsStyles } from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';


const ActualitesScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '02285187a88f4432be13c87ed3c60e6b';
    const apiUrl = `https://newsapi.org/v2/everything?q=hate+online&sortBy=popularity&language=en&apiKey=${apiKey}`;
    //const apiUrl = `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
      })
      .catch(error => console.error('Erreur lors de la récupération des actualités :', error));
  }, []);

  const renderNewsItem = ({ item }) => (
    <View style={newsStyles.newsContainer}>
      <Text style={newsStyles.newsTitle}>{item.title}</Text>
      <Image source={{ uri: item.urlToImage }} style={newsStyles.newsImage} />
      <Text style={newsStyles.newsDescription}>{item.description}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderNewsItem}
        />
      </View>
    </LinearGradient>
  );
}

export default ActualitesScreen;