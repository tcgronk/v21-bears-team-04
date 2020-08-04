const Activity = require("../models/Activity")



const get = async (req, res) => {
  // get address by id
 
}

const getAll = async (req, res) => {
  // get all activities
  // if req.query.userSubset is true, return just subset of activities created by user
  // example request: http://localhost:3000/activities?userSubset=true 
  const userId = req.user.id
  let activities;
  try {

    if (req.query.userSubset) {
      
        activities = await Activity.findBy({user_id: userId })
      
    } else {
       
       activities = await Activity.all()
    }

    res.status(200).send(activities)

  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
  
 
 
}

const create = async (req, res) => {
  // create an activity
  try {
    const {
      title,
      start,
      ending,
      category,
      distance,
      steps,
      calories,
    } = req.body;
  
    const userId = req.user.id
    
    const newActivity = new Activity({
      user_id: userId,
      title: title,
      start: start,
      ending: ending,
      category: category,
      distance: distance,
      steps: steps,
      calories: calories,
    });
    const activity = await newActivity.save();
    res.status(200).json(activity);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json(err);
  }
};

module.exports = {
  get,
  getAll,
  create
}