import appendId from './append-id';

const ratings = [
  {
    name: 'Familiar',
    description: "I've been exposed to this, but I haven't practiced it much.",
    displayOrder: 10,
  },
  {
    name: 'Beginner',
    description: "I've practiced this, but rely on Google to help... a lot.",
    displayOrder: 20,
  },
  {
    name: 'Proficient',
    description:
      "I'm comfortable practicing this, but I still have plenty to learn.",
    displayOrder: 30,
  },
  {
    name: 'Expert',
    description:
      "I'm comfortable teaching others about this, but I'm not done learning.",
    displayOrder: 40,
  },
  {
    name: 'Master',
    description: 'I know just about all there is to know about this.',
    displayOrder: 50,
  },
];

export default appendId(ratings);