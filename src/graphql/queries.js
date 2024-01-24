/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJeuHistory = /* GraphQL */ `
  query GetJeuHistory($id: ID!) {
    getJeuHistory(id: $id) {
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
export const listJeuHistories = /* GraphQL */ `
  query ListJeuHistories(
    $filter: ModelJeuHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJeuHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        jeuId
        userID
        pts
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const jeuHistoriesByUserID = /* GraphQL */ `
  query JeuHistoriesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelJeuHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jeuHistoriesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        jeuId
        userID
        pts
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTJeu = /* GraphQL */ `
  query GetTJeu($id: ID!) {
    getTJeu(id: $id) {
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
export const listTJeus = /* GraphQL */ `
  query ListTJeus(
    $filter: ModelTJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTJeus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAJeu = /* GraphQL */ `
  query GetAJeu($id: ID!) {
    getAJeu(id: $id) {
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
export const listAJeus = /* GraphQL */ `
  query ListAJeus(
    $filter: ModelAJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAJeus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQJeu = /* GraphQL */ `
  query GetQJeu($id: ID!) {
    getQJeu(id: $id) {
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
export const listQJeus = /* GraphQL */ `
  query ListQJeus(
    $filter: ModelQJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQJeus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        tjeuID
        createdAt
        updatedAt
        qJeuAcceptedAJeuId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const qJeusByTjeuID = /* GraphQL */ `
  query QJeusByTjeuID(
    $tjeuID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    qJeusByTjeuID(
      tjeuID: $tjeuID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        tjeuID
        createdAt
        updatedAt
        qJeuAcceptedAJeuId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuizHistory = /* GraphQL */ `
  query GetQuizHistory($id: ID!) {
    getQuizHistory(id: $id) {
      id
      quizId
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuizHistories = /* GraphQL */ `
  query ListQuizHistories(
    $filter: ModelQuizHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quizId
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const quizHistoriesByUserID = /* GraphQL */ `
  query QuizHistoriesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuizHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quizHistoriesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quizId
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quizCount
        jeuPoints
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTheme = /* GraphQL */ `
  query GetTheme($id: ID!) {
    getTheme(id: $id) {
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
export const listThemes = /* GraphQL */ `
  query ListThemes(
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        themeID
        createdAt
        updatedAt
        questionAcceptedAnswerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const questionsByThemeID = /* GraphQL */ `
  query QuestionsByThemeID(
    $themeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByThemeID(
      themeID: $themeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        themeID
        createdAt
        updatedAt
        questionAcceptedAnswerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQJeuAJeu = /* GraphQL */ `
  query GetQJeuAJeu($id: ID!) {
    getQJeuAJeu(id: $id) {
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
export const listQJeuAJeus = /* GraphQL */ `
  query ListQJeuAJeus(
    $filter: ModelQJeuAJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQJeuAJeus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aJeuId
        qJeuId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const qJeuAJeusByAJeuId = /* GraphQL */ `
  query QJeuAJeusByAJeuId(
    $aJeuId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQJeuAJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    qJeuAJeusByAJeuId(
      aJeuId: $aJeuId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aJeuId
        qJeuId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const qJeuAJeusByQJeuId = /* GraphQL */ `
  query QJeuAJeusByQJeuId(
    $qJeuId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQJeuAJeuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    qJeuAJeusByQJeuId(
      qJeuId: $qJeuId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aJeuId
        qJeuId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestionAnswer = /* GraphQL */ `
  query GetQuestionAnswer($id: ID!) {
    getQuestionAnswer(id: $id) {
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
export const listQuestionAnswers = /* GraphQL */ `
  query ListQuestionAnswers(
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        answerId
        questionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const questionAnswersByAnswerId = /* GraphQL */ `
  query QuestionAnswersByAnswerId(
    $answerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionAnswersByAnswerId(
      answerId: $answerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        answerId
        questionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const questionAnswersByQuestionId = /* GraphQL */ `
  query QuestionAnswersByQuestionId(
    $questionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionAnswersByQuestionId(
      questionId: $questionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        answerId
        questionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
