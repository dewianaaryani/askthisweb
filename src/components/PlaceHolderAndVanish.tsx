"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceHolderAndVanish() {
  const placeholders = [
    "https://en.wikipedia.org/wiki/Mark_Zuckerberg",
    "https://en.wikipedia.org/wiki/Battle_of_Britain_Day",
    "https://www.liputan6.com/news/read/5702690/gempa-magnitudo-53-guncang-sukabumi-begini-analisis-bmkg",
    "https:/sport.detik.com/sepakbola/liga-indonesia/d-7542012/mauro-zijlstra-ngaku-sedang-proses-naturalisasi-jadi-wni",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="mt-10">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
