interface Product { id: number; name: string }
interface ProductGridProps { products: Product[] }
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="grid grid-cols-2 gap-4">
    {products.map(p => (
      <div key={p.id} className="p-2 border rounded">{p.name}</div>
    ))}
  </div>
);
export default ProductGrid;
