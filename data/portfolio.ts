export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  id: string;
  name: string;
  category: "Cloud" | "Observability" | "Automation" | "Platform";
  description: string;
  summary: string;
  stack: string[];
  challenges: string[];
  implemented: string[];
  metrics: string[];
  github: string;
  demo: string;
};

export type JourneyItem = {
  title: string;
  period: string;
  description: string;
  focus: string[];
};

export type Certification = {
  title: string;
  provider: string;
  status: string;
  details: string;
};

export const navigation = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Jornada", href: "#journey" },
  { label: "Contato", href: "#contact" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud",
    description: "Provisionamento, redes e serviços gerenciados com foco em AWS.",
    items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch"],
  },
  {
    title: "Containers",
    description: "Empacotamento, execução e orquestração de workloads.",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Container Registry"],
  },
  {
    title: "IaC",
    description: "Infraestrutura versionada com ambientes reproduzíveis.",
    items: ["Terraform", "HCL", "Modularização", "Remote State", "Secrets Strategy"],
  },
  {
    title: "CI/CD",
    description: "Pipelines confiáveis com validação, build e deploy automatizados.",
    items: ["GitHub Actions", "CI/CD", "Quality Gates", "Release Flow", "YAML"],
  },
  {
    title: "Monitoring",
    description: "Métricas, logs e alertas para operações orientadas por visibilidade.",
    items: ["Prometheus", "Grafana", "Alertmanager", "Logs", "SLO Thinking"],
  },
  {
    title: "OS / Networking",
    description: "Base operacional para ambientes Linux e serviços expostos.",
    items: ["Linux", "Bash", "Nginx", "SSH", "TCP/IP", "DNS"],
  },
  {
    title: "Backend / APIs",
    description: "Suporte a workloads e automações conectadas a serviços reais.",
    items: ["Go", "Node.js", "REST APIs", "JSON", "Auth Basics"],
  },
  {
    title: "Databases",
    description: "Persistência e suporte a aplicações containerizadas.",
    items: ["PostgreSQL", "Redis", "Backups", "Migrations", "Connection Health"],
  },
  {
    title: "Versionamento / colaboração",
    description: "Fluxos de trabalho limpos para entrega contínua em equipe.",
    items: ["Git", "GitHub", "Pull Requests", "Code Review", "Documentation"],
  },
];

export const projects: Project[] = [
  {
    id: "pipeline-release",
    name: "Release Pipeline para Deploy Automatizado",
    category: "Automation",
    description: "Pipeline de CI/CD com validação, build, segurança básica e deploy controlado para ambiente cloud.",
    summary:
      "Estrutura voltada para reduzir lead time de entrega, padronizar releases e evitar deploy manual em aplicações containerizadas.",
    stack: ["GitHub Actions", "Docker", "AWS", "Nginx", "Bash"],
    challenges: [
      "Padronizar versões de imagem e rollback rápido",
      "Evitar deploy sem validações mínimas",
      "Criar fluxo simples o suficiente para manutenção contínua",
    ],
    implemented: [
      "Workflows separados para CI, release e deploy",
      "Build de imagens com tagging por commit e versão",
      "Deploy automatizado com health check e fallback",
    ],
    metrics: ["Tempo de release reduzido", "Menos intervenção manual", "Pipeline reaproveitável"],
    github: "https://github.com/joaovictor/pipeline-release",
    demo: "https://demo.example.com/pipeline-release",
  },
  {
    id: "terraform-aws",
    name: "AWS Foundation com Terraform",
    category: "Cloud",
    description: "Base de infraestrutura modular para workloads em AWS com VPC, instâncias, storage e observabilidade inicial.",
    summary:
      "Projeto pensado como landing zone enxuta para pequenos ambientes, com reaproveitamento por módulos e separação entre camadas.",
    stack: ["Terraform", "AWS", "VPC", "IAM", "CloudWatch"],
    challenges: [
      "Organizar módulos com variáveis claras",
      "Separar estado e ambientes",
      "Criar estrutura pronta para expansão sem retrabalho",
    ],
    implemented: [
      "Módulos para rede, compute e políticas essenciais",
      "Padrão de tags e variáveis por ambiente",
      "Outputs documentados para integração com deploy",
    ],
    metrics: ["Infra reproduzível", "Provisionamento previsível", "Base pronta para CI"],
    github: "https://github.com/joaovictor/aws-foundation-terraform",
    demo: "https://demo.example.com/aws-foundation",
  },
  {
    id: "compose-platform",
    name: "Ambiente Full Stack com Docker Compose",
    category: "Platform",
    description: "Plataforma local para aplicação full stack com API, frontend, banco e proxy reverso em containers isolados.",
    summary:
      "Ambiente voltado para produtividade de desenvolvimento e padronização de setup entre máquinas e etapas de testes.",
    stack: ["Docker Compose", "Docker", "PostgreSQL", "Nginx", "Node.js"],
    challenges: [
      "Subir todos os serviços com dependências consistentes",
      "Separar configuração local e staging",
      "Facilitar onboarding técnico",
    ],
    implemented: [
      "Serviços organizados por responsabilidade",
      "Volumes e healthchecks para inicialização estável",
      "Proxy reverso com roteamento e cache básico",
    ],
    metrics: ["Setup local rápido", "Ambiente reproduzível", "Menos drift entre devs"],
    github: "https://github.com/joaovictor/fullstack-compose-platform",
    demo: "https://demo.example.com/compose-platform",
  },
  {
    id: "observability-stack",
    name: "Observabilidade com Prometheus e Grafana",
    category: "Observability",
    description: "Stack de monitoramento para serviços containerizados com métricas, dashboards e alertas operacionais.",
    summary:
      "Projeto focado em visibilidade de aplicação e infraestrutura, usando métricas acionáveis para troubleshooting e acompanhamento de saúde.",
    stack: ["Prometheus", "Grafana", "Alertmanager", "Docker", "Linux"],
    challenges: [
      "Definir métricas úteis desde o início",
      "Evitar dashboards poluídos",
      "Transformar alertas em sinais confiáveis",
    ],
    implemented: [
      "Coleta de métricas de host e aplicação",
      "Dashboards com foco em disponibilidade, latência e consumo",
      "Alertas básicos para indisponibilidade e saturação",
    ],
    metrics: ["Mais visibilidade operacional", "Detecção rápida de incidentes", "Base para SLOs"],
    github: "https://github.com/joaovictor/observability-stack",
    demo: "https://demo.example.com/observability-stack",
  },
  {
    id: "go-api-runtime",
    name: "API em Go com Deploy e Telemetria",
    category: "Platform",
    description: "API backend em Go empacotada em container, com pipeline, métricas expostas e deploy automatizado.",
    summary:
      "Caso prático de integração entre desenvolvimento backend e operação de runtime, incluindo build otimizado e monitoramento de serviço.",
    stack: ["Go", "Docker", "GitHub Actions", "Prometheus", "AWS"],
    challenges: [
      "Gerar imagens pequenas e rápidas",
      "Integrar métricas e health endpoints",
      "Garantir deploy previsível entre ambientes",
    ],
    implemented: [
      "Multi-stage build para container enxuto",
      "Endpoints de health, readiness e metrics",
      "Pipeline com testes, build e promoção por branch",
    ],
    metrics: ["Runtime observável", "Deploy reproduzível", "Stack alinhada a backend real"],
    github: "https://github.com/joaovictor/go-api-runtime",
    demo: "https://demo.example.com/go-api-runtime",
  },
  {
    id: "infra-automation",
    name: "Automação de Provisionamento Linux",
    category: "Automation",
    description: "Scripts e playbooks para configuração padronizada de hosts Linux com foco em bootstrap, segurança inicial e serviços.",
    summary:
      "Automação pensada para reduzir setup manual, garantir repetibilidade e documentar o estado esperado de servidores utilitários.",
    stack: ["Linux", "Bash", "Systemd", "Nginx", "SSH"],
    challenges: [
      "Evitar scripts frágeis e pouco idempotentes",
      "Padronizar configuração entre hosts",
      "Registrar etapas críticas de operação",
    ],
    implemented: [
      "Bootstrap automatizado para usuários, chaves e serviços",
      "Hardening inicial e organização de logs",
      "Scripts com parâmetros e documentação de uso",
    ],
    metrics: ["Menos configuração manual", "Hosts consistentes", "Operação documentada"],
    github: "https://github.com/joaovictor/linux-provision-automation",
    demo: "https://demo.example.com/linux-provision-automation",
  },
];

export const journey: JourneyItem[] = [
  {
    title: "Engenharia de Computação",
    period: "Base acadêmica",
    description:
      "Formação em andamento com foco crescente em sistemas, redes, arquitetura e fundamentos que sustentam operações modernas.",
    focus: ["Arquitetura", "Sistemas", "Raciocínio analítico"],
  },
  {
    title: "Foco prático em DevOps",
    period: "Especialização contínua",
    description:
      "Direcionamento técnico para cloud, containers, pipelines e infraestrutura como código, combinando estudo com implementação prática.",
    focus: ["AWS", "Docker", "Terraform"],
  },
  {
    title: "Projetos orientados a operação",
    period: "Hands-on",
    description:
      "Construção de projetos reais de portfolio para exercitar deploy, observabilidade, automação e boas práticas de entrega.",
    focus: ["CI/CD", "Observabilidade", "Infra reproducível"],
  },
  {
    title: "Evolução para engenharia de plataforma",
    period: "Próximo passo",
    description:
      "Aprofundamento em orquestração, confiabilidade, arquitetura de ambientes e integração entre desenvolvimento e operação.",
    focus: ["Kubernetes", "SRE mindset", "Scale-ready design"],
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Cloud & Infrastructure Path",
    provider: "Estudos / trilha prática",
    status: "Em andamento",
    details: "Foco em IAM, redes, compute, observabilidade e desenho de ambientes.",
  },
  {
    title: "Docker & Containers",
    provider: "Labs práticos",
    status: "Consolidando",
    details: "Empacotamento, multi-stage builds, compose e boas práticas operacionais.",
  },
  {
    title: "Kubernetes Fundamentals",
    provider: "Estudos guiados",
    status: "Em evolução",
    details: "Pods, deployments, services, config, probes e visão inicial de cluster.",
  },
  {
    title: "Terraform for Infrastructure as Code",
    provider: "Projetos próprios",
    status: "Aplicado em portfolio",
    details: "Modularização, variáveis, outputs e ambientes reproduzíveis em cloud.",
  },
  {
    title: "Linux Administration & Networking",
    provider: "Prática diária",
    status: "Contínuo",
    details: "Shell, serviços, permissões, processos, troubleshooting e rede.",
  },
  {
    title: "DevOps Fundamentals",
    provider: "Trilha contínua",
    status: "Ativo",
    details: "Entrega contínua, automação, observabilidade e colaboração entre times.",
  },
];

export const contact = {
  email: "joaovictordsl00@gmail.com",
  github: "https://github.com/Joaovictordsl",
  linkedin: "https://www.linkedin.com/in/joaovictordsl00",
};
