import User from '../model/User.js'

export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub })
        if (exist) {
            res.status(200).json({ msg: 'User already exists' })
            return;
        }
        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        console.error('error in the user model api ', error.message);
    }
}

export const getUser = async (req, res) => {
    try {
       const userData = await User.find({});
       return res.status(200).json(userData)
    } catch (error) {
        console.error('error in the get user api ', error.message);
    }
}