class ApiResponseBuilder {
  static build<T>({ data, error }: { data: T; error: string }): ApiResponse<T> {
    return { data, error };
  }
}

export default ApiResponseBuilder;
