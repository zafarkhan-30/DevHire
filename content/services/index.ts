// Development services, in menu order. Add a file, then add it here.
import type { ServiceData } from "@/content/types";
import aiAutomation from "./ai-automation";
import cloudDevops from "./cloud-devops";
import maintenanceSupport from "./maintenance-support";
import mobileAppDevelopment from "./mobile-app-development";
import mvpDevelopment from "./mvp-development";
import qaTesting from "./qa-testing";
import uiUxDesign from "./ui-ux-design";
import webApplicationDevelopment from "./web-application-development";

export const services: ServiceData[] = [
  webApplicationDevelopment,
  mobileAppDevelopment,
  mvpDevelopment,
  aiAutomation,
  uiUxDesign,
  cloudDevops,
  qaTesting,
  maintenanceSupport,
];

export const servicePath = (service: ServiceData) => `/service/${service.slug}/`;
