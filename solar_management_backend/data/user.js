const mongoCollections = require("../db/collection");
const userCol = mongoCollections.users;
const customer = mongoCollections.customer;
const { ObjectId } = require("mongodb");
const validator = require("../validator");

const createUser = async (name, username, password, position, contact) => {
    const usercollection = await userCol();
    validator.validateUser(username.trim());
    const userInfo = {
        name: name,
        username: username,
        password: password,
        position: position,
        contact: contact,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
    };
    const userInserted = await usercollection.insertOne(userInfo);
    if (userInserted.insertedCount == 0) {
        throw `User was not created`;
    } else {
        return "User Created Successfully";
    }
};

const getUser = async (username) => {
    const usercollection = await userCol();
    validator.validateUser(username.trim());
    const user = await usercollection.findOne({
        username: username,
    });
    if (user) {
        return user;
    } else {
        throw `User Doesn't Exists`;
    }
};

const getAllSiteInspector = async () => {
    const siteInspector = await user();
    const siteInsperctorList = await siteInspector
        .find({
            position: "Site Inspector",
        })
        .toArray();
    if (siteInsperctorList.length == 0) {
        throw `No Site Inspectors Found`;
    }
    return siteInsperctorList;
};

const getAllTeamLeads = async () => {
    const teamLeadCollection = await user();
    let teamLeadsList = await teamLeadCollection
        .find({
            position: "Team Lead",
        })
        .toArray();
    if (teamLeadsList.length == 0) {
        throw `No Team Leads Found`;
    }
    return teamLeadsList;
};

const getAllOperationsEngineer = async () => {
    const operationsEngineerCollection = await user();
    let operationsEngineerList = await operationsEngineerCollection
        .find({
            position: "Operations Engineer",
        })
        .toArray();
    if (operationsEngineerList.length == 0) {
        throw `No Operations Engineers Found`;
    }
    return operationsEngineerList;
};

const getAllSalesTeam = async () => {
    const salesTeamCollection = await user();
    let salesTeamList = await salesTeamCollection
        .find({
            position: "Sales Team",
        })
        .toArray();
    if (salesTeamList.length == 0) {
        throw `No Operations Engineers Found`;
    }
    return salesTeamList;
};

module.exports = {
    createUser,
    getUser,
    getAllSiteInspector,
    getAllTeamLeads,
    getAllOperationsEngineer,
    getAllSalesTeam,
};
