import { render, screen } from '@testing-library/react';
import Async from '../apis/Async';

describe('Test Async', () => {
  test('post are rendered succeed', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: 'post1',
        },
      ],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
