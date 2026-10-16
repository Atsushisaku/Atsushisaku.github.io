// パワーリフティングの大会成績。試技は [重量, 成功したか] の 3 本。

export type Attempt = [weight: number, good: boolean];

export type Meet = {
  name: string;
  fiscalYear: number;
  weightClass: string;
  bodyweight: number;
  place: string;
  awards?: string[];
  // 大会ごとの一言コメント。空なら表示しない。改行は 

  comment?: string;
  squat: Attempt[];
  bench: Attempt[];
  deadlift: Attempt[];
};

export const meets: Meet[] = [
  {
    name: '第42回 茨城県パワーリフティング選手権大会',
    fiscalYear: 2023,
    weightClass: '74kg級',
    bodyweight: 72.92,
    place: '優勝',
    comment: '',
    squat: [[170, true], [180, true], [185, true]],
    bench: [[130, true], [135, true], [137.5, false]],
    deadlift: [[200, true], [210, true], [220, true]],
  },
  {
    name: '第44回 つくば市近隣パワーリフティング選手権大会',
    fiscalYear: 2023,
    weightClass: '74kg級',
    bodyweight: 73.35,
    place: '優勝',
    awards: ['最優秀選手'],
    comment: '',
    squat: [[195, true], [205, false], [205, false]],
    bench: [[135, true], [140, true], [142.5, false]],
    deadlift: [[225, true], [240, true], [250, false]],
  },
  {
    name: '第43回 茨城県パワーリフティング選手権大会',
    fiscalYear: 2024,
    weightClass: '83kg級',
    bodyweight: 82.6,
    place: '準優勝',
    comment: '',
    squat: [[207.5, true], [215, true], [220, true]],
    bench: [[145, true], [152.5, true], [157.5, false]],
    deadlift: [[230, true], [245, true], [252.5, true]],
  },
  {
    name: '第45回 つくば市近隣パワーリフティング選手権大会',
    fiscalYear: 2024,
    weightClass: '83kg級',
    bodyweight: 82.95,
    place: '準優勝',
    comment: '',
    squat: [[215, true], [222.5, true], [227.5, false]],
    bench: [[150, true], [157.5, false], [157.5, false]],
    deadlift: [[245, true], [255, true], [260, false]],
  },
  {
    name: '第46回 つくば市近隣パワーリフティング選手権大会',
    fiscalYear: 2025,
    weightClass: '83kg級',
    bodyweight: 82.8,
    place: '準優勝',
    comment: '',
    squat: [[215, false], [217.5, false], [217.5, true]],
    bench: [[152.5, true], [157.5, false], [157.5, false]],
    deadlift: [[240, true], [255, true], [265, false]],
  },
];

export const best = (attempts: Attempt[]) =>
  Math.max(0, ...attempts.filter(([, good]) => good).map(([w]) => w));

export const total = (m: Meet) => best(m.squat) + best(m.bench) + best(m.deadlift);
