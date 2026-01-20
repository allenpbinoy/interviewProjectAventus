import { resolveComponent } from "../utils/componentResolver";
import { useConfig } from "../context/ConfigContext";
import { useLocation } from "react-router-dom";


const componentKeys = ["Hero", "FeatureList", "ProductGrid", "UserCard"] as const;
type ComponentKey = typeof componentKeys[number]; 


function isComponentKey(key: string): key is ComponentKey {
  return componentKeys.includes(key as ComponentKey);
}

const PageRenderer = () => {
  const { config } = useConfig();
  const location = useLocation(); 


  const pageConfig = config.pages.find(p => p.path === location.pathname);

  if (!pageConfig) return <div>Page not found</div>;

  return (
    <div className="p-4">
      {pageConfig.components.map((comp, idx) => {
        if (isComponentKey(comp.type)) {
          const Component = resolveComponent(comp.type); 
          return <Component key={idx} {...comp.props} />;
        } else {
          return <div key={idx}>Unknown component: {comp.type}</div>;
        }
      })}
    </div>
  );
};

export default PageRenderer;
