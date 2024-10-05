type ApiResponse<T> = {
  data: T;
  error: string;
};

type Socket = Socket<DefaultEventsMap, DefaultEventsMap>;
