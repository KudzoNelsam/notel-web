export interface RestResponse<T> {
  type: string;
  results: T;
  status: number;
  totalElements?: number;
  pages?: number[];
  size?: number;
  currentPage?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  totalPages?: number;
}
