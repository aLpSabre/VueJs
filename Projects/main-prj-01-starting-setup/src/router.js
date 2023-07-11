import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue"
import CoachesDetail from "./pages/coaches/CoachDetail.vue"
import ContactCoach from "./pages/requests/ContactCoach.vue"
import CoachRegistration from "./pages/coaches/CoachRegistration.vue"
import RequestRecieved from "./pages/requests/RequestRecieved.vue"
import NotFound from "./pages/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id", component: CoachesDetail, props: true, children: [
        { path: "contact", component: ContactCoach }//coaches/c1/contact
      ]
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestRecieved },
    { path: "/:notFound(.*)", component: NotFound },
  ]
});
export default router

