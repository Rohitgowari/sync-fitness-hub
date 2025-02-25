
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DietPlan } from "@/components/meals/DietPlan";
import { CustomMeal } from "@/components/meals/CustomMeal";
import { MealAnalysis } from "@/components/meals/MealAnalysis";

export default function Meals() {
  return (
    <Layout>
      <div className="container mx-auto p-6 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Meals</h1>
        
        <Tabs defaultValue="diet-plan" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="diet-plan">Diet Plan</TabsTrigger>
            <TabsTrigger value="custom-meal">Add Custom Meal</TabsTrigger>
            <TabsTrigger value="analysis">Meal Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diet-plan">
            <DietPlan />
          </TabsContent>
          
          <TabsContent value="custom-meal">
            <CustomMeal />
          </TabsContent>
          
          <TabsContent value="analysis">
            <MealAnalysis />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
