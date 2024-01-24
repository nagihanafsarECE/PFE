/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJeuHistory = /* GraphQL */ `
  subscription OnCreateJeuHistory(
    $filter: ModelSubscriptionJeuHistoryFilterInput
  ) {
    onCreateJeuHistory(filter: $filter) {
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
export const onUpdateJeuHistory = /* GraphQL */ `
  subscription OnUpdateJeuHistory(
    $filter: ModelSubscriptionJeuHistoryFilterInput
  ) {
    onUpdateJeuHistory(filter: $filter) {
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
export const onDeleteJeuHistory = /* GraphQL */ `
  subscription OnDeleteJeuHistory(
    $filter: ModelSubscriptionJeuHistoryFilterInput
  ) {
    onDeleteJeuHistory(filter: $filter) {
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
export const onCreateTJeu = /* GraphQL */ `
  subscription OnCreateTJeu($filter: ModelSubscriptionTJeuFilterInput) {
    onCreateTJeu(filter: $filter) {
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
export const onUpdateTJeu = /* GraphQL */ `
  subscription OnUpdateTJeu($filter: ModelSubscriptionTJeuFilterInput) {
    onUpdateTJeu(filter: $filter) {
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
export const onDeleteTJeu = /* GraphQL */ `
  subscription OnDeleteTJeu($filter: ModelSubscriptionTJeuFilterInput) {
    onDeleteTJeu(filter: $filter) {
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
export const onCreateAJeu = /* GraphQL */ `
  subscription OnCreateAJeu($filter: ModelSubscriptionAJeuFilterInput) {
    onCreateAJeu(filter: $filter) {
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
export const onUpdateAJeu = /* GraphQL */ `
  subscription OnUpdateAJeu($filter: ModelSubscriptionAJeuFilterInput) {
    onUpdateAJeu(filter: $filter) {
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
export const onDeleteAJeu = /* GraphQL */ `
  subscription OnDeleteAJeu($filter: ModelSubscriptionAJeuFilterInput) {
    onDeleteAJeu(filter: $filter) {
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
export const onCreateQJeu = /* GraphQL */ `
  subscription OnCreateQJeu($filter: ModelSubscriptionQJeuFilterInput) {
    onCreateQJeu(filter: $filter) {
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
export const onUpdateQJeu = /* GraphQL */ `
  subscription OnUpdateQJeu($filter: ModelSubscriptionQJeuFilterInput) {
    onUpdateQJeu(filter: $filter) {
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
export const onDeleteQJeu = /* GraphQL */ `
  subscription OnDeleteQJeu($filter: ModelSubscriptionQJeuFilterInput) {
    onDeleteQJeu(filter: $filter) {
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
export const onCreateQuizHistory = /* GraphQL */ `
  subscription OnCreateQuizHistory(
    $filter: ModelSubscriptionQuizHistoryFilterInput
  ) {
    onCreateQuizHistory(filter: $filter) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQuizHistory = /* GraphQL */ `
  subscription OnUpdateQuizHistory(
    $filter: ModelSubscriptionQuizHistoryFilterInput
  ) {
    onUpdateQuizHistory(filter: $filter) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQuizHistory = /* GraphQL */ `
  subscription OnDeleteQuizHistory(
    $filter: ModelSubscriptionQuizHistoryFilterInput
  ) {
    onDeleteQuizHistory(filter: $filter) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTheme = /* GraphQL */ `
  subscription OnCreateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onCreateTheme(filter: $filter) {
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
export const onUpdateTheme = /* GraphQL */ `
  subscription OnUpdateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onUpdateTheme(filter: $filter) {
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
export const onDeleteTheme = /* GraphQL */ `
  subscription OnDeleteTheme($filter: ModelSubscriptionThemeFilterInput) {
    onDeleteTheme(filter: $filter) {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onCreateAnswer(filter: $filter) {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onUpdateAnswer(filter: $filter) {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onDeleteAnswer(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateQJeuAJeu = /* GraphQL */ `
  subscription OnCreateQJeuAJeu($filter: ModelSubscriptionQJeuAJeuFilterInput) {
    onCreateQJeuAJeu(filter: $filter) {
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
export const onUpdateQJeuAJeu = /* GraphQL */ `
  subscription OnUpdateQJeuAJeu($filter: ModelSubscriptionQJeuAJeuFilterInput) {
    onUpdateQJeuAJeu(filter: $filter) {
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
export const onDeleteQJeuAJeu = /* GraphQL */ `
  subscription OnDeleteQJeuAJeu($filter: ModelSubscriptionQJeuAJeuFilterInput) {
    onDeleteQJeuAJeu(filter: $filter) {
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
export const onCreateQuestionAnswer = /* GraphQL */ `
  subscription OnCreateQuestionAnswer(
    $filter: ModelSubscriptionQuestionAnswerFilterInput
  ) {
    onCreateQuestionAnswer(filter: $filter) {
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
export const onUpdateQuestionAnswer = /* GraphQL */ `
  subscription OnUpdateQuestionAnswer(
    $filter: ModelSubscriptionQuestionAnswerFilterInput
  ) {
    onUpdateQuestionAnswer(filter: $filter) {
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
export const onDeleteQuestionAnswer = /* GraphQL */ `
  subscription OnDeleteQuestionAnswer(
    $filter: ModelSubscriptionQuestionAnswerFilterInput
  ) {
    onDeleteQuestionAnswer(filter: $filter) {
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
