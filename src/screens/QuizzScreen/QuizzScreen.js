import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listQuestions, listAnswers, listQuestionAnswers, listThemes, listUsers, listQuizHistories } from '../../graphql/queries';
import { quizStyles, styles } from '../../styles/styles';
import { updateUser, createQuizHistory } from '../../graphql/mutations';
import {LinearGradient} from 'expo-linear-gradient';
import ConfettiCannon from 'react-native-confetti-cannon';

const buttonColors = ['#FF0000', '#0000FF', '#00CC33', '#FFCC00'];

const QuizzScreen = () => {
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizCount, setQuizCount] = useState(0);
  const nbTotalQuestions = questions.filter(question => question.themeID === selectedTheme).length;



  const themeBackgrounds = {
    "d64b96c0-f0df-4e60-bd6a-4e1cf05b14b6": require('../../../assets/images/securite.png'),
    "6562a67d-947a-47b1-91b2-4492bb0e783b": require('../../../assets/images/prevention.png'),
    "e22917c5-5aac-40f2-bb9f-68617be8393e": require('../../../assets/images/respect.png'),
    "5be2ce44-9738-4776-bae8-920cda321b09": require('../../../assets/images/protection.png'),
    "9a8705fd-4f29-47d1-9fd1-86507fd5bf10": require('../../../assets/images/responsabilite.png'),
    "fe8c056f-f77f-422a-9d21-2fc3acd89c8c": require('../../../assets/images/medias.png'),
    "7212fddf-f840-4373-bfbf-09a96a86f39b": require('../../../assets/images/positive.png'),
    "6b5c59df-970f-49ba-b845-4d8d47e1a7e5": require('../../../assets/images/cyberintimidation.png'),
  };

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listThemes));
        setThemes(response.data.listThemes.items);
      } catch (error) {
        console.error('Error fetching themes:', error);
      }
    };

    fetchThemes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await API.graphql(graphqlOperation(listQuestions, {
          filter: {
            themeID: { eq: selectedTheme },
          },
        }));
        setQuestions(questionsResponse.data.listQuestions.items);

        const answersResponse = await API.graphql(graphqlOperation(listAnswers));
        setAnswers(answersResponse.data.listAnswers.items);

        const questionAnswersResponse = await API.graphql(graphqlOperation(listQuestionAnswers));
        setQuestionAnswers(questionAnswersResponse.data.listQuestionAnswers.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedTheme) {
      fetchData();
    }
  }, [selectedTheme]);

  const updateQuizCount = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;
  
      // Fetch the user's current data
      const getUserResponse = await API.graphql(graphqlOperation(listUsers, {
        filter: { id: { eq: userId } }
      }));
  
      const currentUser = getUserResponse.data.listUsers.items[0];
  
      // Update the quizCount and save it to the database
      const updatedUser = await API.graphql(graphqlOperation(updateUser, {
        input: { id: userId, quizCount: (currentUser.quizCount || 0) + 1 }
      }));
  
      console.log('User quizCount updated:', updatedUser.data.updateUser);
      return (currentUser.quizCount || 0) + 1;
    } catch (error) {
      console.error('Error updating quizCount:', error);
      return null;
    }
  };
  

  const getAnswersForQuestion = () => {
    const currentQuestionId = questions[questionIndex]?.id;
    const answersForQuestion = questionAnswers
      .filter((qa) => qa.questionId === currentQuestionId && questions[questionIndex]?.themeID === selectedTheme)
      .map((qa) => answers.find((a) => a.id === qa.answerId));

    return answersForQuestion;
  };

  const handleAnswerSelection = async (answerId) => {
    const currentQuestion = questions[questionIndex];
    const isCorrectAnswer = currentQuestion.questionAcceptedAnswerId === answerId;
    

    if (isCorrectAnswer) {
      setScore(score + 1);
    }
  
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
  
      // Check if the user has already taken this quiz
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;
  
      const quizHistoryResponse = await API.graphql(graphqlOperation(listQuizHistories, {
        filter: { userID: { eq: userId }, quizId: { eq: selectedTheme } }
      }));
  
      if (quizHistoryResponse.data.listQuizHistories.items.length === 0) {
        // User has not taken this quiz before, update quiz count and add to QuizHistory
        const updatedCount = await updateQuizCount();
        if (updatedCount !== null) {
          setQuizCount(updatedCount);
        }
  
        const createQuizHistoryResponse = await API.graphql(graphqlOperation(createQuizHistory, {
          input: { userID: userId, quizId: selectedTheme }
        }));
  
        console.log('Quiz history created:', createQuizHistoryResponse.data.createQuizHistory);
      }
    }
  };
  

  const handleResetQuiz = () => {
    setQuizCompleted(false);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleResetTheme = () => {
    setQuizCompleted(false);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setSelectedTheme(null); 
  };


  const renderQuizContent = () => {
    if (selectedTheme) {
      const currentQuestion = questions[questionIndex];

      return (
        <View style={styles.container}>
          <Text style={quizStyles.titleQuiz}>{currentQuestion?.text}</Text>
          <FlatList
            data={getAnswersForQuestion()}
            keyExtractor={(answer) => answer.id}
            renderItem={({ item: answer, index }) => {
              const buttonColor = buttonColors[index % buttonColors.length];
              return (
                <TouchableOpacity
                  style={[
                    styles.buttonContainer,
                    selectedAnswer === answer.id && styles.selectedAnswerButton,
                    { backgroundColor: buttonColor },
                  ]}
                  onPress={() => handleAnswerSelection(answer.id)}
                  disabled={selectedAnswer !== null}
                >
                  <Text style={styles.buttonText}>{answer.text}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      );
    } else {
      return (
        <FlatList
          data={themes}
          keyExtractor={(theme) => theme.id}
          renderItem={({ item: theme }) => (
            <TouchableOpacity
              //style={styles.buttonContainer}
              onPress={() => {
                console.log('Selected Theme:', theme);
                setSelectedTheme(theme.id);
                setQuestionIndex(0);
              }}
              style={styles.buttonContainer}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImageBackground
                source={themeBackgrounds[theme.id]}
                style={styles.themeImage}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>{theme.text}</Text>
              </View>            
            </TouchableOpacity>
          )}
        />
      );
    }
  };

  return ( 
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      {quizCompleted ? (
        (score === nbTotalQuestions ? (
          <>
            <ConfettiCannon count={100} origin={{ x: -10, y: 0 }} />
            <Text style={quizStyles.titleQuiz}>Quiz Completed!</Text>
            <Text style={quizStyles.titleQuiz}>Final Score: {score}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleResetQuiz}>
              <Text style={styles.buttonText}>Reset Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleResetTheme}>
              <Text style={styles.buttonText}>Select Theme</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={quizStyles.titleQuiz}>Quiz Completed!</Text>
            <Text style={quizStyles.titleQuiz}>Final Score: {score}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleResetQuiz}>
              <Text style={styles.buttonText}>Reset Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleResetTheme}>
              <Text style={styles.buttonText}>Select Theme</Text>
            </TouchableOpacity>
          </>
        ))
      ) : (
        renderQuizContent()
      )}
    </LinearGradient>
  );
  
  
};

export default QuizzScreen;

