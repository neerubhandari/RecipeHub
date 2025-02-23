import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

export default function PreferenceToggle({
  dietaryPreferences,
  label,
  toggleProperty,
  setDietaryPreferences,
  iconComponent,
  className,
}: any) {
  const handlePressedChange = () => {
    setDietaryPreferences((prevPreferences) => ({
      ...prevPreferences,
      [toggleProperty]: !prevPreferences[toggleProperty],
    }));
  };
  return (
    <Toggle
      //   pressed={dietaryPreferences[toggleProperty]}
      variant="outline"
      size={"sm"}
      className={cn(
        "h-10 rounded-2xl flex justify-center items-center hover:opacity-70 text-nowrap px-3",
        "data-[state=off]:border-zinc-900 bg-[#f7f7f7] data-[state=off]:text-zinc-900",
        "max-[740px]:w-auto w-36",
        className
      )}
      onClick={handlePressedChange}
      aria-label={`Toggle ${toggleProperty}`}
    >
      <div>{iconComponent}</div>
      <span className={"text-xs mx-auto font-semibold"}>{label}</span>
    </Toggle>
  );
}
