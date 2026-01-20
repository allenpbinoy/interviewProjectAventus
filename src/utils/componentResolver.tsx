import React from "react";
import Hero from "../components/hero";
import FeatureList from "../components/FeatureList";
import ProductGrid from "../components/ProductGrid";
import UserCard from "../components/UserCard";


interface ComponentPropsMap {
  Hero: { title: string; subtitle: string };
  FeatureList: { items: string[] };
  ProductGrid: { products: { id: number; name: string }[] };
  UserCard: { name: string; email: string };
}


const componentMap: {
  [K in keyof ComponentPropsMap]: React.FC<ComponentPropsMap[K]>;
} = {
  Hero,
  FeatureList,
  ProductGrid,
  UserCard,
};


export const resolveComponent = <K extends keyof ComponentPropsMap>(
  type: K
): React.FC<ComponentPropsMap[K]> => {
  if (componentMap[type]) return componentMap[type];

  const Fallback: React.FC<unknown> = () => <div>Unknown component: {type}</div>;
  return Fallback as React.FC<ComponentPropsMap[K]>;
};
