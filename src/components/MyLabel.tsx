import "./myLabel.css";

interface Props {
  /**
   * Label value of component
   */
  label: string;
  /**
   * Size of label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * UpperCase letters
   */
  allCaps: boolean;
  /**
   * Color of label
   */
  color: "primary" | "secondary" | "tertiary";
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
}: Props) => {
  return (
    <span
      className={`${size} text-${color}`}
      style={
        allCaps ? { textTransform: "uppercase" } : { textTransform: "initial" }
      }
    >
      {label}
    </span>
  );
};
