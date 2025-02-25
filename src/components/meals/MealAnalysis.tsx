
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function MealAnalysis() {
  const weeklyData = [
    { day: "Mon", calories: 2100, protein: 150, carbs: 200, fat: 70 },
    { day: "Tue", calories: 2300, protein: 160, carbs: 220, fat: 75 },
    { day: "Wed", calories: 1900, protein: 140, carbs: 180, fat: 65 },
    { day: "Thu", calories: 2200, protein: 155, carbs: 210, fat: 72 },
    { day: "Fri", calories: 2000, protein: 145, carbs: 190, fat: 68 },
    { day: "Sat", calories: 2400, protein: 165, carbs: 230, fat: 78 },
    { day: "Sun", calories: 2150, protein: 152, carbs: 205, fat: 71 },
  ];

  const insights = [
    {
      title: "Calorie Intake",
      status: "On Track",
      message: "Your average daily calorie intake aligns with your goals.",
    },
    {
      title: "Protein Intake",
      status: "Needs Improvement",
      message: "Consider increasing protein intake for better muscle recovery.",
    },
    {
      title: "Carbohydrates",
      status: "Good",
      message: "Carb intake is well-balanced for your activity level.",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Calorie Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calories" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Macronutrient Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Protein</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">152g</span>
                  <span className="text-green-500">25%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbs</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">205g</span>
                  <span className="text-blue-500">50%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fat</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">71g</span>
                  <span className="text-yellow-500">25%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{insight.title}</CardTitle>
              <p className={`text-sm ${
                insight.status === "On Track" ? "text-green-500" :
                insight.status === "Needs Improvement" ? "text-yellow-500" :
                "text-blue-500"
              }`}>
                {insight.status}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{insight.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
