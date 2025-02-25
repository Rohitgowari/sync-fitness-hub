
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ChefHat, Dumbbell, LineChart } from "lucide-react";

const quickStats = [
  {
    label: "Workouts This Week",
    value: "3/5",
    trend: "+1",
    icon: Dumbbell,
  },
  {
    label: "Calories Today",
    value: "1,850",
    trend: "-150",
    icon: ChefHat,
  },
  {
    label: "Active Minutes",
    value: "45",
    trend: "+10",
    icon: Activity,
  },
  {
    label: "Weight Progress",
    value: "165 lbs",
    trend: "-2",
    icon: LineChart,
  },
];

export default function Index() {
  return (
    <Layout>
      <div className="container px-4 py-6 lg:px-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
            <p className="text-muted-foreground mt-2">Track your fitness journey and achieve your goals</p>
          </div>
          <Button className="bg-theme-500 hover:bg-theme-600">Start Workout</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <Card key={stat.label} className="hover:border-theme-500/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className={`text-sm ${stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                    {stat.trend}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Workout</CardTitle>
              <CardDescription>Upper Body Strength</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-theme-500" />
                  Bench Press - 4 sets
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-theme-500" />
                  Shoulder Press - 3 sets
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-theme-500" />
                  Tricep Extensions - 3 sets
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meal Plan</CardTitle>
              <CardDescription>1,850 calories remaining</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-energy-500" />
                  Breakfast - Oatmeal with fruits
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-energy-500" />
                  Lunch - Grilled chicken salad
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-energy-500" />
                  Dinner - Salmon with quinoa
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
              <CardDescription>You're on track!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Workouts Completed</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-full w-[60%] rounded-full bg-theme-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Nutrition Goals</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-full w-[80%] rounded-full bg-energy-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
