interface Surah {
  id: number;
  name: string;
  meaning: string;
  revelation_place: string;
  juz: number;
}

export function groupSurahByJuz(surahList: Surah[]): Record<number, Surah[]> {
  return surahList.reduce((acc: Record<number, Surah[]>, surah: Surah) => {
    const { juz } = surah;
    if (!acc[juz]) {
      acc[juz] = [];
    }
    acc[juz].push(surah);
    return acc;
  }, {});
}
