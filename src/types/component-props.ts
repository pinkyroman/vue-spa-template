import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type DaisyUiButtonColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type DaisyUiComponentSize = "lg" | "md" | "sm" | "xs";

export type FaIconSize =
  | "2xs"
  | "xs"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

export interface XButtonProps {
  label?: string; // Button label
  icon?: IconDefinition; // Button icon
  iconSize?: FaIconSize; // Button icon size
  iconBeat?: boolean; // Button icon with beat animation
  iconBeatFade?: boolean; // Button icon with beat and fade animation
  iconBounce?: boolean; // Button icon with bounce animation
  iconFade?: boolean; // Button icon with fade animation
  iconFlip?: "horizontal" | "vertical" | "both"; // Button icon flip
  iconShake?: boolean; // Button icon with shake animation
  iconSpin?: boolean; // Button icon with spin animation
  iconSpinReverse?: boolean; // Button icon with reverse spin animation
  iconSpinPulse?: boolean; // Button icon with spin pulse animation
  color?: DaisyUiButtonColor; // Button with specific color
  ghost?: boolean; // Button with ghost style
  link?: boolean; // Button styled as a link
  active?: boolean; // Force button to show active state
  block?: boolean; // Full width button
  circle?: boolean; // Circle button with a 1:1 ratio
  square?: boolean; // Square button with a 1:1 ratio
  disabled?: boolean; // Force button to show disabled state
  glass?: boolean; // Button with a glass effect
  noAnimation?: boolean; // Disables click animation
  outline?: boolean; // Transparent Button with colored border
  size?: DaisyUiComponentSize; // Button size
  wide?: boolean; // Wide button (more horizontal padding)
}
