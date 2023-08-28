const data = [
    {
        "firstName": "krithish",
        "lastName": "datt",
        "email": "krithish@gmail.com",
        "batch": "B46WET",
    },
    {
        "firstName": "baskar",
        "lastName": "vel",
        "email": "baskar@gmail.com",
        "batch": "B46WET",
    },
    {
        "firstName": "saraha",
        "lastName": "jessica",
        "email": "saraha@gmail.com",
        "batch": "B46WET",
    }
]

const getUsers = async (req, res) => {
    try {
        res.status(200).send({
            data: data,
            message: "user data fetch successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    }
}

const getUsersById = async (req, res) => {
    try {
        const userId = req.params.id ? Number(req.params.id) : '';
        if (userId < data.length) {
            res.status(200).send({
                data: data[userId],
                message: "user data fetch successfully"
            });
        } else {
            res.status(400).send({
                message: "Invalid User"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        });
    }
}

const createUsers = async (req, res) => {
    try {
        let validate = data.filter((e) => e.email === req.body.email);
        if (validate.length == 0) {
            data.push(req.body);
            res.status(201).send({
                message: "User Data created Succesfully"
            });
        } else {
            res.status(400).send({
                data: [],
                message: "Invalid User"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        });
    }
}

const editUsers = async (req, res) => {
    try {
        const userId = req.params.id ? Number(req.params.id) : '';
        if (userId < data.length) {
            data.splice(userId, 1, req.body);
            res.status(200).send({
                data: data[userId],
                message: "user data updated successfully"
            });
        } else {
            res.status(400).send({
                message: "Invalid User"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        });
    }
}

const deleteUsers = async (req, res) => {
    try {
        const userId = req.params.id ? Number(req.params.id) : '';
        if (userId < data.length) {
            data.splice(userId, 1);
            res.status(200).send({
                data: data[userId],
                message: "user data deleted successfully"
            });
        } else {
            res.status(400).send({
                message: "Invalid User"
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        });
    }
}

module.exports = {
    getUsers,
    getUsersById,
    createUsers,
    editUsers,
    deleteUsers
}