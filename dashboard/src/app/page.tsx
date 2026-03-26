import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const todos = [
    { id: 1, title: "Plan weekly sprint", completed: true, priority: "high" },
    {
      id: 2,
      title: "Refactor dashboard widgets",
      completed: false,
      priority: "medium",
    },
    { id: 3, title: "Write onboarding notes", completed: false, priority: "low" },
    { id: 4, title: "Review pending pull requests", completed: true, priority: "high" },
    { id: 5, title: "Prepare demo checklist", completed: false, priority: "medium" },
    { id: 6, title: "Clean up stale branches", completed: true, priority: "low" },
  ];

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const completionRate = Math.round((completedTodos / totalTodos) * 100);
  const highPriorityPending = todos.filter(
    (todo) => !todo.completed && todo.priority === "high",
  ).length;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Todo Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Overview of todo volume and completion insights
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Total Todos
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    {totalTodos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Completed
                  </Typography>
                  <Typography variant="h4" color="success.main" fontWeight={700}>
                    {completedTodos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" gutterBottom>
                    Pending
                  </Typography>
                  <Typography variant="h4" color="warning.main" fontWeight={700}>
                    {pendingTodos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Completion Insight</Typography>
                <Typography variant="body2" color="text.secondary">
                  {completionRate}% of todos are complete.
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={completionRate}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Actionable Insights</Typography>
                <Typography>
                  {highPriorityPending > 0
                    ? `${highPriorityPending} high-priority todo(s) are still pending.`
                    : "No high-priority todos are pending."}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip
                    label={`Completion rate: ${completionRate}%`}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={`Pending tasks: ${pendingTodos}`}
                    color="warning"
                    variant="outlined"
                  />
                  <Chip
                    label={`High-priority pending: ${highPriorityPending}`}
                    color={highPriorityPending ? "error" : "success"}
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
