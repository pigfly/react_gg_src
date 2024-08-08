import { useEffect, useState } from "react";
import { CountryCodeResponse } from "./CountryInfoResponse";

const CountryInfo = () => {
  const [countryCode, setCountryCode] = useState("AU");
  const [data, setData] = useState<CountryCodeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, [countryCode]);

  const fetchData = async () => {
    setIsLoading(true);

    const res = await fetch(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );

    if (!res.ok) {
      setError(new Error(`fetch the country ${countryCode} info error`));
      setIsLoading(false);
      return;
    }

    const data = (await res.json()) as CountryCodeResponse;
    setData(data);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.currentTarget.value);
  };

  return (
    <section>
      <header>
        <h1>Country Info:</h1>

        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span>Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && (
        <article>
          <h2>{data.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
};

export default CountryInfo;
