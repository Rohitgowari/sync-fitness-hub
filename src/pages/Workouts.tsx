
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Home, Calendar } from "lucide-react";

const GymWorkout = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              Strength Building
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Customized split routines with detailed exercise plans and form guidance
            </p>
            <Button variant="secondary">View Routines</Button>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Cardio Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              HIIT and steady-state cardio plans with heart rate monitoring
            </p>
            <Button variant="secondary">Start Training</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const HomeWorkout = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>No Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Bodyweight exercises for full-body workouts at home
            </p>
            <Button variant="secondary">Start Workout</Button>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>With Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Workouts using basic home equipment like dumbbells and resistance bands
            </p>
            <Button variant="secondary">View Exercises</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Workouts = () => {
  return (
    <Layout>
      <div className="container max-w-7xl p-6">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Workouts</h1>
        <Tabs defaultValue="gym" className="w-full">
          <TabsList>
            <TabsTrigger value="gym" className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              Gym Workout
            </TabsTrigger>
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home Workout
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gym" className="animate-fade-in">
            <GymWorkout />
          </TabsContent>
          <TabsContent value="home" className="animate-fade-in">
            <HomeWorkout />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Workouts;

