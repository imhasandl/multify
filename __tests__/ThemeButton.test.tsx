import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThemeButton from '@/components/ThemeButton';
import { Provider } from 'react-redux';
import store from '@/app/features/store';

describe('ThemeButton', () => {
  test('renders the component', () => {
    render(
      <Provider store={store}>
        <ThemeButton />
      </Provider>
    );
    expect(screen.getByText('fd')).toBeInTheDocument();
  });
});