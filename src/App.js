import { useState } from "react";
import "./App.css";

function App() {
  const countries = [
    { id: 1, value: "INDIA", name: "India" },
    { id: 2, value: "AMERICA", name: "America" },
    { id: 3, value: "UNITED_KINGDOM", name: "United Kingdom" },
  ];
  const states = [
    {
      id: 1,
      country_value: "INDIA",
      values: [
        { id: 1, value: "GUJARAT", name: "Gujarat" },
        { id: 2, value: "MAHARASTRA", name: "Maharastra" },
        { id: 3, value: "RAJASTHAN", name: "Rajasthan" },
      ],
    },
    {
      id: 2,
      country_value: "AMERICA",
      values: [
        { id: 1, value: "ALABAMA", name: "Alabama" },
        { id: 2, value: "COLARADO", name: "Colorado" },
        { id: 3, value: "DELAWARE", name: "Delaware" },
      ],
    },
    {
      id: 3,
      country_value: "UNITED_KINGDOM",
      values: [
        { id: 1, value: "SCOTLAND", name: "Scotland" },
        { id: 2, value: "NORTHERN_IRELAND", name: "Northern Ireland" },
        { id: 3, value: "WALES", name: "Wales" },
      ],
    },
  ];
  const cities = [
    {
      id: 1,
      state_value: "GUJARAT",
      values: [
        { id: 1, value: "SURAT", name: "Surat" },
        { id: 2, value: "GANDHINAGAR", name: "Gandhinagar" },
        { id: 3, value: "RAJASTHAN", name: "Rajasthan" },
      ],
    },
    {
      id: 2,
      state_value: "MAHARASTRA",
      values: [
        { id: 1, value: "MUMBAI", name: "Mumbai" },
        { id: 2, value: "PUNE", name: "Pune" },
        { id: 3, value: "NAGPUR", name: "Nagpur" },
      ],
    },
    {
      id: 3,
      state_value: "RAJASTHAN",
      values: [
        { id: 1, value: "JAIPUR", name: "Jaipur" },
        { id: 2, value: "UDAIPUR", name: "Udaipur" },
        { id: 3, value: "JODHPUR", name: "Jodhpur" },
      ],
    },
    {
      id: 4,
      state_value: "SCOTLAND",
      values: [
        { id: 1, value: "GLASGOW", name: "Glasgow" },
        { id: 2, value: "EDINBURGH", name: "Edinburgh" },
      ],
    },
    {
      id: 5,
      state_value: "NORTHERN_IRELAND",
      values: [
        { id: 1, value: "ARMAGH", name: "Armagh" },
        { id: 2, value: "BELFAST", name: "Belfast" },
      ],
    },
    {
      id: 6,
      state_value: "WALES",
      values: [
        { id: 1, value: "CARDIFF", name: "Cardiff" },
        { id: 2, value: "NEWPORT", name: "Newport" },
        { id: 3, value: "SWANSEA", name: "Swansea" },
      ],
    },
    {
      id: 7,
      state_value: "ALABAMA",
      values: [
        { id: 1, value: "DOTHAN", name: "Dothan" },
        { id: 2, value: "AUBURN", name: "Auburn" },
      ],
    },
    {
      id: 8,
      state_value: "COLARADO",
      values: [
        { id: 1, value: "COLUMBUS", name: "Columbus" },
        { id: 2, value: "GLIDDEN", name: "Glidden" },
      ],
    },
    {
      id: 9,
      state_value: "DELAWARE",
      values: [
        { id: 1, value: "NEWARK", name: "Newark" },
        { id: 2, value: "MIDDLETOWN", name: "Middletown" },
      ],
    },
  ];
  const areas = [
    {
      id: 1,
      city_value: "SURAT",
      values: [
        { id: 1, value: "VARACHHA", name: "Varachha" },
        { id: 2, value: "KAPODRA", name: "Kapodra" },
        { id: 3, value: "PASODARA", name: "Pasodara" },
      ],
    },
    {
      id: 2,
      city_value: "GANDHINAGAR",
      values: [
        { id: 1, value: "ADALAJ", name: "Adalaj" },
        { id: 2, value: "VAVOL", name: "Vavol" },
        { id: 3, value: "PETHAPUR", name: "Pethapur" },
      ],
    },
    {
      id: 3,
      city_value: "RAJASTHAN",
      values: [
        { id: 1, value: "Jaipur", name: "Jaipur" },
        { id: 2, value: "JALORE", name: "Jalore" },
        { id: 3, value: "KOTA", name: "Kota" },
      ],
    },
    {
      id: 4,
      city_value: "MUMBAI",
      values: [
        { id: 1, value: "JUHU", name: "Juhu" },
        { id: 2, value: "BANDRA", name: "Bandra" },
      ],
    },
    {
      id: 5,
      city_value: "PUNE",
      values: [
        { id: 1, value: "BANER", name: "Baner" },
        { id: 2, value: "AUNDH", name: "Aundh" },
        { id: 3, value: "ALANDI", name: "Alandi" },
      ],
    },
    {
      id: 6,
      city_value: "NAGPUR",
      values: [
        { id: 1, value: "MAHAL", name: "Mahal" },
        { id: 2, value: "ITWARI", name: "Itwari" },
        { id: 3, value: "MOMINPURA", name: "Mominpura" },
      ],
    },
    {
      id: 7,
      city_value: "JAIPUR",
      values: [
        { id: 1, value: "SIRSI", name: "Sirsi" },
        { id: 2, value: "BAPUNAGAR", name: "Bapu Nagar" },
      ],
    },
    {
      id: 8,
      city_value: "UDAIPUR",
      values: [
        { id: 1, value: "BHUWANA", name: "Bhuwana" },
        { id: 2, value: "SECTOR9", name: "Sector 9" },
      ],
    },
    {
      id: 9,
      city_value: "JODHPUR",
      values: [
        { id: 1, value: "BASNI", name: "Basni" },
        { id: 2, value: "AJIT_COLONY", name: "Ajit Colony" },
      ],
    },
    {
      id: 10,
      city_value: "GLASGOW",
      values: [
        { id: 1, value: "AULDHOUSE", name: "Auldhouse" },
        { id: 2, value: "CRAIGTON", name: "Craigton" },
      ],
    },
    {
      id: 11,
      city_value: "GLASGOW",
      values: [
        { id: 1, value: "OLDTOWN", name: "Old Town" },
        { id: 2, value: "LEITH", name: "Leith" },
      ],
    },
    {
      id: 12,
      city_value: "ARMAGH",
      values: [
        { id: 1, value: "KEADY", name: "Keady" },
        { id: 2, value: "FORKHILL", name: "Forkhill" },
      ],
    },
    {
      id: 13,
      city_value: "BELFAST",
      values: [
        { id: 1, value: "NORTH_BELFAST", name: "North Belfast" },
        { id: 2, value: "WEST_BELFAST", name: "West Belfast" },
      ],
    },
    {
      id: 14,
      city_value: "CARDIFF",
      values: [
        { id: 1, value: "ELY", name: "Ely" },
        { id: 2, value: "CYNCOED", name: "Cyncoed" },
      ],
    },
    {
      id: 15,
      city_value: "NEWPORT",
      values: [
        { id: 1, value: "BULMORE", name: "Bulmore" },
        { id: 2, value: "BISHPOOL", name: "Bishpool" },
      ],
    },
    {
      id: 16,
      city_value: "SWANSEA",
      values: [
        { id: 1, value: "BANESWELL", name: "Baneswell" },
        { id: 2, value: "BARNARDTOWN", name: "Barnardtown" },
      ],
    },
    {
      id: 17,
      city_value: "DOTHAN",
      values: [
        { id: 1, value: "MONTGOMERY", name: "Montgomery" },
        { id: 2, value: "AUBURN_OPELIKA", name: "Auburn-Opelika" },
      ],
    },
    {
      id: 18,
      city_value: "AUBURN",
      values: [
        { id: 1, value: "CALIFORNIA", name: "California" },
        { id: 2, value: "GEORGIA", name: "Georgia" },
      ],
    },
    {
      id: 19,
      city_value: "COLUMBUS",
      values: [
        { id: 1, value: "BREWERY", name: "Brewery" },
        { id: 2, value: "ARENA_DISTRICT", name: "Arena District" },
      ],
    },
    {
      id: 20,
      city_value: "GLIDDEN",
      values: [
        { id: 1, value: "WELCOME_SIGN", name: "Welcome sign" },
        { id: 2, value: "MARION_PARK", name: "Marion Park Pavilion" },
      ],
    },
    {
      id: 21,
      city_value: "NEWARK",
      values: [
        { id: 1, value: "NEW_JERSEY", name: "New Jersey" },
        { id: 2, value: "BAYONNE", name: " Bayonne" },
      ],
    },
    {
      id: 22,
      city_value: "MIDDLETOWN",
      values: [
        { id: 1, value: "LEONARDO", name: "Leonardo" },
        { id: 2, value: "LINCROFT", name: " Lincroft" },
      ],
    },
  ];
  const [step, setStep] = useState(1);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedArea, setSelectedArea] = useState();

  const handleCountry = (e) => {
    setStep(2);
    setSelectedCountry(e);
  };
  const handleState = (e) => {
    setStep(3);
    setSelectedState(e);
  };
  const handleCity = (e) => {
    setStep(4);
    setSelectedCity(e);
  };
  const handleArea = (e) => {
    setStep(0);
    setSelectedArea(e);
  };

  return (
    <>
      <div>
        {step === 1 &&
          countries.map((country) => {
            return (
              <div
                key={country.id}
                onClick={() => handleCountry(country.value)}
              >
                <input type="radio" name={country.name} value={country.name} />
                <label>{country.name}</label>
              </div>
            );
          })}
        {step === 2 &&
          states.map(
            (state) =>
              state.country_value === selectedCountry &&
              state.values.map((item) => (
                <div key={item.id} onClick={() => handleState(item.value)}>
                  <input type="radio" name={item.name} value={item.name} />
                  <label>{item.name}</label>
                </div>
              ))
          )}
        {step === 3 &&
          cities.map(
            (city) =>
              city.state_value === selectedState &&
              city.values.map((item) => (
                <div key={item.id} onClick={() => handleCity(item.value)}>
                  <input type="radio" name={item.name} value={item.name} />
                  <label>{item.name}</label>
                </div>
              ))
          )}
        {step === 4 &&
          areas.map(
            (area) =>
              area.city_value === selectedCity &&
              area.values.map((item) => (
                <div key={item.id} onClick={() => handleArea(item.value)}>
                  <input type="radio" name={item.name} value={item.name} />
                  <label>{item.name}</label>
                </div>
              ))
          )}
      </div>
      {selectedArea && (
        <div>
          <div className="values">
            {selectedCountry &&
              `your Country name is : ${selectedCountry.replace("_", " ")}`}
          </div>
          <div className="values">
            {selectedState &&
              `your State name is : ${selectedState.replace("_", " ")}`}
          </div>
          <div className="values">
            {selectedCity &&
              `your City name is : ${selectedCity.replace("_", " ")}`}
          </div>
          <div className="values">
            {selectedArea &&
              `your Area name is : ${selectedArea.replace("_", " ")}`}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
