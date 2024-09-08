import { ErrorProps } from "../../../models/types";

export const Error: React.FC<ErrorProps> = ({message}) => {
  return <div>Error : {message}</div>;
};
