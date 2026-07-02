import type { Category, Filters } from '../data/types';
import { CATEGORY_LABELS } from '../data/types';

const CATEGORIES: Array<Category | 'all'> = ['all', 'power-tools', 'garden', 'household', 'sports'];

export function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  return (
    <div className="filter-bar">
      <input
        className="search"
        type="search"
        placeholder="Search tools, gear, equipment…"
        value={filters.query}
        onChange={(e) => onChange({ ...filters, query: e.target.value })}
        aria-label="Search items"
      />

      <select
        className="select"
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value as Category | 'all' })}
        aria-label="Category"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c === 'all' ? 'All categories' : CATEGORY_LABELS[c]}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={filters.priceType}
        onChange={(e) => onChange({ ...filters, priceType: e.target.value as Filters['priceType'] })}
        aria-label="Price"
      >
        <option value="all">Free or paid</option>
        <option value="free">Free only</option>
        <option value="paid">Paid only</option>
      </select>

      <label className="distance-field">
        Within {filters.maxDistanceKm} km
        <input
          type="range"
          min={1}
          max={20}
          value={filters.maxDistanceKm}
          onChange={(e) => onChange({ ...filters, maxDistanceKm: Number(e.target.value) })}
        />
      </label>
    </div>
  );
}
