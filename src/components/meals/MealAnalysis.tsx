
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: 'Mon', calories: 2200, protein: 120, carbs: 250, fat: 70 },
  { name: 'Tue', calories: 2000, protein: 110, carbs: 230, fat: 65 },
  { name: 'Wed', calories: 2300, protein: 125, carbs: 260, fat: 75 },
  { name: 'Thu', calories: 1900, protein: 100, carbs: 220, fat: 60 },
  { name: 'Fri', calories: 2100, protein: 115, carbs: 240, fat: 68 },
  { name: 'Sat', calories: 1800, protein: 95, carbs: 200, fat: 55 },
  { name: 'Sun', calories: 2400, protein: 130, carbs: 270, fat: 78 },
];

export function MealAnalysis() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Weekly Overview</h2>
        <Select defaultValue="week">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calorie Intake</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calories" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">115g</div>
            <p className="text-sm text-muted-foreground">Daily Average</p>
            <p className="text-sm text-green-600 mt-2">+5g from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Carbohydrates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">240g</div>
            <p className="text-sm text-muted-foreground">Daily Average</p>
            <p className="text-sm text-red-600 mt-2">-10g from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Fats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67g</div>
            <p className="text-sm text-muted-foreground">Daily Average</p>
            <p className="text-sm text-green-600 mt-2">+2g from last week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suggestions for Improvement</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              Consider increasing protein intake to support muscle growth
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Good job maintaining consistent calorie intake throughout the week
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Try to reduce carbohydrate intake in evening meals
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
