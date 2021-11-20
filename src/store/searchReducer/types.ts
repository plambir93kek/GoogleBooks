export interface SearchState {
    name: string,
    category: string;
    sorting: string;
    startIndex: number;
    enableSearch: boolean
};

export interface SearchParamsAction{
    name: string,
    category: string;
    sorting: string;
}