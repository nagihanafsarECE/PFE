import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { conditionsStyles, styles } from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';

const ConditionsScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <ScrollView contentContainerStyle={conditionsStyles.container}>
      <View style={conditionsStyles.sectionContainer}>
        <Text style={conditionsStyles.sectionTitle}>Conditions d'utilisation </Text>
        <Text style={conditionsStyles.sectionText}>
          L'application a pour objectif d'éduquer les utilisateurs sur les dangers des messages haineux sur les réseaux sociaux.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Utilisation Autorisée : Les utilisateurs sont autorisés à participer activement aux quiz, à apprendre et à partager les connaissances acquises.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Comportement Interdit : La publication de messages haineux, la promotion de la violence, ou tout comportement inapproprié est strictement interdit.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Responsabilités de l'Utilisateur : Les utilisateurs sont responsables de maintenir un comportement respectueux envers les autres participants et d'utiliser l'application dans un but éducatif.
        </Text>
      </View>

      <View style={conditionsStyles.sectionContainer}>
        <Text style={conditionsStyles.sectionTitle}>Politique de confidentialité </Text>
        <Text style={conditionsStyles.sectionText}>
          Collecte de Données : L'application collecte des informations telles que le nom d'utilisateur et les résultats des quiz pour personnaliser l'expérience de l'utilisateur.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Utilisation des Données : Les données collectées sont utilisées pour suivre la progression de l'utilisateur, lui fournir des recommandations personnalisées et améliorer la qualité de l'application.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Partage des Données : Aucune donnée personnelle identifiable n'est partagée avec des tiers. Les résultats agrégés des quiz peuvent être utilisés à des fins statistiques, mais sans révéler l'identité des utilisateurs.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Sécurité des Données : Des mesures de sécurité robustes sont mises en place pour protéger les informations des utilisateurs contre tout accès non autorisé.
        </Text>
        <Text style={conditionsStyles.sectionText}>
          Droits des Utilisateurs : Les utilisateurs ont le droit de demander l'accès à leurs données, de les corriger et, si nécessaire, de les supprimer de la base de données de l'application.
        </Text>
      </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default ConditionsScreen;
