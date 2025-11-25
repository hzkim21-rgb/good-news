export type DailyMessage = {
  id: string;
  title: string;
  body: string;   // 30초 분량
  verse?: string;
};

export const dailyMessages: DailyMessage[] = [
  {
    id: "d1",
    title: "오늘의 기쁜 소식",
    body: "당신은 우연히 존재한 사람이 아닙니다. 하나님은 당신을 알고, 사랑하세요. 그 사랑을 가장 분명히 보여주신 분이 예수님입니다.",
    verse: "요한복음 3:16"
  },
  {
    id: "d2",
    title: "한 걸음",
    body: "믿음은 ‘다 이해한 다음’ 시작되지 않습니다. 작은 마음의 문을 열어보는 것에서 시작됩니다.",
    verse: "마가복음 9:24"
  }
];

export type CourseDay = {
  day: number;
  title: string;
  body: string;
  question: string;
  verse?: string;
};

export const course7days: CourseDay[] = [
  {
    day: 1,
    title: "예수님은 누구신가?",
    body: "예수님은 ‘좋은 사람’ 그 이상입니다. 하나님이 우리에게 가까이 오신 방법이에요.",
    question: "예수님을 어떤 분으로 생각해 보셨나요?",
    verse: "요한복음 1:14"
  },
  {
    day: 2,
    title: "왜 예수님이 필요할까?",
    body: "우리는 사랑받기 원하지만, 스스로를 완전히 고칠 수는 없어요. 예수님은 그 빈자리를 채우십니다.",
    question: "내 삶에서 가장 채워지지 않는 부분은 무엇일까요?",
    verse: "로마서 3:23-24"
  },
  {
    day: 3,
    title: "십자가는 무엇인가?",
    body: "십자가는 정죄가 아니라 사랑의 증거입니다. ‘당신을 위해 여기까지 왔다’는 말이에요.",
    question: "누군가 나를 위해 희생해 준 경험이 있나요?",
    verse: "로마서 5:8"
  },
  {
    day: 4,
    title: "부활은 왜 중요할까?",
    body: "부활은 끝이 아니라 시작이라는 약속입니다. 죽음보다 큰 생명이 있다는 선언이지요.",
    question: "‘새 시작’이 필요하다고 느낀 적이 있나요?",
    verse: "고린도전서 15:20"
  },
  {
    day: 5,
    title: "믿음이란 무엇인가?",
    body: "믿음은 시험에 합격하는 게 아니라, 손을 내미는 것입니다. 예수님을 신뢰해 보는 것.",
    question: "조금씩 신뢰해 볼 수 있는 영역은 어디일까요?",
    verse: "에베소서 2:8"
  },
  {
    day: 6,
    title: "기도는 어떻게 시작할까?",
    body: "기도는 특별한 말솜씨가 아니라, 솔직한 마음입니다. ‘하나님, 계시다면…’로도 충분해요.",
    question: "지금 마음에 있는 솔직한 한마디는?",
    verse: "마태복음 6:9"
  },
  {
    day: 7,
    title: "함께 걸어가는 삶",
    body: "신앙은 혼자 버티는 게 아니라 함께 배우는 길입니다. 작은 공동체는 큰 힘이 됩니다.",
    question: "같이 이야기 나눌 사람이 떠오르나요?",
    verse: "히브리서 10:24-25"
  }
];
