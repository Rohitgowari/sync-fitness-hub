
import {
  Activity,
  Home,
  ChefHat,
  Dumbbell,
  LineChart,
  User,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: ChefHat, label: "Meals", href: "/meals" },
  { icon: Dumbbell, label: "Workouts", href: "/workouts" },
  { icon: LineChart, label: "Progress", href: "/progress" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4">
          <Activity className="h-6 w-6 text-theme-500" />
          <span className="font-bold text-xl">FITsync</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
