export type StatusUpdate = {
  id: string;
  content: string;
  category: 'PC Building' | 'Gaming' | 'Life' | 'Hobby';
};

export const statusUpdates: StatusUpdate[] = [
  {
    id: '1',
    content: 'My lazy ass, finally started the porfolio project i thought about for a while 😮‍💨',
    category: 'Web'
  },
  {
    id: '2',
    content: 'Deadlock is Peak! 👏',
    category: 'Gaming'
  },
  {
    id: '3',
    content: 'Experimenting with some custom browser extensions to automate my daily tasks.',
    category: 'Hobby'
  }
];
