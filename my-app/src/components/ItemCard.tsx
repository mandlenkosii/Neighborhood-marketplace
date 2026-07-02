import { Link } from 'react-router-dom';
import { ToolIllustration } from '../ToolIllustration';
import { CATEGORY_LABELS } from '../data/types';
import type { Item } from '../data/types';

export function ItemCard({ item }: { item: Item }) {
  return (
    <Link to={`/items/${item.id}`} className="item-card">
      <ToolIllustration category={item.category} />
      <span className="price-stamp">
        {item.priceType === 'free' ? (
          <span className="badge badge-moss">Free</span>
        ) : (
          <span className="badge badge-rust">R{item.pricePerDay}/day</span>
        )}
      </span>
      <div className="item-card-body">
        <span className="item-category mono">{CATEGORY_LABELS[item.category]}</span>
        <h3 className="item-title">{item.title}</h3>
        <p className="item-meta">
          {item.distanceKm.toFixed(1)} km away · {item.location}
        </p>
      </div>
    </Link>
  );
}
