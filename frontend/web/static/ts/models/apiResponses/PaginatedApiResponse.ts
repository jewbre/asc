interface PaginatedApiResponse<T> {
    items : T[];
    _pagination : Pagination
}