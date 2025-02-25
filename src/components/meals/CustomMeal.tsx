
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Save } from "lucide-react";
import { useState } from "react";

export function CustomMeal() {
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: '' }]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Custom Meal</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium">Meal Name</label>
            <Input placeholder="Enter meal name" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-medium">Ingredients</label>
              <Button type="button" variant="outline" size="sm" onClick={addIngredient}>
                <Plus className="mr-2 h-4 w-4" />
                Add Ingredient
              </Button>
            </div>

            {ingredients.map((_, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <Input placeholder="Ingredient name" />
                <Input placeholder="Quantity" type="number" />
                <Input placeholder="Unit (g, ml, etc)" />
              </div>
            ))}
          </div>

          <Button className="w-full">
            <Save className="mr-2 h-4 w-4" />
            Save Meal
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
