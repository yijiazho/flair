import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationComponent from './pagination.component';

describe('PaginationComponent', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test('renders the correct number of pages', () => {
    render(<PaginationComponent totalPages={5} currentPage={1} onPageChange={mockOnPageChange} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('disables the current page button', () => {
    render(<PaginationComponent totalPages={5} currentPage={3} onPageChange={mockOnPageChange} />);
    const currentPageButton = screen.getByText('3');
    expect(currentPageButton).toBeDisabled();
  });

  test('calls onPageChange with the correct page number', () => {
    render(<PaginationComponent totalPages={5} currentPage={1} onPageChange={mockOnPageChange} />);
    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('applies active class to the current page button', () => {
    render(<PaginationComponent totalPages={5} currentPage={4} onPageChange={mockOnPageChange} />);
    const currentPageButton = screen.getByText('4');
    expect(currentPageButton).toHaveClass('active');
  });
});
