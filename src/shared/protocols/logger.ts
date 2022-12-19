export interface ILogger {
  info: (payload: string) => void;
  error: (payload: string) => void;
}
