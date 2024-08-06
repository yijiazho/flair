import React, { Component } from 'react';
import { FilterService } from 'src/service/filter.service';
import { Book } from 'src/data/book';
import BookGridComponent from 'src/component/book/grid/book-grid.component';
import PaginationComponent from 'src/component/pagination/pagination.component';

interface MainComponentState {
  books: Book[];
  total: number;
  currentPage: number;
}

export class MainComponent extends Component<{}, MainComponentState> {
  private filterService: FilterService;

  constructor(props: {}) {
    super(props);
    this.filterService = new FilterService();
    this.state = {
      books: [],
      total: 0,
      currentPage: 1
    };
  }

  componentDidMount() {
    this.applyFilters(this.state.currentPage);
  }

  applyFilters = async (page: number) => {
    try {
      const { books, total } = await this.filterService.applyFilters(page);
      this.setState({ books, total, currentPage: page });
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  handlePageChange = (page: number) => {
    this.applyFilters(page);
  };

  render() {
    const { books, total, currentPage } = this.state;
    const MAX_PAGES = 10;
    const totalPages = Math.min(MAX_PAGES, Math.ceil(total / 10));
    
    return (
      <div>
        <h1>Book List</h1>
        <BookGridComponent books={books} />
        <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default MainComponent;
