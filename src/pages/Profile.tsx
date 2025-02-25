
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "Endurance",
  "General Fitness",
  "Flexibility",
] as const;

type FitnessGoal = typeof fitnessGoals[number];

interface ProfileData {
  name: string;
  age: string;
  weight: string;
  height: string;
  fitnessGoal: FitnessGoal | "";
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    age: "",
    weight: "",
    height: "",
    fitnessGoal: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoalChange = (value: FitnessGoal) => {
    setProfile(prev => ({
      ...prev,
      fitnessGoal: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a backend
    console.log("Profile data:", profile);
    toast.success("Profile updated successfully!");
  };

  return (
    <Layout>
      <div className="container px-4 py-6 lg:px-8 max-w-2xl mx-auto animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="age" className="text-sm font-medium">
                  Age
                </label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={profile.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="weight" className="text-sm font-medium">
                  Weight (kg)
                </label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={profile.weight}
                  onChange={handleInputChange}
                  placeholder="Enter your weight"
                  min="1"
                  max="500"
                  step="0.1"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="height" className="text-sm font-medium">
                  Height (cm)
                </label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={profile.height}
                  onChange={handleInputChange}
                  placeholder="Enter your height"
                  min="1"
                  max="300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fitnessGoal" className="text-sm font-medium">
                  Fitness Goal
                </label>
                <Select value={profile.fitnessGoal} onValueChange={handleGoalChange}>
                  <SelectTrigger id="fitnessGoal">
                    <SelectValue placeholder="Select your fitness goal" />
                  </SelectTrigger>
                  <SelectContent>
                    {fitnessGoals.map((goal) => (
                      <SelectItem key={goal} value={goal}>
                        {goal}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-theme-500 hover:bg-theme-600">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
