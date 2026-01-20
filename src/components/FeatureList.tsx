interface FeatureListProps { items: string[] }
const FeatureList: React.FC<FeatureListProps> = ({ items }) => (
  <ul className="list-disc pl-5">
    {items.map((item, idx) => <li key={idx}>{item}</li>)}
  </ul>
);
export default FeatureList;
