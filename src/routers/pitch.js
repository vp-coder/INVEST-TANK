import { Router } from "express";
import Offer from "../models/offer.js";
import Pitch from '../models/pitch.js'
const router = new Router();
//POST..a pitch
router.post('/pitches', async(req, res) => {
    try {
      const pitch = new Pitch(req.body);
      await pitch.save();//data pitch store in db
      pitch.createdAt=undefined
      pitch.__v=undefined
      res.status(201).send({
          success: true,
          data: pitch,
          error: null,
        });
    } catch(error) {
      res.status(404).send({
        success: false,
        error: error.message,
      })
    }
  })
//GET...all the pitches in the reverse chronological order
router.get('/pitches', async(req, res) => {
  try{
    const allPitches = await Pitch.find().sort({
      "createdAt":-1
    });
res.status(201).send({
  success: true,
  data:allPitches,
  error: null,
})
  }catch(error) {
    res.status(404).send()
  }
  })
  //GET...fetch a single Pitch.
  router.get('/pitches/:id', async (req, res) => {
    try {
      const _id = req.params.id
      const pitch = await Pitch.findById(_id)
      console.log(pitch);
      if(pitch["offers"]===undefined)pitch.offers=[]
      if (!pitch) {
        res.status(404).send({
          success: false,
          error: "No such pitch found"
        })
      }
      res.status(201).send({
        success: true,
        data:pitch,
        error: null,
      })
    } catch(error) {
        res.status(404).send()
    }})
    export default router;




