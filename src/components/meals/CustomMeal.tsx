
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export function CustomMeal() {
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "", quantity: "", unit: "g" },
  ]);
  const [calculatedNutrition, setCalculatedNutrition] = useState<boolean>(false);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "g" }]);
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const updatedIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleCalculate = () => {
    setCalculatedNutrition(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Custom Meal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="mealName">Meal Name</label>
            <Input
              id="mealName"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              placeholder="Enter meal name"
            />
          </div>

          <div className="space-y-4">
            <label className="text-lg font-semibold">Ingredients</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="grid gap-4 md:grid-cols-3">
                <Input
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                />
                <Input
                  placeholder="Quantity"
                  type="number"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                />
                <Input
                  placeholder="Unit (g, ml, etc.)"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                />
              </div>
            ))}
            <Button variant="outline" onClick={handleAddIngredient} className="w-full">
              Add Another Ingredient
            </Button>
          </div>

          <Button onClick={handleCalculate} className="w-full">
            Calculate Nutrition
          </Button>
        </CardContent>
      </Card>

      {calculatedNutrition && (
        <Card>
          <CardHeader>
            <CardTitle>Nutritional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="text-2xl font-bold">450</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Protein</p>
                <p className="text-2xl font-bold">25g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbs</p>
                <p className="text-2xl font-bold">45g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fat</p>
                <p className="text-2xl font-bold">15g</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
