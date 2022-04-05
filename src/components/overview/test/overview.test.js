import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/index';
import Overview from '../Overview.jsx';

test('renders learn react link', () => {
  render
  
  (
    <Provider store={store}>
        <Overview/>
    </Provider> 
  );

  const gg = screen.getByRole('id')
  console.log(gg)
})
