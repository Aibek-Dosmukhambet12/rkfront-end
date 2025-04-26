import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsScreen = () => {
  const navigation = useNavigation();

  const newsData = [
    { id: 1, title: 'Исследования Марса: новые открытия', content: 'Марсоход Perseverance обнаружил доказательства древних водоёмов на Красной планете, открывая новые перспективы для изучения внеземной жизни.' },
    { id: 2, title: 'Прорыв в медицине: искусственные органы', content: 'Учёные успешно вырастили функционирующие человеческие органы в лабораторных условиях, что может революционизировать трансплантологию.' },
    { id: 3, title: 'Тренды устойчивой моды', content: 'Мировые бренды переходят на использование переработанных материалов и экологичных технологий в производстве одежды.' },
    { id: 4, title: 'Эволюция электромобилей', content: 'Новые батареи позволяют электромобилям проезжать более 1000 км на одном заряде, меняя будущее автомобильной индустрии.' },
    { id: 5, title: 'Развитие метавселенных', content: 'Компании инвестируют миллиарды в создание виртуальных миров для работы, развлечений и социальной активности.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔥 Актуальные новости</Text>
      {newsData.map((news) => (
        <View key={news.id} style={styles.newsItem}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.content}>
            {news.content.length > 100 ? news.content.substring(0, 100) + '...' : news.content}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NewsDetail', { title: news.title, content: news.content })}
          >
            <Text style={styles.buttonText}>Читать далее →</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f0', // нежный кремовый фон
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#e05e2b', // коралловый
  },
  newsItem: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#ffb085', 
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9480f', // тёплый оранжевый
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: '#6b4c35', // мягкий коричневый
    lineHeight: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ff7849', // яркий кораллово-оранжевый
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NewsScreen;
