"use client";

interface PropertySearchFilterProps {
  minPrice?: string;
  maxPrice?: string;
  bedrooms?: string;
  bathrooms?: string;
}

export function PropertySearchFilter({
  minPrice = "",
  maxPrice = "",
  bedrooms = "",
  bathrooms = "",
}: PropertySearchFilterProps) {
  return (
    <form action="/properties" method="GET">
      {/* <div>
        <label htmlFor="minPrice">Minimum price</label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          defaultValue={minPrice}
        />
      </div>

      <div>
        <label htmlFor="maxPrice">Maximum price</label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          defaultValue={maxPrice}
        />
      </div> */}

      <div>
        <label htmlFor="bedrooms">Minimum bedrooms</label>
        <select id="bedrooms" name="bedrooms" defaultValue={bedrooms}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div>
        <label htmlFor="bathrooms">Minimum Bathrooms</label>
        <select id="bathrooms" name="bathrooms" defaultValue={bathrooms}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <button
        type="submit"
        className="button button--blue font-bold py-2 px-4 rounded"
      >
        Search properties
      </button>
    </form>
  );
}
