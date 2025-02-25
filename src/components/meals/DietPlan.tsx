
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function DietPlan() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Diet Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium">Dietary Preference</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select diet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                  <SelectItem value="gluten-free">Gluten Free</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 pt-4">
              <h3 className="font-semibold">Today's Meals</h3>
              
              {['Breakfast', 'Lunch', 'Dinner'].map((mealTime) => (
                <Card key={mealTime}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{mealTime}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Suggested meal time: {getMealTime(mealTime)}</p>
                      <div className="flex gap-2 flex-wrap">
                        <Badge>500 kcal</Badge>
                        <Badge variant="secondary">Protein: 25g</Badge>
                        <Badge variant="secondary">Carbs: 50g</Badge>
                        <Badge variant="secondary">Fat: 20g</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getMealTime(meal: string): string {
  switch (meal) {
    case 'Breakfast':
      return '7:00 - 9:00 AM';
    case 'Lunch':
      return '12:00 - 2:00 PM';
    case 'Dinner':
      return '6:00 - 8:00 PM';
    default:
      return '';
  }
}
