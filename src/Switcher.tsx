import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { MoonIcon } from "./shared/icons/MoonIcon";
import { SunIcon } from "./shared/icons/SunIcon";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeSwitch = (props: SwitchProps) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(false); 

  const {
    Component, 
    slots, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  useEffect(() => {
    if (mounted) {
      const selectedTheme = isSelected ? 'light' : 'dark';
      setTheme(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    }
  }, [isSelected, mounted, setTheme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      setIsSelected(storedTheme === 'light');
    }
    setMounted(true);
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2">
      <Component
        {...getBaseProps()}
        onClick={() => setIsSelected(!isSelected)}
      >
        <VisuallyHidden >
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
}
