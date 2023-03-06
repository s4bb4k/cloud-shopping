const { write } = require("../utils/dynamoDB");
const { scan } = require("../utils/dynamoDB");
const { get } = require("../utils/dynamoDB");
const { uid } = require('uid');

const SHOPPINGS_TABLE = `Shoppings-${process.env.ENV}`;
/*
    {
        membershipPlan: "Bronze",
        value: 10,
        status: "APPROVED|DENIED|IN_PROGRESS",
        buyer: {
            name: "",
            nid: "",
            email: ""
        },
        createdAt: "",
        updatedAt: "",
    }
*/
const createShopping = async (body) => {
    const shoppingId = uid(16);
    const status = "APPROVED";
    const createdAt = Date.now();
    const updatedAt = Date.now();
    return write({ shoppingId, ...body, status, createdAt, updatedAt }, SHOPPINGS_TABLE);
}

const listData = () => {   
    const params = {
        TableName: SHOPPINGS_TABLE,
    }; 
    return  scan(params);
}
const listDataId = (id) => {
    const params = {
        TableName: SHOPPINGS_TABLE,
        Key: {
            shoppingId: id, 
        },
    }; 
    return  get(params);
}
module.exports = {
    createShopping,
    listDataId,
    listData,
}