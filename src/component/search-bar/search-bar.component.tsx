import React, { ChangeEvent, Component } from 'react';
import { SearchFilters } from 'src/data/search-filters';
import { searchDocuments } from 'src/service/search.service';

interface SearchBarProps {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
}

interface SearchBarState {
  filters: SearchFilters;
  count: number;
}

export class SearchBarComponent extends Component<SearchBarProps, SearchBarState> {
  placeHolder: string = 'Search assets';

  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      filters: props.filters,
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState(
      prevState => ({
        filters: { ...prevState.filters, [name]: value },
      })
    );
  }

  handleDateRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          dateRange: {
            ...prevState.filters.dateRange,
            [name]: new Date(value).getTime(),
          },
        },
      })
    );
  }

  applyFilters = async () => {
    this.props.setFilters(this.state.filters);
    console.log("apply filters")
    try {
      const searchResults = await searchDocuments(this.state.filters.description)
      console.log(searchResults); // Handle the search results here
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  render() {
    const { query, dateRange, tags, description } = this.state.filters;

    return (
      <div>
        <input
          type='text'
          name='query'
          className='w-full p-2 border border-gray-300 rounded'
          placeholder={this.placeHolder}
          value={query}
          onChange={this.handleInputChange}
        />

        <input
          type='number'
          name='start'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          placeholder='Start date (YYYYMMDD)'
          value={dateRange.start}
          onChange={this.handleDateRangeChange}
        />

        <input
          type='number'
          name='end'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          placeholder='End date (YYYYMMDD)'
          value={dateRange.end}
          onChange={this.handleDateRangeChange}
        />

        <input
          type='text'
          name='tags'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          placeholder='Filter by tags'
          value={tags}
          onChange={this.handleInputChange}
        />

        <input
          type='text'
          name='description'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          placeholder='Filter by description'
          value={description}
          onChange={this.handleInputChange}
        />

        <button
          onClick={this.increment}
          className='mt-2 p-2 bg-blue-500 text-white rounded'
        >
          Increment
        </button>

        <button
          onClick={this.applyFilters}
          className='mt-2 p-2 bg-green-500 text-white rounded ml-2'
        >
          Apply Filters
        </button>

        <div>Count: {this.state.count}</div>
      </div>
    );
  }
}
