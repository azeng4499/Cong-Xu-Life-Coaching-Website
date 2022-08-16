import { useSelector } from "react-redux";

const dictionary = {
  "Hello!": "你好!",
  "My name is Cong": "我的名字是 Cong",
  "What is Coaching?": "什么是人生教练?",
  "About Me": "自我介绍",
  "Types of Coaching": "辅导类型",
  Testimonies: "见证",
  "Book Now": "报名",
};

export const Translate = (string) => {
  const chinese = useSelector((state) => state.isChinese);
  return !chinese ? string : dictionary[string];
};
