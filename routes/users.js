const express = require("express");
// const { append } = require("express/lib/response");
const { users } = require("../data/users.json");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");

const router = express.Router();

/* Description - Get All Users
   Route - /users
   Method - GET
   Access - Public 
   Parameters - None */
router.get("", getAllUsers );




/* Description - Get single user by id
  Route - /users/:id
   Method - GET
   Access - Public 
   Parameters - id
   */
/*router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
    res.status(200).json({
        success: true,
        data: user
    });
});*/
router.get("/:id", getSingleUserById);

/* Description - Create a New User
  Route - /users
   Method - POST
   Access - Public 
   Parameters - None
   */
/*router.post("", (req, res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body

    const user = users.find((each) => each.id === id);
    if (user) {
        return res.status(404).json({
            success: false,
            message: "User Already Exists with the given id"
        })
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate
    })
    return res.status(200).json({
        success: true,
        data: user
    });
});*/

router.post("/", createNewUser);


/* Description - Updating a user by id
  Route - /users
   Method - PUT
   Access - Public 
   Parameters - id
   */
/*router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
    const updateUser = users.map((each) => {
        if (each.id == id) {
            return {
                ...each,
                ...data
            };
        }
        return each
    })
    return res.status(200).json({
        success: true,
        data: updateUser
    });
});*/
router.put("/:id", updateUserById);


/* Description - Deleting a user by id
  Route - /users/:id
   Method - DELETE
   Access - Public 
   Parameters - id
   */

/*router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(200).json({
        success: true,
        data: users
    });
});*/
router.delete("/:id", deleteUser);

router.get("/subscription-details/:id", getSubscriptionDetailsById);

module.exports = router;