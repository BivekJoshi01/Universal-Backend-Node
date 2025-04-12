import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { MenuRoutesConfig } from "../../../routes/routesConfig";
import { useNavigate } from "react-router";
import { IoNavigateCircleOutline } from "react-icons/io5";

const cleanLabel = (path: string): string => {
  return path.replace(/^\/(Menu|Settings|Analytics|Others)\//, "");
};

interface RouteItem {
  id: string;
  label: string;
  path: string;
  group: string;
}

const getRouteItems = (routes: any[]): RouteItem[] => {
  let items: RouteItem[] = [];

  const traverseRoutes = (routes: any[], parentPath = "") => {
    routes.forEach((route) => {
      const fullPath = `${parentPath}/${route.path}`;
      if (route.headChildren && route.headChildren.length > 0) {
        traverseRoutes(route.headChildren, fullPath); 
      } else {
        items.push({
          id: fullPath,
          label: cleanLabel(fullPath),
          path: fullPath,
          group: fullPath.split("/")[1], 
        });
      }
    });
  };

  traverseRoutes(routes);
  return items;
};

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const routeItems = getRouteItems(MenuRoutesConfig);

  const filteredItems = routeItems.filter(
    (item) =>
      item.label.toLowerCase().includes(value.toLowerCase()) ||
      item.group.toLowerCase().includes(value.toLowerCase())
  );

  const groupedItems: Record<string, RouteItem[]> = {
    Settings: filteredItems.filter((item) => item.group === "Settings"),
    Analytics: filteredItems.filter((item) => item.group === "Analytics"),
    Others: filteredItems.filter((item) => item.group === "Others"),
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  const handleItemClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50 z-10"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          placeholder="What do you need?"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
          value={value}
          onValueChange={setValue}
        />
        <Command.List className="p-3">
          {Object.keys(groupedItems).map(
            (group) =>
              groupedItems[group]?.length > 0 && (
                <Command.Group
                  key={group}
                  heading={group}
                  className="text-sm mb-3 text-stone-400"
                >
                  {groupedItems[group].map((item) => (
                    <Command.Item
                      key={item.id}
                      className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2"
                      onSelect={() => handleItemClick(item.path)} 
                    >
                      <IoNavigateCircleOutline /> {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              )
          )}
          {filteredItems.length === 0 && (
            <Command.Empty>
              No results found for <span className="text-violet-500">{value}</span>
            </Command.Empty>
          )}
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
