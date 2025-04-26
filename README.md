Документация по проекту: React Native с Верхней Навигацией
Описание проекта
Данное приложение представляет собой новостной агрегатор, где пользователи могут просматривать актуальные новости, а также добавлять их в избранное для быстрого доступа. Приложение использует React Native и React Navigation для организации интерфейса и навигации. В данном проекте мы реализуем верхнюю навигационную панель с вкладками, а также контекст для избранных новостей, что позволяет пользователю сохранять и просматривать любимые статьи.

Функциональные экраны
1. Экран Новости (NewsScreen)
На экране Новости отображаются последние статьи с кратким описанием (первые 100 символов).

Пользователи могут перейти на экран с полным содержанием новости.

Для каждой новости предусмотрена кнопка "Читать далее", которая ведет к детальной информации.

2. Экран Избранное (FavoritesScreen)
Экран избранных новостей показывает все статьи, которые пользователь добавил в список избранных.

Каждая статья отображается в виде карточки с возможностью удаления из избранного.

Навигация и структура приложения
Для организации переходов между экранами и управления вкладками мы используем React Navigation с верхней навигацией (Material Top Tabs).

Навигационная панель
Навигация теперь осуществляется через верхнюю панель вкладок, а не через нижнюю. Для этого использован компонент createMaterialTopTabNavigator из React Navigation, который позволяет пользователю переключаться между экранами Новости и Избранное. Вкладки расположены горизонтально, что делает интерфейс более современным.

Пример кода для настройки верхней панели:
javascript
 
 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsScreen from './NewsScreen';
import FavoritesScreen from './FavoritesScreen';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato', // цвет активной вкладки
          tabBarInactiveTintColor: 'gray', // цвет неактивной вкладки
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: 'tomato' }, // стиль индикатора вкладки
        }}
      >
        <Tab.Screen name="Новости" component={NewsScreen} />
        <Tab.Screen name="Избранное" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
Использование контекста для избранных новостей
Для управления избранными новостями используется FavoritesContext, который предоставляет возможность сохранять и удалять новости из списка избранных.

Пример контекста для избранных новостей:
javascript
 
 
import React, { createContext, useState } from 'react';

// Контекст избранных новостей
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (newsItem) => {
    setFavorites((prevFavorites) => [...prevFavorites, newsItem]);
  };

  const removeFavorite = (newsId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(news => news.id !== newsId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
Установка зависимостей
Чтобы проект корректно работал, необходимо установить несколько зависимостей:

1. Основные зависимости для навигации:
 
 
 
npm install @react-navigation/native
npm install @react-navigation/material-top-tabs
npm install react-native-tab-view react-native-pager-view
2. Дополнительные библиотеки:
 
 
 
npm install react-native-screens react-native-safe-area-context
3. Для работы с контекстом и другими функциями:
 
 
 
npm install @react-navigation/stack
Структура проекта
App.js — основной файл, где настроена навигация между экранами.

NewsScreen.js — экран, на котором отображаются новости.

FavoritesScreen.js — экран для управления избранными новостями.

FavoritesContext.js — файл, в котором создан контекст для избранных новостей.

Перезапуск и запуск проекта
После того как зависимости установлены, необходимо перезапустить приложение с помощью:


npm start
или если используется Expo:

 
expo start
Примечания
В этой версии приложения используется верхняя панель навигации, что улучшает пользовательский интерфейс и облегчает навигацию.

Можно легко добавлять новые вкладки и экраны, расширяя приложение.

В будущем можно улучшить работу с API для загрузки новостей и добавления дополнительных функций, таких как фильтрация новостей.

