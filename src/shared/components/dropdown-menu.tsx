import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AppDropDownMenuProps {
  trigger: string | JSX.Element;
  label?: string;
  items?: (string | JSX.Element)[];
  children?: JSX.Element;
}

export function AppDropDownMenu({
  trigger,
  label,
  items,
  children,
}: AppDropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {label ? (
          <>
            {" "}
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        ) : null}

        {items?.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
