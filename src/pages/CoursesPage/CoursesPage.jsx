import { Container, Typography, Grid, Card, CardActionArea, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const courseCategories = [
    { title: 'Beginner Courses', path: '/courses/beginner' },
    { title: 'Basics Courses', path: '/courses/basics' },
    { title: 'Advanced Courses', path: '/courses/advanced' }
];

export default function CoursesPage() {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: { xs: "24px", sm: "33px" },
                    my: "3px",
                    color: "#fff",
                    position: "relative",
                    zIndex: "99",
                    "&::after": {
                        content: "''",
                        backgroundColor: "#ecbc56",
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: "120px",
                        height: "3px",
                    },
                }}
            >
                Our <span style={{ color: "#ECBC56" }}>Courses</span>
            </Typography>

            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* <Typography variant="h4" gutterBottom>Course Categories</Typography> */}


                <Grid container spacing={4}>
                    {courseCategories.map(({ title, path }) => (
                        <Grid item xs={12} sm={6} md={4} key={title}>
                            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', width: "300px" }}>
                                <CardActionArea onClick={() => navigate(path)}>
                                    <CardContent>
                                        <Typography variant="h6">{title}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    );
}
