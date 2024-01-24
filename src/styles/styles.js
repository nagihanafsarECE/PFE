import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /*backgroundColor: '#9999FF',*/
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    height: 60,
    width : 300,
    borderColor: 'grey',
    color : 'black',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 18,
    textAlign : 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#6633CC',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 30,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  themeImage: {
    width: 60,
    height: 60, 
    marginRight: 10, 
  },
});

const quizStyles = StyleSheet.create({
  titleQuiz: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
    marginTop: 40,
  },
});

const statsStyles = StyleSheet.create({
  statsContainer: {
    alignItems: 'center',
    width: '100%',
    height : '100%',
    justifyContent: 'center',
  },
  statsTitle: {
    textShadowColor: '#000', 
    textShadowOffset: { 
      width: 2, 
      height: 2 }, 
    textShadowRadius: 2,
  },
  textShadow: {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 10
  },
});

const accountStyles = StyleSheet.create({
  DisplayName:  {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  DisplayEmail:  {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

const aideStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  modalTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  closeButton: {
    color: '#007BFF',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 8,
    marginTop: 5,
    fontSize: 15,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 15,
    fontSize: 15,
  },
});



const newsStyles = StyleSheet.create({
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  newsContainer: {
    marginLeft: 15,
    marginTop: 30,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '90%',
    backgroundColor: '#fff',
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555555', 
  },
});

const faqStyles = StyleSheet.create({
  container: {
    padding: 20,
    /*backgroundColor: '#9999FF',*/
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
  },
});

const conditionsStyles = StyleSheet.create({
  container: {
    padding: 20,
    /*backgroundColor: '#9999FF',*/
    flexGrow: 1,
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: "#6600CC",
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    marginLeft: 10,
    marginRight: 10,
  },
});

export { styles, faqStyles, conditionsStyles, aideStyles, newsStyles, statsStyles, accountStyles, quizStyles };
