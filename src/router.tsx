import ContactPage from "./modules/contact/pages/ContactPage";
import OraclePage from "./modules/product/pages/OraclePage";
import VietGuardPage from "./modules/product/pages/VietGuardPage";
import DashboardPage from "./modules/product/pages/DashboardPage";
import ProductPage from "./modules/product/pages/ProductPage";
import SmartFactorySolutionPage from "./modules/advise/pages/SmartFactorySolutionPage";
import SmartBuildingSolutionPage from "./modules/advise/pages/SmartBuildingSolutionPage";
import EsgSolutionPage from "./modules/advise/pages/EsgSolutionPage";
import AiSocPage from "./modules/advise/pages/AiSocPage";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/homepage/HomePage";
import OracleCloudSalePage from "./modules/cloud/OracleCloudSalePage";
import OracleCloudRegisterPage from "./modules/cloud/OracleCloudRegisterPage";
import OracleCloudPaymentPage from "./modules/cloud/OracleCloudPaymentPage";
import Demo from "./modules/news/Demo";
import ArticlesDetailPage from "./modules/news/pages/ArticlesDetailPage";
import ArticlesListPage from "./modules/news/pages/ArticlesListPage";
import WriteArticlesPage from "./modules/news/pages/WriteArticlesPage";
import AboutUsPage from "./modules/about-us/pages/AboutUsPage";
import AUGeneralIntroPage from "./modules/about-us/pages/AUGeneralIntroPage";
import AUCustomerPage from "./modules/about-us/pages/AUCustomerPage";
import AUSocialActivity from "./modules/about-us/pages/AUSocialActivity";
import PartnerPage from "./modules/partner/PartnerPage";
import AdvisePage from "./modules/advise/pages/AdvisePage";
import ArticlesSearchResultPage from "./modules/news/pages/ArticlesSearchResultPage";
import WriteArticlesPage2 from "./modules/news/pages/WriteArticlesPage2";
import ArticlesManagementPage from "./modules/news/pages/ArticlesManagementPage";

const router = createBrowserRouter([
  {
    path: "/quan-ly-bai-viet",
    element: <MainLayout><ArticlesManagementPage /></MainLayout>,
  },
  {
    path: "/wp-admin",
    element: <MainLayout><ArticlesManagementPage /></MainLayout>,
  },
  {
    path: "/new-articles",
    element: <MainLayout><WriteArticlesPage /></MainLayout>,
  },
  {
    path: "/new-articles2",
    element: <MainLayout><WriteArticlesPage2 /></MainLayout>,
  },
  {
    path: "/",
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: "/news",
    element: <MainLayout><div>Tin tức</div></MainLayout>,
  },
  {
    path: "/tin-tuc",
    element: <MainLayout><ArticlesListPage /></MainLayout>,
  },
  {
    path: "/tim-kiem",
    element: <MainLayout><ArticlesSearchResultPage /></MainLayout>,
  },
  {
    path: "/news/:slug",
    element: <MainLayout><ArticlesDetailPage /></MainLayout>,
  },
  {
    path: "/news-demo",
    element: <MainLayout><Demo /></MainLayout>,
  },
  {
    path: "/cloud-sale",
    element: <MainLayout><OracleCloudSalePage /></MainLayout>,
  },
  {
    path: "/cloud-register",
    element: <MainLayout><OracleCloudRegisterPage /></MainLayout>,
  },
  {
    path: "/cloud-payment",
    element: <MainLayout><OracleCloudPaymentPage /></MainLayout>,
  },
  {
    path: "/ve-chung-toi",
    element: <MainLayout><AboutUsPage /></MainLayout>,
  },
  {
    path: "/gioi-thieu-chung/",
    element: <MainLayout><AUGeneralIntroPage /></MainLayout>,
  },
  {
    path: "/khach-hang",
    element: <MainLayout><AUCustomerPage /></MainLayout>,
  },
  {
    path: "/hoat-dong-xa-hoi",
    element: <MainLayout><AUSocialActivity /></MainLayout>,
  },
  {
    path: "/doi-tac",
    element: <MainLayout><PartnerPage /></MainLayout>,
  },
  {
    path: "/tu-van",
    element: <MainLayout><AdvisePage /></MainLayout>,
  },
  {
    path: "/ai-soc",
    element: <MainLayout><AiSocPage /></MainLayout>,
  },
  {
    path: "/giai-phap-esg",
    element: <MainLayout><EsgSolutionPage /></MainLayout>,
  },
  {
    path: "/giai-phap-toa-nha-thong-minh",
    element: <MainLayout><SmartBuildingSolutionPage /></MainLayout>,
  },
  {
    path: "/giai-phap-nha-may-thong-minh",
    element: <MainLayout><SmartFactorySolutionPage /></MainLayout>,
  },
  {
    path: "/product",
    element: <MainLayout><ProductPage /></MainLayout>,
  },
  {
    path: "/oracle",
    element: <MainLayout><OraclePage /></MainLayout>,
  },
  {
    path: "/vietguard",
    element: <MainLayout><VietGuardPage /></MainLayout>,
  },
  {
    path: "/smart-dashboard",
    element: <MainLayout><DashboardPage /></MainLayout>,
  },
  {
    path: "/lien-he",
    element: <MainLayout><ContactPage /></MainLayout>,
  },
  {
    path: "*",
    element: <MainLayout><div>404 - Page not found</div></MainLayout>,
  },
]);

export default router;
