import React, { Component } from 'react';
import { Company } from 'src/data/company';
import { FilterService } from 'src/service/filter.service';
import CompanyGridComponent from 'src/component/company/grid/company-grid.component';

interface MainComponentState {
  companies: Company[];
}

export class MainComponent extends Component<{}, MainComponentState> {
  private filterService: FilterService;

  constructor(props: {}) {
    super(props);
    this.filterService = new FilterService();
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    this.applyFilters();
  }

  applyFilters = async () => {
    try {
      const companies = await this.filterService.applyFilters();
      this.setState({ companies });
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  render() {
    const { companies } = this.state;

    return (
      <div>
        <h1>Company List</h1>
        <CompanyGridComponent companies={companies} />
      </div>
    );
  }
}

export default MainComponent;
