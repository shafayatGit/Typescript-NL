interface Developer<T, X> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch?: T;
  bike?: X;
}

interface PoorWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface PoorBike {
  brand: string;
  model: string;
  hasCarrier: boolean;
}

const poorDeveloper: Developer<PoorWatch, PoorBike> = {
  name: "Shafayat Hossain",
  salary: 50000,
  device: {
    brand: "Apple",
    model: "MacBook Air",
    releaseYear: "2020",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    model: "FZ",
    hasCarrier: false,
  },
};

interface RichWatch {
  heartRate: string;
  gps: boolean;
  calculator: boolean;
  aiFeature?: boolean;
}
const richDeveloper: Developer<RichWatch, null> = {
  name: "Senior Shafayat Hossain",
  salary: 150000,
  device: {
    brand: "Dell",
    model: "XPS 15",
    releaseYear: "2022",
  },
  smartWatch: {
    heartRate: "85 bpm",
    gps: true,
    calculator: true,
  },
};

console.log(poorDeveloper, richDeveloper);
