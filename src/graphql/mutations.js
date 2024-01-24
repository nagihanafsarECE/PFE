/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJeuHistory = /* GraphQL */ `
  mutation CreateJeuHistory(
    $input: CreateJeuHistoryInput!
    $condition: ModelJeuHistoryConditionInput
  ) {
    createJeuHistory(input: $input, condition: $condition) {
      id
      jeuId
      userID
      pts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateJeuHistory = /* GraphQL */ `
  mutation UpdateJeuHistory(
    $input: UpdateJeuHistoryInput!
    $condition: ModelJeuHistoryConditionInput
  ) {
    updateJeuHistory(input: $input, condition: $condition) {
      id
      jeuId
      userID
      pts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteJeuHistory = /* GraphQL */ `
  mutation DeleteJeuHistory(
    $input: DeleteJeuHistoryInput!
    $condition: ModelJeuHistoryConditionInput
  ) {
    deleteJeuHistory(input: $input, condition: $condition) {
      id
      jeuId
      userID
      pts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTJeu = /* GraphQL */ `
  mutation CreateTJeu(
    $input: CreateTJeuInput!
    $condition: ModelTJeuConditionInput
  ) {
    createTJeu(input: $input, condition: $condition) {
      id
      text
      QJeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTJeu = /* GraphQL */ `
  mutation UpdateTJeu(
    $input: UpdateTJeuInput!
    $condition: ModelTJeuConditionInput
  ) {
    updateTJeu(input: $input, condition: $condition) {
      id
      text
      QJeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTJeu = /* GraphQL */ `
  mutation DeleteTJeu(
    $input: DeleteTJeuInput!
    $condition: ModelTJeuConditionInput
  ) {
    deleteTJeu(input: $input, condition: $condition) {
      id
      text
      QJeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAJeu = /* GraphQL */ `
  mutation CreateAJeu(
    $input: CreateAJeuInput!
    $condition: ModelAJeuConditionInput
  ) {
    createAJeu(input: $input, condition: $condition) {
      id
      text
      qjeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAJeu = /* GraphQL */ `
  mutation UpdateAJeu(
    $input: UpdateAJeuInput!
    $condition: ModelAJeuConditionInput
  ) {
    updateAJeu(input: $input, condition: $condition) {
      id
      text
      qjeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAJeu = /* GraphQL */ `
  mutation DeleteAJeu(
    $input: DeleteAJeuInput!
    $condition: ModelAJeuConditionInput
  ) {
    deleteAJeu(input: $input, condition: $condition) {
      id
      text
      qjeus {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createQJeu = /* GraphQL */ `
  mutation CreateQJeu(
    $input: CreateQJeuInput!
    $condition: ModelQJeuConditionInput
  ) {
    createQJeu(input: $input, condition: $condition) {
      id
      text
      AJeus {
        nextToken
        __typename
      }
      AcceptedAJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      tjeuID
      createdAt
      updatedAt
      qJeuAcceptedAJeuId
      __typename
    }
  }
`;
export const updateQJeu = /* GraphQL */ `
  mutation UpdateQJeu(
    $input: UpdateQJeuInput!
    $condition: ModelQJeuConditionInput
  ) {
    updateQJeu(input: $input, condition: $condition) {
      id
      text
      AJeus {
        nextToken
        __typename
      }
      AcceptedAJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      tjeuID
      createdAt
      updatedAt
      qJeuAcceptedAJeuId
      __typename
    }
  }
`;
export const deleteQJeu = /* GraphQL */ `
  mutation DeleteQJeu(
    $input: DeleteQJeuInput!
    $condition: ModelQJeuConditionInput
  ) {
    deleteQJeu(input: $input, condition: $condition) {
      id
      text
      AJeus {
        nextToken
        __typename
      }
      AcceptedAJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      tjeuID
      createdAt
      updatedAt
      qJeuAcceptedAJeuId
      __typename
    }
  }
`;
export const createQuizHistory = /* GraphQL */ `
  mutation CreateQuizHistory(
    $input: CreateQuizHistoryInput!
    $condition: ModelQuizHistoryConditionInput
  ) {
    createQuizHistory(input: $input, condition: $condition) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuizHistory = /* GraphQL */ `
  mutation UpdateQuizHistory(
    $input: UpdateQuizHistoryInput!
    $condition: ModelQuizHistoryConditionInput
  ) {
    updateQuizHistory(input: $input, condition: $condition) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuizHistory = /* GraphQL */ `
  mutation DeleteQuizHistory(
    $input: DeleteQuizHistoryInput!
    $condition: ModelQuizHistoryConditionInput
  ) {
    deleteQuizHistory(input: $input, condition: $condition) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      quizCount
      QuizHistories {
        nextToken
        __typename
      }
      jeuPoints
      JeuHistories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      quizCount
      QuizHistories {
        nextToken
        __typename
      }
      jeuPoints
      JeuHistories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      quizCount
      QuizHistories {
        nextToken
        __typename
      }
      jeuPoints
      JeuHistories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTheme = /* GraphQL */ `
  mutation CreateTheme(
    $input: CreateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    createTheme(input: $input, condition: $condition) {
      id
      text
      Questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTheme = /* GraphQL */ `
  mutation UpdateTheme(
    $input: UpdateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    updateTheme(input: $input, condition: $condition) {
      id
      text
      Questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTheme = /* GraphQL */ `
  mutation DeleteTheme(
    $input: DeleteThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    deleteTheme(input: $input, condition: $condition) {
      id
      text
      Questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      text
      questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      text
      questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      text
      questions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      text
      Answers {
        nextToken
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      themeID
      createdAt
      updatedAt
      questionAcceptedAnswerId
      __typename
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      text
      Answers {
        nextToken
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      themeID
      createdAt
      updatedAt
      questionAcceptedAnswerId
      __typename
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      text
      Answers {
        nextToken
        __typename
      }
      AcceptedAnswer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      themeID
      createdAt
      updatedAt
      questionAcceptedAnswerId
      __typename
    }
  }
`;
export const createQJeuAJeu = /* GraphQL */ `
  mutation CreateQJeuAJeu(
    $input: CreateQJeuAJeuInput!
    $condition: ModelQJeuAJeuConditionInput
  ) {
    createQJeuAJeu(input: $input, condition: $condition) {
      id
      aJeuId
      qJeuId
      aJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      qJeu {
        id
        text
        tjeuID
        createdAt
        updatedAt
        qJeuAcceptedAJeuId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQJeuAJeu = /* GraphQL */ `
  mutation UpdateQJeuAJeu(
    $input: UpdateQJeuAJeuInput!
    $condition: ModelQJeuAJeuConditionInput
  ) {
    updateQJeuAJeu(input: $input, condition: $condition) {
      id
      aJeuId
      qJeuId
      aJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      qJeu {
        id
        text
        tjeuID
        createdAt
        updatedAt
        qJeuAcceptedAJeuId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQJeuAJeu = /* GraphQL */ `
  mutation DeleteQJeuAJeu(
    $input: DeleteQJeuAJeuInput!
    $condition: ModelQJeuAJeuConditionInput
  ) {
    deleteQJeuAJeu(input: $input, condition: $condition) {
      id
      aJeuId
      qJeuId
      aJeu {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      qJeu {
        id
        text
        tjeuID
        createdAt
        updatedAt
        qJeuAcceptedAJeuId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createQuestionAnswer = /* GraphQL */ `
  mutation CreateQuestionAnswer(
    $input: CreateQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    createQuestionAnswer(input: $input, condition: $condition) {
      id
      answerId
      questionId
      answer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        text
        themeID
        createdAt
        updatedAt
        questionAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuestionAnswer = /* GraphQL */ `
  mutation UpdateQuestionAnswer(
    $input: UpdateQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    updateQuestionAnswer(input: $input, condition: $condition) {
      id
      answerId
      questionId
      answer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        text
        themeID
        createdAt
        updatedAt
        questionAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuestionAnswer = /* GraphQL */ `
  mutation DeleteQuestionAnswer(
    $input: DeleteQuestionAnswerInput!
    $condition: ModelQuestionAnswerConditionInput
  ) {
    deleteQuestionAnswer(input: $input, condition: $condition) {
      id
      answerId
      questionId
      answer {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        text
        themeID
        createdAt
        updatedAt
        questionAcceptedAnswerId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
