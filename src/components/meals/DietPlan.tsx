
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function DietPlan() {
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [calories, setCalories] = useState("");
  const [showMealPlan, setShowMealPlan] = useState(false);

  const handleGeneratePlan = () => {
    setShowMealPlan(true);
  };

  const mealPlan = [
    {
      time: "Breakfast (8:00 AM)",
      meal: "Oatmeal with protein",
      calories: 400,
      protein: 25,
      carbs: 45,
      fats: 12,
      fiber: 8,
    },
    {
      time: "Lunch (1:00 PM)",
      meal: "Grilled chicken salad",
      calories: 550,
      protein: 40,
      carbs: 35,
      fats: 20,
      fiber: 6,
    },
    {
      time: "Dinner (7:00 PM)",
      meal: "Salmon with quinoa",
      calories: 650,
      protein: 45,
      carbs: 50,
      fats: 25,
      fiber: 7,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Diet Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="dietaryPreference">Dietary Preference</label>
              <Select value={dietaryPreference} onValueChange={setDietaryPreference}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="keto">Keto</SelectItem>
                  <SelectItem value="gluten-free">Gluten Free</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="fitnessGoal">Fitness Goal</label>
              <Select value={fitnessGoal} onValueChange={setFitnessGoal}>
                <SelectTrigger>
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="calories">Daily Calorie Target</label>
            <Input
              id="calories"
              placeholder="e.g. 2000"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <Button onClick={handleGeneratePlan} className="w-full">
            Generate Meal Plan
          </Button>
        </CardContent>
      </Card>

      {showMealPlan && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Personalized Meal Plan</h2>
          {mealPlan.map((meal, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{meal.time}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{meal.meal}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Calories</p>
                      <p className="font-medium">{meal.calories}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Protein</p>
                      <p className="font-medium">{meal.protein}g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Carbs</p>
                      <p className="font-medium">{meal.carbs}g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fats</p>
                      <p className="font-medium">{meal.fats}g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fiber</p>
                      <p className="font-medium">{meal.fiber}g</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
