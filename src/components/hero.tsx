import { useTheme } from "../hooks/useTheme";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <div
      className={`p-${theme.spacing} bg-${theme.colors.accent} text-${theme.colors.text} rounded-lg`}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Hero;
