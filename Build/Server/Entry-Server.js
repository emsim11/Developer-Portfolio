import { jsx as e, jsxs as a, Fragment as t } from "react/jsx-runtime";
import i, { useState as l, useEffect as r, forwardRef as n, useRef as s, useMemo as o, createContext as c, useCallback as m, useContext as d } from "react";
import h from "react-dom/server";
import { StaticRouter as u } from "react-router-dom/server.mjs";
import { Route as p, Routes as g } from "react-router";
import { HelmetProvider as S, Helmet as N } from "react-helmet-async";
import { useLocation as C, Link as y, useNavigate as P, useSearchParams as v } from "react-router-dom";
import { remark as k } from "remark";
import f from "remark-html";
import b from "markdown-to-jsx";
import { BsChevronDown as A, BsInfoCircle as T, BsGithub as L, BsArrowUpRightCircle as I, BsFilterLeft as D, BsPlusCircle as M } from "react-icons/bs";
import { X as R, ChevronRight as w, Check as F, Circle as O, ChevronDown as V, Search as E, SendHorizontal as j, ArrowLeft as G, ArrowRight as x } from "lucide-react";
import * as $ from "@radix-ui/react-dialog";
import * as K from "@radix-ui/react-tooltip";
import { IoIosArrowForward as B } from "react-icons/io";
import * as W from "@radix-ui/react-scroll-area";
import * as U from "@radix-ui/react-dropdown-menu";
import { HiArrowDown as H } from "react-icons/hi";
import { AiOutlineGithub as z, AiFillLinkedin as J, AiOutlineMail as _, AiOutlineClear as Q } from "react-icons/ai";
import { motion as Y } from "framer-motion";
import q from "typewriter-effect";
import * as X from "@radix-ui/react-aspect-ratio";
import { GrAppsRounded as Z } from "react-icons/gr";
import * as ee from "@radix-ui/react-accordion";
import * as ae from "@radix-ui/react-tabs";
import { MdOutlineManageSearch as te, MdKeyboardArrowUp as ie, MdKeyboardArrowDown as le } from "react-icons/md";
import * as re from "@radix-ui/react-switch";
import { IoClose as ne } from "react-icons/io5";
import * as se from "@radix-ui/react-popover";
import { PopoverTrigger as oe, PopoverContent as ce } from "@radix-ui/react-popover";
import { Command as me } from "cmdk";
import de from "fuse.js";
import { TbCircleFilled as he } from "react-icons/tb";
import { LiaImageSolid as ue, LiaVideoSolid as pe } from "react-icons/lia";
import ge from "embla-carousel-react";
const Se = async (e2) => {
  try {
    const a2 = await fetch(e2), t2 = await a2.text(), i2 = await k().use(f).process(t2);
    return i2.toString();
  } catch (a2) {
    return console.warn(`Error Reading Markdown File ${e2}:`, a2), null;
  }
}, Ne = (e2) => {
  const [a2, t2] = l(null);
  return r(() => {
    (async () => {
      const a3 = await e2();
      t2(a3);
    })();
  }, [e2]), a2;
}, Ce = ({ Content: a2, Size: t2 = "Large-Prose", ExtraClasses: i2 }) => e("article", { className: `Reader ${t2 || ""} ${i2 || ""}`, children: a2 && e(b, { children: a2 }) }), ye = () => {
  const [e2, a2] = l(false);
  return r(() => (a2(true), () => a2(false)), []), e2;
};
var Pe = ((e2) => (e2.ArtificialIntelligence = "Artificial Intelligence (AI)", e2.Automation = "Automation", e2.BackEndWebDevelopment = "Back-End Web Development", e2.CloudComputing = "Cloud Computing", e2.CodeQuality = "Code Quality", e2.CommunicationProtocolsLibraries = "Communication Protocols & Libraries", e2.ComputerScience = "Computer Science", e2.Database = "Database", e2.DataEngineering = "Data Engineering", e2.DataScience = "Data Science", e2.Deployment = "Deployment", e2.DevOps = "DevOps", e2.FrontEndWebDevelopment = "Front-End Web Development", e2.FullStackWebDevelopment = "Full-Stack Web Development", e2.GameDevelopment = "Game Development", e2.Internet = "Internet", e2.JavaScript = "JavaScript", e2.MachineLearningEngineering = "Machine Learning Engineering", e2.Mathematics = "Mathematics", e2.Network = "Network", e2.PlatformDevelopment = "Platform Development", e2.ProgrammingLanguages = "Programming Languages", e2.ProjectManagement = "Project Management", e2.Python = "Python", e2.Security = "Security", e2.SoftSkills = "Soft Skills", e2.Testing = "Testing", e2.VersionControl = "Version Control", e2))(Pe || {}), ve = ((e2) => (e2.C = "C", e2.FunctionalProgramming = "Functional-Programming", e2.GameMakerLanguage = "Game-Maker-Language", e2.Groovy = "Groovy", e2.Haskell = "Haskell", e2.Java = "Java", e2.JavaScript = "JavaScript", e2.Kotlin = "Kotlin", e2.ObjectOrientedProgramming = "OOP", e2.Python = "Python", e2.RLanguage = "R", e2.Scala = "Scala", e2.ShellScript = "Shell", e2.TypeScript = "TypeScript", e2.APIs = "APIs", e2.Apollo = "Apollo", e2.GraphQL = "GraphQL-API", e2.OpenAI = "Open-AI", e2.Pusher = "Pusher", e2.ReplicateAI = "Replicate-AI", e2.REST = "REST-API", e2.SDKs = "SDKs", e2.SocketIO = "Socket-IO", e2.TRPC = "TRPC-API", e2.AntDesign = "Ant-Design", e2.Axios = "Axios", e2.Bootstrap = "Bootstrap", e2.ChakraUI = "Chakra-UI", e2.CSS = "CSS", e2.HandlebarsJS = "Handlebars-JS", e2.HeadlessUI = "Headless-UI", e2.HTML = "HTML", e2.Jotai = "Jotai", e2.MaterialUI = "Material-UI", e2.NextUI = "Next-UI", e2.RadixUI = "Radix-UI", e2.ReactJS = "React", e2.ReactQuery = "React-Query", e2.Recoil = "Recoil", e2.Redux = "Redux", e2.SemanticUI = "Semantic-UI", e2.ShadcnUI = "Shadcn-UI", e2.SimpleGUI = "Simple-GUI", e2.StateManagement = "State-Management", e2.StoryBooks = "Storybooks", e2.SvelteJS = "Svelte", e2.TailwindCSS = "Tailwind-CSS", e2.UserCentricDesign = "User-Centric-Design", e2.VueJS = "Vue-JS", e2.Zustand = "Zustand", e2.Firebase = "Firebase", e2.Supabase = "Supabase", e2.PocketBase = "PocketBase", e2.Auth0 = "Auth0", e2.ClerkAuth = "Clerk-Auth", e2.NextAuth = "Next-Auth", e2.Stripe = "Stripe", e2.ExpressJS = "Express-JS", e2.Flask = "Flask", e2.Django = "Django", e2.Spring = "Spring", e2.SpringBoot = "Spring-Boot", e2.Cloudinary = "Cloudinary", e2.EdgeStore = "Edge-Store", e2.Gunicorn = "Gunicorn", e2.Jinja = "Jinja", e2.WebSockets = "Web-Sockets", e2.UserAuthentication = "User-Authentication", e2.AngularJS = "Angular-JS", e2.NextJS = "Next-JS", e2.NuxtJS = "Nuxt-JS", e2.ProgressiveWebApps = "Progressive-Web-Apps", e2.SvelteKit = "Svelte-Kit", e2.Convex = "Convex", e2.DatabaseIndexing = "Database-Indexing", e2.DatabaseManagementSystems = "Database-Management-Systems", e2.Databases = "Databases", e2.MongoDB = "MongoDB", e2.MySQL = "MySQL", e2.NonRelationalDatabases = "Non-Relational-Databases", e2.Normalization = "Normalization", e2.PostgreSQL = "PostgreSQL", e2.PSQL = "PSQL", e2.Redis = "Redis", e2.RelationalDatabases = "Relational-Databases", e2.Sequelize = "Sequelize", e2.SQL = "SQL", e2.Drizzle = "Drizzle", e2.Hibernate = "Hibernate", e2.Mongoose = "Mongoose", e2.ObjectRelationalMapping = "Object-Relational-Mapping", e2.Prisma = "Prisma", e2.SQLAlchemy = "SQLAlchemy", e2.TypeORM = "TypeORM", e2.Ansible = "Ansible", e2.Automation = "Automation", e2.Clusterization = "Clusterization", e2.Containerization = "Containerization", e2.ContinuousDelivery = "Continuous-Delivery", e2.ContinuousDeployment = "Continuous-Deployment", e2.ContinuousIntegration = "Continuous-Integration", e2.DevOps = "Dev-Ops", e2.Docker = "Docker", e2.GitHubActions = "GitHub-Actions", e2.GitHubPages = "GitHub-Pages", e2.GitLabCI = "GitLab-CI", e2.InfrastructureAsCode = "Infrastructure-As-Code", e2.Jenkins = "Jenkins", e2.Kubernetes = "Kubernetes", e2.Podman = "Podman", e2.TeamCity = "Team-City", e2.Terraform = "Terraform", e2.Vagrant = "Vagrant", e2.BitBucket = "Bit-Bucket", e2.Git = "Git", e2.GitHub = "GitHub", e2.GitLab = "GitLab", e2.VersionControlSystems = "Version-Control-Systems", e2.Black = "Black", e2.CheckStyle = "CheckStyle", e2.DesignPatterns = "Design-Patterns", e2.EditorConfig = "Editor-Config", e2.ESLint = "ESLint", e2.Linting = "Linting", e2.Prettier = "Prettier", e2.PyLint = "PyLint", e2.Zod = "Zod", e2.Cypress = "Cypress", e2.Jest = "Jest", e2.JUnit = "JUnit", e2.PyTest = "PyTest", e2.ReactTestingLibrary = "React-Testing-Library", e2.Testing = "Testing", e2.UnitTest = "UnitTest", e2.Vitest = "Vitest", e2.Gradle = "Gradle", e2.Maven = "Maven", e2.Node = "Node-JS", e2.NPM = "NPM", e2.NxJS = "NX-JS", e2.Pip = "PIP", e2.PNPM = "PNPM", e2.Poetry = "Poetry", e2.PyBuilder = "PyBuilder", e2.Tox = "TOX", e2.Yarn = "Yarn", e2.ArtificialIntelligence = "Artificial-Intelligence", e2.Boosting = "Boosting", e2.DataScience = "Data-Science", e2.DeepLearning = "Deep-Learning", e2.DataVisualization = "Data-Visualization", e2.HyperParameters = "HyperParameters", e2.Jupyter = "Jupyter", e2.Keras = "Keras", e2.MachineLearning = "Machine-Learning", e2.MatPlotLib = "MatPlotLib", e2.NeuralNetworks = "Neural-Networks", e2.NumPy = "NumPy", e2.Pandas = "Pandas", e2.SciKitLearn = "SciKit-Learn", e2.SeaBorn = "SeaBorn", e2.Algebra = "Algebra", e2.Calculus = "Calculus", e2.Discrete = "Discrete", e2.Geometry = "Geometry", e2.LinearAlgebra = "Linear-Algebra", e2.Logics = "Logics", e2.Mathematics = "Mathematics", e2.Mechanics = "Mechanics", e2.Probability = "Probability", e2.RegExps = "Regular-Expressions", e2.Statistics = "Statistics", e2.Trigonometry = "Trigonometry", e2.AWS = "AWS", e2.AWS_CloudWatch = "AWS-CloudWatch", e2.AWS_ApplicationLoadBalancer = "AWS-Application-Load-Balancer", e2.AWS_ElasticCache = "AWS-Elastic-Cache", e2.AWS_K3s = "AWS-K3S", e2.AWS_EC2 = "AWS-EC2", e2.AWS_S3 = "AWS-S3", e2.AWS_VPC = "AWS-VPC", e2.AWS_Lambda = "AWS-Lambda", e2.AWS_ElasticFileSystem = "AWS-Elastic-Filesystem", e2.AWS_ElasticBlockStore = "AWS-Elastic-Block-Store", e2.AWS_RelationalDatabaseService = "AWS-Relational-Database-Service", e2.AWS_AutoScaling = "AWS-Auto-Scaling", e2.AWS_CloudFormation = "AWS-Cloudformation", e2.AWS_CloudFront = "AWS-Cloudfront", e2.AWS_ElasticBeanstalk = "AWS-Elastic-Beanstalk", e2.Azure = "Azure", e2.Azure_AppService = "Azure-App-Service", e2.Azure_Monitor = "Azure-Monitor", e2.Azure_BlobStorage = "Azure-Blob-Storage", e2.Azure_DurableFunctions = "Azure-Durable-Functions", e2.Azure_Functions = "Azure-Functions", e2.Azure_ResourceManager = "Azure-Resource-Manager", e2.Azure_ContainerRegistry = "Azure-Container-Registry", e2.CloudComputing = "Cloud-Computing", e2.GCP = "GCP", e2.GCP_AppEngine = "GCP-App-Engine", e2.GCP_CloudSQL = "GCP-Cloud-SQL", e2.GCP_CloudStorage = "GCP-Cloud-Storage", e2.GCP_CloudTasks = "GCP-Cloud-Tasks", e2.GCP_CloudScheduler = "GCP-Cloud-Scheduler", e2.GCP_Logging = "GCP-Logging", e2.Algorithms = "Algorithms", e2.DataStructures = "Data-Structures", e2.AndroidDevelopment = "Android", e2.iOSDevelopment = "iOS", e2.LinuxDevelopment = "Linux", e2.MacDevelopment = "Mac", e2.WebDevelopment = "Web", e2.WindowsDevelopment = "Windows", e2.Networking = "Networking", e2.Symphony = "Symphony", e2.Cryptography = "Cryptography", e2.CyberSecurity = "Cyber-Security", e2.Security = "Security", e2.Adaptability = "Adaptability", e2.Communication = "Communication", e2.CostManagement = "Cost-Management", e2.Creativity = "Creativity", e2.CriticalThinking = "Critical-Thinking", e2.HumanResourceManagement = "Human-Resource-Management", e2.IntegrationManagement = "Integration-Management", e2.Leadership = "Leadership", e2.ProblemSolving = "Problem-Solving", e2.ProcurementManagement = "Procurement-Management", e2.ProjectManagement = "Project-Management", e2.QualityManagement = "Quality-Management", e2.RiskManagement = "Risk-Management", e2.ScopeManagement = "Scope-Management", e2.StakeholderManagement = "Stakeholder-Management", e2.Teamwork = "Teamwork", e2.TimeManagement = "Time-Management", e2))(ve || {}), ke = ((e2) => (e2.Soft = "Soft", e2.Technical = "Technical", e2.Technology = "Technology", e2))(ke || {});
const fe = ({ Title: a2, ExtraClasses: t2 }) => e("h1", { className: `Heading-One ${t2 || ""}`, children: a2 }), be = ({ Title: t2, ExtraClasses: i2 }) => a("h1", { className: `Heading-Two ${i2}`, children: [t2, e("hr", { className: "Heading-Two-Line-Separator" })] }), Ae = ({ Title: a2, ExtraClasses: t2 }) => e("h2", { className: `Heading-Three ${t2}`, children: a2 }), Te = ({ Title: a2, ExtraClasses: t2 }) => e("h4", { className: `Heading-Four ${t2}`, children: a2 }), Le = { [ve.JavaScript]: { Name: "JavaScript", IsMainSkill: true, Category: Pe.ProgrammingLanguages, SkillType: ke.Technology, RelatedSkills: [ve.AngularJS, ve.ClerkAuth, ve.ESLint, ve.ExpressJS, ve.Jest, ve.Mongoose, ve.NextAuth, ve.NextJS, ve.NPM, ve.NuxtJS, ve.NxJS, ve.PNPM, ve.Prettier, ve.ReactJS, ve.Recoil, ve.Redux, ve.SvelteJS, ve.SvelteKit, ve.Vitest, ve.VueJS, ve.Yarn] }, [ve.Python]: { Name: "Python", IsMainSkill: true, Category: Pe.ProgrammingLanguages, SkillType: ke.Technology, RelatedSkills: [ve.ArtificialIntelligence, ve.DataScience, ve.DataVisualization, ve.DeepLearning, ve.Django, ve.Flask, ve.Gunicorn, ve.HyperParameters, ve.Jinja, ve.Jupyter, ve.Keras, ve.MachineLearning, ve.MatPlotLib, ve.NeuralNetworks, ve.NumPy, ve.Pandas, ve.Poetry, ve.PyBuilder, ve.PyLint, ve.PyTest, ve.Pip, ve.SciKitLearn, ve.SeaBorn, ve.SimpleGUI, ve.SQLAlchemy, ve.UnitTest, ve.WebDevelopment] }, [ve.TypeScript]: { Name: "TypeScript", IsMainSkill: true, Category: Pe.ProgrammingLanguages, SkillType: ke.Technology, RelatedSkills: [ve.AngularJS, ve.ClerkAuth, ve.ESLint, ve.ExpressJS, ve.Jest, ve.Mongoose, ve.NextAuth, ve.NextJS, ve.NPM, ve.NuxtJS, ve.NxJS, ve.PNPM, ve.Prettier, ve.ReactJS, ve.Recoil, ve.Redux, ve.SvelteJS, ve.SvelteKit, ve.TypeORM, ve.Vitest, ve.VueJS, ve.Yarn, ve.Zod] }, [ve.Adaptability]: { Name: "Adaptability", IsMainSkill: false, Category: Pe.SoftSkills, SkillType: ke.Soft } }, Ie = Object.keys(Le), De = (e2, a2) => Object.keys(e2).filter((t2) => {
  const i2 = e2[t2];
  return !a2.includes(i2.Category);
}), Me = (e2, a2, t2) => {
  const i2 = [];
  return e2.forEach((e3) => {
    const l2 = a2[e3];
    l2 && l2.SkillType === t2 && i2.push(e3);
  }), i2;
}, Re = (e2, a2, t2, i2) => {
  const l2 = [];
  return e2.forEach((e3) => {
    const i3 = a2[e3];
    if (i3 && i3.SkillType === t2) {
      let a3 = l2.find((e4) => {
        e4.SkillCategoryName, i3.Category;
      });
      a3 || (a3 = { SkillCategoryName: i3.Category, Skills: [] }, l2.push(a3)), a3.Skills.push(e3);
    }
  }), { Title: i2, SkillCategories: l2 };
}, we = (e2, a2, t2, i2) => {
  let l2 = [];
  const r2 = ((e3, a3) => {
    const t3 = {};
    return e3.forEach((e4) => {
      const i3 = a3[e4];
      i3 && (t3[e4] = i3);
    }), t3;
  })(a2, t2), n2 = (i2 ? Fe(a2, r2, i2) : a2).filter((e3) => {
    r2.hasOwnProperty(e3);
  });
  switch (e2) {
    case "Language":
      l2 = ((e3, a3) => {
        const t3 = {}, i3 = [];
        return e3.forEach((e4) => {
          const l3 = a3[e4];
          if (!l3) return void console.warn(`Skill Not Found For Slug: ${e4}`);
          let r3 = false;
          l3.Category === Pe.ProgrammingLanguages ? (r3 = true, t3[l3.Name] || (t3[l3.Name] = []), t3[l3.Name].push(e4)) : l3.RelatedSkills && l3.RelatedSkills.length > 0 && l3.RelatedSkills.forEach((i4) => {
            const l4 = a3[i4];
            if (l4 && l4.Category === Pe.ProgrammingLanguages) {
              r3 = true;
              const a4 = l4.Name;
              t3[a4] = t3[a4] || [], t3[a4].push(e4);
            }
          }), r3 || i3.push(e4);
        }), i3.length > 0 && (t3["No Languages"] = i3), Object.entries(t3).map(([e4, a4]) => ({ SkillCategoryName: e4, Skills: a4 }));
      })(n2, r2);
      break;
    case "Category":
      l2 = ((e3, a3) => {
        const t3 = {};
        return e3.forEach((e4) => {
          const i3 = a3[e4];
          if (i3) {
            const a4 = i3.Category;
            t3[a4] || (t3[a4] = []), t3[a4].push(e4);
          }
        }), Object.keys(t3).map((e4) => ({ SkillCategoryName: e4, Skills: t3[e4] }));
      })(n2, r2);
      break;
    case "Skill-Type":
      l2 = ((e3, a3) => {
        const t3 = {};
        return e3.forEach((e4) => {
          const i3 = a3[e4];
          if (i3) {
            const a4 = i3.SkillType;
            t3[a4] || (t3[a4] = []), t3[a4].push(e4);
          }
        }), Object.keys(t3).map((e4) => ({ SkillCategoryName: e4, Skills: t3[e4] }));
      })(n2, r2);
      break;
    default:
      l2 = [{ SkillCategoryName: "None", Skills: n2 }];
  }
  return l2;
}, Fe = (e2, a2, t2 = [], i2 = /* @__PURE__ */ new Set()) => {
  let l2 = [];
  return e2.forEach((e3) => {
    if (i2.has(e3)) return;
    const r2 = a2[e3];
    if (r2 && (i2.add(e3), !t2.includes(r2.SkillType) && (l2.push(e3), r2.RelatedSkills && r2.RelatedSkills.length > 0))) {
      const e4 = Fe(r2.RelatedSkills, a2, t2, i2);
      l2 = l2.concat(e4);
    }
  }), l2;
}, Oe = (e2, a2, t2) => a2.reduce((a3, i2) => {
  const l2 = t2[i2];
  return (!!e2 || !l2.Archived) && a3.push(i2), a3;
}, []), Ve = (e2, a2, t2) => a2.reduce((a3, i2) => {
  const l2 = t2[i2];
  return l2 && Je(l2.Category) === Je(e2) && a3.push(i2), a3;
}, []), Ee = (e2, a2, t2) => {
  const i2 = [];
  return a2.forEach((a3) => {
    const l2 = t2[a3];
    l2 && l2.Skills.includes(e2) && i2.push(a3);
  }), i2;
}, je = (e2, a2, t2, i2) => {
  const l2 = [], r2 = Je(t2);
  for (const t3 of e2) {
    const e3 = a2[t3];
    for (const a3 of e3.Skills) {
      const e4 = i2[a3];
      if (e4 && Je(e4.Category) === r2) {
        l2.push(t3);
        break;
      }
    }
  }
  return l2;
}, Ge = (e2) => [{ ParamValue: "All", ParamName: "All" }, ...Object.values(e2).map((e3) => ({ ParamValue: Je(e3.Category), ParamName: e3.Category })).filter((e3, a2, t2) => t2.findIndex((e4) => e4.ParamValue == e4.ParamValue) === a2)], xe = (e2, a2) => [{ ParamValue: "All", ParamName: "All" }, ...Object.values(e2).flatMap((e3) => e3.Skills.flatMap((e4) => {
  const t2 = a2[e4];
  return t2 ? [{ ParamValue: Je(t2.Category), ParamName: t2.Category }] : [];
})).reduce((e3, a3) => (e3.some((e4) => e4.ParamValue === a3.ParamValue) || e3.push(a3), e3), []).sort((e3, a3) => e3.ParamName.localeCompare(a3.ParamName))], $e = (e2, a2, t2, i2) => [{ ParamValue: "All", ParamName: "All" }, ...Object.values(e2).flatMap((e3) => e3.Skills.map((e4) => ({ Skill: a2[e4], ParamValue: e4 })).filter(({ Skill: e4 }) => e4 && e4.SkillType === t2 && !i2)).map(({ Skill: e3, ParamValue: a3 }) => ({ ParamValue: a3, ParamName: e3.Name })).reduce((e3, a3) => (e3.some((e4) => e4.ParamValue === a3.ParamValue) || e3.push(a3), e3), []).sort((e3, a3) => e3.ParamName.localeCompare(a3.ParamName))], Ke = (e2) => [{ ParamValue: "All", ParamName: "All" }, ...Object.values(e2).map((e3) => ({ ParamValue: Je(e3.Issuer), ParamName: e3.Issuer })).filter((e3, a2, t2) => t2.findIndex((a3) => a3.ParamValue === e3.ParamValue) === a2).sort((e3, a2) => e3.ParamName.localeCompare(a2.ParamName))], Be = (e2, a2, t2, i2, l2) => (Object.keys(e2).forEach((r2) => {
  const n2 = e2[r2], s2 = new Set(n2.Skills);
  n2.Skills.forEach((e3) => {
    var _a2;
    const r3 = a2[e3];
    r3 && !t2.includes(r3.Category) && (l2 && r3.SkillType !== l2 || ((_a2 = r3.RelatedSkills) == null ? void 0 : _a2.forEach((e4) => {
      const l3 = a2[e4];
      t2.includes(l3.Category) || i2 && l3.SkillType !== i2 || s2.add(e4);
    })));
  }), n2.Skills = Array.from(s2);
}), e2), We = (e2) => {
  for (const a2 in e2) if (e2[a2].Archived) return true;
  return false;
}, Ue = (e2, a2) => {
  const t2 = e2.reduce((e3, a3) => {
    const t3 = a3.ParamName, i2 = a3.ParamValue;
    return e3[t3] = i2.trim(), e3;
  }, {});
  return `${a2}?${Object.entries(t2).map(([e3, a3]) => `${e3}=${encodeURIComponent(a3)}`).join("&")}`;
}, He = (e2, a2) => {
  for (const t2 in a2) if (a2[t2].Skills.includes(e2)) return true;
  return false;
}, ze = (e2, a2) => ((e3, a3) => {
  let t2 = 0;
  for (const i2 in a3) {
    const l2 = a3[i2];
    l2 && l2.Skills.includes(e3) && t2++;
  }
  return t2;
})(e2, a2) >= 2, Je = (e2) => e2.replace(/\s+/g, "-");
function _e(e2, a2) {
  return e2.reduce((e3, t2) => {
    const i2 = a2[t2];
    if (!i2) return e3;
    const l2 = e3.findIndex((e4) => e4.GroupName === i2.Category);
    return -1 === l2 ? e3.push({ GroupName: i2.Category, MaterialKeys: [t2] }) : e3[l2].MaterialKeys.push(t2), e3;
  }, []);
}
function Qe(e2, a2, t2) {
  return [{ GroupName: t2, MaterialKeys: e2.filter((e3) => {
  }) }];
}
var Ye = ((e2) => (e2.AlgorithmsDataStructures = "Algorithms & Data Structures", e2.ArtificialIntelligence = "Artificial Intelligence", e2.CyberSecurity = "Cyber Security", e2.Databases = "Databases", e2.DevOps = "DevOps", e2.Mathematics = "Mathematics", e2.Projects = "Projects", e2.ProgrammingLanguages = "Programming Languages", e2.SoftwareEngineering = "Software Engineering", e2.WebDesign = "Web Design", e2.WebDevelopment = "Web Development", e2.Other = "Other", e2))(Ye || {}), qe = ((e2) => (e2.BackEnd = "Back-End", e2.CICD = "Continuous-Integration-Continuous-Development-Foundations", e2.DevOps = "DevOps-Foundations", e2.Docker = "Docker-And-Containers", e2.FrontEnd = "Front-End", e2.JavaScriptVsTypeScript = "JavaScript-Vs-TypeScript", e2.Kubernetes = "Kubernetes", e2.MachineLearningFoundations = "Machine-Learning-Foundations", e2.ORM = "ORM", e2.RESTGraphQL = "Rest-GraphQL-API", e2.SDKvsAPI = "SDK-Vs-API", e2.SessionsVsTokens = "Sessions-Vs-Tokens", e2.SoftwareTesting = "Software-Testing", e2.SQLVsNoSQL = "SQL-Vs-NoSQL-Databases", e2.SyncAsync = "Sync-Vs-Async", e2.CodeQuiz = "Code-Quiz", e2.PasswordGenerator = "Password-Generator", e2))(qe || {});
const Xe = { [qe.BackEnd]: { Name: "Exploring Back-Ends: Custom Vs. Managed Solutions", Subtitle: "An In-Depth Analysis Of Back-End Development Approaches, Tools, And Security Considerations", Category: Ye.WebDevelopment, Skills: [ve.CloudComputing, ve.Firebase, ve.PocketBase, ve.Supabase, ve.WebDevelopment] } }, Ze = Object.keys(Xe), ea = Be(Xe, Le, [Pe.ProgrammingLanguages], ke.Technical, ke.Technology), aa = { ...ea }, ta = Object.keys(aa), ia = { ...ea }, la = $.Root, ra = $.Trigger, na = $.Portal, sa = n(({ className: a2, ...t2 }, i2) => e($.Overlay, { ref: i2, className: `Dialog-Overlay ${a2}`, ...t2 }));
sa.displayName = $.Overlay.displayName;
const oa = n(({ className: t2, children: i2, ...l2 }, r2) => a(na, { children: [e(sa, {}), a($.Content, { ref: r2, className: `Dialog-Content ${t2}`, ...l2, children: [i2, a($.Close, { className: "Close", children: [e(R, { className: "Close-Icon" }), e("span", { className: "Close-Span", children: "Close" })] })] })] }));
oa.displayName = $.Content.displayName;
n(({ className: a2, ...t2 }, i2) => e($.Title, { ref: i2, className: `Dialog-Title ${a2}`, ...t2 })).displayName = $.Title.displayName;
n(({ className: a2, ...t2 }, i2) => e($.Description, { ref: i2, className: `Dialog-Description ${a2}`, ...t2 })).displayName = $.Description.displayName;
const ca = K.Provider, ma = ({ children: a2 }) => e(ca, { children: e(K.Root, { children: e(K.Trigger, { children: a2 }) }) }), da = K.Trigger, ha = n(({ className: a2, sideOffset: t2 = 4, ...i2 }, l2) => e(K.Content, { ref: l2, sideOffset: t2, className: `Tooltip ${a2}`, ...i2 }));
ha.displayName = K.Content.displayName;
const ua = ({ OnClick: t2, HasHover: i2, children: l2 }) => e("div", { className: "Tag " + (t2 || i2 ? "Tag-Hover" : ""), onClick: t2, children: a("div", { className: "Tag-Container", children: [e("p", { children: l2 }), (t2 || i2) && e(B, { className: "Tag-Icon " + ("..." === l2 ? "Tag-Animate" : "") })] }) }), pa = n(({ className: a2, orientation: t2 = "vertical", ...i2 }, l2) => e(W.ScrollAreaScrollbar, { ref: l2, orientation: t2, className: `Scrollbar ${"vertical" === t2 ? "Vertical" : "Horizontal"} ${a2 || ""} `, ...i2, children: e(W.ScrollAreaThumb, { className: "Scroll-Area-Thumb" }) }));
pa.displayName = W.ScrollAreaScrollbar.displayName;
const ga = n(({ className: t2, children: i2, ...l2 }, r2) => a(W.Root, { ref: r2, className: `Scroll-Area ${t2 || ""}`, ...l2, children: [e(W.Viewport, { className: "Viewport", children: i2 }), e(pa, {}), e(W.Corner, {})] }));
ga.displayName = W.Root.displayName;
const Sa = U.Root, Na = U.Trigger;
n(({ className: t2, Inset: i2, children: l2, ...r2 }, n2) => a(U.SubTrigger, { ref: n2, className: `SubTrigger ${i2} ${t2}`, ...r2, children: [l2, e(w, { className: "SubTrigger-Icon" })] })).displayName = U.SubTrigger.displayName;
n(({ className: a2, ...t2 }, i2) => e(U.SubContent, { ref: i2, className: `SubContent ${a2}`, ...t2 })).displayName = U.SubContent.displayName;
const Ca = n(({ className: a2, sideOffset: t2 = 4, ...i2 }, l2) => e(U.Portal, { children: e(U.Content, { ref: l2, sideOffset: t2, className: `Content ${a2}`, ...i2 }) }));
Ca.displayName = U.Content.displayName;
const ya = n(({ className: a2, Inset: t2, ...i2 }, l2) => e(U.Item, { ref: l2, className: `Menu-Item ${t2} ${a2}`, ...i2 }));
ya.displayName = U.Item.displayName;
n(({ className: t2, children: i2, checked: l2, ...r2 }, n2) => a(U.CheckboxItem, { ref: n2, className: `Checkbox-Item ${t2}`, checked: l2, ...r2, children: [e("span", { className: "Checkbox-Span", children: e(U.ItemIndicator, { children: e(F, { className: "Checkbox-Icon" }) }) }), i2] })).displayName = U.CheckboxItem.displayName;
n(({ className: t2, children: i2, ...l2 }, r2) => a(U.RadioItem, { ref: r2, className: `Radio-Item ${t2}`, ...l2, children: [e("span", { className: "Radio-Span", children: e(U.ItemIndicator, { children: e(O, { className: "Radio-Icon" }) }) }), i2] })).displayName = U.RadioItem.displayName;
n(({ className: a2, Inset: t2, ...i2 }, l2) => e(U.Label, { ref: l2, className: `Label ${t2} ${a2}`, ...i2 })).displayName = U.Label.displayName;
n(({ className: a2, ...t2 }, i2) => e(U.Separator, { ref: i2, className: `Separator ${a2}`, ...t2 })).displayName = U.Separator.displayName;
const Pa = n(({ ExtraClasses: a2, Style: t2 = "Primary", Size: i2 = "Default", children: l2, ...r2 }, n2) => e("button", { className: `${t2} ${i2} ${a2 || ""}`, ref: n2, ...r2, children: l2 })), va = ({ SkillKey: i2, Hide: l2 }) => {
  const { pathname: r2 } = C(), n2 = r2, s2 = ve[i2], o2 = He(i2, ia);
  if (l2 || !s2) return e(t, {});
  return o2 ? a(ma, { children: [e(da, { children: e(y, { to: o2 ? `/Skills/${i2}` : n2, children: e(ua, { HasHover: true, children: s2.Name }) }) }), e(ha, { children: e("p", { children: `Navigate To All Material Related To ${s2.Name}` }) })] }) : e(ua, { HasHover: false, children: s2.Name });
}, ka = ({ LanguageIdentifier: i2 }) => {
  var _a2;
  const r2 = Le[i2], [n2, s2] = l(false), [o2, c2] = l("Category"), m2 = (d2 = r2.RelatedSkills || [], h2 = Le, u2 = Pe.ProgrammingLanguages, d2.filter((e2) => {
    const a2 = h2[e2];
    return (a2 == null ? void 0 : a2.IsMainSkill) && (a2 == null ? void 0 : a2.Category) !== u2;
  }));
  var d2, h2, u2;
  const p2 = (r2 == null ? void 0 : r2.RelatedSkills) && r2.RelatedSkills.length > 0, g2 = we(o2, m2, Le, [ke.Technical, ke.Soft]), S2 = He(i2, ia), N2 = [{ ParamName: "Category", ParamValue: "Category" }, { ParamName: "None", ParamValue: "None" }], C2 = ((_a2 = N2.find((e2) => e2.ParamValue === o2)) == null ? void 0 : _a2.ParamName) || "Category";
  return a(la, { children: [e(ra, { children: a(ma, { children: [e(da, { children: e(ua, { OnClick: p2 ? () => {
    s2(true);
  } : void 0, children: r2.Name }) }), e(ha, { children: e("p", { children: `View Technologies Related To ${r2.Name}` }) })] }) }), a(oa, { className: "Languages-Dialog", children: [e("div", { className: "Languages-Dialog-Container", children: e(be, { Title: r2.Name }) }), e(ga, { className: "Languages-Scroll-Area", children: a("div", { className: "Languages-Scroll-Area-Container", children: [a("div", { className: "Grouping-Dropdown", children: [e("div", { className: "Grouping-Dropdown-Container", children: "Group By:" }), a(Sa, { children: [e(Na, { className: "Languages-Dropdown-Menu-Trigger", children: e(Pa, { Style: "Primary", ExtraClasses: "Languages-Dropdown-Menu-Button", children: a("div", { className: "Languages-Dropdown-Menu", children: [e("span", { children: C2 }), e(A, { fontSize: 16, className: "Languages-Dropdown-Menu-Button-Icon" })] }) }) }), e(Ca, { className: "Languages-Dropdown-Menu-Content", children: N2.map((a2, t2) => e(ya, { className: a2.ParamValue === o2 ? "Grouped" : "", onSelect: () => c2(a2.ParamValue), children: a2.ParamName }, t2)) })] })] }), e("div", { className: "Languages-Skills-List", children: g2.map((t2, i3) => a("div", { className: "Languages-Skill", children: [e(Ae, { Title: t2.SkillCategoryName }), e("div", { className: "Languages-Skill-Container", children: t2.Skills.map((a2, t3) => e(va, { SkillKey: a2 }, t3)) })] }, i3)) }), S2 && a(t, { children: [e("div", { className: "Languages-Links" }), e("div", { className: "Languages-Link", children: e(y, { to: `/Skills/${i2}`, children: e("div", { className: "Languages-Link-Container", children: e(Pa, { Style: "Gradient", ExtraClasses: "Languages-Link-Button", children: `All ${r2.Name} Material` }) }) }) })] })] }) })] })] });
}, fa = () => {
  if (!ye()) return null;
  const i2 = [ve.JavaScript, ve.Python];
  return a(t, { children: [e(Ae, { Title: "Languages" }), e("div", { className: "Languages", children: i2.map((a2, t2) => e(ka, { LanguageIdentifier: a2 }, t2)) })] });
}, ba = () => {
  var _a2;
  const [t2, i2] = l(false), r2 = ye(), [n2, s2] = l("Category");
  if (!r2) return null;
  const o2 = [{ ParamName: "Category", ParamValue: "Category" }, { ParamName: "Language", ParamValue: "Language" }, { ParamName: "None", ParamValue: "None" }], c2 = {};
  Object.entries(Le).forEach(([e2, a2]) => {
    a2.IsMainSkill && (c2[e2] = a2);
  });
  const m2 = [Pe.Automation, Pe.CloudComputing, Pe.ProjectManagement, Pe.VersionControl, ..."Language" !== n2 ? [Pe.ProgrammingLanguages] : []], d2 = De(c2, m2), h2 = we(n2, d2, Le, [ke.Technical, ke.Soft]), u2 = ((_a2 = o2.find((e2) => e2.ParamValue === n2)) == null ? void 0 : _a2.ParamName) || "Category";
  return a(la, { children: [e(ra, { children: e(ua, { OnClick: () => {
    i2(true);
  }, children: "..." }) }), a(oa, { children: [e("div", { className: "Technologies-Dialog-Content", children: e(be, { Title: "Technologies" }) }), e(ga, { className: "Technologies-Scroll-Areas", children: a("div", { className: "Technologies-Scroll-Area", children: [a("div", { className: "Technologies-Scroll-Area-Container", children: [e("div", { className: "Technologies-Dropdown", children: "Group By:" }), a(Sa, { children: [e(Na, { className: "Technologies-Dropdown-Menu", children: e(Pa, { Style: "Primary", ExtraClasses: "Technologies-Button", children: a("div", { className: "Technologies-Button-Container", children: [e("span", { children: u2 }), e(A, { fontSize: 16, className: "Technologies-Button-Icon" })] }) }) }), e(Ca, { className: "Technologies-Dropdown-Menu", children: o2.map((a2, t3) => e(ya, { className: a2.ParamValue === n2 ? "Technology-Group" : "", onSelect: () => s2(a2.ParamValue), children: a2.ParamName }, t3)) })] })] }), e("div", { className: "Technology-Skills", children: h2.map((t3, i3) => a("div", { children: [e(Ae, { Title: t3.SkillCategoryName }), e("div", { className: "Technology-Skills-Container", children: t3.Skills.map((a2) => e(va, { SkillKey: a2 }, a2)) })] }, i3)) }), e("div", { className: "Technologies-Section-Break" }), e("div", { className: "Technology-Materials", children: e(y, { to: "/Skills", children: e("div", { className: "Technology-Materials-Container", children: e(Pa, { Style: "Gradient", ExtraClasses: "Technology-Materials-Container", children: "All Technologies & Skills" }) }) }) })] }) })] })] });
}, Aa = () => {
  const i2 = {};
  Object.entries(Le).forEach(([e2, a2]) => {
    a2.IsMainSkill && (i2[e2] = a2);
  });
  const l2 = [Pe.Automation, Pe.CloudComputing, Pe.Database, Pe.Mathematics, Pe.ProgrammingLanguages, Pe.ProjectManagement, Pe.VersionControl], r2 = De(i2, l2);
  return a(t, { children: [e(Ae, { Title: "Technologies" }), a("div", { className: "Technologies", children: [(n2 = ((e2, a2) => {
    const t2 = {};
    let i3 = [];
    return e2.forEach((e3) => {
      const a3 = Le[e3].Category || "Other";
      t2[a3] || (t2[a3] = []), t2[a3].push(e3);
    }), Object.values(t2).forEach((e3) => {
      i3 = [...i3, ...e3.slice(0, a2)];
    }), i3;
  })(r2, 3), s2 = 15, n2.slice(0, s2)).map((a2, t2) => e(va, { SkillKey: a2 }, t2)), e("div", { className: "Technologies-Tags", children: a(ma, { children: [e(da, { children: e(ba, {}) }), e(ha, { children: e("p", { children: "View More Technologies" }) })] }) })] })] });
  var n2, s2;
}, Ta = () => {
  const [t2, i2] = l(void 0);
  return r(() => {
    (async () => {
      const e2 = await Se("/Content/About/Short.md");
      i2(e2 || 'This is a placeholder for the "About Me" short text.');
    })();
  }, []), console.log(t2), a("section", { id: "About-Me", className: "Home-Section-Wrapper", children: [a("h1", { className: "About-Title", children: ["About Me", e("hr", { className: "About-Horizontal-Rule" })] }), a("div", { className: "About", children: [a("div", { className: "About-Description", children: [e("h1", { className: "About-Description-Title", children: "Get To Know Me!" }), a("div", { className: "About-Description-Container", children: [e(Ce, { Content: t2 }), e(y, { to: "/About", className: "About-Page-Link", children: "Read More About Me!" })] })] }), a("div", { className: "About-Skills", children: [e(fa, {}), e("div", { className: "About-Section" }), e(Aa, {})] })] })] });
}, La = "Emily Simone", Ia = ["Back-End Developer", "Database Administrator", "Front-End Developer", "Full-Stack Developer", "User Experience (UX) Designer", "User Interface (UI) Designer", "Web Developer"], Da = [{ Name: "GitHub", URL: "https://github.com/emsim11", IconComponent: z }, { Name: "LinkedIn", URL: "https://www.linkedin.com/in/emily-simone", IconComponent: J }, { Name: "Mail", URL: "mailto:emsimone11@gmail.com", IconComponent: _ }], Ma = ({ LoopItems: a2, Delay: t2, ClassName: i2 }) => {
  const [n2, s2] = l(0), o2 = ye();
  return r(() => {
    const e2 = setInterval(() => {
      s2((e3) => (e3 + 1) % a2.length);
    }, t2);
    return () => clearInterval(e2);
  }, [a2, t2]), o2 ? e(Y.span, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10, transition: { duration: 1, ease: "easeInOut" } }, transition: { duration: 1, ease: "easeInOut", delay: 0.5 }, style: { transitionProperty: "opacity, transform" }, className: i2, children: a2[n2] }, n2) : null;
}, Ra = ({ LoopItems: a2, ClassName: t2 }) => e("div", { className: t2, children: e(q, { options: { strings: a2, autoStart: true, loop: true } }) }), wa = ({ LoopItems: i2, Implementation: l2, ClassName: r2 }) => {
  const n2 = ye();
  return e(t, { children: n2 ? a(t, { children: ["Typewriter" === l2 && e(Ra, { ClassName: r2, LoopItems: i2 }), "Simple" === l2 && e(Ma, { ClassName: r2, LoopItems: i2, Delay: 3e3 })] }) : e("div", { className: r2, children: i2[1] }) });
}, Fa = ({ Name: t2, URL: i2, IconComponent: l2, IconSize: r2 = 30 }) => a(ma, { children: [e(da, { children: e(y, { to: i2, target: "_blank", children: e(l2, { className: "Social-Icon", size: r2 }) }) }), e(ha, { children: e("p", { children: t2 }) })] }), Oa = ({ ExtraClasses: a2, IconSize: t2 }) => e("div", { className: `Social-Buttons ${a2 || ""}`, children: Da.map((a3) => e(Fa, { Name: a3.Name, URL: a3.URL, IconComponent: a3.IconComponent, IconSize: t2 }, a3.Name)) }), Va = () => a("section", { id: "Home", className: "Home-Section-Wrapper", children: [a("div", { className: "Hero", children: [e("div", { className: "Profile-Image", children: e("img", { src: "/Profile.png", alt: "Profile Image Of The Developer", className: "Developer-Profile-Image", width: 335, height: 335 }) }), a("div", { className: "Hero-Container", children: [a("div", { className: "Developer-Info", children: [e("h2", { className: "Welcome", children: "Hi, I'm" }), e("h1", { className: "Developer-Name", children: La })] }), e(wa, { LoopItems: Ia, Implementation: "Typewriter", ClassName: "Developer-Roles" }), e(Oa, { IconSize: 40, ExtraClasses: "Hero-Social-Buttons" }), e("div", { className: "Homepage-Sections", children: a("div", { className: "Homepage-Sections-Container", children: [e("a", { href: "#Projects-Section", className: "Homepage-Section", children: e(Pa, { Style: "Gradient", ExtraClasses: "Homepage-Section", children: "Projects" }) }), e("a", { href: "#About-Me", className: "Homepage-Section", children: e(Pa, { Style: "Ghost", ExtraClasses: "Homepage-Section", children: "About" }) })] }) })] })] }), e("div", { className: "About-Section-Button", children: e("a", { href: "#About-Me", children: e(H, { size: 35, className: "About-Section-Button-Icon" }) }) })] }), Ea = { Label: "Home", Path: "/", Description: "\n		Welcome to the homepage for my developer portfolio!\n		This page contains information about me, my past\n		projects, and my contact information.\n	" }, ja = { Label: "Blog", Path: "/Blog", Description: "\n		Explore my collection of blog posts about various topics!\n		Use the search bar to find a specific blog post or filter\n		all posts by category.\n	" }, Ga = { IsMain: true, Label: "Certificates", Path: "/Certificates", Description: "\n		Explore my collection of certificates and qualifications\n		that I have earned! Use filters to refine your search by\n		issuer and/or category.\n	" }, xa = { IsMain: true, Label: "Education", Path: "/Education", Description: "\n		Explore my education history and qualifications, and\n		view the modules that I have studied!\n	" }, $a = { IsMain: true, Label: "Experience", Path: "/Experience", Description: "\n		Dive into my professional journey! Discover the roles\n		that I have embraced, projects that I have spearheaded,\n		and impacts that I've made.\n	" }, Ka = { IsMain: true, Label: "More", Path: "/More", Description: "\n		Navigate to all of the pages on my portfolio website!\n		This will show additional pages that are not displayed\n		in the Navigation.\n	" }, Ba = { IsMain: true, Label: "Projects", Path: "/Projects", Description: "\n		Discover my portfolio of projects, both current and\n		archived! Use filters to narrow down projects by\n		category, programming language, and/or technology.\n	" }, Wa = { Label: "Skills", Path: "/Skills", Description: "\n		Explore my collection of skills on various topics! It is\n		possible to navigate to projects, certificates, and blogs\n		directly from here.\n	" }, Ua = [Ea, { Label: "About", Path: "/About", Description: "\n		Read a summary about me, my journey, and my aspirations!\n	" }, ja, Ga, xa, $a, Ba, Ka, Wa];
var Ha = ((e2) => (e2.Algorithms = "Algorithms", e2.BackEndWebDevelopment = "Back-End Web Development", e2.FrontEndWebDevelopment = "Front-End Web Development", e2.FullStackWebDevelopment = "Full-Stack Web Development", e2.MachineLearning = "Machine Learning", e2.JavaAssignments = "Java Assignments", e2.Other = "Other", e2))(Ha || {}), za = ((e2) => (e2.CodeQuiz = "Code-Quiz", e2))(za || {});
const Ja = ({ Offset: a2 = "0px", children: t2 }) => {
  const i2 = s(null);
  return r(() => {
    const e2 = new IntersectionObserver((e3) => {
      e3.forEach((e4) => {
        e4.isIntersecting && (e4.target.classList.remove("Intersecting-Opacity"), e4.target.classList.add("Intersecting-Animation"));
      });
    }, { rootMargin: a2 });
    i2.current && e2.observe(i2.current);
  }, [a2, i2]), e("div", { ref: i2, className: "Slide-Up-Container", children: t2 });
}, _a = X.Root;
var Qa = ((e2) => (e2.Year1 = "Year 1", e2.Year2 = "Year 2", e2.Year3 = "Year3", e2))(Qa || {}), Ya = ((e2) => (e2.CU_FullStackCoding = "CS100", e2))(Ya || {});
const qa = { [za.CodeQuiz]: { Name: "Code Quiz", DeploymentURL: "https://full-stack-boot-camp.github.io/Code-Quiz/", RepositoryURL: "https://github.com/Full-Stack-Boot-Camp/Code-Quiz", Description: "For practicing with JavaScript, a Coding Quiz was developed,\n		which enables users to test their knowledge about JavaScript fundamentals,\n		compete with friends, and save their high scores.\n		", Category: Ha.FullStackWebDevelopment, Skills: [ve.APIs, ve.Creativity, ve.CriticalThinking, ve.CSS, ve.DesignPatterns, ve.Git, ve.GitHub, ve.GitHubPages, ve.HTML, ve.JavaScript, ve.ProblemSolving, ve.WebDevelopment], RelatedMaterials: [qe.FrontEnd, Ya.CU_FullStackCoding], ThumbnailImage: (Xa = za.CodeQuiz, `./Public/Content/Projects/${Xa}/Cover.png`) } };
var Xa;
const Za = Object.keys(qa), et = Be(qa, Le, [Pe.ProgrammingLanguages], ke.Technical, ke.Technology), at = ({ ProjectKey: t2 }) => {
  const i2 = Ba.Path, l2 = et[t2];
  return console.log(`${i2}/${t2}`), console.log(t2), e("div", { className: "Project", children: a("div", { className: "Project-Container", children: [l2.ThumbnailImage ? e("div", { className: "Project-Cover", children: e(y, { to: `${i2}/${t2}`, children: e(_a, { ratio: 1.6, className: "Project-Aspect-Ratio", children: e("img", { src: l2.ThumbnailImage, alt: `${l2.Name} Cover Image`, className: "Project-Cover-Image" }, l2.ThumbnailImage) }) }) }) : e("div", { children: e("div", { className: "Project-No-Cover" }) }), a("div", { className: "Project-Cover-Container " + (l2.ThumbnailImage ? "Project-Image" : "Project-Image-Full"), children: [e(y, { to: `${i2}/${t2}`, children: e("h1", { className: "Project-Title", children: l2.Name }) }), e("p", { className: "Project-Description", children: l2.Description }), a("div", { className: "Project-Buttons", children: [a(ma, { children: [e(da, { children: e(y, { to: `${i2}/${t2}`, children: e(T, { size: 30, className: "Project-Info-Icon" }) }) }), e(ha, { children: e("p", { children: "View Project Details" }) })] }), l2.RepositoryURL && a(ma, { children: [e(da, { children: e(y, { to: l2.RepositoryURL, target: "_blank", children: e(L, { size: 30, className: "Project-Info-Icon" }) }) }), e(ha, { children: e("p", { children: "GitHub Repository For Project" }) })] }), l2.DeploymentURL && a(ma, { children: [e(da, { children: e(y, { to: l2.DeploymentURL, target: "_blank", children: e(I, { size: 30, className: "Project-Info-Icon" }) }) }), e(ha, { children: e("p", { children: "Project Website" }) })] })] })] })] }) });
}, tt = () => {
  const t2 = Ba.Path, i2 = [za.CodeQuiz];
  return a("section", { id: "Projects-Section", className: "Home-Section-Wrapper", children: [e(be, { Title: "Projects" }), e("div", { className: "Projects", children: i2.map((a2, t3) => e("div", { children: e(Ja, { Offset: "-150px 0px -150px 0px", children: e(at, { ProjectKey: a2 }) }) }, a2)) }), e("div", { className: "All-Projects", children: e(y, { to: t2, children: e(Pa, { Style: "Outline", children: "View All Projects" }) }) })] });
}, it = () => a("main", { children: [e(S, { children: e("div", { children: a(N, { children: [e("title", { children: La }), e("meta", { name: "Description", content: Ea.Description }), e("meta", { name: "Category", content: "Homepage" }), e("meta", { name: "Creator", content: La }), e("meta", { name: "Keywords", content: Ia.join(", ") })] }) }) }), a("div", { className: "Home", children: [e("p", { children: `My name is ${La} and I am a ` }), Ia.map((a2, t2) => e("p", { children: a2 }, t2)), e("div", { className: "Home-About-Section" })] }), a("div", { className: "Home-Container", children: [e(Va, {}), e(Ta, {}), e(tt, {})] })] }), lt = { Title: `${La} - Page Not Found`, Description: "The page you are looking for does not exist. Navigate back to the Homepage." }, rt = () => a(t, { children: [e(S, { children: e("div", { children: a(N, { children: [e("title", { children: lt.Title }), e("meta", { name: "Description", content: lt.Description })] }) }) }), a("div", { className: "Page-Not-Found", children: [a("div", { className: "Page-Not-Found-Container", children: [e("h1", { className: "Page-Not-Found-Title", children: "404" }), e("h1", { className: "Page-Not-Found-Subtitle", children: "Page Does Not Exist" })] }), e("h2", { className: "Page-Not-Found-Text", children: "This page does not seem to exist. Navigate back to the Homepage or view all pages." }), a("div", { className: "Page-Not-Found-Links", children: [e(y, { to: "/", className: "Page-Not-Found-Link", children: e(Pa, { Style: "Gradient", ExtraClasses: "Page-Not-Found-Link", children: "Home" }) }), e("br", {}), e(y, { to: Ka.Path, className: "Page-Not-Found-Link", children: e(Pa, { Style: "Ghost", ExtraClasses: "Page-Not-Found-Link", children: "All Pages" }) })] })] })] });
var nt = ((e2) => (e2.OpenSourceContributor = "Open-Source-Contributor", e2))(nt || {}), st = ((e2) => (e2.Google = "Google", e2.OpenSource = "Open-Source", e2))(st || {}), ot = ((e2) => (e2.Design = "Design", e2.Development = "Development", e2.Software = "Software", e2.Other = "Other", e2))(ot || {}), ct = ((e2) => (e2.Internship = "Internship", e2.PartTime = "Part-Time", e2.FullTime = "Full-Time", e2.Volunteering = "Volunteering", e2))(ct || {});
var mt;
const dt = { [st.OpenSource]: { Name: "Open Source", Location: "Remote", Positions: [nt.OpenSourceContributor], Logo: (mt = st.OpenSource, `./Public/Companies/${mt}/Logo.png`) } };
var ht = ((e2) => (e2.CU_Computer_Science = "Columbia-University-Computer-Science", e2))(ht || {});
const ut = { [Ya.CU_FullStackCoding]: { Name: "Object Oriented Programming 1", Category: Qa.Year1, Skills: [ve.DataStructures, ve.Java, ve.ObjectOrientedProgramming], RelatedMaterials: [za.CodeQuiz], LearningOutcomes: ["Build front-end websites from scratch, as well as using ready-made frameworks that enable efficient building.", "Create full-stack single-page web applications using RESTful API routes and AJAX methods.", "Describe how front-end applications communicate with back-end applications and databases.", "Implement structured and unstructured databases to convert static websites into dynamic websites that persist data.", "Build communication skills and demonstrate the foundational computer-science knowledge that is required during technical interviews.", "Apply the accepted and standard basics of social coding - including source control, issue tracking, and functional feedback = as part fo a development community, while building an application.", "Demonstrate strong teamwork and project management skills as a collaborator and independent contributor during the development cycle of complex projects."], ParentCourse: ht.CU_Computer_Science } }, pt = Object.keys(ut), gt = Be(ut, Le, [Pe.ProgrammingLanguages], ke.Technical, ke.Technology), St = { [ht.CU_Computer_Science]: { Name: "Computer Science", University: "Columbia Engineering, Columbia University", Grade: "First Class Honours", Category: "Bachelor Of Science", Skills: [], StartYear: 2024, EndYear: 2024, Modules: [Ya.CU_FullStackCoding], RelatedMaterials: [za.CodeQuiz] } }, Nt = Object.keys(St);
let Ct = ((e2, a2) => {
  const t2 = {};
  return Object.keys(e2).forEach((i2) => {
    const l2 = e2[i2];
    let r2 = [...l2.Skills];
    l2.Modules.forEach((e3) => {
      const t3 = a2[e3];
      t3 && t3.Skills && (r2 = [...r2, ...t3.Skills]);
    }), r2 = Array.from(new Set(r2)), t2[i2] = { ...l2, Skills: r2 };
  }), t2;
})(St, gt);
Ct = ((e2, a2) => {
  const t2 = {};
  return Object.keys(e2).forEach((i2) => {
    const l2 = e2[i2];
    let r2 = l2.RelatedMaterials ? [...l2.RelatedMaterials] : [];
    l2.Modules.forEach((e3) => {
      const t3 = a2[e3];
      t3 && t3.RelatedMaterials && (r2 = [...r2, ...t3.RelatedMaterials]);
    }), r2 = Array.from(new Set(r2)), t2[i2] = { ...l2, RelatedMaterials: r2 };
  }), t2;
})(Ct, gt);
const yt = { [nt.OpenSourceContributor]: { Name: "Community Member", Category: ot.Software, Type: ct.Volunteering, Company: st.OpenSource, StartDate: "August 2024", EndDate: "Present", Archived: false, Skills: [ve.Adaptability, ve.Communication, ve.CriticalThinking, ve.Git, ve.GitHub, ve.GitHubActions, ve.GitLab, ve.LinuxDevelopment, ve.MacDevelopment, ve.ProblemSolving, ve.QualityManagement, ve.RiskManagement, ve.ScopeManagement, ve.Teamwork, ve.TimeManagement, ve.UserCentricDesign, ve.WindowsDevelopment] } }, Pt = Object.keys(yt), vt = yt, kt = ({ Details: t2, ExtraClasses: i2 }) => e("div", { className: `Details-Table-Overlay ${i2 || ""}`, children: t2.map((t3, i3) => a("div", { children: [e(Te, { Title: t3.Heading }), e("p", { className: "Details-Table", children: t3.Value })] }, i3)) }), ft = ee.Root, bt = n(({ className: a2, ...t2 }, i2) => e(ee.Item, { ref: i2, className: `Accordion-Item ${a2 || ""}`, ...t2 }));
bt.displayName = "AccordionItem";
const At = n(({ className: t2, children: i2, ...l2 }, r2) => e(ee.Header, { className: "Accordion-Header", children: a(ee.Trigger, { ref: r2, className: `Accordion-Trigger ${t2 || ""}`, ...l2, children: [i2, e(V, { className: "Accordion-Trigger-Icon" })] }) }));
At.displayName = ee.Trigger.displayName;
const Tt = n(({ className: a2, children: t2, ...i2 }, l2) => e(ee.Content, { ref: l2, className: "Accordion-Content", ...i2, children: e("div", { className: `Accordion-Content-Container ${a2 || ""}`, children: t2 }) }));
Tt.displayName = ee.Content.displayName;
var Lt = ((e2) => (e2.Blogs = "Blogs", e2.Certificates = "Certificates", e2.Projects = "Projects", e2.Skills = "Skills", e2.UniversityModules = "University Modules", e2.WorkExperiences = "Work Experiences", e2))(Lt || {}), It = ((e2) => (e2.AlgorithmsDataStructures = "Algorithms & Data Structures", e2.ArtificialIntelligence = "Artificial Intelligence", e2.CloudComputing = "Cloud Computing", e2.CyberSecurity = "Cyber Security", e2.Databases = "Databases", e2.DevOps = "DevOps", e2.Management = "Management", e2.Mathematics = "Mathematics", e2.ProgrammingLanguages = "Programming Languages", e2.SoftwareEngineering = "Software Engineering", e2.WebDesign = "Web Design", e2.WebDevelopment = "Web Development", e2.Other = "Other", e2))(It || {}), Dt = ((e2) => (e2.ColumbiaFullStackCodingBootCamp = "Columbia-Engineering-Certificate-Coding-Boot-Camp.pdf", e2))(Dt || {}), Mt = ((e2) => (e2.Codecademy = "Codecademy", e2.ColumbiaEngineering = "Columbia University", e2.Coursera = "Coursera", e2.HarvardUniversity = "Harvard University", e2.LinkedInLearning = "LinkedIn Learning", e2.FreeCodeCamp = "freeCodeCamp", e2.GitHub = "GitHub", e2.GitLab = "GitLab", e2.Google = "Google", e2.HackerRank = "Hacker Rank", e2.IBM = "IBM", e2.MongoDB = "MongoDB", e2.Redis = "Redis", e2.OpenClassrooms = "OpenClassrooms", e2.Udacity = "Udacity", e2.Udemy = "Udemy", e2.WebFlowUniversity = "WebFlow University", e2.W3Schools = "W3Schools", e2))(Mt || {});
const Rt = { [Dt.ColumbiaFullStackCodingBootCamp]: { Name: "Columbia University Full-Stack Coding Boot Camp", Description: "", Category: It.WebDevelopment, Issuer: Mt.ColumbiaEngineering, CertificateURL: "https://columbia.credential.getsmarter.com/b33280a7-b6bd-4eaf-887f-648738e30872#gs.db43ts", Skills: [ve.APIs, ve.Bootstrap, ve.Apollo, ve.CSS, ve.ESLint, ve.ExpressJS, ve.Git, ve.GitHub, ve.GitLab, ve.GraphQL, ve.HandlebarsJS, ve.HTML, ve.Jest, ve.MongoDB, ve.Mongoose, ve.MySQL, ve.Node, ve.NPM, ve.Prettier, ve.PostgreSQL, ve.ProgressiveWebApps, ve.PSQL, ve.ReactJS, ve.REST, ve.Sequelize, ve.SQL, ve.Testing, ve.UnitTest, ve.VersionControlSystems], LearningOutcomes: ["Build front-end websites from scratch, as well as using ready-made frameworks that enable efficient building.", "Create full-stack single-page web applications using RESTful API routes and AJAX methods.", "Describe how front-end applications communicate with back-end applications and databases.", "Implement structured and unstructured databases to convert static websites into dynamic websites that persist data.", "Build communication skills and demonstrate the foundational computer-science knowledge that is required during technical interviews.", "Apply the accepted and standard basics of social coding - including source control, issue tracking, and functional feedback = as part fo a development community, while building an application.", "Demonstrate strong teamwork and project management skills as a collaborator and independent contributor during the development cycle of complex projects."] } }, wt = Object.keys(Rt), Ft = Be(Rt, Le, [Pe.ProgrammingLanguages], ke.Technical, ke.Technology), Ot = ({ Items: a2, Gap: t2 = 20 }) => {
  const i2 = a2.length % 2 != 0;
  return e("div", { className: "Grid", style: { gridGap: `${t2}px` }, children: a2.map((t3, l2) => {
    const r2 = l2 === a2.length - 1;
    return e("div", r2 && i2 ? { className: "Grid-Item-Odd", children: e("div", { className: "Grid-Item-Odd-Container", children: t3 }) } : { className: "Grid-Item", children: t3 }, l2);
  }) });
}, Vt = ({ CertificateKey: t2 }) => {
  const i2 = Ga.Path;
  let l2 = Ft[t2];
  const r2 = `${i2}/${t2}`, n2 = l2.CertificateURL;
  return l2 = { ...l2, CertificateImage: `./Public/Content${i2}/${t2}` }, a("div", { className: "Certificate-Item", children: [l2.CertificateImage && e(y, { to: r2, children: e("div", { className: "Certificate-Item-Image-Container", children: e(_a, { ratio: 4 / 3, className: "Certificate-Item-Image-Ratio", children: e("img", { src: l2.CertificateImage, alt: `${l2.Name} Certificate Image`, loading: "lazy", className: "Certificate-Item-Image-Container" }, t2) }) }) }), a("div", { className: "Certificate-Title", children: [e(y, { to: r2, children: e("h1", { className: "Certificate-Title-Header", children: l2.Name }) }), e("div", { className: "Certificate-Issuer", children: e(ua, { children: l2.Issuer }) }), a("div", { className: "Certificate-Credentials", children: [a(ma, { children: [e(da, { children: e(y, { to: r2, children: e(T, { size: 30, className: "Certificate-Credentials-Icon" }) }) }), e(ha, { children: e("p", { children: "View Certificate Details" }) })] }), l2.CertificateURL && a(ma, { children: [e(da, { children: e(y, { to: n2, target: "_blank", children: e(I, { size: 30, className: "Certificate-Providers-Icon" }) }) }), e(ha, { children: e("p", { children: "View On Certificate Provider's Site" }) })] })] })] })] });
}, Et = ({ GroupedMaterials: i2 }) => e("div", { className: "Material-Page-Wrapper", children: i2.length > 0 ? i2.map((l2) => "All" !== l2.GroupName && e("section", { id: Je(l2.GroupName), children: a("div", { className: "Certificates-List", children: [i2.length > 1 && a(t, { children: [e("div", { className: "Certificates-List-Header" }), e(be, { Title: l2.GroupName })] }), e(Ot, { Items: l2.MaterialKeys.map((a2) => e("div", { className: "Certificates-List-Grid", children: e(Vt, { CertificateKey: a2 }) }, a2)) })] }) }, l2.GroupName)) : e("div", { className: "Certificates-List-Empty", children: e("h2", { className: "Certificates-List-Empty-Header", children: "No Matching Certificates" }) }) }), jt = ({ GroupedMaterials: i2 }) => e("div", { className: "Material-Page-Wrapper", children: i2.length > 0 ? i2.map((l2) => "All" !== l2.GroupName && e("section", { id: Je(l2.GroupName), children: a("div", { className: "Projects-List", children: [i2.length > 1 && a(t, { children: [e("div", { className: "Projects-List-Container" }), e(be, { Title: l2.GroupName })] }), e("div", { className: "Projects-List-Item", children: l2.MaterialKeys.map((a2) => e("div", { className: "Project-List-Item-Key", children: e(at, { ProjectKey: a2 }) }, a2)) })] }) }, l2.GroupName)) : e("div", { className: "Projects-List-Nothing-Found", children: e("h2", { className: "Projects-List-Nothing-Found-Title", children: "No Matching Projects" }) }) }), Gt = ae.Root, xt = n(({ className: a2, ...t2 }, i2) => e(ae.List, { ref: i2, className: `Tabs-List ${a2}`, ...t2 }));
xt.displayName = ae.List.displayName;
const $t = n(({ className: a2, ...t2 }, i2) => e(ae.Trigger, { ref: i2, className: `Tabs-Trigger ${a2}`, ...t2 }));
$t.displayName = ae.Trigger.displayName;
const Kt = n(({ className: a2, ...t2 }, i2) => e(ae.Content, { ref: i2, className: `Tabs-Content ${a2}`, ...t2 }));
Kt.displayName = ae.Content.displayName;
const Bt = ({ BlogKey: i2 }) => {
  const l2 = ja.Path, r2 = ea[i2];
  return e(t, { children: e(y, { to: `${l2}/${i2}`, children: a("div", { className: "Blog-Item", children: [e("h2", { className: "Blog-Item-Title", children: r2.Name }), e("p", { className: "Blog-Item-Subtitle", children: r2.Subtitle })] }) }) });
}, Wt = ({ GroupedMaterials: i2 }) => e("div", { className: "Material-Page-Wrapper", children: i2.length > 0 ? i2.map((l2) => "All" !== l2.GroupName && e("section", { id: Je(l2.GroupName), children: a("div", { className: "Blogs-List", children: [i2.length > 1 && a(t, { children: [e("div", { className: "Blogs-List-Title" }), e(be, { Title: l2.GroupName })] }), e(Ot, { Items: l2.MaterialKeys.map((a2) => e("div", { className: "Blogs-List-Grid", children: e(Bt, { BlogKey: a2 }, a2) }, a2)) })] }) }, l2.GroupName)) : e("div", { className: "Blogs-List-None-Found", children: e("h2", { className: "Blogs-List-None-Found-Title", children: "No Matching Blogs" }) }) }), Ut = ({ GroupedMaterials: t2, HeadingSize: i2 = "HeadingTwo" }) => {
  const l2 = xa.Path, r2 = "HeadingTwo" === i2 ? be : Te;
  return e("div", { children: t2.map((i3, n2) => a("div", { className: "Modules-List", children: [t2.length > 1 && e(r2, { Title: `University ${i3.GroupName}` }), e(Ot, { Gap: 1, Items: i3.MaterialKeys.map((a2, t3) => {
    const i4 = ((e2, a3) => {
      for (const [t4, i5] of Object.entries(a3)) if (i5.Modules.includes(e2)) return t4;
      return null;
    })(a2, Ct);
    return e("div", { className: "Modules-List-Grid", children: e(y, { to: `${l2}/${i4}/${a2}`, children: e(ua, { HasHover: true, children: gt[a2].Name }) }, t3) }, t3);
  }) })] }, n2)) });
}, Ht = ({ RoleKey: t2 }) => {
  const i2 = $a.Path, l2 = vt[t2], r2 = dt[l2.Company], n2 = `${i2}/${t2}`;
  return a("div", { className: "Work-Item", children: [e("div", { className: "Work-Item-Company", children: r2.Logo && e("div", { className: "Work-Item-Company-Link", children: e(y, { to: n2, children: e(_a, { ratio: 1, className: "Work-Item-Aspect-Ratio", children: e("img", { src: r2.Logo, alt: `Logo For ${r2.Name}`, loading: "eager", className: "Work-Item-Company-Logo" }) }) }) }) }), a("div", { className: "Work-Item-Details", children: [e(y, { to: n2, children: e("h2", { className: "Work-Item-Title", children: l2.Name }) }), a("div", { className: "Work-Item-Website", children: [r2.Website ? e(y, { to: r2.Website, target: "_blank", className: "Work-Item-Website-Link", children: r2.Name }) : e("span", { children: r2.Name }), e("span", { children: r2.Location })] }), a("div", { className: "Work-Item-Info", children: [e("p", { className: "Work-Item-Dates", children: `${l2.StartDate} - ${l2.EndDate}` }), e("p", { className: "Work-Item-Role-Type", children: l2.Type })] }), a("div", { className: "Work-Item-Credentials", children: [a(ma, { children: [e(da, { children: e(y, { to: n2, children: e(T, { size: 30, className: "Work-Item-Info-Icon" }) }) }), e(ha, { children: e("p", { children: "View Role Details" }) })] }), r2.Website && a(ma, { children: [e(da, { children: e(y, { to: r2.Website, target: "_blank", children: e(I, { size: 30, className: "Work-Item-Arrow-Icon" }) }) }), e(ha, { children: e("p", { children: "Navigate To Company Website" }) })] })] })] })] });
}, zt = ({ GroupedMaterials: i2 }) => e("div", { className: "Material-Page-Wrapper", children: i2.length > 0 ? i2.map((l2) => "All" !== l2.GroupName && e("section", { id: Je(l2.GroupName), children: a("div", { className: "Work-List", children: [i2.length > 1 && a(t, { children: [e("div", { className: "Work-List-Title" }), e(be, { Title: l2.GroupName })] }), e("div", { className: "Work-List-Container", children: l2.MaterialKeys.map((a2) => e("div", { className: "Work-List-Role", children: e(Ht, { RoleKey: a2 }) }, a2)) })] }) }, l2.GroupName)) : e("div", { className: "Work-List-Nothing-Found", children: e("h2", { className: "Work-List-Nothing-Found-Title", children: "No Matching Jobs" }) }) }), Jt = ({ MaterialKeys: t2 }) => {
  const [i2, r2] = l("");
  if (!t2 || 0 === t2.length) return null;
  const n2 = [{ Name: Lt.Blogs, Materials: Ze, MaterialHashMap: ea, BasePath: ja.Path, ListComponent: Wt }, { Name: Lt.Certificates, Materials: wt, MaterialHashMap: Ft, BasePath: Ga.Path, ListComponent: Et }, { Name: Lt.Projects, Materials: Za, MaterialHashMap: et, BasePath: Ba.Path, ListComponent: jt }, { Name: Lt.UniversityModules, Materials: pt, MaterialHashMap: gt, ListComponent: Ut }, { Name: Lt.WorkExperiences, Materials: Pt, MaterialHashMap: vt, BasePath: $a.Path, ListComponent: zt }].filter(({ Materials: e2, MaterialHashMap: a2, Name: i3 }) => {
    const l2 = Qe(t2, 0, i3);
    return l2[0] && l2[0].MaterialKeys.length > 0;
  });
  return !i2 && n2.length > 0 && r2(n2[0].Name), a(Gt, { value: i2, defaultValue: i2, onValueChange: r2, className: "Material-Tab", children: [e(xt, { className: "Material-Tabs-List", children: n2.map(({ Name: a2 }) => e($t, { value: a2, className: "Material-Tabs-Trigger", children: a2 }, a2)) }), n2.map(({ Name: i3, MaterialHashMap: l2, ListComponent: r3, BasePath: n3 }) => {
    const s2 = Qe(t2, 0, i3);
    return e(Kt, { value: i3, children: a("div", { className: "Material-Tabs-Content", children: [e(r3, { GroupedMaterials: s2 }), n3 && e("div", { className: "Material-Tabs-Link", children: e(y, { to: n3, children: e(Pa, { Style: "Outline", children: `View All ${i3}` }) }) })] }) }, i3);
  })] });
}, _t = ({ MaterialKeys: t2, IsCollapsible: i2 = true }) => i2 ? e(ft, { type: "single", collapsible: true, className: "Materials-List-Accordion", children: a(bt, { value: "Item-1", children: [e(At, { children: a("div", { className: "Materials-List-Icon-Container", children: [e(Z, { size: 24, className: "Materials-List-Icon" }), e("p", { className: "Materials-List-Related-Materials", children: "Directly Related Material" })] }) }), e(Tt, { className: "Materials-List-Accordion-Content", children: e(Jt, { MaterialKeys: t2 }) })] }) }) : e(Jt, { MaterialKeys: t2 }), Qt = () => {
  const [i2, n2] = l(void 0);
  r(() => {
    (async () => {
      const e2 = await Se("/Content/About/Long.md");
      n2(e2 || 'This is a placeholder for the "About Me" text.');
    })();
  }, []), console.log(i2);
  const s2 = { Title: `${La} - About Me`, Description: i2, Category: `About ${La}`, Creator: La, Keywords: Ia }, o2 = Array.isArray(s2.Keywords) ? s2.Keywords.join(", ") : s2.Keywords, c2 = Object.values(vt)[0], m2 = c2.Name, d2 = dt[c2.Company].Name, h2 = Object.values(Ct)[0], u2 = h2.University, p2 = h2.Name, g2 = [nt.OpenSourceContributor];
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: s2.Title }), e("meta", { name: "Description", content: s2.Description }), e("meta", { name: "Category", content: s2.Category }), e("meta", { name: "Creator", content: s2.Creator }), e("meta", { name: "Keywords", content: o2 })] }) }), a("main", { children: [e("div", { className: "About", children: e(fe, { Title: "About Me" }) }), e("div", { className: "About-Profile", children: e("div", { className: "About-Profile-Container", children: e("img", { src: "/Profile.png", alt: `Profile Image Of ${La}`, height: 150, width: 150, className: "About-Profile-Image", loading: "eager" }) }) }), e("div", { className: "About-Content", children: a("div", { className: "About-Content-Container", children: [e("div", { className: "About-Content-Description", children: e(Ce, { Content: i2, Size: "Large-Prose" }) }), a("div", { className: "About-Developer", children: [e("img", { src: "/Profile.png", alt: `Profile Image Of ${La}`, height: 250, width: 250, className: "About-Developer-Image", loading: "eager" }), e("div", { className: "About-Profile-Container", children: e(Oa, { IconSize: 36 }) }), e(kt, { Details: [{ Heading: "Name", Value: La }, { Heading: "Location", Value: "Berkeley Heights, New Jersey" }, { Heading: "University", Value: u2 }, { Heading: "Degree", Value: p2 }, { Heading: "Currently Working", Value: d2 }, { Heading: "Current Role", Value: m2 }], ExtraClasses: "About-Developer-Info" })] })] }) }), e(_t, { MaterialKeys: g2 })] })] });
}, Yt = ({ Description: a2 }) => e("div", { className: "Page-Description", children: e("p", { className: "Page-Description-Text", children: a2 }) }), qt = n(({ className: a2, ...t2 }, i2) => e(re.Root, { className: `Switch ${a2}`, ...t2, ref: i2, children: e(re.Thumb, { className: "Switch-Thumb" }) }));
qt.displayName = re.Root.displayName;
const Xt = ({ ShowArchived: t2, BasePath: i2, FilterProps: l2 }) => {
  const r2 = [...l2, { ParamName: "Archived", ParamValue: (!t2).toString() }];
  return a("div", { className: "Archive-Toggle", children: [e("span", { className: "Archive-Toggle-Container", children: "Display Archived" }), e(y, { to: Ue(r2, i2), children: e(qt, { checked: t2 }) })] });
}, Zt = se.Root, ei = se.Trigger, ai = n(({ className: a2, align: t2 = "center", sideOffset: i2 = 4, ...l2 }, r2) => e(se.Portal, { children: e(se.Content, { ref: r2, align: t2, sideOffset: i2, className: `Popover-Content ${a2}`, ...l2 }) }));
ai.displayName = se.Content.displayName;
const ti = n(({ className: a2, ...t2 }, i2) => e(me, { ref: i2, className: `Command ${a2}`, ...t2 }));
ti.displayName = me.displayName;
const ii = n(({ className: t2, ...i2 }, l2) => a("div", { className: "Command-Input", "cmdk-input-wrapper": "", children: [e(E, { className: "Command-Input-Search" }), e(me.Input, { ref: l2, className: `Command-Input-Search-Container ${t2}`, ...i2 })] }));
ii.displayName = me.Input.displayName;
n(({ className: a2, ...t2 }, i2) => e(me.List, { ref: i2, className: `Command-List ${a2}`, ...t2 })).displayName = me.List.displayName;
const li = n((a2, t2) => e(me.Empty, { ref: t2, className: "Command-Empty", ...a2 }));
li.displayName = me.Empty.displayName;
const ri = n(({ className: a2, ...t2 }, i2) => e(me.Group, { ref: i2, className: `Command-Group ${a2}`, ...t2 }));
ri.displayName = me.Group.displayName;
n(({ className: a2, ...t2 }, i2) => e(me.Separator, { ref: i2, className: `Command-Separator ${a2}`, ...t2 })).displayName = me.Separator.displayName;
const ni = n(({ className: a2, ...t2 }, i2) => e(me.Item, { ref: i2, className: `Command-Item ${a2}`, ...t2 }));
ni.displayName = me.Item.displayName;
const si = ({ SelectedFilterCategory: t2, FilterCategories: i2, ArchiveFilter: r2, SearchFilter: n2, BasePath: s2 }) => {
  const [o2, c2] = l(false), m2 = ((e2) => {
    const a2 = e2.Options.find((a3) => {
      a3.ParamValue, e2.SelectedValue;
    });
    return a2 ? a2.ParamName : void 0;
  })(t2);
  return a(Zt, { open: o2, onOpenChange: c2, children: [e(oe, { asChild: true, children: a(Pa, { Style: "Primary", role: "combobox", onClick: () => c2(!o2), className: "Filter-Popover-Button", children: [a("div", { className: "Filter-Popover", children: [e("span", { children: t2.SectionName }), e("span", { className: "Filter-Popover-Current-Filter-Name", children: m2 })] }), e(A, { fontSize: 16, className: "Filter-Popover-Chevron-Icon" })] }) }), e(ai, { className: "Filter-Popover-Content", children: a(ti, { className: "Filter-Popover-Command", children: [e(ii, { placeholder: "Search Filter..." }), e(li, { children: "No Filter Found" }), e(ri, { className: "Filter-Popover-Command-Group", children: t2.Options.map((l2, o3) => e(y, { className: "Filter-Popover-Command", to: Ue([...i2.map((e2) => ({ ParamName: e2.URLParam, ParamValue: e2.SelectedValue })), { ParamName: n2.SearchParamName, ParamValue: n2.SearchTerm }, { ParamName: r2.ParamName, ParamValue: true.toString() }, { ParamName: t2.URLParam, ParamValue: l2.ParamValue }], s2), children: a(ni, { value: l2.ParamValue, className: "Filter-Popover-Command-Item", children: [t2.SelectedValue === l2.ParamValue ? e(F, { className: "Filter-Popover-Command-Check" }) : e("div", { className: "Filter-Popover-Command-Check-No-Slug" }), l2.ParamName] }, l2.ParamValue) }, o3)) })] }) })] }, t2.URLParam);
}, oi = ({ FilterCategories: t2, ArchiveFilter: i2, SearchFilter: l2, BasePath: n2, IsOpen: s2, Toggle: o2, AreFiltersApplied: c2 }) => {
  const m2 = ye();
  if (r(() => {
    const e2 = (e3) => {
      "Escape" === e3.key && o2();
    };
    return m2 || window.addEventListener("keydown", e2), () => {
      m2 && window.removeEventListener("keydown", e2);
    };
  }, [m2, o2]), !m2) return null;
  const d2 = t2.map((e2) => ({ ParamName: e2.URLParam, ParamValue: e2.SelectedValue }));
  return d2.push({ ParamName: i2.ParamName, ParamValue: i2.ShowArchived.toString() }), e("div", { className: "Filter-Panel " + (s2 ? "Filter-Panel-Open" : "Filter-Panel-Closed"), children: a("div", { className: "Filter-Panel-Container", children: [a("div", { className: "Filter-Panel-Title", children: [e(Ae, { Title: "Filters" }), a("button", { onClick: o2, children: [e("span", { className: "Filter-Panel-Filters-Close", children: "Close" }), e(ne, { "aria-hidden": "true", className: "Filter-Panel-Filters-Close-Icon" })] })] }), a("div", { className: "Filter-Panel-Text-Container", children: [e("p", { className: "Filter-Panel-Text", children: "When applying filters, archived items are displayed automatically." }), e("div", { className: "Filter-Panel-Filter-Options", children: t2.map((a2, r2) => e(si, { BasePath: n2, SelectedFilterCategory: a2, FilterCategories: t2, ArchiveFilter: i2, SearchFilter: l2 }, r2)) }), a("div", { className: "Filter-Panel-Buttons", children: [e(Pa, { Style: "Primary", disabled: !c2, className: "Filter-Panel-Clear-Button", children: e(y, { to: n2, className: "Filter-Panels", children: a("div", { className: "Filter-Panel-Clear-Container", children: [e(Q, { fontSize: 24, className: "Filter-Panel-Clear-Icon" }), e("span", { children: "Clear All" })] }) }) }), i2.HasArchivedMaterials && e("div", { className: "Filter-Panels", children: e("div", { className: "Filter-Panel-Archive-Toggle", children: e(Xt, { ShowArchived: i2.ShowArchived, FilterProps: d2, BasePath: n2 }) }) })] })] })] }) });
}, ci = ({ SearchTerm: t2, UpdateSearchTerm: i2, Placeholder: n2 = "Search", ClassName: s2, ...o2 }) => {
  const [c2, m2] = l(t2), d2 = ye();
  if (r(() => {
    m2(t2);
  }, [t2]), !d2) return null;
  const h2 = () => {
    i2(c2);
  }, u2 = !c2;
  return a("div", { className: "Search-Input", children: [e("input", { type: "text", value: c2, onChange: (e2) => m2(e2.target.value), onKeyDown: (e2) => {
    "Enter" === e2.key && h2();
  }, placeholder: n2, className: `Search-Input-Value ${s2}`, ...o2 }), e(E, { className: "Search-Input-Search" }), a("div", { className: "Search-Input-Container", children: [c2 && e(R, { onClick: () => {
    m2("");
  }, className: "Search-Input-Clear-Icon" }), e("button", { onClick: h2, disabled: u2, className: "Search-Input-Button " + (u2 ? "Search-Disabled" : "Search-Enabled"), children: e(j, {}) })] })] });
}, mi = ({ Name: i2, BasePath: r2, SearchFilter: n2, FilterCategories: s2, AreFiltersApplied: o2, ArchiveFilter: c2 }) => {
  const m2 = P(), d2 = s2.map((e2) => ({ ParamName: e2.URLParam, ParamValue: e2.SelectedValue }));
  d2.push({ ParamName: n2.SearchParamName, ParamValue: n2.SearchTerm }), d2.push({ ParamName: c2.ParamName, ParamValue: c2.ShowArchived.toString() });
  const h2 = c2.HasArchivedMaterials ? `Search, Filter, And View Archived ${i2}` : `Search & Filter ${i2}`, [u2, p2] = l(false), g2 = () => {
    p2(!u2);
  };
  return a(t, { children: [e(ft, { type: "single", collapsible: true, children: a(bt, { value: "Item-1", children: [e(At, { children: a("div", { className: "Filter-Section-Accordion-Trigger", children: [e(te, { size: 28, className: "Filter-Section-Manage-Search-Icon" }), e("p", { className: "Filter-Section-Accordion-Message", children: h2 })] }) }), e(Tt, { children: a("div", { className: "Filter-Section-Accordion-Content", children: [a("div", { className: "Filter-Section-Accordion-Content-Container", children: [e("div", { className: "Filter-Section-Search-Input", children: e(ci, { SearchTerm: n2.SearchTerm, UpdateSearchTerm: (e2) => {
    const a2 = d2.map((a3) => a3.ParamName === n2.SearchParamName ? { ...a3, ParamValue: e2 } : a3.ParamName === c2.ParamName ? { ...a3, ParamValue: true.toString() } : a3), t2 = Ue(a2, r2);
    m2(t2);
  }, Placeholder: `Search For ${i2} Name Or Metadata` }) }), a("div", { className: "Filter-Section-Buttons", children: [e(Pa, { Style: "Primary", onClick: g2, className: "Filter-Section-Button", children: a("div", { className: "Filter-Section-Button-Icon-Container", children: [e(D, { fontSize: 24, className: "Filter-Section-Button-Icon" }), e("span", { children: "Filters" })] }) }), e(y, { to: r2, className: "Filter-Section-Clear-Button", children: e(Pa, { Style: "Primary", disabled: !o2, className: "Filter-Section-Button", children: a("div", { className: "Filter-Section-Button-Icon-Container", children: [e(Q, { fontSize: 24, className: "Filter-Section-Button-Icon" }), e("span", { children: "Clear All" })] }) }) })] })] }), c2.HasArchivedMaterials && e(Xt, { ShowArchived: c2.ShowArchived, FilterProps: d2, BasePath: r2 })] }) })] }) }), e(oi, { IsOpen: u2, Toggle: g2, FilterCategories: s2, BasePath: r2, ArchiveFilter: { ParamName: c2.ParamName, ShowArchived: c2.ShowArchived, HasArchivedMaterials: c2.HasArchivedMaterials }, AreFiltersApplied: o2, SearchFilter: n2 })] });
}, di = (e2, a2, t2) => {
  const i2 = o(() => ({ Keys: t2.map((e3) => e3.includes("Skills") ? { Name: e3, GetFn: (e4) => e4.Skills.map((e5) => e5.toString()) } : e3), threshold: 0.3, includeScore: true }), [t2]), l2 = o(() => Object.values(e2), [e2]), r2 = o(() => new de(l2, i2), [l2, i2]), n2 = o(() => a2 ? r2.search(a2).map((e3) => e3.item) : l2, [r2, l2, a2]), s2 = o(() => Object.keys(e2).reduce((a3, t3) => (a3[e2[t3].Name] = t3, a3), {}), [e2]), c2 = o(() => n2.reduce((e3, a3) => {
    const t3 = s2[a3.Name];
    return t3 && (e3[t3] = a3), e3;
  }, {}), [n2, s2]);
  return Object.keys(c2);
}, hi = () => {
  const [i2] = v(), { pathname: l2 } = C(), r2 = l2, n2 = "Category", s2 = "Skill", o2 = "Technical", c2 = "General", m2 = "Soft", d2 = "Search", h2 = "Archived", u2 = i2.get(n2) || "All", p2 = i2.get(s2) || "All", g2 = i2.get(o2) || "All", S2 = i2.get(c2) || "All", N2 = i2.get(m2) || "All", y2 = i2.get(d2) || "", P2 = "true" === (i2.get(h2) || "false").toLowerCase();
  let k2 = di(ea, y2, ["Name", "Category", "Issuer", "Skills.Name", "Skills.Category", "Skills.RelatedSkills.Name", "Skills.RelatedSkills.Category"]);
  "All" !== u2 && (k2 = Ve(Je(u2), k2, ea)), "All" !== p2 && (k2 = je(k2, ea, Je(p2), Le)), "All" !== g2 && (k2 = Ee(g2, k2, ea)), "All" !== S2 && (k2 = Ee(S2, k2, ea)), "All" !== N2 && (k2 = Ee(N2, k2, ea)), k2 = Oe(P2, k2, ea);
  const f2 = _e(k2, ea), b2 = "All" !== u2 || "All" !== p2 || "All" !== g2 || "All" !== S2 || "All" !== N2 || "" !== y2 || P2, A2 = [{ SectionName: "Section", URLParam: n2, SelectedValue: u2, Options: Ge(ea) }, { SectionName: "Skill Category", URLParam: s2, SelectedValue: p2, Options: xe(ea, Le) }, { SectionName: "Technical Skill", URLParam: o2, SelectedValue: g2, Options: $e(ea, Le, ke.Technology) }, { SectionName: "General Skill", URLParam: c2, SelectedValue: S2, Options: $e(ea, Le, ke.Technical) }, { SectionName: "Soft Skill", URLParam: m2, SelectedValue: N2, Options: $e(ea, Le, ke.Soft) }];
  return a(t, { children: [e(mi, { Name: ja.Label, BasePath: r2, SearchFilter: { SearchTerm: y2, SearchParamName: d2 }, FilterCategories: A2, AreFiltersApplied: b2, ArchiveFilter: { ParamName: h2, ShowArchived: P2, HasArchivedMaterials: We(ea) } }), e(Wt, { GroupedMaterials: f2 })] });
}, ui = { Title: `${La} = ${ja.Label}`, Description: ja.Description, Category: `${ja.Label}`, Creator: La, Keywords: Object.values(ea).map((e2) => e2.Name) }, pi = () => {
  const i2 = Array.isArray(ui.Keywords) ? ui.Keywords.join(", ") : ui.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: ui.Title }), e("meta", { name: "Description", content: ui.Description }), e("meta", { name: "Category", content: ui.Category }), e("meta", { name: "Creator", content: ui.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Blogs-Page", children: [e("h1", { children: "Blogs & Articles:" }), e("ul", { children: Object.values(ea).map((e2) => a("li", { children: [e2.Name, ": ", e2.Subtitle] }, e2.Name)) })] }), e("section", { id: "Blogs", children: a("div", { className: "Blogs", children: [e(fe, { Title: ja.Label }), e(Yt, { Description: ja.Description }), e(hi, {})] }) })] })] });
}, gi = (e2) => {
  const a2 = (e3) => "undefined" != typeof window && window.matchMedia(e3).matches, [t2, i2] = l(a2(e2)), n2 = () => {
    i2(a2(e2));
  };
  return r(() => {
    const a3 = window.matchMedia(e2);
    return n2(), a3.addEventListener("change", n2), () => {
      a3.removeEventListener("change", n2);
    };
  }, [e2]), t2;
}, Si = ({ IsExpanded: t2, OnToggle: i2, ExtraClasses: l2 = "" }) => a("button", { className: `Expand-Collapse-Button ${l2 || ""}`, onClick: i2, children: [t2 ? "Show Less" : "Show More", e(t2 ? ie : le, { size: 25 })] }), Ni = ({ SkillCategories: t2 }) => {
  const [i2, r2] = l(false), n2 = t2.length > 1, s2 = gi("(max-width: 976px)"), o2 = s2 ? 2 : 3;
  let c2 = 0, m2 = 0;
  const d2 = t2.reduce((e2, a2) => e2 + a2.Skills.filter((e3) => {
    var _a2;
    return (_a2 = Le[e3]) == null ? void 0 : _a2.IsMainSkill;
  }).length, 0), h2 = i2 ? t2 : t2.reduce((e2, a2) => {
    if (c2 < 18 && m2 < o2) {
      const t3 = ((e3) => e3.filter((e4) => {
        var _a2;
        return (_a2 = Le[e4]) == null ? void 0 : _a2.IsMainSkill;
      }))(a2.Skills), i3 = t3.length ? t3 : a2.Skills, l2 = Math.min(18 - c2, i3.length), r3 = i3.slice(0, l2);
      r3.length > 0 && (e2.push({ SkillCategoryName: a2.SkillCategoryName, Skills: r3 }), c2 += l2, m2++);
    }
    return e2;
  }, []), u2 = h2.reduce((e2, a2) => e2 + a2.Skills.filter((e3) => {
    var _a2;
    return (_a2 = Le[e3]) == null ? void 0 : _a2.IsMainSkill;
  }).length, 0), p2 = i2 || u2 < d2;
  return a("div", { children: [e("div", { className: n2 ? "Multiple-Categories-Display" : "Single-Category-Display", children: h2.map((t3) => a("div", { className: "Skill-Category-Display", children: [n2 && e(Te, { Title: t3.SkillCategoryName }), e("div", { className: "Skill-Category-Display-Slug", children: t3.Skills.map((a2) => e(va, { SkillKey: a2 }, a2)) })] }, t3.SkillCategoryName)) }), p2 && e("div", { className: "Skill-Category-Display-Toggle", children: e(Si, { IsExpanded: i2, OnToggle: () => {
    r2(!i2);
  } }) })] });
}, Ci = ({ AllGroupedSkills: t2, MaxSkillsPerCategory: i2 = 5 }) => {
  const [r2, n2] = l(() => {
    const e2 = Array.isArray(t2) && t2.find((e3) => {
      e3.SkillCategories.length;
    });
    return e2 ? Je(e2.Title) : "";
  });
  if (!ye() || !r2) return null;
  const s2 = t2.filter(({ SkillCategories: e2 }) => e2.length > 0);
  return a(Gt, { defaultValue: r2, value: r2, onValueChange: n2, className: "Skills-Table-Tabs", children: [e(xt, { className: "Skills-Table-Tabs-List", children: s2.map(({ Title: a2 }) => e($t, { value: Je(a2), className: "Skills-Table-Tabs-Trigger", children: a2 }, Je(a2))) }), s2.map(({ Title: a2, SkillCategories: t3 }) => e(Kt, { value: Je(a2), children: e("div", { className: "Skills-Table-Tabs-Content", children: e(Ni, { SkillCategories: t3 }) }) }, Je(a2)))] });
}, yi = ({ Params: i2 }) => {
  const n2 = i2.BlogKey, s2 = ja.Path, o2 = ea[n2], [c2, m2] = l(void 0);
  r(() => {
    (async () => {
      const e2 = await Se(`/Content${s2}/${n2}/Blog.md`);
      m2(e2 || 'This is a placeholder for the "Blog" text.');
    })();
  }, []), console.log(c2 == null ? void 0 : c2.toString());
  const d2 = Me(o2.Skills, Le, ke.Technology), h2 = Me(o2.Skills, Le, ke.Technical), u2 = Me(o2.Skills, Le, ke.Soft), p2 = [Re(d2, Le, ke.Technology, "Technologies"), Re(h2, Le, ke.Technical, "Technical Skills"), Re(u2, Le, ke.Soft, "Soft Skills")];
  return e(t, { children: a("main", { children: [a("div", { className: "Blog-Page", children: [e("h1", { children: o2.Name }), e("h2", { children: o2.Subtitle }), e("h3", { children: "Skills For Blog:" }), o2.Skills.map((a2) => {
    var _a2;
    return e("p", { children: (_a2 = Le[a2]) == null ? void 0 : _a2.Name }, a2);
  })] }), a("div", { children: [a("div", { className: "Blog-Page-Content", children: [e(be, { Title: o2 == null ? void 0 : o2.Name }), e("h3", { className: "Blog-Page-Content-Subtitle", children: o2 == null ? void 0 : o2.Subtitle })] }), e(Ce, { Content: c2, Size: "Large-Prose" }), e("div", { className: "Blog-Page-Content-Text" }), e("div", { className: "Blog-Page-Skills", children: e(Ci, { AllGroupedSkills: p2 }) }), o2.RelatedMaterials && o2.RelatedMaterials.length > 0 && e(t, { children: e(_t, { MaterialKeys: o2.RelatedMaterials }) })] })] }) });
}, Pi = () => {
  const [i2] = v(), { pathname: l2 } = C(), r2 = l2, n2 = "Issuer", s2 = "Section", o2 = "Category", c2 = "Archived", m2 = "Search", d2 = "General", h2 = "Soft", u2 = "Technical", p2 = decodeURIComponent(i2.get(n2) || "All"), g2 = decodeURIComponent(i2.get(s2) || "All"), S2 = decodeURIComponent(i2.get(o2) || "All"), N2 = decodeURIComponent(i2.get(m2) || ""), y2 = decodeURIComponent(i2.get(d2) || "All"), P2 = decodeURIComponent(i2.get(h2) || "All"), k2 = decodeURIComponent(i2.get(u2) || "All"), f2 = "true" === decodeURIComponent(i2.get(c2) || "false");
  let b2 = di(Ft, N2, ["Name", "Category", "Issue", "Skills.Name", "Skills.Category", "Skills.RelatedSkills.Name", "Skills.RelatedSkills.Category"]);
  "All" !== p2 && (b2 = ((e2, a2, t2) => a2.reduce((a3, i3) => {
    const l3 = t2[i3];
    return l3 && Je(l3.Issuer) === Je(e2) && a3.push(i3), a3;
  }, []))(p2, b2, Ft)), "All" !== g2 && (b2 = Ve(Je(g2), b2, Ft)), "All" !== S2 && (b2 = je(b2, Ft, Je(S2), Le)), "All" !== y2 && (b2 = Ee(y2, b2, Ft)), "All" !== P2 && (b2 = Ee(P2, b2, Ft)), "All" !== k2 && (b2 = Ee(k2, b2, Ft)), b2 = Oe(f2, b2, Ft);
  const A2 = _e(b2, Ft), T2 = "All" !== p2 || "All" !== g2 || "All" !== S2 || "All" !== y2 || "All" !== P2 || "All" !== k2 || "" !== N2 || f2, L2 = [{ SectionName: "Issuer", URLParam: n2, SelectedValue: p2, Options: Ke(Ft) }, { SectionName: "Category", URLParam: s2, SelectedValue: g2, Options: Ge(Ft) }, { SectionName: "Skill Category", URLParam: o2, SelectedValue: S2, Options: xe(Ft, Le) }, { SectionName: "General Skill", URLParam: d2, SelectedValue: y2, Options: $e(Ft, Le, ke.Technical) }, { SectionName: "Soft Skill", URLParam: h2, SelectedValue: P2, Options: $e(Ft, Le, ke.Soft) }, { SectionName: "Technical Skill", URLParam: u2, SelectedValue: k2, Options: $e(Ft, Le, ke.Technology) }];
  return a(t, { children: [e(mi, { Name: Ga.Label, BasePath: r2, SearchFilter: { SearchTerm: N2, SearchParamName: m2 }, FilterCategories: L2, AreFiltersApplied: T2, ArchiveFilter: { ParamName: c2, ShowArchived: f2, HasArchivedMaterials: We(Ft) } }), e(Et, { GroupedMaterials: A2 })] });
}, vi = { Title: `${La} - ${Ga.Label}`, Description: Ga.Description, Category: `${Ga.Label}`, Creator: La, Keywords: Object.values(Ft).map((e2) => e2.Name) }, ki = () => {
  const i2 = Array.isArray(vi.Keywords) ? vi.Keywords.join(", ") : vi.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: vi.Title }), e("meta", { name: "Description", content: vi.Description }), e("meta", { name: "Category", content: vi.Category }), e("meta", { name: "Creator", content: vi.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Certificates-Page", children: [e("h1", { children: "Certificates & Online Courses:" }), e("ul", { children: Object.values(Ft).map((e2) => a("li", { children: [e2.Name, ": ", e2.Description] }, e2.Name)) })] }), e("section", { id: "Certificates", className: "Certificates-Page-Container", children: a("div", { className: "Certificates", children: [e(fe, { Title: Ga.Label }), e(Yt, { Description: Ga.Description }), e(Pi, {})] }) })] })] });
}, fi = ({ Items: t2 }) => e("div", { children: e("ul", { className: "String-List", children: t2.map((t3, i2) => a("li", { className: "String-List-Item", children: [e("div", { className: "String-List-Icon-Div", children: e(he, { size: 6, className: "String-List-Icon" }) }), e("div", { className: "String-List-Item-Text", children: t3 })] }, i2)) }) }), bi = ({ Params: i2 }) => {
  const l2 = i2.CertificateKey, r2 = Ft[l2];
  if (!r2) return e(rt, {});
  const n2 = Me(r2.Skills, Le, ke.Technology), s2 = Me(r2.Skills, Le, ke.Technical), o2 = Me(r2.Skills, Le, ke.Soft), c2 = [Re(n2, Le, ke.Technology, "Technologies"), Re(s2, Le, ke.Technical, "Technical Skills"), Re(o2, Le, ke.Soft, "Soft Skills")], m2 = `/Content${Ga.Path}/${l2}`;
  return a("main", { children: [a("div", { className: "Certificate-Page", children: [e("h1", { children: r2.Name }), e("h2", { children: r2.Description }), e("h3", { children: "Skills For Certificate:" }), r2.Skills.map((a2) => {
    var _a2;
    return e("p", { children: (_a2 = Le[a2]) == null ? void 0 : _a2.Name }, a2);
  })] }), a("div", { className: "Certificate", children: [e(be, { Title: r2.Name }), a("div", { className: "", children: [m2 && e("div", { className: "Certificate-Image-Container", children: e(_a, { ratio: 4 / 3, className: "Certificate-Image-Aspect-Ratio", children: e("img", { src: m2, alt: `${r2.Name} Certificate Image`, className: "Certificate-Image" }) }) }), a("div", { className: "Certificate-Data", children: [r2.Description && a("div", { className: "Certificate-Description", children: [e("div", { className: "Certificate-Description-Title", children: e(Ae, { Title: "Description" }) }), e("p", { className: "Certificate-Description-Text", children: r2.Description })] }), e("div", { children: r2.LearningOutcomes && a(t, { children: [e("div", { className: "Certificate-Learning-Outcomes", children: e(Ae, { Title: "Learning Objectives" }) }), e(fi, { Items: r2.LearningOutcomes })] }) }), e(Ci, { AllGroupedSkills: c2 }), a("div", { className: "Certificate-Issuer", children: [a("div", { children: [e("div", { className: "Certificate-Description-Title", children: e(Ae, { Title: "Certificate Issuer" }) }), e("div", { className: "Certificate-Issuer-Tag", children: e(ua, { children: r2.Issuer }) })] }), a("div", { children: [e("div", { className: "Certificate-Description-Title", children: e(Ae, { Title: "Links" }) }), e("div", { className: "Certificate-Links", children: r2.CertificateURL && e(y, { to: r2.CertificateURL, target: "_blank", className: "Certificate-Link", children: e(Pa, { Style: "Primary", children: a("div", { className: "Certificate-Link-Container", children: [e(I, { size: 26 }), e("p", { children: "Issuer Page" })] }) }) }) })] })] }), r2.RelatedMaterials && r2.RelatedMaterials.length > 0 && a(t, { children: [e("div", { className: "Certificate-Divider" }), e(_t, { MaterialKeys: r2.RelatedMaterials })] })] })] })] })] });
}, Ai = ({ CourseKey: t2 }) => {
  const i2 = xa.Path;
  let l2 = Ct[t2];
  return l2 = { ...l2, Certificate: `${i2}/${t2}.pdf` }, a("div", { className: "Course-Item", children: [l2.Certificate && e(y, { to: `Education/${t2}`, children: e("div", { className: "Course-Item-Image-Container", children: e(_a, { ratio: 1 / 1.4, className: "Course-Item-Aspect-Ratio", children: e("img", { src: l2.Certificate, alt: `${l2.Name} Certificate Image`, loading: "lazy", className: "Course-Item-Image" }, t2) }) }) }), a("div", { className: "Course-Item-Certificate-Info", children: [e(y, { to: `Education/${t2}`, children: e("h1", { className: "Course-Item-Certificate-Title", children: l2.Name }) }), e("p", { className: "Course-Item-Certificate-Grade", children: l2.Grade }), e("div", { className: "Course-Item-Certificate-University", children: e(ua, { children: l2.University }) })] })] });
}, Ti = { Title: `${La} = ${xa.Label}`, Description: xa.Description, Category: `${xa.Label}`, Creator: La, Keywords: Object.values(Ct).map((e2) => e2.Name) }, Li = () => {
  const i2 = Array.isArray(Ti.Keywords) ? Ti.Keywords.join(", ") : Ti.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: Ti.Title }), e("meta", { name: "Description", content: Ti.Description }), e("meta", { name: "Category", content: Ti.Category }), e("meta", { name: "Creator", content: Ti.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Education-Page", children: [e("h1", { children: "Educational Background & Credentials:" }), e("ul", { children: Object.values(Ct).map((e2) => a("li", { children: [e2.Name, " From ", e2.University, " With ", e2.Grade, "."] }, e2.Name)) })] }), e("section", { id: "Education", children: a("div", { className: "Education", children: [e(fe, { Title: xa.Label }), e(Yt, { Description: xa.Description }), e("div", { className: "Education-Courses", children: e(Ot, { Items: Nt.map((a2) => e(Ai, { CourseKey: a2 }, a2)) }) })] }) })] })] });
}, Ii = () => {
  const [i2] = v(), { pathname: l2 } = C(), r2 = l2, n2 = "Category", s2 = "Type", o2 = "Skill", c2 = "Technical", m2 = "General", d2 = "Soft", h2 = "Search", u2 = "Archived", p2 = i2.get(n2) || "All", g2 = i2.get(s2) || "All", S2 = i2.get(o2) || "All", N2 = i2.get(c2) || "All", y2 = i2.get(m2) || "All", P2 = i2.get(d2) || "All", k2 = i2.get(h2) || "", f2 = "true" === (i2.get(u2) || "false").toLowerCase();
  let b2 = di(vt, k2, ["Name", "Company", "Type", "Category", "Skills.Name", "Skills.Category", "Skills.RelatedSkills.Name", "Skills.RelatedSkills.Category"]);
  "All" !== p2 && (b2 = Ve(Je(p2), b2, vt)), "All" !== g2 && (b2 = function(e2, a2, t2) {
    const i3 = [];
    return a2.forEach((a3) => {
      const l3 = t2[a3];
      l3 && Je(l3.Type) === Je(e2) && i3.push(a3);
    }), i3;
  }(Je(g2), b2, vt)), "All" !== S2 && (b2 = je(b2, vt, Je(S2), Le)), "All" !== N2 && (b2 = Ee(N2, b2, vt)), "All" !== y2 && (b2 = Ee(y2, b2, vt)), "All" !== P2 && (b2 = Ee(P2, b2, vt)), b2 = Oe(f2, b2, vt);
  const A2 = _e(b2, vt), T2 = "All" !== p2 || "All" !== g2 || "All" !== S2 || "All" !== N2 || "All" !== y2 || "All" !== P2 || "" !== k2 || f2, L2 = [{ SectionName: "Section", URLParam: n2, SelectedValue: p2, Options: Ge(vt) }, { SectionName: "Employment Type", URLParam: s2, SelectedValue: g2, Options: (I2 = vt, [{ ParamValue: "All", ParamName: "All" }, ...Object.values(I2).map((e2) => ({ ParamValue: Je(e2.Type), ParamName: e2.Type })).reduce((e2, a2) => (e2.some((e3) => e3.ParamValue === a2.ParamValue) || e2.push(a2), e2), []).sort((e2, a2) => e2.ParamName.localeCompare(a2.ParamName))]) }, { SectionName: "Skill Category", URLParam: o2, SelectedValue: S2, Options: xe(vt, Le) }, { SectionName: "Technical Skill", URLParam: c2, SelectedValue: N2, Options: $e(vt, Le, ke.Technology) }, { SectionName: "General Skill", URLParam: m2, SelectedValue: y2, Options: $e(vt, Le, ke.Technical) }, { SectionName: "Soft Skill", URLParam: d2, SelectedValue: P2, Options: $e(vt, Le, ke.Soft) }];
  var I2;
  return a(t, { children: [e(mi, { Name: "Roles", BasePath: r2, SearchFilter: { SearchTerm: k2, SearchParamName: h2 }, ArchiveFilter: { ParamName: u2, ShowArchived: f2, HasArchivedMaterials: We(vt) }, FilterCategories: L2, AreFiltersApplied: T2 }), e(zt, { GroupedMaterials: A2 })] });
}, Di = { Title: `${La} - ${$a.Label}`, Description: $a.Description, Category: `${$a.Label}`, Creator: La, Keywords: Object.values(vt).map((e2) => e2.Name) }, Mi = () => {
  const i2 = Array.isArray(Di.Keywords) ? Di.Keywords.join(", ") : Di.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: Di.Title }), e("meta", { name: "Description", content: Di.Description }), e("meta", { name: "Category", content: Di.Category }), e("meta", { name: "Creator", content: Di.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Experience-Page", children: [e("h1", { children: "Work Experience & Volunteering:" }), e("ul", { children: Object.values(vt).map((e2) => a("li", { children: [e2.Name, " At ", dt[e2.Company].Name] }, e2.Name)) })] }), e("section", { id: "Experience", children: a("div", { className: "Experience", children: [e(fe, { Title: $a.Label }), e(Yt, { Description: $a.Description }), e(Ii, {})] }) })] })] });
}, Ri = ({ Item: i2 }) => e(t, { children: e(y, { to: i2.Path, children: a("div", { className: "Page-Navigation-Item", children: [e("h2", { className: "Page-Navigation-Item-Label", children: i2.Label }), e("p", { className: "Page-Navigation-Item-Description", children: i2.Description })] }) }) }), wi = { Title: `${La} - All Pages`, Description: Ka.Description }, Fi = ({ Params: i2, SearchParams: l2 }) => {
  const r2 = [Ea, Ka];
  return a(t, { children: [e(S, { children: e("div", { children: a(N, { children: [e("title", { children: wi.Title }), e("meta", { name: "Description", content: wi.Description })] }) }) }), e("main", { children: e("section", { id: "Pages", children: e("div", { className: "More-Page", children: e(Ot, { Items: Ua.filter((e2) => !r2.includes(e2)).map((a2) => e(Ri, { Item: a2 }, a2.Label)) }) }) }) })] });
}, Oi = () => {
  const [i2] = v(), { pathname: l2 } = C(), r2 = l2, n2 = "Archived", s2 = "General", o2 = "Language", c2 = "Search", m2 = "Category", d2 = "Soft", h2 = "Technology", u2 = i2.get(s2) || "All", p2 = i2.get(o2) || "All", g2 = i2.get(c2) || "All", S2 = i2.get(m2) || "All", N2 = i2.get(d2) || "All", y2 = i2.get(h2) || "All", P2 = i2.get(c2) || "", k2 = "true" === (i2.get(n2) || "false");
  let f2 = di(et, P2, ["Name", "Category", "Skills.Name", "Skills.Category", "Skills.RelatedSkills.Name", "Skills.RelatedSkills.Category"]);
  "All" !== Je(g2) && (f2 = Ve(Je(g2), f2, et)), "All" !== p2 && (f2 = Ee(p2, f2, et)), "All" !== p2 && (f2 = Ee(y2, f2, et)), "All" !== Je(S2) && (f2 = je(f2, et, Je(S2), Le)), "All" !== u2 && (f2 = Ee(u2, f2, et)), "All" !== N2 && (f2 = Ee(N2, f2, et)), f2 = Oe(k2, f2, et);
  const b2 = _e(f2, et), A2 = "All" !== u2 || "All" !== p2 || "" !== P2 || "All" !== g2 || "All" !== S2 || "All" !== N2 || "All" !== y2 || k2, T2 = [{ SectionName: "Category", URLParam: m2, SelectedValue: S2, Options: xe(et, Le) }, { SectionName: "General Skill", URLParam: s2, SelectedValue: u2, Options: $e(et, Le, ke.Technical) }, { SectionName: "Programming Language", URLParam: o2, SelectedValue: p2, Options: (L2 = et, I2 = Le, [{ ParamValue: "All", ParamName: "All" }, ...Object.values(L2).flatMap((e2) => e2.Skills.flatMap((e3) => {
    const a2 = I2[e3];
    return a2 && a2.Category === Pe.ProgrammingLanguages ? [{ ParamValue: e3, ParamName: a2.Name }] : [];
  })).reduce((e2, a2) => (e2.some((e3) => e3.ParamValue === a2.ParamValue) || e2.push(a2), e2), []).sort((e2, a2) => e2.ParamName.localeCompare(a2.ParamName))]) }, { SectionName: "Section", URLParam: "Type", SelectedValue: g2, Options: Ge(et) }, { SectionName: "Soft Skill", URLParam: d2, SelectedValue: N2, Options: $e(et, Le, ke.Soft) }, { SectionName: "Technology", URLParam: h2, SelectedValue: y2, Options: $e(et, Le, ke.Technology) }];
  var L2, I2;
  return a(t, { children: [e(mi, { Name: Ba.Label, BasePath: r2, SearchFilter: { SearchTerm: P2, SearchParamName: c2 }, FilterCategories: T2, ArchiveFilter: { ParamName: n2, ShowArchived: k2, HasArchivedMaterials: We(et) }, AreFiltersApplied: A2 }), e(jt, { GroupedMaterials: b2 })] });
}, Vi = { Title: `${La} - ${Ba.Label}`, Description: Ba.Description, Category: `${Ba.Label}`, Creator: La, Keywords: Object.values(et).map((e2) => e2.Name) }, Ei = () => {
  const i2 = Array.isArray(Vi.Keywords) ? Vi.Keywords.join(", ") : Vi.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: Vi.Title }), e("meta", { name: "Description", content: Vi.Description }), e("meta", { name: "Category", content: Vi.Category }), e("meta", { name: "Creator", content: Vi.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Projects-Page", children: [e("h1", { children: "Projects:" }), e("ul", { children: Object.values(et).map((e2) => a("li", { children: [e2.Name, ": ", e2.Description] }, e2.Name)) })] }), e("section", { id: "Projects", className: "Projects-Page-Content", children: a("div", { className: "Projects-Page-Content-Container", children: [e(fe, { Title: Ba.Label }), e(Yt, { Description: Ba.Description }), e(Oi, {})] }) })] })] });
}, ji = c(null), Gi = () => {
  const e2 = d(ji);
  if (!e2) throw new Error("UseCarousel() Must Be Used Within A <Carousel />");
  return e2;
}, xi = n(({ Orientation: a2 = "Horizontal", Options: t2, SetAPI: i2, Plugins: n2, className: s2, children: o2, ...c2 }, d2) => {
  const [h2, u2] = ge({ ...t2, axis: "Horizontal" === a2 ? "x" : "y" }, n2), [p2, g2] = l(false), [S2, N2] = l(false), C2 = m((e2) => {
    e2 && (g2(e2.canScrollPrev()), N2(e2.canScrollNext()));
  }, []), y2 = m(() => {
    u2 == null ? void 0 : u2.scrollPrev();
  }, [u2]), P2 = m(() => {
    u2 == null ? void 0 : u2.scrollNext();
  }, [u2]), v2 = m((e2) => {
    "ArrowLeft" === e2.key ? (e2.preventDefault(), y2()) : "ArrowRight" === e2.key && (e2.preventDefault(), P2());
  }, [y2, P2]);
  return r(() => {
    u2 && i2 && i2(u2);
  }, [u2, i2]), r(() => {
    if (u2) return C2(u2), u2 == null ? void 0 : u2.on("reInit", C2), u2 == null ? void 0 : u2.on("select", C2), () => {
      u2 == null ? void 0 : u2.off("select", C2);
    };
  }, [u2, C2]), e(ji.Provider, { value: { carouselRef: h2, api: u2, Options: t2, Orientation: a2 || ("y" === (t2 == null ? void 0 : t2.axis) ? "Vertical" : "Horizontal"), scrollPrevious: y2, scrollNext: P2, canScrollPrev: p2, canScrollNext: S2 }, children: e("div", { ref: d2, onKeyDownCapture: v2, className: `Carousel ${s2 || ""}`, role: "region", "aria-roledescription": "carousel", ...c2, children: o2 }) });
});
xi.displayName = "Carousel";
const $i = n(({ className: a2, ...t2 }, i2) => {
  const { carouselRef: l2, Orientation: r2 } = Gi();
  return e("div", { ref: i2, className: "Carousel-Content", children: e("div", { ref: i2, className: `Carousel-Content-Container ${"Horizontal" === r2 ? "Carousel-Content-Horizontal" : "Carousel-Content-Vertical"} ${a2 || ""}`, ...t2 }) });
});
$i.displayName = "CarouselContent";
const Ki = n(({ className: a2, ...t2 }, i2) => {
  const { Orientation: l2 } = Gi();
  return e("div", { ref: i2, role: "group", "aria-roledescription": "slide", className: `Carousel-Item ${"Horizontal" === l2 ? "Carousel-Item-Horizontal" : "Carousel-Item-Vertical"} ${a2 || ""}`, ...t2 });
});
Ki.displayName = "CarouselItem";
const Bi = n(({ className: t2, Style: i2 = "Icon", Size: l2 = "Icon-Size", ...r2 }, n2) => {
  const { Orientation: s2, scrollPrevious: o2, canScrollPrev: c2 } = Gi();
  return a(Pa, { ref: n2, Style: i2, Size: l2, ExtraClasses: `Carousel-Previous ${"Horizontal" === s2 ? "Carousel-Previous-Horizontal" : "Carousel-Previous-Vertical"} ${t2 || ""}`, disabled: !c2, onClick: o2, ...r2, children: [e(G, { className: "Carousel-Arrow" }), e("span", { className: "Carousel-Span", children: "Previous Slide" })] });
});
Bi.displayName = "CarouselPrevious";
const Wi = n(({ className: t2, Style: i2 = "Icon", Size: l2 = "Icon-Size", ...r2 }, n2) => {
  const { Orientation: s2, scrollNext: o2, canScrollNext: c2 } = Gi();
  return a(Pa, { ref: n2, Style: i2, Size: l2, ExtraClasses: `Carousel-Next ${"Horizontal" === s2 ? "Carousel-Next-Horizontal" : "Carousel-Next-Vertical"} ${t2 || ""}`, disabled: !c2, onClick: o2, ...r2, children: [e(x, { className: "Carousel-Arrow" }), e("span", { className: "Carousel-Span", children: "Next Slide" })] });
});
Wi.displayName = "CarouselNext";
const Ui = ({ Source: t2, Type: i2 = "video/mp4", ExtraClasses: l2 }) => a("video", { controls: true, className: `Video-Player ${l2 || ""}`, children: [e("source", { src: t2, type: i2 }), "Your browser does not support the video tag."] }), Hi = ({ Images: i2, Videos: n2 }) => {
  const [s2, o2] = l(), [c2, m2] = l(0), [d2, h2] = l(0), u2 = gi("(max-width: 768px)"), p2 = ye();
  return r(() => {
    s2 && (h2(s2.scrollSnapList().length), m2(s2.selectedScrollSnap() + 1), s2.on("select", () => {
      m2(s2.selectedScrollSnap() + 1);
    }));
  }, [s2]), p2 && (i2 || n2) ? e("div", { className: "Gallery", children: e("div", { className: "Gallery-Container", children: a(Gt, { defaultValue: "Images", className: "Gallery-Container", children: [a(Kt, { value: "Images", className: "Gallery-Container", children: [a(xi, { SetAPI: o2, className: "Gallery-Carousel-Image", children: [e($i, { children: Array.from({ length: (i2 == null ? void 0 : i2.length) ?? 0 }).map((a2, t2) => e(Ki, { children: e("img", { src: (i2 == null ? void 0 : i2[t2]) ?? "", alt: "Currently Active", width: 2e3, height: 1125, className: "Gallery-Image" }, t2) }, t2)) }), !u2 && a(t, { children: [e(Bi, {}), e(Wi, {})] })] }), a("div", { className: "Gallery-Slides", children: ["Slide ", c2, " Of ", d2] })] }), a(Kt, { value: "Demo", children: [a(xi, { SetAPI: o2, className: "Gallery-Carousel-Video", children: [e($i, { children: Array.from({ length: (n2 == null ? void 0 : n2.length) ?? 0 }).map((a2, t2) => e(Ki, { children: e(Ui, { Source: (n2 == null ? void 0 : n2[t2]) ?? "", ExtraClasses: "Gallery-Video-Player" }) }, t2)) }), !u2 && a(t, { children: [e(Bi, {}), e(Wi, {})] })] }), a("div", { className: "Gallery-Slides", children: ["Slide ", c2, " Of ", d2] })] }), i2 && i2.length > 0 && n2 && n2.length > 0 && e("div", { className: "Gallery-Tabs", children: a(xt, { className: "Gallery-Tabs-List", children: [i2 && i2.length > 0 && a($t, { value: "Images", className: "Gallery-Tabs-Images", children: [e(ue, { fontSize: 20 }), e("span", { children: "Images" })] }), n2 && n2.length > 0 && a($t, { value: "Demo", className: "Gallery-Tabs-Videos", children: [e(pe, { fontSize: 20 }), e("span", { children: "Videos" })] })] }) })] }) }) }) : null;
}, zi = ({ Params: i2 }) => {
  const n2 = Ba.Path, s2 = i2.ProjectKey, o2 = et[s2], c2 = void 0 !== o2.ThumbnailImage, m2 = `/Content${n2}/${s2}/Cover.png`, d2 = ((e2, a2, t2) => {
    const i3 = [];
    return e2.forEach((e3) => {
      const l2 = a2[e3];
      (l2 == null ? void 0 : l2.Category) === t2 && i3.push(e3);
    }), i3;
  })(o2.Skills, Le, Pe.ProgrammingLanguages), h2 = ((e2, a2, t2) => {
    const i3 = [];
    return e2.forEach((e3) => {
      const l2 = a2[e3];
      (l2 == null ? void 0 : l2.Category) !== t2 && i3.push(e3);
    }), i3;
  })(o2.Skills, Le, Pe.ProgrammingLanguages), u2 = Me(h2, Le, ke.Technology), p2 = Me(h2, Le, ke.Technical), g2 = Me(h2, Le, ke.Soft), S2 = [Re(u2, Le, ke.Technology, "Technologies"), Re(p2, Le, ke.Technical, "Technical Skills"), Re(g2, Le, ke.Soft, "Soft Skills")], [N2, C2] = l([]), [P2, v2] = l([]), [k2, f2] = l(null), b2 = (e2) => Ne(() => (async (e3) => {
    try {
      const a2 = await fetch(e3);
      return (await a2.json()).filter((e4) => e4.endsWith(".jpg") || e4.endsWith(".png"));
    } catch (a2) {
      return console.warn(`Error Reading Directory ${e3}:`, a2), [];
    }
  })(e2)), A2 = (e2) => Ne(() => (async (e3) => {
    try {
      const a2 = await fetch(e3);
      return (await a2.json()).filter((e4) => e4.endsWith(".mp4") || e4.endsWith(".webm"));
    } catch (a2) {
      return console.warn(`Error Reading Directory ${e3}:`, a2), [];
    }
  })(e2));
  return r(() => {
    (async () => {
      const e2 = b2(`/Content${n2}/${s2}/Media`), a2 = A2(`/Content${n2}/${s2}/Media`), t2 = (i3 = `/Content${n2}/${s2}/Features.md`, Ne(() => Se(i3)));
      var i3;
      t2 && console.log(t2), null !== e2 && C2(e2), null !== a2 && v2(a2), null !== t2 && f2(t2);
    })();
  }, [n2, s2]), a("main", { children: [a("div", { className: "Project-Key", children: [e("h1", { children: o2.Name }), e("h2", { children: o2.Description }), e("h3", { children: "Programming Languages:" }), e("ul", { children: d2.map((a2) => e("li", { children: Le[a2].Name }, a2)) }), e("h3", { children: "Technologies, Frameworks & Libraries" }), e("ul", { children: u2.map((a2) => e("li", { children: Le[a2].Name }, a2)) })] }), a("div", { className: "Project-Key-Data", children: [e(be, { Title: o2 == null ? void 0 : o2.Name }), N2 && N2.length > 1 || (P2 && P2.length > 1 ? e(Hi, { Images: N2, Videos: P2 }) : c2 && e("div", { className: "Project-Key-With-Cover-Image", children: e(_a, { ratio: 1.6, className: "Project-Key-With-Cover-Aspect-Ratio", children: e("img", { src: m2, alt: "Project Image", className: "Project-Key-Cover-Image" }) }) })), a("div", { className: "Project-Key-Metadata", children: [a("div", { className: "Project-Key-Text", children: [e(Ae, { Title: "Description" }), e("div", { className: "Project-Key-Description-Container", children: e("p", { className: "Project-Key-Description-Text", children: o2.Description }) })] }), d2 && Object.keys(d2).length > 0 && a("div", { className: "Project-Key-Languages", children: [e(Ae, { Title: Object.keys(d2).length > 1 ? "Languages" : "Language" }), e("div", { className: "Project-Key-Languages-Container", children: d2.map((a2, t2) => e(va, { SkillKey: a2 }, t2)) })] }), e("div", { children: e(Ci, { AllGroupedSkills: S2 }) }), a("div", { className: "Project-Key-Text", children: [e(Ae, { Title: "Links" }), a("div", { className: "Project-Key-Links-Container", children: [(o2 == null ? void 0 : o2.RepositoryURL) && e(y, { to: o2 == null ? void 0 : o2.RepositoryURL, target: "_blank", className: "Project-Key-Link", children: e(Pa, { children: a("div", { className: "Project-Key-Link-Button", children: [e(L, { size: 26 }), e("p", { className: "Project-Key-Link-Text", children: "Repository" })] }) }) }), (o2 == null ? void 0 : o2.DeploymentURL) && e(y, { to: o2 == null ? void 0 : o2.DeploymentURL, target: "_blank", className: "Project-Key-Link", children: e(Pa, { children: a("div", { className: "Project-Key-Link-Button", children: [e(I, { size: 26 }), e("p", { className: "Project-Key-Link-Text", children: "Deployment" })] }) }) })] })] }), k2 || o2.RelatedMaterials && o2.RelatedMaterials.length > 0 ? e("div", { className: "Project-Key-Divider" }) : e(t, {}), !!k2 && e(t, { children: e(ft, { type: "single", collapsible: true, children: a(bt, { value: "Item-1", children: [e(At, { children: a("div", { className: "Project-Key-Features", children: [e(M, { size: 26, className: "Project-Key-Features-Icon" }), e("p", { className: "Project-Key-Features-Text", children: "Features" })] }) }), e(Tt, { className: "Project-Key-Features-Content", children: e(Ce, { Content: k2 }) })] }) }) }), o2.RelatedMaterials && o2.RelatedMaterials.length > 0 && e(t, { children: e(_t, { MaterialKeys: o2.RelatedMaterials }) })] })] })] });
}, Ji = ({ Skills: t2 }) => {
  var _a2;
  const [i2, r2] = l(false), [n2] = v(), s2 = Wa.Path, o2 = P(), c2 = "Group", m2 = "Hard", d2 = "General", h2 = "Soft", u2 = "No-Material", p2 = n2.get(c2) || "Category", g2 = "true" === n2.get(m2), S2 = "true" === n2.get(d2), N2 = "true" === n2.get(h2), C2 = "true" === n2.get(u2), k2 = [{ ParamName: "Category", ParamValue: "Category" }, { ParamName: "Skill Type", ParamValue: "Skill-Type" }, { ParamName: "Language", ParamValue: "Language" }, { ParamName: "None", ParamValue: "None" }], f2 = [];
  g2 && f2.push(ke.Technology), S2 && f2.push(ke.Technical), N2 && f2.push(ke.Soft);
  const b2 = we(p2, t2, Le, f2), T2 = [{ EntryName: "Hard Skills", URLParamName: m2, Value: g2 ? "false" : "true", Selected: g2 }, { EntryName: "General Skills", URLParamName: d2, Value: S2 ? "false" : "true", Selected: S2 }, { EntryName: "Soft Skills", URLParamName: h2, Value: N2 ? "false" : "true", Selected: N2 }, { EntryName: "With No Material", URLParamName: u2, Value: C2 ? "false" : "true", Selected: C2 }], L2 = ((_a2 = k2.find((e2) => e2.ParamValue === p2)) == null ? void 0 : _a2.ParamName) || "Category";
  return a("div", { children: [e("div", { className: "Skills-List", children: a("div", { className: "Skills-List-Container", children: [a("div", { className: "Skills-List-Group-By", children: [e("p", { className: "Skills-List-Group-By-Text", children: "Group By:" }), a(Sa, { children: [e(Na, { className: "Skills-List-Dropdown-Menu", children: e(Pa, { Style: "Primary", className: "Skills-List-Dropdown-Menu", children: a("div", { className: "Skills-List-Dropdown-Menu-Container", children: [e("span", { children: L2 }), e(A, { fontSize: 16, className: "Skills-List-Dropdown-Menu-Icon" })] }) }) }), e(Ca, { className: "Skills-List-Dropdown-Menu-Content", children: k2.map((a2, t3) => e(ya, { className: a2.ParamValue === p2 ? "Selected-Dropdown-Menu-Item" : "", onSelect: () => {
    return e2 = a2.ParamValue, void o2(Ue([{ ParamName: c2, ParamValue: e2 }, { ParamName: m2, ParamValue: g2 ? "true" : "false" }, { ParamName: d2, ParamValue: S2 ? "true" : "false" }, { ParamName: h2, ParamValue: N2 ? "true" : "false" }, { ParamName: u2, ParamValue: C2 ? "true" : "false" }], s2));
    var e2;
  }, children: a2.ParamName }, t3)) })] })] }), a(Zt, { open: i2, onOpenChange: r2, children: [e(ei, { asChild: true, children: a(Pa, { Style: "Primary", role: "combobox", onClick: () => r2(!i2), className: "Skills-List-Popover-Trigger", children: [e("span", { children: "Include Skills" }), e(A, { fontSize: 16, className: "Skills-List-Popover-Trigger-Icon" })] }) }), e(ce, { className: "Skills-List-Popover-Content", children: a(ti, { className: "Skills-List-Command", children: [e(ii, { placeholder: "Search Filter..." }), e(li, { children: "No Filter Found" }), e(ri, { className: "Skills-List-Dropdown-Menu", children: T2.map((t3, i3) => e(y, { to: Ue([{ ParamName: c2, ParamValue: p2 }, { ParamName: m2, ParamValue: g2 ? "true" : "false" }, { ParamName: d2, ParamValue: S2 ? "true" : "false" }, { ParamName: h2, ParamValue: N2 ? "true" : "false" }, { ParamName: u2, ParamValue: C2 ? "true" : "false" }], s2), className: "Skills-List-Dropdown-Menu", children: a(ni, { value: t3.URLParamName, className: "Skills-List-Dropdown-Menu", children: [t3.Selected ? e("div", { className: "Skills-List-Command-Item" }) : e(F, { className: "Skills-List-Command-Item-Check" }), t3.EntryName] }, t3.URLParamName) }, i3)) })] }) })] })] }) }), e("div", { className: "Skills-List-Mapped-Skills", children: b2.length > 0 ? b2.map((t3) => a("div", { children: [e(Ae, { Title: t3.SkillCategoryName[0].toUpperCase() + t3.SkillCategoryName.slice(1) }), e("div", { className: "Skills-List-Skill-Tags", children: Object.entries(t3.Skills).map(([a2, t4], i3) => e(va, { SkillKey: t4, Hide: !ze(t4, ia) && C2 }, a2)) })] }, t3.SkillCategoryName)) : e("div", { className: "Skills-List-No-Matching-Skills", children: e("h2", { className: "Skills-List-No-Matching-Skills-Title", children: "No Matching Skills" }) }) })] });
}, _i = { Title: `${La} - Skills`, Description: Wa.Description, Category: `${Wa.Label}`, Creator: La, Keywords: Object.values(Le).map((e2) => e2.Name) }, Qi = () => {
  const i2 = Array.isArray(_i.Keywords) ? _i.Keywords.join(", ") : _i.Keywords;
  return a(t, { children: [e(S, { children: a(N, { children: [e("title", { children: _i.Title }), e("meta", { name: "Description", content: _i.Description }), e("meta", { name: "Category", content: _i.Category }), e("meta", { name: "Creator", content: _i.Creator }), e("meta", { name: "Keywords", content: i2 })] }) }), a("main", { children: [a("div", { className: "Skills-Page", children: [e("h1", { children: "Skills:" }), e("ul", { children: Object.values(Le).map((a2) => e("li", { children: a2.Name }, a2.Name)) })] }), e("section", { id: "Skills", children: a("div", { className: "Skills", children: [e(fe, { Title: "Skills" }), e(Yt, { Description: Wa.Description }), e(Ji, { Skills: Ie })] }) })] })] });
}, Yi = ({ SkillKey: i2 }) => {
  const l2 = Le[i2].RelatedSkills || [];
  if (!l2 || 0 === l2.length) return null;
  const r2 = [{ Type: ke.Technology, Title: "Technologies" }, { Type: ke.Technical, Title: "Technical Skills" }, { Type: ke.Soft, Title: "Soft Skills" }].map(({ Type: e2, Title: a2 }) => {
    const t2 = Me(l2, Le, e2);
    return Re(t2, Le, e2, a2);
  });
  return e(t, { children: e("div", { className: "Related-Skills-Section", children: a("div", { className: "Related-Skills-Section-Container", children: [e(be, { Title: "Related Skills" }), e(Ci, { AllGroupedSkills: r2 })] }) }) });
}, qi = ({ Params: t2 }) => {
  var _a2;
  const i2 = t2.SkillKey, l2 = Le[i2];
  if (!l2) return e(rt, {});
  const r2 = Ee(i2, ta, ia);
  return a("main", { children: [a("div", { className: "Skill-Page", children: [e("h1", { children: l2.Name }), e("h2", { children: "Skills For Certificate:" }), (_a2 = l2 == null ? void 0 : l2.RelatedSkills) == null ? void 0 : _a2.map((a2) => e("p", { children: Le[a2].Name }, a2))] }), a("div", { children: [e(fe, { Title: l2.Name }), e(Yt, { Description: `
						This page displays all of the materials related to ${l2.Name}.
						This may include blogs, certificates, projects, university modules, and work experience,
						along with sub-skills.
					` }), e("div", { className: "Skill-Page-Materials" }), e(be, { Title: "Material" }), e(_t, { MaterialKeys: r2, IsCollapsible: false }), e(Yi, { SkillKey: i2 })] })] });
}, Xi = ({ Params: i2 }) => {
  const n2 = $a.Path, s2 = i2.RoleKey, o2 = vt[s2], c2 = dt[o2.Company], m2 = Me(o2.Skills, Le, ke.Technology), d2 = Me(o2.Skills, Le, ke.Technical), h2 = Me(o2.Skills, Le, ke.Soft), u2 = [Re(m2, Le, ke.Technology, "Technologies"), Re(d2, Le, ke.Technical, "Technical Skills"), Re(h2, Le, ke.Soft, "Soft Skills")], [p2, g2] = l(null);
  return r(() => {
    (async () => {
      const e2 = (a2 = `/Content${n2}/${s2}/Responsibilities.md`, Ne(() => Se(a2)));
      var a2;
      e2 && console.log(e2), null !== e2 && g2(e2);
    })();
  }, [n2, s2]), a("main", { children: [a("div", { className: "Role-Key", children: [e("h1", { children: `${o2.Name} At ${o2 == null ? void 0 : o2.Company}` }), e("h2", { children: "Responsibilities:" }), !!p2 && e(Ce, { Content: p2, Size: "Large-Prose" }), e("h3", { children: "Skills For Work Experience:" }), o2.Skills.map((a2) => {
    var _a2;
    return e("p", { children: (_a2 = Le[a2]) == null ? void 0 : _a2.Name }, a2);
  })] }), a("div", { children: [e(be, { Title: o2 == null ? void 0 : o2.Name }), c2.Logo && c2.Website && e("div", { className: "Role-Key-Skills", children: e("div", { className: "Role-Key-Skills-Container", children: e(y, { to: c2.Website, target: "_blank", children: e(_a, { ratio: 1, className: "Role-Key-Aspect-Ratio", children: e("img", { src: c2.Logo, alt: `Logo For ${c2.Name}`, className: "Role-Key-Company-Logo", loading: "eager" }) }) }) }) }), a("div", { className: "Role-Key-Details", children: [a("div", { className: "Role-Key-Details-Container", children: [e("div", { className: "Role-Key-Details-Text", children: e(Ae, { Title: "Details" }) }), e(kt, { Details: [{ Heading: "Company", Value: c2.Name }, { Heading: "Location", Value: c2.Location }, { Heading: "Type", Value: o2.Type }, { Heading: "Category", Value: o2.Category }, { Heading: "Start Date", Value: o2.StartDate }, { Heading: "End Date", Value: o2.EndDate }] })] }), e("div", { children: !!p2 && a(t, { children: [e("div", { className: "Role-Key-Details-Text", children: e(Ae, { Title: "Responsibilities" }) }), e(Ce, { Content: p2, Size: "Large-Prose" })] }) }), e("div", { children: e(Ci, { AllGroupedSkills: u2 }) }), a("div", { children: [c2.Website && e(y, { to: c2.Website, target: "_blank", className: "Role-Key-Company-Website", children: e(Pa, { children: a("div", { className: "Role-Key-Company-Website-Icon", children: [e(I, { size: 26 }), e("p", { children: `${c2.Name} Website` })] }) }) }), o2.RelatedMaterials && o2.RelatedMaterials.length > 0 && a(t, { children: [e("div", { className: "Role-Key-Materials-Divider" }), e(_t, { MaterialKeys: o2.RelatedMaterials })] })] })] })] })] });
}, Zi = () => {
  const i2 = Ze.map((a2) => e(p, { path: `/Blog/${a2}`, element: e(yi, { Params: { BlogKey: a2 }, SearchParams: {} }) }, a2)), l2 = wt.map((a2) => e(p, { path: `/Certificates/${a2}`, element: e(bi, { Params: { CertificateKey: a2 }, SearchParams: {} }) }, a2)), r2 = Pt.map((a2) => e(p, { path: `/Experience/${a2}`, element: e(Xi, { Params: { RoleKey: a2 }, SearchParams: {} }) }, a2)), n2 = Za.map((a2) => e(p, { path: `/Projects/${a2}`, element: e(zi, { Params: { ProjectKey: a2 }, SearchParams: {} }) }, a2)), s2 = Ie.map((a2) => e(p, { path: `/Skills/${a2}`, element: e(qi, { Params: { SkillKey: a2 }, SearchParams: {} }) }, a2));
  return e(t, { children: a(g, { children: [e(p, { path: "/", element: e(it, {}) }), e(p, { path: "*", element: e(rt, {}) }), e(p, { path: "/About", element: e(Qt, {}) }), e(p, { path: "/Blog", element: e(pi, {}) }), i2, e(p, { path: "/Certificates", element: e(ki, {}) }), l2, e(p, { path: "/Education", element: e(Li, {}) }), e(p, { path: "/Experience", element: e(Mi, {}) }), r2, e(p, { path: "/More", element: e(Fi, {}) }), e(p, { path: "/Projects", element: e(Ei, {}) }), n2, e(p, { path: "/Skills", element: e(Qi, {}) }), s2] }) });
}, el = (a2) => h.renderToString(e(i.StrictMode, { children: e(u, { location: a2, children: e(Zi, {}) }) }));
export {
  el as render
};
