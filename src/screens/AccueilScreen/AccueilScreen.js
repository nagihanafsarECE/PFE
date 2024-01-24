import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listUsers, listThemes, listQuizHistories } from '../../graphql/queries';
import { styles, statsStyles } from '../../styles/styles';
import { onCreateUser, onUpdateUser } from '../../graphql/subscriptions';
import { createUser } from '../../graphql/mutations';
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AccueilScreen = () => {
  const [quizCount, setQuizCount] = useState(0);
  const [totalThemes, setTotalThemes] = useState(0);
  const [jeuPoints, setJeuPoints] = useState(0);

  useEffect(() => {
    const checkAndCreateUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userId = user.attributes.sub;

        // Check if the user already exists in the User table
        const existingUserResponse = await API.graphql(graphqlOperation(listUsers, {
          filter: { id: { eq: userId } }
        }));

        if (existingUserResponse.data.listUsers.items.length === 0) {
          // User doesn't exist, create a new user
          const createUserResponse = await API.graphql(graphqlOperation(createUser, { input: { id: userId, quizCount: 0, jeuPoints: 0 } }));
          console.log('New user created:', createUserResponse.data.createUser);
        } else {
          console.log('User already exists:', existingUserResponse.data.listUsers.items[0]);
        }
      } catch (error) {
        console.error('Error checking/creating user:', error);
      }
    };

    checkAndCreateUser();
  }, []);

  useEffect(() => {
    const fetchQuizCountAndTotalThemes = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userId = user.attributes.sub;
  
        // Fetch the user's quiz count from the User table
        const userResponse = await API.graphql(graphqlOperation(listUsers, {
          filter: { id: { eq: userId } }
        }));
  
        if (userResponse.data.listUsers.items.length > 0) {
          setQuizCount(userResponse.data.listUsers.items[0].quizCount || 0);
          setJeuPoints(userResponse.data.listUsers.items[0].jeuPoints || 0);
        }
  
        // Fetch the total number of themes
        const themesResponse = await API.graphql(graphqlOperation(listThemes));
        const totalThemesCount = themesResponse.data.listThemes.items.length;
        setTotalThemes(totalThemesCount);
      } catch (error) {
        console.error('Error fetching quiz count and total themes:', error);
      }
    };
  
    fetchQuizCountAndTotalThemes();
  }, [setQuizCount]); // Include setQuizCount in the dependency array

  useEffect(() => {
    // Use this effect to update quizCount whenever it changes
    console.log('Quiz Count updated:', quizCount);
  }, [quizCount]);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateUser)).subscribe({
      next: (userData) => {
        // Handle the creation of a new user
        const newUser = userData.value.data.onCreateUser;
        setQuizCount(newUser.quizCount || 0);
        setJeuPoints(newUser.jeuPoints || 0);
      },
    });
  
    const updateSubscription = API.graphql(graphqlOperation(onUpdateUser)).subscribe({
      next: (userData) => {
        // Handle updates to an existing user
        const updatedUser = userData.value.data.onUpdateUser;
        setQuizCount(updatedUser.quizCount || 0);
        setJeuPoints(updatedUser.jeuPoints || 0);
      },
    });
  
    return () => {
      // Clean up the subscriptions when the component is unmounted
      subscription.unsubscribe();
      updateSubscription.unsubscribe();
    };
  }, []);

  const percentageCompleted = totalThemes > 0 ? (quizCount / totalThemes) * 100 : 0;

  return (
    <LinearGradient
    colors={['#9999FF', '#9966FF', '#6600CC']}
    style={accueilStyles.container}>
    <Animatable.View
      style={accueilStyles.statsContainer}
      animation="fadeInUp"
      duration={1000}
      delay={500}
    >
      <View style={accueilStyles.statsContainer}>
        <Text style={accueilStyles.jeuPoints}>
          <FontAwesome name="star" size={20} color="#FECB00" /> Jeux : {jeuPoints} pts
        </Text>
        <Text style={accueilStyles.quizStats}>
          <FontAwesome name="check-circle" size={16} color="#33CC00" /> Quiz : {quizCount}/{totalThemes}
        </Text>
          <Progress.Bar
            progress={percentageCompleted / 100}
            width={300}
            height={30}
            color="#33CC00"
            unfilledColor="#F0F0F0"
            borderColor="#000"
            borderRadius={8}
            useNativeDriver={true}
            animated={true}
            progressViewOffset={-2}
          />
      </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default AccueilScreen;


const accueilStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  jeuPoints: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  quizStats: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  progressBar: {
    marginTop: 10,
  },
  lastQuizContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  lastQuizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  lastQuiz: {
    fontSize: 16,
    color: '#333333',
  },
};