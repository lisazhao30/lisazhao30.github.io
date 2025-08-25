"use client";

import {
  Container,
  Grid,
  Paper,
  Text,
  Title,
  Stack,
  Card,
  Badge,
  Group,
  useMantineTheme,
  Anchor,
  Image,
} from "@mantine/core";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

// Sample experiences data - you can customize this
const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    duration: "Aug 2025 - Present",
    description:
      "Developing code generators and type conversion tools to map SQL schemas into C++.",
    skills: ["Kotlin", "SQL", "C++", "GCP"],
    logo: "/google-logo.png",
  },
  {
    id: 2,
    title: "Site Reliability Engineer Intern",
    company: "NVIDIA",
    duration: "May 2025 - Aug 2025",
    description:
      "Building observability pipelines to monitor Apache Spark clusters on Kubernetes.",
    skills: ["Kubernetes", "Apache Spark", "S3", "Fluent Bit/Fluentd", "Linux"],
    logo: "/nvidia-logo.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "HubSpot",
    duration: "Jan 2024 - Apr 2024",
    description: "Managed user assets on HubSpot's CRM",
    skills: ["Java", "AWS", "Spring Boot", "Apache Kafka"],
    logo: "/hubspot-logo.svg",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Amazon Web Services",
    duration: "Jun 2023 - Sep 2023",
    description: "Building maps for Amazon Location Service",
    skills: ["Golang", "S3", "Lambda", "AWS IAM", "JavaScript", "React.js"],
    logo: "/aws-logo.png",
  },
  {
    id: 5,
    title: "Frontend Engineer Intern",
    company: "View the Space",
    duration: "Sep 2022 - Dec 2022",
    description:
      "Creating React components for View the Space's tenant-management platform",
    skills: ["React", "TypeScript", "GraphQL", "Jest", "React Testing Library"],
    logo: "/vts-logo.png",
  },
];

export default function Home() {
  const theme = useMantineTheme();

  return (
    <Container
      fluid
      style={{ minHeight: "100vh", padding: 0 }}
      className="container-mobile"
    >
      <Grid gutter={0} style={{ minHeight: "100vh" }}>
        {/* Left Side - Fixed on desktop, scrollable on mobile */}
        <Grid.Col
          span={{ base: 12, md: 4 }}
          className="left-side-mobile"
          style={{
            background: theme.colors.soft[0],
            padding: theme.spacing.xl,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRight: `1px solid ${theme.colors.gray[2]}`,
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <Stack gap="xl" align="center">
            <div>
              <Title
                order={1}
                size="3rem"
                style={{
                  color: theme.colors.gray[8],
                  marginBottom: theme.spacing.sm,
                  fontWeight: 700,
                }}
              >
                Lisa Zhao
              </Title>
              <Text
                size="xl"
                style={{
                  color: theme.colors.gray[7],
                  fontWeight: 500,
                }}
              >
                Systems Design Engineering Student
              </Text>
            </div>

            {/* Social Links */}
            <Group gap="lg">
              <Anchor
                href="https://github.com/lisazhao30"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: theme.colors.gray[7],
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.color = theme.colors.gray[9];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = theme.colors.gray[7];
                }}
              >
                <IconBrandGithub size={32} />
              </Anchor>
              <Anchor
                href="https://linkedin.com/in/lisazhao03"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: theme.colors.gray[7],
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.color = theme.colors.gray[9];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = theme.colors.gray[7];
                }}
              >
                <IconBrandLinkedin size={32} />
              </Anchor>
              <Anchor
                href="mailto:l239zhao@uwaterloo.ca"
                style={{
                  color: theme.colors.gray[7],
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.color = theme.colors.gray[9];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = theme.colors.gray[7];
                }}
              >
                <IconMail size={32} />
              </Anchor>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Right Side - Scrollable */}
        <Grid.Col
          span={{ base: 12, md: 8 }}
          className="right-side-mobile"
          style={{
            background: theme.white,
            padding: theme.spacing.xl,
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          <Stack gap="xl">
            <div>
              <Title
                order={2}
                size="2rem"
                style={{
                  color: theme.colors.gray[8],
                  marginBottom: theme.spacing.md,
                }}
              >
                About Me
              </Title>
              <Paper
                p="md"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: `1px solid ${theme.colors.gray[2]}`,
                  borderRadius: theme.radius.md,
                  marginBottom: theme.spacing.xl,
                }}
              >
                <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
                  👋 Hi, I&apos;m Lisa! I am a fourth year Systems Design Engineering student at 
                  the University of Waterloo. I am currently working as a Software Engineer 
                  Intern at Google, where I am developing code generators and type conversion tools 
                  to map SQL schemas into C++. Seeking new grad roles for 2026!
                </Text>
              </Paper>
            </div>

            <div>
              <Title
                order={2}
                size="2rem"
                style={{
                  color: theme.colors.gray[8],
                }}
              >
                Experience
              </Title>
            </div>

            <Stack gap="lg">
              {experiences.map((experience) => (
                <Card
                  key={experience.id}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: `1px solid ${theme.colors.gray[2]}`,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                  }}
                >
                  <Group justify="space-between" align="flex-start" mb="md">
                    <Group gap="sm">
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: theme.radius.sm,
                          background: theme.white,
                        }}
                      >
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={32}
                          height={32}
                          fit="contain"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div>
                        <Text
                          fw={600}
                          size="lg"
                          style={{ color: theme.colors.gray[8] }}
                        >
                          {experience.title}
                        </Text>
                        <Text size="sm" color="dimmed">
                          {experience.company}
                        </Text>
                      </div>
                    </Group>
                    <Badge variant="light" color="blue" size="sm">
                      {experience.duration}
                    </Badge>
                  </Group>

                  <Text
                    size="sm"
                    color="dimmed"
                    mb="md"
                    style={{ lineHeight: 1.6 }}
                  >
                    {experience.description}
                  </Text>

                  <Group gap="xs">
                    {experience.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        color="gray"
                        size="xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
