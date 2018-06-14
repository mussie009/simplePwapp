import { combineReducers } from 'redux';

import contactsReducer from './contactsReducer';
import activeContactReducer from './activeContactReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  
  contacts: contactsReducer,
  activeContact: activeContactReducer,
  form: formReducer
  
});
