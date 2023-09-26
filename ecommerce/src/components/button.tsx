import { Button } from "antd";

interface PropsBtn {
  content: string;
}

export default function Btn(props: PropsBtn) {
  return <Button>{props.content}</Button>;
}
