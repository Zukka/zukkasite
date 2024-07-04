export interface Achievement {
    metric: string;
    value: string;
    postfix?: string;
    prefix?: string;
}
export const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "50",
    postfix:"+"
  },
  {
    prefix: "+",
    metric: "Users",
    value: "100",
    postfix:"K"
  },
  {
    metric: "Years",
    value: "10",
    postfix:"+"
  },
];
