import React from "react";
import { Route, Routes } from "react-router-dom";
import ALLOngoingProjects from "./components/onGoingProjects";
import ALLPastProjects from "./components/pastProjects";
import ProjectDashboard from "./components/projectDetails/projectDashboard";
import AllLeads from "./components/leads";
import AllCustomer from "./components/customers";
import Dashboard from "./components/salesDashboard/dashboard";
import OMDashboard from "./components/operationManagerDashboard";
import OEDashboard from "./components/operationEngineerDashboard";
import SIDashboard from "./components/siteInspectorDashboard";
import TLDashboard from "./components/teamLeadDashboard";
import Login from "./components/login";
import Register from "./components/register";
import AllOMOngoingProjects from "./components/operationManagerDashboard/onGoingProjectComponent";
import AllOMPastProjects from "./components/operationManagerDashboard/pastProjectComponent";
import OMProjectDashboard from "./components/operationManagerDashboard/projectDetails";
import OEMaterials from "./components/operationEngineerDashboard/materials";
import OEProjectDetails from "./components/operationEngineerDashboard/projectDetails/projectDetailsDashboard";
import OEALLOngoingProjects from "./components/operationEngineerDashboard/onGoingProjectsComponent";
import OEALLPastProjects from "./components/operationEngineerDashboard/pastProjectsComponents";

import Requests from "./components/operationManagerDashboard/requests";
import Equipments from "./components/operationManagerDashboard/equipments";
import OpsEnginner from "./components/operationManagerDashboard/opsEngineer";
import Sales from "./components/operationManagerDashboard/sales";
import SiteInspector from "./components/operationManagerDashboard/siteInspector";
import TeamLead from "./components/operationManagerDashboard/teamlead";

function ProjectRouter(){
    return (
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route exact path="/sales" element={<Dashboard />} />
                    <Route path="/sales/ongoingprojects" element={<ALLOngoingProjects />} />
                    <Route path="/sales/pastprojects" element={<ALLPastProjects />} />
                    <Route path="/sales/projectdetails" element={<ProjectDashboard />} />
                    <Route path="/sales/leads" element={<AllLeads />} />
                    <Route path="/sales/customers" element={<AllCustomer />} />
                <Route exact path="/ops-manager" element={<OMDashboard />} />
                    <Route path="/ops-manager/ongoingprojects" element={<AllOMOngoingProjects />} />
                    <Route path="/ops-manager/pastprojects" element={<AllOMPastProjects />} />
                    <Route path="/ops-manager/projectdetails" element={<OMProjectDashboard />} />
                    <Route path="/ops-manager/requests" element={<Requests />} />
                    <Route path="/ops-manager/equipments" element={<Equipments />} />
                    <Route path="/ops-manager/operationengineer" element={<OpsEnginner />} />
                    <Route path="/ops-manager/siteinspector" element={<SiteInspector />} />
                    <Route path="/ops-manager/sales" element={<Sales />} />
                    <Route path="/ops-manager/teamlead" element={<TeamLead />} />
                <Route path="/ops-engineer" element={<OEDashboard/>} />
                    <Route path="/ops-engineer/materials" element={<OEMaterials/>}></Route>
                    <Route path="/ops-engineer/projectdetails" element={<OEProjectDetails/>}></Route>
                    <Route path="/ops-engineer/ongoingprojects" element={<OEALLOngoingProjects/>}></Route>
                    <Route path="/ops-engineer/pastprojects" element={<OEALLPastProjects/>}></Route>
                <Route path="/site-inspector" element={<SIDashboard/>} />
                <Route path="/team-lead" element={<TLDashboard/>} />
            </Routes>
    );
}

export default ProjectRouter;