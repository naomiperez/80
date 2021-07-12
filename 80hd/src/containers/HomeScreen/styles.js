import { StyleSheet } from 'react-native';
import Theme from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.cream,
  },
  containerCard: {
    backgroundColor: Theme.primaryLight,
    opacity: 0.6,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 30,
    paddingTop: 18,
    borderRadius: 20,
    borderColor: Theme.primaryLight,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  text: {
    color: Theme.text,
    marginBottom: 13,
    paddingBottom: 5,
    fontSize: 20,
  },
});

export default styles;
