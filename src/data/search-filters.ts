
export interface SearchFilters {
    query: string;
    dateRange: DateRange;
    tags: string;
    description: string;
}

interface DateRange {
    start: number;
    end: number;
}